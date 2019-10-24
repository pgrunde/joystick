package templating

import (
	"fmt"
	"html/template"
	"io"
	"os"
	"path/filepath"
	"strings"
)

// Templating stuff ripped from aodin/volta
// Templates holds the parsed template files and any local attributes.
type Templates struct {
	parsed *template.Template
	locals Attrs
}

// Execute will render the given template define name with the given attrs.
// Panics on error, because that's how we roll.
func (t *Templates) Execute(w io.Writer, n string, attrs ...Attrs) {
	data := Attrs{}
	data.Merge(t.locals)
	for _, attr := range attrs {
		data.Merge(attr)
	}
	if err := t.parsed.ExecuteTemplate(w, n, data); err != nil {
		panic(fmt.Sprintf("templates: could execute template %s: %s", n, err))
	}
}

type Attrs map[string]interface{}

// Merge takes Attrs intended for interpolation in a template and merges a `map[string]interface{}` with them
func (a Attrs) Merge(b map[string]interface{}) {
	for key, value := range b {
		a[key] = value
	}
}

// TemplatesFromDir makes all templates executable ath the path. It uses "<%", "%>"
// as delimiters and expects the content in a file to be wrapped with `<% define "TEMPLATE_NAME" %>` and `<% end %>`
func TemplatesFromDir(path string, attrs ...Attrs) *Templates {
	data := Attrs{}
	for _, attr := range attrs {
		data.Merge(attr)
	}
	t := &Templates{
		parsed: template.New("template"),
		locals: data,
	}

	t.parsed = t.parsed.Delims("<%", "%>")

	// Recursively walk the given directory and build templates, returning
	// immediately on error.
	err := filepath.Walk(path, func(name string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if strings.HasSuffix(strings.ToLower(name), ".html") {
			if _, err := t.parsed.ParseFiles(name); err != nil {
				return err
			}
		}
		return nil
	})
	if err != nil {
		panic(fmt.Sprintf("templates: error while parsing templates: %s", err))
	}
	return t
}
