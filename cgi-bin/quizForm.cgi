import cgi
import json
import databaseHandler as dbh

form = cgi.FieldStorage()

country = form.getvalue('country')
age = form.getvalue('age')
gender = form.getvalue('gender')

data


#add user to database
dbh.createUser(age, gender, loaction)
