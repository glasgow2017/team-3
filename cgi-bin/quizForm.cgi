import cgi
import smtplib
import ConfigParser
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
import urllib.request
import json

form = cgi.FieldStorage()

country = form.getvalue('country')
age = form.getvalue('age')
gender = form.getvalue('gender')
