import json
import urllib.request
import time
import uuid

#Adds a new user to users.json
def addUser(age,gender,country):
    if(age<0):
        return
    fileName="../json/users.json"
    json_file=open(fileName)
    data=json.load(json_file) #json file as an object
    json_file.close()

    users=data['user']

    user={}
    user['age']=age
    user['gender']=gender
    user['country']=country
    user['id']=str(uuid.uuid1())
    users.append(user)

    json_file=open(fileName,"w+")
    json_file.write(json.dumps(data,indent=2))
    json_file.close()

#Empties users.json of all users
def resetUsers():
        fileName="../json/users.json"
        json_file=open(fileName)
        data=json.load(json_file) #json file as an object
        json_file.close()

        json_file=open(fileName,"w+")
        json_file.write(json.dumps({"user":[]},indent=2))
        json_file.close()
