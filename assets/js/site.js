const D = window.PORTFOLIO;

const esc = s => String(s).replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[c]));

const tags = p => (p.tags || []).map(t => `<span>${esc(t)}</span>`).join('');

const fig = (im, p) => `
  <figure>
    <img src="${im.src}" alt="${esc(im.caption || p.title)}" loading="lazy">
    <figcaption>${esc(im.caption || '')}</figcaption>
  </figure>
`;

const dl = (p, cls) => p.download ? `
  <a class="${cls}" href="${p.download.href}" target="_blank" rel="noopener noreferrer">
    ${esc(p.download.label)}
  </a>
` : '';

document.querySelectorAll('[data-cv]').forEach(a => a.href = D.cv);
document.querySelectorAll('[data-portfolio]').forEach(a => {
  if (D.portfolio) a.href = D.portfolio;
});
document.querySelectorAll('[data-email]').forEach(a => {
  a.href = 'mailto:' + D.email;
  a.textContent = D.email; 
});
document.querySelectorAll('[data-linkedin]').forEach(a => a.href = D.linkedin);


if (document.body.dataset.page === 'home') {
  document.querySelector('#intro').textContent = D.intro;
  document.querySelector('#project-count').textContent = String(D.projects.length).padStart(2, '0') + ' PROJECTS';
  
  document.querySelector('#projects').innerHTML = D.projects.map((p, i) => `
    <article class="card">
      <a class="cover" href="projects.html#project-${i + 1}" aria-label="Read ${esc(p.title)}">
        <img src="${p.cover}" alt="${esc(p.title)} — figure" loading="lazy">
      </a>
      <div class="meta">
        <span>${esc(p.category)}</span>
        <span>${String(i + 1).padStart(2, '0')}</span>
      </div>
      <h3><a href="projects.html#project-${i + 1}">${esc(p.title)}</a></h3>
      <p>${esc(p.description)}</p>
      <div class="tags">${tags(p)}</div>
      <div class="card-links">
        <a class="textlink" href="projects.html#project-${i + 1}">Read details</a>
        ${dl(p, 'textlink')}
      </div>
    </article>
  `).join('');
} 
else if (document.body.dataset.page === 'about') {
  document.querySelector('#about-text').innerHTML = D.about.map(p => `<p>${esc(p)}</p>`).join('');
} 
else {
  document.querySelector('#index').innerHTML = D.projects.map((p, i) => `
    <li>
      <a href="#project-${i + 1}">
        <span class="eyebrow">${String(i + 1).padStart(2, '0')}</span>
        <span>${esc(p.title)}</span>
        <small>${esc(p.category)}</small>
      </a>
    </li>
  `).join('');

  document.querySelector('#details').innerHTML = D.projects.map((p, i) => {
    const asideContent = p.aside 
      ? `<div class="aside-col">${Array.isArray(p.aside) ? p.aside.map(im => fig(im, p)).join('') : fig(p.aside, p)}</div>` 
      : '';

    return `
      <section class="detail" id="project-${i + 1}">
        <div class="detail-top${p.aside ? ' has-aside' : ''}">
          <div>
            <p class="eyebrow">${String(i + 1).padStart(2, '0')} / ${esc(p.category)}</p>
            <h2>${esc(p.title)}</h2>
            <p>${esc(p.description)}</p>
            ${p.summary ? `<p class="eyebrow summary-label">Summary</p>${p.summary.map(s => `<p>${esc(s)}</p>`).join('')}` : ''}
            ${p.detail ? `<p>${esc(p.detail)}</p>` : ''}
            ${p.tags ? `<div class="tags">${tags(p)}</div>` : ''}
            ${dl(p, 'button')}
          </div>
          ${asideContent}
        </div>
        ${p.gallery_title ? `<h3 class="gallery-title">${esc(p.gallery_title)}</h3>` : ''}
        ${p.gallery ? `<div class="gallery">${p.gallery.map(im => fig(im, p)).join('')}</div>` : ''}
      </section>
    `;
  }).join('');

  if (location.hash) {
    requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    });
  }
}
