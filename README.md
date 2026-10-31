# Alessandro Donina — Portfolio

Sito statico per GitHub Pages.

## Struttura

- `index.html` — pagina unica con About, progetti e contatti
- `about.html`, `projects.html` — redirect per i vecchi link condivisi
- `data/content.js` — testi, progetti, immagini, didascalie e contatti
- `assets/css/style.css`, `assets/js/site.js` — grafica e funzionamento
- `assets/preview.png` — immagine usata nelle anteprime di condivisione
- `assets/documents/` — CV e tesi in PDF
- Immagini, una cartella per progetto: `assets/tesi_images/`, `assets/ducted_propeller_images/`, `assets/euler_fortran_images/`, `assets/propeller_performance_images/`, `assets/propeller_tonal_noise_images/`, `assets/trailing_edge_noise_images/`

Nel file contenuti: `aside` è l'immagine accanto al testo, `gallery` le immagini sotto, `cover` la copertina, `download` il pulsante di download di un progetto. Ogni immagine ha `src` e `caption` (solo descrizione, senza numeri di figura).

Pubblicazione: carica il contenuto nella radice del repository, poi Settings > Pages > Deploy from a branch > main > /(root).
