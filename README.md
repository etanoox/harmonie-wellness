# Harmonie — React edition

Frontend interamente ricostruito con **React 19 + TypeScript strict + Vite + Tailwind CSS 4**. Nessuna dipendenza Astro o libreria di animazione. CSS per transizioni e pannelli sticky; React per menu e comparsa delle sezioni.

## Avvio

Richiede Node 22.12+.

```sh
npm install
npm run dev
```

Apri l'indirizzo stampato da Vite (normalmente http://localhost:5173). Per la versione di produzione:

```sh
npm run build
npm run preview
```

La build esegue TypeScript, compila Vite e prerenderizza home, Privacy, Cookie e 404. I contenuti sono disponibili nell'HTML anche senza JavaScript. Non servono server Node o Functions in produzione.

## Migrazione dalla versione Astro

**Questo archivio è un nuovo progetto completo: non sostituire soltanto `src`.**

1. Estrai l'archivio in una cartella nuova e provalo con i comandi sopra.
2. Fai una copia del vecchio progetto prima di sostituirlo.
3. Nella cartella già collegata a GitHub conserva `.git`, le eventuali configurazioni personali e nessun segreto nel commit.
4. Sostituisci `src`, `public`, `package.json`, `package-lock.json`, `tsconfig.json`, README e `.gitignore` con quelli nuovi. Aggiungi `index.html`, `vite.config.ts`, `scripts`, `.node-version`, `.nvmrc`, `DESIGN-NOTES.md` e `CONTENT-NOTES.md`.
5. Rimuovi i file di configurazione obsoleti `astro.config.mjs` e gli output `dist` e `.astro`, se presenti. `npm install` riallinea le dipendenze al nuovo package.
6. Esegui `npm install`, poi `npm run build`. Dopo il tuo collaudo:

```sh
git add .
git commit -m "Rebuild Harmonie with React, Vite and Tailwind"
git push
```

Cloudflare Pages: preset **Vite**, comando **npm run build**, output **dist**, Node **22**. Se il progetto Pages esistente usa già questo comando/output, non serve ricrearlo. Mantieni dominio e impostazioni DNS esistenti. Il deploy automatico avverrà al push, se già configurato. Nessun deploy è stato eseguito durante questa consegna.

## Modifica contenuti e grafica

- `src/data.ts`: associazione, telefono, email, WhatsApp, mappa e orari.
- `src/App.tsx`: sezioni indipendenti Hero, About, Method, Lessons, Schedule, Contact e Footer, oltre alle pagine legali; testi editoriali e SVG.
- `src/style.css`: Tailwind, palette, tipografia, layout, breakpoint e movimento.
- `src/main.tsx`: font locali, stili e hydration React.
- `src/entry-server.tsx` + `scripts/prerender.mjs`: HTML statico e sitemap. Se cambi dominio o dati dell'associazione, aggiorna anche i metadati in `index.html` e lo schema in `scripts/prerender.mjs`.
- `public/images`: fotografie originali WordPress e marchio, in WebP.
- `public/_redirects`: `/chi-siamo/` → `/#harmonie`; `/contattaci/` → `/#contatti`.
- `public/_headers`: intestazioni di sicurezza e cache degli asset compilati.

## Direzione visiva

Foto a tutta altezza con trattamento cromatico CSS, testo sovrapposto, manifesto centrale, composizione asimmetrica Chiara/studio, tre pannelli sticky sovrapposti, grande elemento tipografico “55 minuti”, orari essenziali e chiusura con wordmark a tutta larghezza.

Salvia `#DFE8DC`, foresta `#334234`, testo `#28392D`, superficie chiara `#F7F8F2`. Font DM Sans e Cormorant Garamond, distribuiti localmente da pacchetti Fontsource con licenza SIL Open Font License. Nessuna richiesta a Google Fonts o tracker. Il wordmark tipografico è un trattamento editoriale del nome: il marchio originale rimane nei contatti e nella favicon.

Gli attributi `data-motion-slot` nei pannelli identificano gli spazi per future animazioni. Per ora contengono simboli SVG statici personalizzati. Le animazioni di entrata sono leggere; nessuna cattura della rotella, audio, video, WebGL o dipendenza GSAP. `prefers-reduced-motion` disattiva animazioni e sovrapposizione sticky.

## Verifica e limiti

Dipendenze installate e `npm run build` completato. Il comando include TypeScript strict e prerender delle quattro pagine. Nessun collaudo browser, screenshot, Lighthouse o audit WCAG svolto in questa revisione, secondo la richiesta di contenere i crediti. Responsive e tastiera restano da collaudare dall'utente.

Le foto mantengono la risoluzione originale: potranno essere sostituite in futuro con file più grandi. Nessuna foto generata, corso, testimonianza o qualifica aggiunti. Restano valide le richieste di conferma legale, orari, WhatsApp e autorizzazioni fotografiche elencate in CONTENT-NOTES.md; le policy sono bozze ereditate, da completare prima della pubblicazione definitiva.
