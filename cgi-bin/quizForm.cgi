import cgi
import json
import updateUsers
#import dbHandler as dbh
import retrieveResults as retr
import updateUserResults as updRes

form = cgi.FieldStorage()

country = form.getvalue('regionIn')
ageString = form.getvalue('ageIn')
age = int(ageString)
gender = form.getvalue('genderIn')
resultsString = form.getValue('results')
results = json.load(resultsString)

#add user to database
#dbh.createUser(age, gender, country)


if(age>0):
  #Get user results of quiz and store them in userResults
  updateUsers.addUser(age,gender,country)
#results = [{"id" : 1, "result" : True}]

def checkResults(results):
  isResultLegal = True
  if len(results) > 0:
    for result in results:
      print(result)
      checkQuestID = result["id"] <= 0 and result["id"] >= 43
      checkBoolean = type(result["result"]) is not bool
      if (checkQuestID or checkBoolean):
        isResultLegal = False
        break
  else:
    isResultLegal = False
  return isResultLegal

checkCountry = country is not None
checkAge = age is not None and age > 0
checkGender = gender is "male" or gender is "female"

if (checkCountry and checkAge and checkGender and checkResults(results)):
  updateUsers.addUser(18,"male","kenya")
>>>>>>> 368d33d3b7d4051d591e885dc0c58c8a784dac38
  correct,total=retr.countResults(results)
  updRes.updateResults(age,gender,correct,total)
else:
  print("bad")
  #Get user results of quiz and store them in userResults
