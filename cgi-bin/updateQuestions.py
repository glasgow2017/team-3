#method that queries the world bank every week (or some arbitrary period)
#Updates the json file's fields
import json
import urllib.request
import time
import math

#Refreshes the answers to questions in questions.json
def refreshQuestions():
    fileName="json/questions.json"
    json_file=open(fileName)
    q_data=json.load(json_file) #json file as an object
    json_file.close()

    questions=q_data['questions']

    for j in range(len(questions)):
        q=questions[j]
        ind_key=q["question"]['IND-key']
        country=q["question"]['region']

        #Form the World Bank API
        url="http://api.worldbank.org/countries/"+country+"/indicators/"+ind_key+"?format=json"
        newData=urllib.request.urlopen(url).read()
        new_json_data=json.loads(newData)

        i=0
        ans=None

        #Goes over all
        while((ans is None) and (i<len(new_json_data[1]))):
            ans=new_json_data[1][i]['value']
            i=i+1
        if(ans is not None):
            ans=round(float(ans),2)
            q_data['questions'][j]["question"]["answers"][0]=ans
        else:
            print(q_data['questions'][j]["question"]["title"])
            print("Invalid for region "+country)
    json_file=open(fileName,"w+")
    json_file.write(json.dumps(q_data,indent=2))
    json_file.close()

def fillFalseAnswers():
  fileName="json/questions.json"
  json_file=open(fileName)
  q_data=json.load(json_file) #json file as an object
  json_file.close()

  questions=q_data['questions']

  for j in range(len(questions)):
      q=questions[j]
      answers=q["question"]['answers']
      correct=answers[0]
      



  json_file=open(fileName,"w+")
  json_file.write(json.dumps(q_data,indent=2))
  json_file.close()
