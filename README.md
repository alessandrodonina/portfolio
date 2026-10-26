# Alessandro Donina — Portfolio

Sito statico per GitHub Pages.

## Struttura

- `index.html` — home, About me, Projects, CV
- `projects.html` — indice e dettagli dei progetti
- `data/content.js` — testi, progetti, immagini e contatti
- `assets/css/style.css`, `assets/js/site.js` — grafica e funzionamento
- `assets/documents/` — CV e portfolio PDF
- Immagini, una cartella per progetto:
  - `assets/tesi_images/` (con `05-risultati/` e `05-risultati/fluidi/`)
  - `assets/ducted_propeller_images/`
  - `assets/euler_fortran_images/`
  - `assets/propeller_performance_images/`
  - `assets/propeller_tonal_noise_images/`
  - `assets/trailing_edge_noise_images/`

Nel file contenuti, `aside` è l'immagine accanto al testo, `gallery` le immagini sotto, `cover` la copertina. Per un nuovo progetto crea una cartella `assets/<nome>_images/` e aggiungi un oggetto in `projects`.

Pubblicazione: carica il contenuto nella radice del repository, poi Settings > Pages > Deploy from a branch > main > /(root).
