(function () {
  'use strict';
  var q = document.getElementById('q');
  var side = document.querySelector('.side');
  var menu = document.querySelector('.side .menu');
  var navItems = Array.prototype.slice.call(document.querySelectorAll('.side nav li[data-tags]'));
  var navDetails = Array.prototype.slice.call(document.querySelectorAll('.side nav details'));
  var abiertosIni = navDetails.map(function (d) { return d.open; });

  // Menú plegable en pantallas estrechas
  if (menu && side) {
    menu.addEventListener('click', function () {
      var abierto = side.classList.toggle('open');
      menu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      if (abierto && q) q.focus();
    });
  }

  // Filtros por etiqueta (solo en la portada) y búsqueda (en todas las páginas)
  var sel = new Set();
  var rows = Array.prototype.slice.call(document.querySelectorAll('table.sel tbody tr[data-tags]'));
  var capRows = Array.prototype.slice.call(document.querySelectorAll('table.sel tbody tr.caprow'));
  var count = document.getElementById('count');

  function ok(el) {
    var tags = el.getAttribute('data-tags').split(' ');
    var txt = el.getAttribute('data-text') || '';
    var s = q ? q.value.trim().toLowerCase() : '';
    for (var t of sel) if (tags.indexOf(t) < 0) return false;
    return !s || txt.indexOf(s) >= 0;
  }
  function apply() {
    var filtrando = sel.size > 0 || (q && q.value.trim() !== '');
    var n = 0, visibles = {};
    rows.forEach(function (r) { var v = ok(r); r.hidden = !v; if (v) { n++; visibles[r.getAttribute('data-cap')] = 1; } });
    capRows.forEach(function (c) { c.hidden = !visibles[c.getAttribute('data-cap')]; });
    navItems.forEach(function (li) { li.hidden = !ok(li); });
    navDetails.forEach(function (d, i) {
      var hay = d.querySelector('li[data-tags]:not([hidden])');
      d.hidden = filtrando && !hay;
      d.open = filtrando ? !!hay : abiertosIni[i];
    });
    if (count) count.textContent = n + (n === 1 ? ' dataset' : ' datasets');
  }
  document.querySelectorAll('.side button[data-tag]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-tag');
      if (sel.has(t)) { sel.delete(t); b.setAttribute('aria-pressed', 'false'); }
      else { sel.add(t); b.setAttribute('aria-pressed', 'true'); }
      apply();
    });
  });
  if (q) {
    q.addEventListener('input', apply);
    q.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      var first = document.querySelector('.side nav li[data-tags]:not([hidden]) a');
      if (first && !rows.length) window.location.href = first.getAttribute('href');
    });
  }
  var reset = document.getElementById('reset');
  if (reset) reset.addEventListener('click', function () {
    sel.clear(); if (q) q.value = '';
    document.querySelectorAll('.side button[data-tag]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    apply();
  });

  // La ficha actual, visible en la barra lateral
  var cur = document.querySelector('.side nav a[aria-current="page"]');
  if (cur && side && window.matchMedia('(min-width: 861px)').matches) {
    var r = cur.getBoundingClientRect(), rs = side.getBoundingClientRect();
    side.scrollTop += (r.top - rs.top) - side.clientHeight / 2;
  }

  // Copiar URL para el widget File de Orange
  document.querySelectorAll('button.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var u = b.getAttribute('data-url');
      try {
        navigator.clipboard.writeText(u).then(function () {
          b.textContent = 'Copiada'; setTimeout(function () { b.textContent = 'Copiar URL'; }, 1600);
        }, function () { b.textContent = 'Selecciona y copia'; });
      } catch (e) { b.textContent = 'Selecciona y copia'; }
    });
  });
})();
