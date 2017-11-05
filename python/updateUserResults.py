import json

def updateResults(age,sex,totalCorrect,totalAnswered):
    fileName="../json/userResults.json"
    json_file=open(fileName)
    data=json.load(json_file) #json file as an object
    json_file.close()

    results=data["results"]

    for i in range(len(results)):
        age_range=results[i]["age_range"]
        age_min=int(age_range["age_min"])
        age_max=int(age_range["age_max"])

        #Found correct age_range so update
        if((age<age_max)&(age>age_min)):
            if(sex=="male"):
                data["results"][i]["age_range"]["male_correct"]+=totalCorrect
                data["results"][i]["age_range"]["male_total"]+=totalAnswered
            else:
                data["results"][i]["age_range"]["female_correct"]+=totalCorrect
                data["results"][i]["age_range"]["female_total"]+=totalAnswered
            #print(json.dumps(data))
            json_file=open(fileName,"w+")
            json_file.write(json.dumps(data,indent=2))
            json_file.close()


def resetResults():
    fileName="../json/userResults.json"
    json_file=open(fileName)
    data=json.load(json_file) #json file as an object
    json_file.close()

    results=data["results"]

    for i in range(len(results)):
        data["results"][i]["age_range"]["male_correct"]=0
        data["results"][i]["age_range"]["male_total"]=0
        data["results"][i]["age_range"]["female_correct"]=0
        data["results"][i]["age_range"]["female_total"]=0
        json_file=open(fileName,"w+")
        json_file.write(json.dumps(data,indent=2))
        json_file.close()

updateResults(3,"male",1,10)
resetResults()
