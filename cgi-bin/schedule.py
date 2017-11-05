import sched, time
import updateQuestions as update

'''
Refreshes the answers to the chosen questions every week indefinitely
'''

s = sched.scheduler(time.time, time.sleep)
secondInWeek = 604800

def runUpdate(s):
    print("here")
    update.refreshQuestions()

    #Adding this line allows it to run indefinitely
    s.enter(secondInWeek, 1, runUpdate, (s,))

s.enter(secondInWeek, 1, runUpdate, (s,))
s.run()
