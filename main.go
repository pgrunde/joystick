package main

import (
	"log"

	"github.com/pgrunde/joystick/server"
)

func main() {
	app := server.New()
	log.Panic(app.ListenAndServe())
}
