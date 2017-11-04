import cgi
import json
import dbHandler as dbh

form = cgi.FieldStorage()

country = form.getvalue('country')
age = form.getvalue('age')
gender = form.getvalue('gender')

#add user to database
dbh.createUser(age, gender, loaction)
