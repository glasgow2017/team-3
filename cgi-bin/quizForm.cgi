import cgi
import json
import updateUsers
import dbHandler as dbh

form = cgi.FieldStorage()

country = form.getvalue('country')
age = form.getvalue('age')
gender = form.getvalue('gender')

#add user to database
#dbh.createUser(age, gender, country)


updateUsers.addUser(18,"male","kenya")



'''
Get user results of quiz and store them in userResults

form = cgi.FieldStorage()

correct=form.getvalue('totalCorrect')
total=form.getvalue('totalAnswered')



'''

'''
Send the userResults to the client after they have submitted
their results

json_file=open("../json/userResults.json")
print(json.load(json_file))
json_file.close()
'''
