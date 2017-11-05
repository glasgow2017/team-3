import sys, json

#TODO: Depends on how data will be recieved !
def countResults(data):
    total=len(data)
    correct=0
    for t in data:
        if(t["question"]):
            correct+=1
    return correct,total
