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
  <a class="${cls}" href="${p.download.href}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">
    ${esc(p.download.label)}
  </a>
` : '';

document.querySelectorAll('[data-cv]').forEach(a => a.href = D.cv);
document.querySelectorAll('[data-email]').forEach(a => {
  a.href = 'mailto:' + D.email;
  a.textContent = D.email; 
});
document.querySelectorAll('[data-linkedin]').forEach(a => a.href = D.linkedin);

const renderProjectDetail = (p, i) => {
  const asideContent = p.aside
    ? `<div class="aside-col">${Array.isArray(p.aside) ? p.aside.map(im => fig(im, p)).join('') : fig(p.aside, p)}</div>`
    : '';

  return `
    <section class="detail">
      <button class="detail-close" type="button" data-close-project aria-label="Close project details" title="Close project details">
        <span class="detail-close-icon" aria-hidden="true">&#215;</span>
      </button>
      <div class="detail-top${p.aside ? ' has-aside' : ''}">
        <div>
          <p class="eyebrow">${String(i + 1).padStart(2, '0')} / ${esc(p.category)}</p>
          <h2>${esc(p.title)}</h2>
          <p>${esc(p.description)}</p>
          ${p.summary ? `<p class="eyebrow summary-label">Summary</p>${p.summary.map(s => `<p>${esc(s)}</p>`).join('')}` : ''}
          ${p.detail ? `<p>${esc(p.detail)}</p>` : ''}
          ${p.tags ? `<div class="tags">${tags(p)}</div>` : ''}
          ${dl(p, 'btn-link')}
        </div>
        ${asideContent}
      </div>
      ${p.gallery_title ? `<h3 class="gallery-title">${esc(p.gallery_title)}</h3>` : ''}
      ${p.gallery ? `<div class="gallery">${p.gallery.map(im => fig(im, p)).join('')}</div>` : ''}
    </section>
  `;
};

const renderProjects = () => {
  const projectGrid = document.querySelector('#project-grid');
  if (projectGrid) {
    projectGrid.innerHTML = D.projects.map((p, i) => `
      <article class="card project-card reveal" id="project-${i + 1}" style="--reveal-delay: ${Math.min(i * 65, 325)}ms">
        <button class="project-card-trigger" type="button" aria-expanded="false" aria-controls="project-detail-panel" data-project-toggle data-project-index="${i}">
          <span class="cover">
            <img src="${p.cover}" alt="" loading="lazy">
          </span>
          <span class="meta">
            <span>${esc(p.category)}</span>
            <span>${String(i + 1).padStart(2, '0')}</span>
          </span>
          <span class="project-card-title">${esc(p.title)}</span>
          <span class="project-card-description">${esc(p.description)}</span>
          <span class="tags">${tags(p)}</span>
        </button>
      </article>
    `).join('');

    const projectPanel = document.querySelector('#project-detail-panel');
    const detailContent = document.querySelector('#project-detail-content');
    projectGrid.addEventListener('click', event => {
      const toggle = event.target.closest('[data-project-toggle]');
      if (!toggle) return;

      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const panelWasOpen = projectPanel.classList.contains('is-open');

      projectGrid.querySelectorAll('[data-project-toggle]').forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        other.closest('.project-card').classList.remove('is-selected');
      });

      if (!opening) {
        projectPanel.classList.remove('is-open');
        window.setTimeout(() => {
          if (!projectGrid.querySelector('[aria-expanded="true"]')) projectPanel.hidden = true;
        }, reduceMotion ? 0 : 650);
        if (location.hash === `#${toggle.closest('.project-card').id}`) {
          history.replaceState(null, '', location.pathname + location.search);
        }
        return;
      }

      const projectIndex = Number(toggle.dataset.projectIndex);
      toggle.setAttribute('aria-expanded', 'true');
      toggle.closest('.project-card').classList.add('is-selected');
      detailContent.innerHTML = renderProjectDetail(D.projects[projectIndex], projectIndex);
      projectPanel.hidden = false;

      if (panelWasOpen) {
        projectPanel.classList.add('is-switching');
        requestAnimationFrame(() => projectPanel.classList.remove('is-switching'));
      } else {
        requestAnimationFrame(() => projectPanel.classList.add('is-open'));
      }

      history.replaceState(null, '', `#${toggle.closest('.project-card').id}`);
      window.setTimeout(() => {
        if (projectPanel.classList.contains('is-open')) {
          projectPanel.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
        }
      }, 160);
    });

    projectPanel.addEventListener('click', event => {
      const closeButton = event.target.closest('[data-close-project]');
      if (!closeButton) return;

      const activeToggle = projectGrid.querySelector('[data-project-toggle][aria-expanded="true"]');
      const activeCard = activeToggle?.closest('.project-card');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (activeToggle) {
        activeToggle.setAttribute('aria-expanded', 'false');
        activeCard.classList.remove('is-selected');
        activeToggle.focus({ preventScroll: true });
      }

      projectPanel.classList.remove('is-open');
      if (location.hash === `#${activeCard?.id}`) {
        history.replaceState(null, '', location.pathname + location.search);
      }

      window.setTimeout(() => {
        if (!projectGrid.querySelector('[aria-expanded="true"]')) projectPanel.hidden = true;
      }, reduceMotion ? 0 : 650);

      activeCard?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'center' });
    });
  }
};

document.querySelector('#intro').textContent = D.intro;
document.querySelector('#project-count').textContent = String(D.projects.length).padStart(2, '0') + ' PROJECTS';
document.querySelector('#about-text').innerHTML = D.about.map(p => `<p>${esc(p)}</p>`).join('');
renderProjects();

if (location.hash) {
  requestAnimationFrame(() => {
    const target = document.getElementById(location.hash.slice(1));
    const toggle = target?.matches('.project-card') ? target.querySelector('[data-project-toggle]') : null;
    if (toggle) toggle.click();
    else target?.scrollIntoView();
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('is-visible'));
}

const anchorSections = [...document.querySelectorAll('main > section[id]')];
let hashUpdateFrame = 0;

const updateSectionHash = () => {
  hashUpdateFrame = 0;
  const hashTarget = document.getElementById(location.hash.slice(1));
  if (document.querySelector('#project-detail-panel.is-open') || hashTarget?.matches('.project-card')) return;

  const atPageStart = window.scrollY <= 1;
  const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
  const marker = window.innerHeight * 0.4;
  let activeSection = atPageEnd ? anchorSections[anchorSections.length - 1] : anchorSections[0];
  if (!atPageStart && !atPageEnd) {
    anchorSections.forEach(section => {
      if (section.getBoundingClientRect().top <= marker) activeSection = section;
    });
  }

  if (activeSection && location.hash !== `#${activeSection.id}`) {
    history.replaceState(history.state, '', `${location.pathname}${location.search}#${activeSection.id}`);
  }
};

const scheduleSectionHashUpdate = () => {
  if (!hashUpdateFrame) hashUpdateFrame = requestAnimationFrame(updateSectionHash);
};

window.addEventListener('scroll', scheduleSectionHashUpdate, { passive: true });
window.addEventListener('resize', scheduleSectionHashUpdate);
scheduleSectionHashUpdate();
