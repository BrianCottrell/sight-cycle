import mraa
from datetime import datetime

try:
	print (mraa.getVersion())
except ImportError:
	print("Mraa failed to import")
	quit()

count = 0

print (mraa.getVersion())
x = mraa.Gpio(13)
x.dir(mraa.DIR_IN)

startTime = datetime.now()

Timeout = True

while (Timeout == True):
	currentTime = datetime.now()
	delta = currentTime - startTime
	
	
	if (x.read(1) == 1):
		count = count + 1
		print("Rotation " , count)

	else if (delta.total_seconds() )== 5000):
		quit()

