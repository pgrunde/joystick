package server

import (
	"fmt"
	"log"
	"net/http"

	"github.com/pgrunde/joystick/templating"
)

type App struct {
	mux       *http.ServeMux
	templates *templating.Templates
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
	app := App{
		port:      port,
		mux:       http.NewServeMux(),
		templates: templating.TemplatesFromDir("./templating/templates", locals),
	}
	app.mux.HandleFunc("/", app.root)
	return &app
}

func (a *App) root(w http.ResponseWriter, r *http.Request) {
	a.templates.Execute(w, "joystick")
}
