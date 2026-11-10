# Fichas de datasets para Orange

Web del libro de fichas de datasets del curso de ciencia de datos con Orange (nivel intermedio):
**https://gualbe.github.io/libro-datasets-orange/**

Cada dataset tiene una ficha con la misma estructura: descripción y estudios habituales, contexto y fuente original,
variable objetivo, diccionario de columnas, particularidades técnicas al modelar, flujo de trabajo en Orange y otras
consideraciones. Hay además una guía de selección con buscador y filtros por etiquetas, un índice por etiquetas y cuatro
anexos (de cada fichero original a su ficha, formatos de fichero en Orange, add-ons y glosario de métricas).

- Los datos (CSV y XLSX) están en [gualbe/datasets/ciencia_de_datos](https://github.com/gualbe/datasets/tree/main/ciencia_de_datos).
- El libro completo en PDF está en [`descargas/libro_fichas_datasets.pdf`](descargas/libro_fichas_datasets.pdf).

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | Portada, cómo usar el libro, etiquetas y guía de selección |
| `capitulos/NN/` | Una página por capítulo con sus fichas |
| `fichas/<slug>/` | Una página por ficha |
| `etiquetas/` | Índice por etiquetas |
| `anexos/a/` … `anexos/d/` | Anexos |
| `assets/` | Estilos, fuentes y script |
| `descargas/` | Libro en PDF |

El sitio es HTML estático generado a partir de las fuentes del libro (`sitio.py`, plantillas Jinja y una ficha YAML por
dataset); no hay que compilar nada para publicarlo. GitHub Pages lo sirve desde la rama `main`, carpeta raíz.
