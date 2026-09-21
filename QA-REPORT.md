# QA report

Data: 21 settembre 2026

## Controlli completati

| Controllo | Esito |
| --- | --- |
| Installazione dipendenze (`npm install`) | Superata |
| TypeScript strict / Astro (`astro check`) | 0 errori, 0 warning, 0 hint |
| Build di produzione (`astro build`) | Superata; 4 pagine statiche generate |
| Validazione HTML delle pagine generate | Superata; 0 errori |
| Dipendenze di produzione (`npm audit --omit=dev`) | 0 vulnerabilità |
| Link, ancore e asset interni | 27 link, 13 ancore e asset primari verificati |
| Risposte HTTP su server statico locale | Home, Privacy, Cookie e 404: HTTP 200 |
| URL WhatsApp | HTTP 200 |
| URL Google Maps | HTTP 200 |
| Contenuti principali senza JavaScript | Presenti nell’HTML server-rendered; JavaScript usato soltanto per il menu mobile |
| Immagini | Dimensioni dichiarate, AVIF/WebP responsive, lazy loading sotto la piega |
| Link esterni in nuova scheda | `rel="noopener noreferrer"` presente |
| Contrasto dei colori testuali principali | Rapporti da 6.05:1 a 10.66:1 |
| Output totale `dist/` | Circa 856 KB |

## Viewport previsti

Il CSS è mobile-first e include verifiche statiche per 360, 390, 768, 1024 e 1440 px: contenitori fluidi, griglie a soglia, pulsanti impilati sui display stretti, navigazione mobile e assenza di larghezze fisse superiori al viewport.

## Controllo grafico e Lighthouse

Il runtime di produzione usato per questa consegna non ha reso disponibile un browser Chromium locale: il download del browser di test è stato bloccato dalla rete dell’ambiente. Per questo non sono stati dichiarati punteggi Lighthouse né screenshot simulati.

Il controllo conclusivo da eseguire sull’URL `*.pages.dev`, prima del cambio DNS, è:

```bash
npx lighthouse https://URL-PROGETTO.pages.dev \
  --only-categories=performance,accessibility,best-practices,seo \
  --view
```

Sul medesimo URL vanno acquisiti gli screenshot reali a 390 × 844 e 1440 × 1000 e provati menu, CTA e assenza di overflow. Eventuali problemi emersi in questo passaggio devono essere corretti prima di collegare il dominio principale.
