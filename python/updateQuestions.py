#method that queries the world bank every week (or some arbitrary period)
#Updates the json file's fields
import json
import urllib.request
import time




#    for i in indicators:
#        url="http://api.worldbank.org/countries/"+country+"/indicators/"+i+"?format=json"
#        data=urllib.request.urlopen(url).read()
#        j_data=json.loads(data)


#print("hello")
#time.sleep(5)
#print("hi")

def refreshQuestions():
    fileName="questions.json"
    json_file=open(fileName)
    q_data=json.load(json_file) #json file as an object
    json_file.close()


    questions=q_data['questions']

    for j in range(len(questions)):
        q=questions[j]
        ind_key=q["question"]['IND-key']
        country=q["question"]['region']
        url="http://api.worldbank.org/countries/"+country+"/indicators/"+ind_key+"?format=json"
        newData=urllib.request.urlopen(url).read()
        new_json_data=json.loads(newData)

        i=0
        ans=None

        while((ans is None) and (i<len(new_json_data[1]))):
            ans=new_json_data[1][i]['value']
            i=i+1
        if(ans is not None):
            q_data['questions'][j]["question"]["answers"][0]=ans
        else:
            print(q_data['questions'][j]["question"]["title"])
            print("Invalid for region "+country)
    json_file=open(fileName,"w+")
    json_file.write(json.dumps(q_data))
    json_file.close()









refreshQuestions()
