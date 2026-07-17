(function () {
  const root = document.getElementById("menu-root");

  function escapeHtml(s) {
    if (s == null) return "";
    const div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  function formatDescription(text) {
    if (!text || !text.trim()) return "";
    const parts = escapeHtml(text).split(/\n/);
    return parts.join("<br />");
  }

  function renderNotice(section) {
    const lines = section.intro || [];
    if (!lines.length) return "";
    const lis = lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
    return `
      <section class="menu-category menu-category-notice" id="${escapeHtml(section.id)}" aria-labelledby="h-${escapeHtml(section.id)}">
        <header class="category-head">
          <div class="category-titles">
            <h2 class="category-title" id="h-${escapeHtml(section.id)}">${escapeHtml(section.title)}</h2>
          </div>
        </header>
        <ul class="notice-list">${lis}</ul>
      </section>
    `;
  }

  function renderPromoGallery(section) {
    const raw = section.images || [];
    const entries = raw
      .map((img) => {
        if (typeof img === "string") return { src: img, alt: "" };
        return { src: img.src, alt: img.alt || "" };
      })
      .filter((e) => e.src && String(e.src).trim());

    if (!entries.length) return "";

    const figures = entries
      .map((e) => {
        const src = escapeHtml(e.src);
        const alt = escapeHtml(e.alt);
        return `
          <figure class="promo-card">
            <img class="promo-img" src="${src}" alt="${alt}" loading="lazy" decoding="async" />
          </figure>
        `;
      })
      .join("");

    return `
      <section class="menu-category menu-category-promos" id="${escapeHtml(section.id)}" aria-labelledby="h-${escapeHtml(section.id)}">
        <header class="category-head">
          <div class="category-titles">
            <h2 class="category-title" id="h-${escapeHtml(section.id)}">${escapeHtml(section.title)}</h2>
          </div>
        </header>
        <div class="promo-grid">${figures}</div>
      </section>
    `;
  }

  function renderItemsSection(section) {
    const subtitle = section.subtitle
      ? `<p class="category-sub">${escapeHtml(section.subtitle)}</p>`
      : "";

    let rawHtml = "";
    if (section.raw_after_subtitle && section.raw_after_subtitle.length) {
      const blocks = section.raw_after_subtitle
        .map((line) => `<p class="menu-raw-line">${escapeHtml(line)}</p>`)
        .join("");
      rawHtml = `<div class="menu-raw" role="note">${blocks}</div>`;
    }

    const items = (section.items || [])
      .map((item) => {
        let imgSrc = "";
        let imgAlt = item.name || "";
        if (item.image) {
          if (typeof item.image === "string") {
            imgSrc = item.image;
          } else if (item.image.src) {
            imgSrc = item.image.src;
            imgAlt = item.image.alt != null ? item.image.alt : imgAlt;
          }
        }
        const focus = (item.imageFocus || "")
          .toString()
          .trim()
          .toLowerCase();
        const imgClasses = ["dish-img"];
        if (focus === "bottom") imgClasses.push("dish-img--focus-bottom");
        if (focus === "top") imgClasses.push("dish-img--focus-top");
        if (focus === "bc") imgClasses.push("dish-img--focus-bc");
        if (focus === "tc") imgClasses.push("dish-img--focus-tc");

        const imgHtml =
          imgSrc && String(imgSrc).trim()
            ? `<div class="dish-media"><img class="${escapeHtml(
                imgClasses.join(" ")
              )}" src="${escapeHtml(
                imgSrc.trim()
              )}" alt="${escapeHtml(String(imgAlt))}" loading="lazy" decoding="async" /></div>`
            : "";

        const desc = item.description ? formatDescription(item.description) : "";
        const descHtml = desc
          ? `<p class="dish-desc">${desc}</p>`
          : "";

        const cardMods = imgHtml ? " dish-card--with-photo" : "";

        return `
          <article class="dish-card${cardMods}">
            ${imgHtml}
            <div class="dish-top">
              <h3 class="dish-name">${escapeHtml(item.name)}</h3>
              <p class="dish-price" aria-label="Precio">${escapeHtml(item.price)}</p>
            </div>
            ${descHtml}
          </article>
        `;
      })
      .join("");

    return `
      <section class="menu-category" id="${escapeHtml(section.id)}" aria-labelledby="h-${escapeHtml(section.id)}">
        <header class="category-head">
          <div class="category-titles">
            <h2 class="category-title" id="h-${escapeHtml(section.id)}">${escapeHtml(section.title)}</h2>
            ${subtitle}
          </div>
        </header>
        ${rawHtml}
        <div class="dish-grid">${items}</div>
      </section>
    `;
  }

  function renderBebidas(section) {
    const subsections = (section.subsections || [])
      .map((sub) => {
        const lines = (sub.entries || [])
          .map(
            (line) =>
              `<li class="bev-row"><span class="bev-line">${escapeHtml(line)}</span></li>`
          )
          .join("");
        return `
          <div class="bev-sub">
            <h3 class="bev-heading">${escapeHtml(sub.heading)}</h3>
            <ul class="bev-list">${lines}</ul>
          </div>
        `;
      })
      .join("");

    return `
      <section class="menu-category menu-category-drinks" id="${escapeHtml(section.id)}" aria-labelledby="h-${escapeHtml(section.id)}">
        <header class="category-head">
          <div class="category-titles">
            <h2 class="category-title" id="h-${escapeHtml(section.id)}">${escapeHtml(section.title)}</h2>
          </div>
        </header>
        <div class="bev-wrap">${subsections}</div>
      </section>
    `;
  }

  function renderNav(sections) {
    const pills = sections
      .filter((s) => s.title)
      .map(
        (s) =>
          `<a class="anchor-pill" href="#${escapeHtml(s.id)}">${escapeHtml(s.title)}</a>`
      )
      .join("");
    return pills;
  }

  function detectSection(section) {
    if (section.subsections && section.subsections.length) return "bebidas";
    if (
      section.images &&
      Array.isArray(section.images) &&
      section.images.length
    ) {
      return "promos";
    }
    if (section.intro && Array.isArray(section.intro) && section.intro.length) {
      return "notice";
    }
    return "items";
  }

  function render(data) {
    if (!root || !data || !Array.isArray(data.sections)) {
      root.innerHTML = `<p class="menu-error">No se pudo cargar el menú.</p>`;
      return;
    }

    const nav = document.querySelector(".anchor-nav");
    if (nav) nav.innerHTML = renderNav(data.sections);

    root.innerHTML = data.sections
      .map((section) => {
        const kind = detectSection(section);
        if (kind === "notice") return renderNotice(section);
        if (kind === "promos") return renderPromoGallery(section);
        if (kind === "bebidas") return renderBebidas(section);
        return renderItemsSection(section);
      })
      .join("");
  }

  const jsonUrl =
    document.body.dataset.menuJson?.trim() || "menu/menu.json";

  fetch(jsonUrl)
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(render)
    .catch(() => {
      if (root) {
        root.innerHTML = `
          <p class="menu-error">
            Error al cargar <code>${escapeHtml(jsonUrl)}</code>. Serví la carpeta con un servidor estático (<code>python3 -m http.server</code>) o revisá GitHub Pages.
          </p>
        `;
      }
    });
})();
