import cgi
import json
import updateUsers
#import dbHandler as dbh
import updateUserResults as updRes

'''
Main script that the server will call. First, it will recieve input about
the user as well as their answers to the quizzes. Updates local JSON files
'''
'''
try:
    port=8000
    server = HTTPServer(('',port),WebServerHandler)
    print("running")
    server.serve_forever()
'''

form = cgi.FieldStorage()

#Handle all fields from the POST Request
country = form.getvalue('regionIn')
ageString = form.getvalue('ageIn')
age = int(ageString)
gender = form.getvalue('genderIn')
resultsString = form.getValue('results')
results = json.load(resultsString)

print(country)
print(age)
print(gender)


'''
country="test"
age=20
gender="male"
results=[{"id":0,"result":True}]
'''

#Given an array of booleans, will count how many
#elements are True and how many elements there are in total
def countResults(data):
    total=len(data)
    correct=0
    for t in data:
        if(t):
            correct+=1
    return correct,total

#Check that the input is valid
#Need to check that all elements are booleans
def checkResults(results):
  isResultLegal = True
  if len(results) > 0:
    for result in results:
      print(result)
      checkQuestID = result["id"] <= 0 and result["id"] >= 43 #if True, out of range
      checkBoolean = type(result["result"]) is not bool #
      if (checkQuestID or checkBoolean):
        isResultLegal = False
        break
  else:
    isResultLegal = False
  return isResultLegal

def do_POST():
    checkCountry = country is not None
    checkAge = age is not None and age > 0
    checkGender = gender is "male" or gender is "female"
    #################################
    if ((checkCountry) & (checkAge) & (checkGender) & (checkResults(results))):
        updateUsers.addUser(age,gender,country)
        correct,total=countResults(results)
        updRes.updateResults(age,gender,correct,total)
        print("OK")
    else:
      print("bad")


'''
#Check that input is valid



'''
