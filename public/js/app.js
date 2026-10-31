(function () {
  "use strict";

  var data = window.SITE_DATA || {};
  var panel = document.getElementById("panel");
  var closeBtn = document.getElementById("panel-close");
  var elLabel = document.getElementById("panel-label");
  var elTitle = document.getElementById("panel-title");
  var elIntro = document.getElementById("panel-intro");
  var elItems = document.getElementById("panel-items");
  var cards = document.querySelectorAll(".card[data-section]");
  var lastFocus = null;
  var currentKey = null;
  var galleryModal = null;

  document.getElementById("year").textContent = new Date().getFullYear();

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderMock(kind) {
    var html = "";
    if (kind === "detaillo-dashboard") {
      html = '<div class="mock mock--browser mock--detaillo"><div class="browser-shell"><div class="browser-topbar"><span class="dot dot--red"></span><span class="dot dot--amber"></span><span class="dot dot--green"></span><span class="browser-title">Detaillo</span></div><div class="browser-content"><div class="browser-row browser-row--top"><div class="browser-pill">TODAY</div><div class="browser-pill">THIS MONTH</div></div><div class="browser-metrics"><div class="metric-card"><span>Today&#39;s Billing</span><strong>₹0</strong><em>0 bills today</em></div><div class="metric-card dark"><span>This month</span><strong>₹9,912</strong><em>3 invoices</em></div></div><div class="browser-table"><div class="browser-table__head"><span>#</span><span>Customer</span><span>Amount</span></div><div class="browser-table__row"><span>#711</span><span>Ajit Chaudhari</span><span>₹8,259</span></div><div class="browser-table__row"><span>#710</span><span>Rajendra Whyal</span><span>₹472</span></div></div></div></div></div>';
    }
    if (kind === "detaillo-bills") {
      html = '<div class="mock mock--browser mock--detaillo"><div class="browser-shell"><div class="browser-topbar"><span class="dot dot--red"></span><span class="dot dot--amber"></span><span class="dot dot--green"></span><span class="browser-title">Bills</span></div><div class="browser-content"><div class="filter-row"><span>Today</span><span>This week</span><span class="active">This month</span><span>Last month</span></div><div class="browser-table browser-table--wide"><div class="browser-table__head"><span>No.</span><span>Date</span><span>Customer</span><span>Vehicle</span><span>Amount</span></div><div class="browser-table__row"><span>#711</span><span>18/10/2026</span><span>Ajit Chaudhari</span><span>RE Meter</span><span>₹8,259</span></div><div class="browser-table__row"><span>#710</span><span>18/10/2026</span><span>Rajendra Whyal</span><span>Suzuki Wagon</span><span>₹472</span></div><div class="browser-table__row"><span>#11</span><span>18/10/2026</span><span>Rushi Todkar</span><span>Toyota Fortuner</span><span>₹5,900</span></div></div></div></div></div>';
    }
    if (kind === "detaillo-reports") {
      html = '<div class="mock mock--browser mock--detaillo"><div class="browser-shell"><div class="browser-topbar"><span class="dot dot--red"></span><span class="dot dot--amber"></span><span class="dot dot--green"></span><span class="browser-title">Reports & Excel</span></div><div class="browser-content"><div class="reports-box"><div class="report-card"><span>Invoiced (incl. GST)</span><strong>₹9,912</strong><em>3 invoices • 1 quotations</em></div><div class="report-card dark"><span>GST collected</span><strong>₹1,512</strong><em>GST ₹756 • SGST ₹756</em></div><div class="report-card"><span>Balance due</span><strong>₹5,972</strong><em>across 2 bills</em></div></div><div class="table-summary"><div class="table-summary__head"><span>No.</span><span>Date</span><span>Customer</span><span>Vehicle</span><span>Balance</span></div><div class="table-summary__row"><span>#711</span><span>18/10/2026</span><span>Ajit Chaudhari</span><span>RE Meter</span><span>₹0</span></div><div class="table-summary__row"><span>#710</span><span>18/10/2026</span><span>Rajendra Whyal</span><span>Suzuki Wagon</span><span>₹72</span></div></div></div></div></div>';
    }
    if (kind === "detaillo-login") {
      html = '<div class="mock mock--browser mock--detaillo"><div class="browser-shell browser-shell--wide"><div class="browser-topbar"><span class="dot dot--red"></span><span class="dot dot--amber"></span><span class="dot dot--green"></span><span class="browser-title">Billing</span></div><div class="browser-content browser-content--center"><div class="login-box"><div class="logo-lockup">Detaillo</div><h4>BILLING</h4><p>Sign in with your staff account.</p><label>Email</label><div class="field"></div><label>Password</label><div class="field"></div><button>Sign in</button></div></div></div></div>';
    }
    if (kind === "prime-vision-patient") {
      html = '<div class="mock mock--phone"><div class="phone-shell"><div class="phone-notch"></div><div class="phone-status"><span>7:26 PM</span><span>0.1KB/s</span></div><div class="phone-app"><div class="phone-header"><span class="back">←</span><strong>Patient Registration</strong></div><div class="phone-box"><div class="phone-box__title">A. Vision</div><div class="grid-mini"><div class="cell head">Distance Vision</div><div class="cell head">Near Vision</div><div class="cell">RE</div><div class="cell">LE</div><div class="cell">RE</div><div class="cell">LE</div><div class="cell pad">Value</div><div class="cell pad">Value</div><div class="cell pad">Value</div><div class="cell pad">Value</div></div></div><div class="phone-box"><div class="phone-box__title">B. Refraction</div><div class="grid-mini small"><div class="cell head">Sph</div><div class="cell head">Cyl</div><div class="cell head">Axis</div></div></div></div></div></div></div>';
    }
    if (kind === "prime-vision-list") {
      html = '<div class="mock mock--phone"><div class="phone-shell"><div class="phone-notch"></div><div class="phone-status"><span>7:26 PM</span><span>0.1KB/s</span></div><div class="phone-app"><div class="phone-header"><span class="back">←</span><strong>Prime Vision</strong></div><div class="search-row">Search here...</div><div class="list-row"><span class="badge-ic">♂</span><strong>Name:</strong><span>Name 1</span><div class="list-actions"><span>📄</span><span>🗑</span></div></div><div class="list-row"><span class="badge-ic female">♀</span><strong>Name:</strong><span>Name 2</span><div class="list-actions"><span>📄</span><span>🗑</span></div></div></div></div></div></div>';
    }
    if (kind === "prime-vision-backup") {
      html = '<div class="mock mock--phone"><div class="phone-shell"><div class="phone-notch"></div><div class="phone-status"><span>7:26 PM</span><span>0.1KB/s</span></div><div class="phone-app"><div class="phone-header"><span class="back">←</span><strong>Prime Vision</strong></div><div class="backup-card"><div class="backup-head">Backup</div><div class="backup-head alt">Set Reminder</div></div><div class="backup-panel"><div class="backup-label">Backup list</div><div class="backup-item">2020-01-081578478806110.backup</div></div></div></div></div></div>';
    }
    return html;
  }

  function renderGallery(items) {
    if (!items || !items.length) return "";
    return '<div class="shot-grid">' + items.map(function (shot, index) {
      return '<button type="button" class="shot" data-gallery-index="' + index + '" aria-label="Open screenshot: ' + esc(shot.label || "Project screenshot") + '">' + renderMock(shot.kind) + '</button>';
    }).join("") + '</div>';
  }

  function renderFeatureList(items) {
    if (!items || !items.length) return "";
    return '<ul class="feature-list">' + items.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join("") + '</ul>';
  }

  function render(key) {
    var s = data[key];
    if (!s) return false;
    elLabel.textContent = s.label;
    elTitle.textContent = s.title;
    elIntro.textContent = s.intro;
    elItems.innerHTML = s.items
      .map(function (it, i) {
        var tags = (it.tags || [])
          .map(function (t) { return "<li>" + esc(t) + "</li>"; })
          .join("");
        var link = it.link
          ? '<a class="item__link" href="' + esc(it.link) + '" target="_blank" rel="noopener">Visit</a>'
          : "";
        var gallery = renderGallery(it.gallery);
        var features = renderFeatureList(it.featureList);
        return (
          '<article class="item" style="--n:' + i + '">' +
          '<div class="item__head"><h3>' + esc(it.title) + "</h3>" +
          (it.status ? '<span class="item__status">' + esc(it.status) + "</span>" : "") +
          "</div>" +
          (it.subtitle ? '<p class="item__sub">' + esc(it.subtitle) + "</p>" : "") +
          "<p>" + esc(it.text || "") + "</p>" +
          (features ? '<div class="feature-box">' + features + '</div>' : '') +
          (gallery ? '<div class="gallery-box">' + gallery + '</div>' : '') +
          (tags ? '<ul class="item__tags">' + tags + "</ul>" : "") +
          link +
          "</article>"
        );
      })
      .join("");

    bindGalleryButtons();
    return true;
  }

  function buildGalleryModal() {
    if (galleryModal) return galleryModal;
    galleryModal = document.createElement("div");
    galleryModal.className = "gallery-modal";
    galleryModal.innerHTML = '<div class="gallery-modal__backdrop"></div><div class="gallery-modal__panel"><button type="button" class="gallery-modal__close" aria-label="Close preview">×</button><button type="button" class="gallery-modal__nav gallery-modal__nav--prev" aria-label="Previous screenshot">←</button><div class="gallery-modal__viewport"></div><button type="button" class="gallery-modal__nav gallery-modal__nav--next" aria-label="Next screenshot">→</button></div>';
    document.body.appendChild(galleryModal);
    galleryModal.querySelector(".gallery-modal__close").addEventListener("click", closeGallery);
    galleryModal.querySelector(".gallery-modal__nav--prev").addEventListener("click", function () { changeGallery(-1); });
    galleryModal.querySelector(".gallery-modal__nav--next").addEventListener("click", function () { changeGallery(1); });
    galleryModal.addEventListener("click", function (event) {
      if (event.target === galleryModal || event.target.classList.contains("gallery-modal__backdrop")) closeGallery();
    });
    return galleryModal;
  }

  function bindGalleryButtons() {
    var buttons = elItems.querySelectorAll(".shot");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var index = Number(button.dataset.galleryIndex || 0);
        var current = button.closest(".item");
        var parentItems = current ? Array.from(current.parentElement.children) : [];
        var itemIndex = parentItems.indexOf(current);
        var sectionData = data[currentKey] || { items: [] };
        var shots = sectionData.items[itemIndex] && sectionData.items[itemIndex].gallery ? sectionData.items[itemIndex].gallery : [];
        openGallery(shots, index);
      });
    });
  }

  function openGallery(shots, index) {
    if (!shots || !shots.length) return;
    buildGalleryModal();
    galleryModal.dataset.index = String(index);
    galleryModal.dataset.shots = JSON.stringify(shots);
    galleryModal.classList.add("is-open");
    renderGalleryFrame();
  }

  function closeGallery() {
    if (!galleryModal) return;
    galleryModal.classList.remove("is-open");
  }

  function changeGallery(direction) {
    if (!galleryModal || !galleryModal.dataset.shots) return;
    var shots = JSON.parse(galleryModal.dataset.shots || "[]");
    var currentIndex = Number(galleryModal.dataset.index || 0);
    var nextIndex = (currentIndex + direction + shots.length) % shots.length;
    galleryModal.dataset.index = String(nextIndex);
    renderGalleryFrame();
  }

  function renderGalleryFrame() {
    if (!galleryModal || !galleryModal.dataset.shots) return;
    var shots = JSON.parse(galleryModal.dataset.shots || "[]");
    var index = Number(galleryModal.dataset.index || 0);
    var current = shots[index] || shots[0];
    var viewport = galleryModal.querySelector(".gallery-modal__viewport");
    if (!viewport) return;
    viewport.innerHTML = '<div class="gallery-modal__caption">' + esc(current.label || "Project screenshot") + '</div>' + renderMock(current.kind);
  }

  function open(key, originEl) {
    if (!render(key)) return;
    currentKey = key;
    if (originEl) {
      var r = originEl.getBoundingClientRect();
      panel.style.setProperty("--ox", r.left + r.width / 2 + "px");
      panel.style.setProperty("--oy", r.top + r.height / 2 + "px");
    }
    var card = document.querySelector('.card[data-section="' + key + '"]');
    panel.className = "panel " + (card ? card.className.match(/card--\w+/)[0].replace("card--", "panel--") : "");
    lastFocus = document.activeElement;
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    panel.scrollTop = 0;
    requestAnimationFrame(function () {
      panel.classList.add("is-open");
      closeBtn.focus({ preventScroll: true });
    });
  }

  function close() {
    if (!panel.classList.contains("is-open")) return;
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    currentKey = null;
    closeGallery();
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      var key = card.getAttribute("data-section");
      history.pushState({ key: key }, "", "#" + key);
      open(key, card);
    });
  });

  closeBtn.addEventListener("click", function () {
    if (location.hash) history.pushState(null, "", location.pathname);
    close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (galleryModal && galleryModal.classList.contains("is-open")) {
        closeGallery();
        return;
      }
      if (currentKey) {
        if (location.hash) history.pushState(null, "", location.pathname);
        close();
      }
    }
    if (e.key === "Tab" && currentKey && (!galleryModal || !galleryModal.classList.contains("is-open"))) {
      var f = panel.querySelectorAll("a[href], button");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  function syncFromHash() {
    var key = location.hash.replace("#", "");
    if (key && data[key]) {
      if (key !== currentKey) {
        var card = document.querySelector('.card[data-section="' + key + '"]');
        open(key, card);
      }
    } else {
      close();
    }
  }
  window.addEventListener("popstate", syncFromHash);
  window.addEventListener("hashchange", syncFromHash);
  syncFromHash();

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }
})();
