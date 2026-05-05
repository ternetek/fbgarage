# Garage & Grill — menú (mock)

Sitio estático listo para publicar en **GitHub Pages**: menú de restaurante con estética rock / biker, datos de ejemplo y estructura fácil de reemplazar.

## Contenido

| Archivo | Rol |
|--------|-----|
| `index.html` | Estructura y textos del hero / footer |
| `css/styles.css` | Tema visual (oscuro, naranja, tipografía display) |
| `js/menu-data.js` | **Mock del menú** — categorías, platos, precios, tags |
| `js/app.js` | Render del menú y pills de navegación |

## Cómo editar el menú real

Abrí `js/menu-data.js` y modificá el objeto `MENU_DATA.categories`: cada categoría tiene `id`, `title`, `subtitle`, `badge` y un array `items` con `name`, `desc`, `price` y opcional `tags`.

## Publicar en GitHub Pages

1. Subí el repo a GitHub (esta carpeta en la raíz del repo o como carpeta que contenga `index.html` en la raíz del sitio).
2. En el repo: **Settings → Pages**.
3. **Source**: *Deploy from a branch*.
4. **Branch**: `main` (o `master`) y carpeta **`/ (root)`** si `index.html` está en la raíz.
5. Guardá; en unos minutos la URL será `https://<usuario>.github.io/<repo>/`.

Si el sitio vive en un subpath (por ejemplo solo `https://usuario.github.io/repo/`), los enlaces actuales usan rutas relativas (`css/`, `js/`) y deberían funcionar sin cambios.

## Vista local

Abrí `index.html` en el navegador o serví la carpeta con cualquier servidor estático, por ejemplo:

```bash
cd /ruta/al/repo
python3 -m http.server 8080
```

Luego visitá `http://localhost:8080`.

## Próximos pasos (opcional)

- Reemplazar mock por JSON propio o CMS.
- Agregar favicon y `og:image` para compartir en redes.
- Conectar analytics si hace falta.
