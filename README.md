# FB Garage — menú (sitio estático)

Sitio listo para **GitHub Pages**. El menú que ve el cliente es el archivo **`menu/menu_fbgarage.pdf`** incrustado en la página — no hay texto duplicado en HTML/JS.

## Contenido

| Archivo | Rol |
|--------|-----|
| `index.html` | Cabecera, visor PDF (iframe), enlaces abrir/descargar |
| `css/styles.css` | Tema visual |
| `menu/menu_fbgarage.pdf` | **Fuente única del menú** |

## Actualizar el menú

Generá el PDF nuevo y **reemplazá** `menu/menu_fbgarage.pdf` en el mismo path; `git push` como siempre.

## Publicar en GitHub Pages

1. Repo en GitHub con `index.html` en la raíz.
2. **Settings → Pages** → *Deploy from a branch* → `main` → **`/(root)`**.

La URL será `https://<owner>.github.io/<repo>/` (el path debe coincidir con el nombre del repo).

## Vista local

```bash
cd /ruta/al/repo
python3 -m http.server 8080
```

Visitá `http://localhost:8080`. Sin servidor, algunos navegadores pueden bloquear el PDF por `file://`.

**Nota:** En algunos móviles el PDF no se muestra bien dentro del `iframe`; la página incluye enlace para abrirlo en otra pestaña.
