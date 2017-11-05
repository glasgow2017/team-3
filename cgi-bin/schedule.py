import sched, time
import updateQuestions as update

s = sched.scheduler(time.time, time.sleep)
secondInWeek = 604800

def runUpdate(s):
    print("here")
    update.refreshQuestions()
    s.enter(secondInWeek, 1, runUpdate, (s,))

s.enter(secondInWeek, 1, runUpdate, (s,))
s.run()
