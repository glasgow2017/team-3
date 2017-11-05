import cgi
import json
import updateUsers
import dbHandler as dbh
import retrieveResults as retr
import updateUserResults as updRes

form = cgi.FieldStorage()

country = form.getvalue('country')
age = form.getvalue('age')
gender = form.getvalue('gender')
results = form.getValue('results')

#add user to database
#dbh.createUser(age, gender, country)


#Get user results of quiz and store them in userResults
updateUsers.addUser(18,"male","kenya")
correct,total=retr.countResults(results)
updRes.updateResults(age,gender,correct,total)


'''
Send the userResults to the client after they have submitted
their results

json_file=open("../json/userResults.json")
print(json.load(json_file))
json_file.close()
'''
