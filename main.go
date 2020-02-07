package main

import (
	"github.com/pgrunde/joystick/server"
)

func main() {
	app := server.New()
	app.ListenAndServe()
}
