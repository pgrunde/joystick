package server

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/gorilla/websocket"
	"github.com/pgrunde/joystick/templating"

	"gobot.io/x/gobot"
	"gobot.io/x/gobot/drivers/i2c"
	"gobot.io/x/gobot/platforms/raspi"
)

type App struct {
	mux          *http.ServeMux
	templates    *templating.Templates
	upgrader     websocket.Upgrader
	port         int16
	servoChannel chan string
	device       *i2c.PCA9685Driver
	adaptor      *raspi.Adaptor
}

func (a *App) ListenAndServe() {
	go func() {
		a.mux.HandleFunc("/", a.root)
		a.mux.HandleFunc("/ws", a.joystickSocket)
		fileServer := http.FileServer(http.Dir("./dist"))
		a.mux.Handle("/dist/", http.StripPrefix("/dist/", fileServer))
		log.Printf(
			"Starting server on port '%d'",
			a.port,
		)
		err := http.ListenAndServe(
			fmt.Sprintf(":%d", a.port),
			a.mux,
		)
		if err != nil {
			log.Panic("listen and serve error:", err)
		}
	}()

	robot := gobot.NewRobot("servoBot",
		[]gobot.Connection{a.adaptor},
		[]gobot.Device{a.device},
		a.work,
	)

	robot.Start()
}

func New() *App {
	port := int16(3000)
	locals := templating.Attrs{}

	r := raspi.NewAdaptor()
	d := i2c.NewPCA9685Driver(r)

	return &App{
		mux:          http.NewServeMux(),
		templates:    templating.TemplatesFromDir("./templating/templates", locals),
		upgrader:     websocket.Upgrader{ReadBufferSize: 1024, WriteBufferSize: 1024},
		port:         port,
		servoChannel: make(chan string),
		device:       d,
		adaptor:      r,
	}
}

func (a *App) root(w http.ResponseWriter, r *http.Request) {
	a.templates.Execute(w, "joystick")
}

func (a *App) work() {
	for {
		msg := <-a.servoChannel
		parts := strings.Split(msg, " ")
		angle1, err := strconv.Atoi(parts[0])
		angle2, err := strconv.Atoi(parts[1])
		if err != nil {
			fmt.Println("error getting angle from parts:", err)
			return
		}
		if angle1 >= 0 && angle1 <= 180 {
			a.device.ServoWrite("0", byte(angle1))
		}
		if angle2 >= 0 && angle2 <= 280 {
			a.device.ServoWrite("1", byte(angle2))
		}
	}
}

func (a *App) joystickSocket(w http.ResponseWriter, r *http.Request) {
	// TODO check CORS if you ever open to actual internet
	a.upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	wsConn, err := a.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	err = wsConn.WriteMessage(1, []byte("Connected!"))
	if err != nil {
		log.Println(err)
	}
	a.reader(wsConn)
}

// https://tutorialedge.net/golang/go-websocket-tutorial/
func (a *App) reader(conn *websocket.Conn) {
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		a.servoChannel <- string(p)

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}
