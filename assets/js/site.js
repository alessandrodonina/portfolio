document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (typeof portfolioData === 'undefined') return;

  // Link dinamici (CV, Email, LinkedIn)
  document.querySelectorAll('[data-cv]').forEach(el => {
    el.href = portfolioData.cvUrl || '#';
  });

  document.querySelectorAll('[data-email]').forEach(el => {
    el.href = `mailto:${portfolioData.email}`;
    el.textContent = portfolioData.email;
  });

  document.querySelectorAll('[data-linkedin]').forEach(el => {
    el.href = portfolioData.linkedinUrl || '#';
  });

  // Logica Home Page
  if (page === 'home') {
    const introEl = document.getElementById('intro');
    if (introEl) introEl.textContent = portfolioData.intro;

    const countEl = document.getElementById('project-count');
    if (countEl) countEl.textContent = `${portfolioData.projects.length} projects`;

    const projectsGrid = document.getElementById('projects');
    if (projectsGrid) {
      projectsGrid.innerHTML = portfolioData.projects.map(p => `
        <div class="card">
          <a href="projects.html#${p.id}" class="cover">
            <img src="${p.image}" alt="${p.title}">
          </a>
          <div class="meta">
            <span>${p.category}</span>
            <span>${p.year}</span>
          </div>
          <h3><a href="projects.html#${p.id}">${p.title}</a></h3>
          <p>${p.summary || p.description}</p>
          <div class="tags">
            ${p.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      `).join('');
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

    if (indexList) {
      indexList.innerHTML = portfolioData.projects.map((p, index) => `
        <li>
          <a href="#${p.id}">
            <small>0${index + 1}</small>
            <span>${p.title}</span>
            <small>${p.category}</small>
          </a>
        </li>
      `).join('');
    }

    if (detailsContainer) {
      detailsContainer.innerHTML = portfolioData.projects.map((p, index) => `
        <article class="detail" id="${p.id}">
          <div class="detail-top ${p.aside ? 'has-aside' : ''}">
            <div>
              <div class="eyebrow">0${index + 1} / ${p.category}</div>
              <h2>${p.title}</h2>
              <p>${p.description}</p>
              ${p.link ? `<a class="button" href="${p.link.url}" target="_blank" rel="noopener noreferrer">${p.link.label}</a>` : ''}
              <div class="tags">
                ${p.tags.map(t => `<span>${t}</span>`).join('')}
              </div>
            </div>
            ${p.aside ? `<div><p>${p.aside}</p></div>` : ''}
          </div>
          ${p.gallery && p.gallery.length ? `
            <div class="gallery">
              ${p.gallery.map(img => `
                <figure>
                  <img src="${img.src}" alt="${img.caption || p.title}">
                  ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}
                </figure>
              `).join('')}
            </div>
          ` : ''}
        </article>
      `).join('');
    }
  }
});
