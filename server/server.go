package server

import (
	"fmt"
	"log"
	"net/http"
)

type App struct {
	mux  *http.ServeMux
	port int16
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
	return &App{
		port: port,
		mux:  http.NewServeMux(),
	}
}
