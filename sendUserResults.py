import json

json_file=open("../json/userResults.json")
print(json.load(json_file))
json_file.close()
