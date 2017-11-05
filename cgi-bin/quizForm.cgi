import cgi
import json
import updateUsers
import dbHandler as dbh
import retrieveResults as retr
import updateUserResults as updRes

print("hello")
form = cgi.FieldStorage()

country = form.getvalue('regionIn')
age = form.getvalue('ageIn')
gender = form.getvalue('genderIn')
results = form.getValue('results')


#add user to database
#dbh.createUser(age, gender, country)

if(age>0):
  #Get user results of quiz and store them in userResults
  updateUsers.addUser(age,gender,country)
  correct,total=retr.countResults(results)
  updRes.updateResults(age,gender,correct,total)


'''
Send the userResults to the client after they have submitted
their results

json_file=open("../json/userResults.json")
print(json.load(json_file))
json_file.close()
'''
