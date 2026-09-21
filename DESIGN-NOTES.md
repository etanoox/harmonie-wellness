# React edition — cambiamento di direzione

La ricostruzione sostituisce integralmente i componenti e gli stili Astro. Nessuna sovrascrittura del CSS della vecchia landing.

- Hero fotografica full-screen: il mare reale della foto di Chiara prende il posto dell'apertura a due colonne.
- Tipografia: DM Sans + Cormorant Garamond locali, con rapporti di scala molto più marcati.
- Tre schede del metodo sovrapposte durante lo scroll, ciascuna con una superficie diversa e un simbolo originale.
- Lezioni con composizione grafica centrata su “55”, invece della griglia di quattro card.
- Contatti aperti, senza riquadro mappa, e chiusura con il nome a tutta larghezza.
- Menu mobile controllato da React con Escape e chiusura sui link.
- Nessuna animazione complessa: gli slot SVG potranno essere sostituiti in una prossima iterazione.

Gli effetti si disattivano con la preferenza di sistema per il movimento ridotto. Lo scroll resta nativo per preservare tastiera, touch e ancore.
