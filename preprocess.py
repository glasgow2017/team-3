import urllib.request
import json


#url="http://api.worldbank.org/countries/ken/indicators/SE.ENR.PRIM.FM.ZS?format=json"
#url="http://api.worldbank.org/countries/ken/indicators/SE.PRM.ENRR?format=json"

indicators=[
"SP.ADO.TFRT",
"SP.DYN.CONY.ZS",
"SP.DYN.TFRT.IN",
"SH.IMM.MEAS",
"SH.STA.ACSN",
"SH.H20.SAFE.ZS",
"SI.DST.FRST.20",
"SP.DYN.LEOO.IN",
"SH.DYN.MORT",
"IQ.SCI.OVRL"
]

jsonFiles=[]

#examples - country="ken"
def apiCalls(country):
    for i in indicators:
        url="http://api.worldbank.org/countries/"+country+"/indicators/"+i+"?format=json"
        data=urllib.request.urlopen(url).read()
        j_data=json.loads(data)
        jsonFiles.append(j_data[1])
        break

apiCalls("ken")

for i in range(len(jsonFiles)):
    print(jsonFiles[i][0])


#apiCalls("ken")
#print(len(jsonFiles))
