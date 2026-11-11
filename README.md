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

El sitio es HTML estático, generado con las mismas fuentes que el PDF (plantillas Jinja y una ficha YAML por dataset,
que se guardan aparte con el material del curso). No hay que compilar nada para publicarlo: GitHub Pages lo sirve desde
la rama `main`, carpeta raíz. Para actualizarlo, se regenera y se sustituye el contenido del repo.

## Licencia y autoría

**Autor:** Gualberto Asencio Cortés · Copyright © 2026. **Todos los derechos reservados.**

Puedes consultar el libro en línea, enlazarlo y usarlo para tu estudio personal. Salvo en los casos que permite la ley
(como la cita o la ilustración con fines educativos), no se puede reproducir, distribuir, publicar ni transformar, total o
parcialmente, sin la autorización previa y por escrito del autor. Los términos completos están en [`LICENSE`](LICENSE).

Las fuentes tipográficas (Bricolage Grotesque, Red Hat Text y Red Hat Mono) son de sus autores y se distribuyen con la
SIL Open Font License 1.1, y los datasets conservan las condiciones de su fuente original: ver [`NOTICE`](NOTICE).

**Cómo citar.** Usa los metadatos de [`CITATION.cff`](CITATION.cff) (GitHub ofrece «Cite this repository»), por ejemplo:

> Asencio Cortés, G. (2026). *Fichas de datasets para Orange*. https://gualbe.github.io/libro-datasets-orange/
