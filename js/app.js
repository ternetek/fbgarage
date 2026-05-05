(function () {
  const data = window.MENU_DATA;
  if (!data || !Array.isArray(data.categories)) return;

  const menuRoot = document.getElementById('menu');
  const nav = document.querySelector('.anchor-nav');
  if (!menuRoot || !nav) return;

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  nav.innerHTML = data.categories
    .map(
      (c) =>
        `<a class="anchor-pill" href="#${escapeHtml(c.id)}">${escapeHtml(
          c.title
        )}</a>`
    )
    .join('');

  menuRoot.innerHTML = data.categories
    .map((cat) => {
      const itemsHtml = cat.items
        .map((item) => {
          const tags =
            item.tags && item.tags.length
              ? `<ul class="dish-tags" aria-label="Etiquetas">${item.tags
                  .map(
                    (t) =>
                      `<li><span class="dish-tag">${escapeHtml(t)}</span></li>`
                  )
                  .join('')}</ul>`
              : '';

          return `
            <article class="dish-card">
              <div class="dish-top">
                <h3 class="dish-name">${escapeHtml(item.name)}</h3>
                <p class="dish-price" aria-label="Precio">${escapeHtml(
                  item.price
                )}</p>
              </div>
              <p class="dish-desc">${escapeHtml(item.desc)}</p>
              ${tags}
            </article>
          `;
        })
        .join('');

      return `
        <section class="menu-category" id="${escapeHtml(cat.id)}" aria-labelledby="cat-${escapeHtml(
        cat.id
      )}">
          <header class="category-head">
            <span class="category-badge" aria-hidden="true">${escapeHtml(
              cat.badge || ''
            )}</span>
            <div class="category-titles">
              <h2 class="category-title" id="cat-${escapeHtml(cat.id)}">${escapeHtml(
        cat.title
      )}</h2>
              <p class="category-sub">${escapeHtml(cat.subtitle || '')}</p>
            </div>
          </header>
          <div class="dish-grid">
            ${itemsHtml}
          </div>
        </section>
      `;
    })
    .join('');
})();
