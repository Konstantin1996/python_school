def single_process(user_code):
	try:
		exec(user_code);
	except:
		print(sys.exc_info());