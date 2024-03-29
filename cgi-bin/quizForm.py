#!/usr/bin/env python
import cgi
import json
import updateUsers
#import dbHandler as dbh
import updateUserResults as updRes

'''
Main script that the server will call. First, it will recieve input about
the user as well as their answers to the quizzes. Updates local JSON files
'''

form = cgi.FieldStorage()

#Handle all fields from the POST Request
country = form.getvalue('region')
ageString = form.getvalue('age')
age = int(ageString)
gender = form.getvalue('gender')
resultsString = form.getvalue('results')
results = json.loads(resultsString)

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

checkCountry = country is not None
checkAge = age is not None and age > 0
checkGender = gender is "Male" or gender is "Female"




#if ((checkCountry) and (checkAge) and (checkGender))
updateUsers.addUser(age,gender,country)
correct,total=countResults(results)
updRes.updateResults(age,gender,correct,total)