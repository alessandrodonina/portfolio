document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (typeof portfolioData === 'undefined') {
    console.error('portfolioData non è definito. Verifica il percorso di data/content.js');
    return;
  }

  // Link dinamici (CV, Email, LinkedIn)
  document.querySelectorAll('[data-cv]').forEach(el => {
    if (portfolioData.cvUrl) el.href = portfolioData.cvUrl;
  });

  document.querySelectorAll('[data-email]').forEach(el => {
    if (portfolioData.email) {
      el.href = `mailto:${portfolioData.email}`;
      el.textContent = portfolioData.email;
    }
  });

  document.querySelectorAll('[data-linkedin]').forEach(el => {
    if (portfolioData.linkedinUrl) el.href = portfolioData.linkedinUrl;
  });

  // Logica Home Page
  if (page === 'home') {
    const introEl = document.getElementById('intro');
    if (introEl && portfolioData.intro) introEl.textContent = portfolioData.intro;

    const countEl = document.getElementById('project-count');
    if (countEl && portfolioData.projects) {
      countEl.textContent = `${portfolioData.projects.length} projects`;
    }

    const projectsGrid = document.getElementById('projects');
    if (projectsGrid && Array.isArray(portfolioData.projects)) {
      projectsGrid.innerHTML = portfolioData.projects.map(p => {
        const tagsHtml = (p.tags || []).map(t => `<span>${t}</span>`).join('');
        const desc = p.summary || p.description || '';
        const img = p.image || p.cover || '';
        const id = p.id || '';
        const title = p.title || '';

        return `
          <div class="card">
            <a href="projects.html#${id}" class="cover">
              <img src="${img}" alt="${title}">
            </a>
            <div class="meta">
              <span>${p.category || ''}</span>
              <span>${p.year || ''}</span>
            </div>
            <h3><a href="projects.html#${id}">${title}</a></h3>
            <p>${desc}</p>
            <div class="tags">
              ${tagsHtml}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Logica Pagina About
  if (page === 'about') {
    const aboutTextContainer = document.getElementById('about-text');
    if (aboutTextContainer && portfolioData.aboutText) {
      aboutTextContainer.innerHTML = portfolioData.aboutText;
    }
  }

  // Logica Pagina Projects
  if (page === 'projects') {
    const indexList = document.getElementById('index');
    const detailsContainer = document.getElementById('details');

    if (indexList && Array.isArray(portfolioData.projects)) {
      indexList.innerHTML = portfolioData.projects.map((p, index) => `
        <li>
          <a href="#${p.id || ''}">
            <small>0${index + 1}</small>
            <span>${p.title || ''}</span>
            <small>${p.category || ''}</small>
          </a>
        </li>
      `).join('');
    }

    if (detailsContainer && Array.isArray(portfolioData.projects)) {
      detailsContainer.innerHTML = portfolioData.projects.map((p, index) => {
        const tagsHtml = (p.tags || []).map(t => `<span>${t}</span>`).join('');
        const gallery = p.gallery || [];
        const galleryHtml = gallery.map(img => `
          <figure>
            <img src="${img.src || img}" alt="${img.caption || p.title || ''}">
            ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}
          </figure>
        `).join('');

        return `
          <article class="detail" id="${p.id || ''}">
            <div class="detail-top ${p.aside ? 'has-aside' : ''}">
              <div>
                <div class="eyebrow">0${index + 1} / ${p.category || ''}</div>
                <h2>${p.title || ''}</h2>
                <p>${p.description || ''}</p>
                ${p.link ? `<a class="button" href="${p.link.url}" target="_blank" rel="noopener noreferrer">${p.link.label || 'View'}</a>` : ''}
                <div class="tags">
                  ${tagsHtml}
                </div>
              </div>
              ${p.aside ? `<div><p>${p.aside}</p></div>` : ''}
            </div>
            ${galleryHtml ? `<div class="gallery">${galleryHtml}</div>` : ''}
          </article>
        `;
      }).join('');
    }
  }
});
