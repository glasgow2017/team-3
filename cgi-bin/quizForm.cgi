import cgi
import json
#import dbHandler as dbh

form = cgi.FieldStorage()

country = form.getvalue('country')
age = form.getvalue('age')
gender = form.getvalue('gender')

#add user to database
#dbh.createUser(age, gender, country)

#add to users.json
def addToUsersJSON(country, gender, age):
  user = {}
  user['id'] = 0 #getNextId()
  user['gender'] = gender
  user['age'] = age
  user['country'] = country

  fileName="../json/users.json"
  json_file=open(fileName,"w+")
  user_data=json.load(json_file)
  print(user_data[users])
  json_file.close()

addToUsersJSON("kenya","male", 18)
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
