import sys
from adafruit_servokit import ServoKit

kit = ServoKit(channels=16)
kit.servo[0].angle = int(sys.argv[1])
kit.servo[1].angle = int(sys.argv[2])

