package server

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/pgrunde/joystick/templating"
)

type App struct {
	mux       *http.ServeMux
	templates *templating.Templates
	upgrader  websocket.Upgrader
	port      int16
}

func (a *App) ListenAndServe() error {
	fileServer := http.FileServer(http.Dir("./dist"))
	a.mux.Handle("/dist/", http.StripPrefix("/dist/", fileServer))
	log.Printf(
		"Starting server on port '%d'",
		a.port,
	)
	return http.ListenAndServe(
		fmt.Sprintf(":%d", a.port),
		a.mux,
	)
}

func New() *App {
	port := int16(3000)
	locals := templating.Attrs{}
	a := App{
		mux:       http.NewServeMux(),
		templates: templating.TemplatesFromDir("./templating/templates", locals),
		upgrader:  websocket.Upgrader{ReadBufferSize: 1024, WriteBufferSize: 1024},
		port:      port,
	}
	a.mux.HandleFunc("/", a.root)
	a.mux.HandleFunc("/ws", a.joystickSocket)
	return &a
}

func (a *App) root(w http.ResponseWriter, r *http.Request) {
	a.templates.Execute(w, "joystick")
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
	reader(wsConn)
}

// https://tutorialedge.net/golang/go-websocket-tutorial/
func reader(conn *websocket.Conn) {
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		fmt.Println(string(p))
		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}
