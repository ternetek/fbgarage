# FB Garage — menú (sitio estático)

Menú público sin visor PDF: la página arma el listado con **`menu/menu.json`**.

## Fuente editable del menú

| Archivo | Uso |
|--------|-----|
| **`menu/menu.json`** | **Editás esto**: secciones, nombres, precios (`99.00$`, etc.), descripciones, bebidas por subencabezado. |
| `menu/promos/*` | Flyers de promos: referenciados en `menu.json` con `images[].src` (`menu/promos/archivo.jpeg`). |
| `menu/menu_fbgarage.pdf` | Referencia visual / archivo de trabajo; la web no lo incrusta. |

Para cambiar el menú público solo hace falta modificar **`menu/menu.json`** y hacer push.

## Estructura de `menu.json`

- **`meta`** — texto informativo (no se muestra en la página).
- **`sections`** — cada sección tiene un `id` (para anchors), `title` y según tipo:
  - **`intro`** — lista de párrafos (texto informativo corto).
  - **`images`** — galería promocional: array de `{ "src", "alt" }` con rutas relativas al sitio (p. ej. `menu/promos/unplugged.jpeg`). Si `images` tiene entradas, esa sección se pinta solo como galería (no usa `intro` en el mismo bloque).
  - **`items`** — objetos `{ "name", "price", "description" }`. Opcional **`image`**: `"menu/dishes/archivo.jpeg"` o `{ "src", "alt" }`. Opcional **`imageFocus`**: `"top"` o `"bottom"` para anclar el recorte de `object-fit: cover` (arriba o abajo en la foto).
  - **`subsections`** (bebidas): `{ "heading", "entries" }` donde `entries` es un array de **líneas completas tal cual querés mostrarlas** (nombre + precio en un solo string).
  - **`subtitle`** / **`raw_after_subtitle`** — opcionales (p. ej. menú \$99 cuando el PDF mezcla renglones sueltos).

## Vista local

`fetch()` no suele funcionar abriendo `index.html` con `file://`. Usá:

```bash
python3 -m http.server 8080
```

Desde la raíz del repo (donde está `index.html`).

Abrí `http://localhost:8080`.

## GitHub Pages

Origen típico: **Settings → Pages → Deploy from branch → main → /(root)**. La página pide **`menu/menu.json`** por HTTP en el mismo dominio/ruta que el sitio.

## Herramienta local (solo si extraés de PDF otra vez)

En el repo hay una venv opcional ignorada por git (`.venv-pdf/`) si usás scripts con `pypdf`/`pymupdf` para transcribir; no es obligatoria para publicar.
