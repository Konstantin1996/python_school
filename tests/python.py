import sys

user_code = sys.argv[1]
try:
	exec(user_code);
except:
	print(sys.exc_info());