import retrieveResults as retr
import updateUserResults as updUsers
import updateUsers as users
import unittest

a,b=retr.countResults([])
assert a==0
assert b==0

a,b=retr.countResults([True,False,True])
assert a==2
assert b==3

updUsers.resetResults()
updUsers.updateResults(93,"female",-9,-993)


users.resetUsers()
users.addUser(-29,"male","uganda")
