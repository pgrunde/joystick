package main

import (
	"gobot.io/x/gobot"
	"gobot.io/x/gobot/drivers/i2c"
	"gobot.io/x/gobot/platforms/raspi"
)

var device *i2c.PCA9685Driver

func main() {
	adaptor := raspi.NewAdaptor()
	device = i2c.NewPCA9685Driver(adaptor)
	robot := gobot.NewRobot("servoBot",
		[]gobot.Connection{adaptor},
		[]gobot.Device{device},
		work,
	)
	robot.Start()
}

func work() {
	device.ServoWrite("0", byte(90))
	device.ServoWrite("1", byte(90))
}
