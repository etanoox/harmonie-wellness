# ASD Harmonie Pilates & Wellness

Nuovo sito vetrina statico e mobile-first per **ASD Harmonie Pilates & Wellness**, studio di Pilates ad Agira (Enna).

## Stack

- Astro 7 in modalità statica
- TypeScript strict
- CSS nativo con custom properties
- Astro Assets per immagini responsive AVIF/WebP
- Astro Content Collections già predisposte per un futuro blog Markdown/MDX
- Nessun database, backend, cookie analitico o framework UI client-side

## Requisiti

- Node.js 22 LTS (minimo 22.12)
- npm 10 o superiore

Il progetto include `.nvmrc` e `.node-version`.

## Avvio locale

```bash
npm install
npm run dev
```

Astro mostrerà l’indirizzo locale, normalmente `http://localhost:4321`.

## Controlli e build

```bash
npm run check
npm run build
npm run preview
```

La build statica viene generata nella cartella `dist/`.

## Dove modificare i contenuti

Le informazioni centrali sono in [`src/data/site.ts`](src/data/site.ts):

- nome e descrizione;
- dati di Chiara Manno;
- indirizzo;
- telefono, email, WhatsApp e Google Maps;
- orari;
- informazioni sulla lezione;
- navigazione.

I testi editoriali delle sezioni sono nei componenti corrispondenti sotto `src/components/`. Le domande aperte e le fonti sono documentate in [`CONTENT-NOTES.md`](CONTENT-NOTES.md).

## Immagini

Gli originali recuperati dal WordPress sono in `src/assets/images/`. Per sostituire una foto:

1. usare un file originale nitido, preferibilmente WebP, JPG o PNG;
2. mantenere un nome descrittivo in minuscolo;
3. importarlo nel componente Astro;
4. aggiornare il testo alternativo descrivendo ciò che appare davvero nella foto;
5. lasciare a `<Picture>` la generazione automatica di AVIF/WebP e delle dimensioni responsive.

Non aggiungere foto di persone senza aver verificato il consenso all’uso sul sito.

## Sistema visivo

I token sono centralizzati in [`src/styles/tokens.css`](src/styles/tokens.css). I due colori di riferimento sono stati campionati dal logo originale:

- salvia del marchio: `#DFE8DC` (`--color-sage-200`);
- grafite vegetale del segno: base `#3F483B`, resa accessibile con `#334234` per testo e controlli.

La palette include varianti per superfici, bordi, testo e focus. I font sono soltanto locali/di sistema: nessuna richiesta a Google Fonts e nessun trattamento dati aggiuntivo.

## SEO e privacy

- Canonical su `https://harmoniewellness.it`.
- Metadata Open Graph e X/Twitter.
- JSON-LD prudente di tipo `SportsActivityLocation`, limitato a dati pubblici verificati.
- Sitemap generata durante la build.
- `robots.txt`, pagina 404, Privacy e Cookie Policy.
- Nessun banner cookie: la prima versione non imposta cookie non necessari.
- Nessun form, analytics, pixel, mappa incorporata o feed social.

Prima della pubblicazione definitiva, completare la Privacy Policy con i dati legali indicati in `CONTENT-NOTES.md`.

## Repository GitHub

Se il progetto non è già in un repository:

```bash
git init -b main
git add .
git commit -m "Build new Harmonie Wellness website"
git remote add origin git@github.com:TUO-ACCOUNT/harmonie-wellness.git
git push -u origin main
```

Non committare `.env`, credenziali, `node_modules/` o `dist/`; sono già esclusi da `.gitignore`.

## Deploy gratuito su Cloudflare Pages

1. In Cloudflare, aprire **Workers & Pages → Create → Pages → Connect to Git**.
2. Selezionare il repository GitHub e il branch `main`.
3. Impostare:
   - Framework preset: **Astro**;
   - Build command: `npm run build`;
   - Build output directory: `dist`;
   - Root directory: `/`;
   - Node version: `22` (variabile `NODE_VERSION=22`, se richiesta dal pannello).
4. Avviare il primo deploy e collaudare l’URL `*.pages.dev`.
5. Ogni push successivo su `main` genererà automaticamente un nuovo deploy.

## Collegare il dominio senza interrompere il WordPress

1. Lasciare invariati DNS e server WordPress durante sviluppo e collaudo.
2. Verificare completamente il sito sull’URL temporaneo Cloudflare Pages.
3. Facoltativo ma consigliato: prima del cambio, creare `old.harmoniewellness.it` verso il vecchio server per mantenere un accesso tecnico temporaneo.
4. Nel progetto Pages aprire **Custom domains → Set up a custom domain** e aggiungere prima `harmoniewellness.it`, poi `www.harmoniewellness.it`.
5. Se il dominio usa già i DNS Cloudflare, il pannello propone o crea i record corretti. Solo al momento del passaggio rimuovere/sostituire i vecchi record A/AAAA/CNAME che puntano al WordPress.
6. Scegliere una variante canonica (in questo progetto: senza `www`) e reindirizzare l’altra dal pannello Cloudflare.
7. Dopo il cambio, verificare HTTPS, home, pagine legali, sitemap e redirect storici.
8. Conservare il vecchio hosting per qualche giorno senza modificarlo; dismetterlo soltanto dopo aver verificato traffico, DNS e redirect.

## Redirect degli URL WordPress

Il file `public/_redirects` include già:

```text
/chi-siamo/ /#harmonie 301
/contattaci/ /#contatti 301
```

Cloudflare Pages li applica come redirect permanenti, preservando i vecchi URL e portando gli utenti alle sezioni equivalenti della nuova one-page. Prima del go-live verificare che eventuali altri URL indicizzati dal vecchio WordPress siano aggiunti allo stesso file.

## Aggiungere il blog in futuro

La collection `blog` è definita in `src/content.config.ts`. Per aggiungere un articolo:

1. creare un file `.md` o `.mdx` in `src/content/blog/`;
2. usare i campi `title`, `description`, `publishedAt`, `updatedAt` e `draft`;
3. creare le pagine elenco/dettaglio solo quando esistono contenuti reali;
4. aggiungere la voce “Blog” alla navigazione soltanto al momento della pubblicazione del primo articolo.

## Struttura principale

```text
src/
  assets/images/       immagini originali
  components/          sezioni e componenti UI
  content/blog/        futuri articoli
  data/site.ts         dati centralizzati
  layouts/             layout globale e legale
  pages/               home, policy e 404
  styles/              token e stili globali
public/                 favicon, robots, header e redirect Cloudflare
```
