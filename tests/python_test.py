import sys
import sandbox
from StringIO import StringIO


o = ''

buf = StringIO()
cookbook = {
'stdin': sys.stdin,             # input to targeted program
'stderr': sys.stderr,           # error from targeted program
'quota': dict(wallclock = 30000,# 30 sec
              cpu = 2000,       #  2 sec
              memory = 8388608, #  8 MB
              disk = 1048576)}  #  1 MB



if __name__ == '__main__':
	user_code = sys.argv[1]
	box = sandbox.Sandbox(sandbox.SandboxConfig('stdout')) 
	box.execute(user_code)