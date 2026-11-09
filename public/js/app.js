document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("panel");
  const panelClose = document.getElementById("panel-close");
  const panelLabel = document.getElementById("panel-label");
  const panelTitle = document.getElementById("panel-title");
  const panelIntro = document.getElementById("panel-intro");
  const panelItems = document.getElementById("panel-items");
  const cards = document.querySelectorAll(".card");
  const yearEl = document.getElementById("year");

  // Lightbox Modal Elements
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("gallery-modal-img");
  const modalCaption = document.getElementById("gallery-modal-caption");
  const modalClose = document.getElementById("gallery-close");
  const modalBackdrop = document.getElementById("gallery-backdrop");
  const modalPrev = document.getElementById("gallery-prev");
  const modalNext = document.getElementById("gallery-next");

  let activeGallery = [];
  let activeIndex = 0;

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function openGallery(images, index = 0) {
    if (!images || !images.length || !modal) return;
    activeGallery = images;
    activeIndex = index;
    updateModalImage();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function updateModalImage() {
    const current = activeGallery[activeIndex];
    if (!current) return;
    modalImg.src = current.src;
    modalImg.alt = current.title || "Screenshot preview";
    modalCaption.innerHTML = `<strong>${current.title || ""}</strong>${current.caption ? ` — ${current.caption}` : ""}`;
  }

  function closeGallery() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    activeGallery = [];
  }

  function nextGalleryImage() {
    if (!activeGallery.length) return;
    activeIndex = (activeIndex + 1) % activeGallery.length;
    updateModalImage();
  }

  function prevGalleryImage() {
    if (!activeGallery.length) return;
    activeIndex = (activeIndex - 1 + activeGallery.length) % activeGallery.length;
    updateModalImage();
  }

  if (modalClose) modalClose.addEventListener("click", closeGallery);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeGallery);
  if (modalNext) modalNext.addEventListener("click", nextGalleryImage);
  if (modalPrev) modalPrev.addEventListener("click", prevGalleryImage);

  function openSection(secKey, originEl) {
    const data = SECTIONS_DATA[secKey];
    if (!data) return;

    panel.className = "panel " + (data.colorClass || "panel--blue");

    if (originEl) {
      const rect = originEl.getBoundingClientRect();
      const ox = rect.left + rect.width / 2;
      const oy = rect.top + rect.height / 2;
      panel.style.setProperty("--ox", `${ox}px`);
      panel.style.setProperty("--oy", `${oy}px`);
    } else {
      panel.style.setProperty("--ox", "50vw");
      panel.style.setProperty("--oy", "50vh");
    }

    panelLabel.textContent = data.label || "";
    panelTitle.textContent = data.title || "";
    panelIntro.textContent = data.intro || "";

    panelItems.innerHTML = (data.items || []).map((item, idx) => `
      <article class="item" style="--n: ${idx}">
        <div class="item__head">
          <h3>${item.title}</h3>
          ${item.status ? `<span class="item__status">${item.status}</span>` : ""}
        </div>
        ${item.subtitle ? `<p class="item__sub">${item.subtitle}</p>` : ""}
        <p>${item.desc || ""}</p>
        
        ${item.features ? `
          <ul class="feature-list">
            ${item.features.map(f => `<li>✓ ${f}</li>`).join("")}
          </ul>
        ` : ""}

        ${item.screenshots && item.screenshots.length ? `
          <div class="shot-grid">
            ${item.screenshots.map((s, sIdx) => `
              <button class="shot" type="button" data-item="${idx}" data-shot="${sIdx}" aria-label="View screenshot: ${s.title}">
                <img class="shot__thumb" src="${s.src}" alt="${s.title}" loading="lazy" />
                <span class="shot__title">${s.title}</span>
                <span class="shot__hint">Click to enlarge ↗</span>
              </button>
            `).join("")}
          </div>
        ` : ""}

        ${item.tags ? `
          <ul class="item__tags">
            ${item.tags.map(t => `<li>${t}</li>`).join("")}
          </ul>
        ` : ""}

        ${item.link && item.linkText ? `
          <a class="item__link" href="${item.link}" target="_blank" rel="noopener">${item.linkText} →</a>
        ` : ""}
      </article>
    `).join("");

    // Bind click events on the newly rendered screenshot thumbnails
    panelItems.querySelectorAll(".shot").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemIndex = parseInt(btn.getAttribute("data-item"), 10);
        const shotIndex = parseInt(btn.getAttribute("data-shot"), 10);
        const targetItem = data.items[itemIndex];
        if (targetItem && targetItem.screenshots) {
          openGallery(targetItem.screenshots, shotIndex);
        }
      });
    });

    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  }

  function closePanel() {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (window.location.hash) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }

  cards.forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const secKey = card.getAttribute("data-section");
      window.location.hash = secKey;
      openSection(secKey, card);
    });
  });

  if (panelClose) {
    panelClose.addEventListener("click", closePanel);
  }

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (modal && modal.classList.contains("is-open")) {
        closeGallery();
      } else if (panel.classList.contains("is-open")) {
        closePanel();
      }
    } else if (modal && modal.classList.contains("is-open")) {
      if (e.key === "ArrowRight") nextGalleryImage();
      if (e.key === "ArrowLeft") prevGalleryImage();
    }
  });

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && SECTIONS_DATA[initialHash]) {
    const targetCard = document.querySelector(`[data-section="${initialHash}"]`);
    openSection(initialHash, targetCard);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});