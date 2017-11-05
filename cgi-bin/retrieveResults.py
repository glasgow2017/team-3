def countResults(data):
    total=len(data)
    correct=0
    for t in data:
        if(t):
            correct+=1
    return correct,total
