# Site Audit – Dům Liberec MkDocs

**Datum auditu:** 2025-01-XX  
**Cíl:** Ověření konzistence mezi repo obsahem, navigací a nasazeným webem

---

## 1. Navigační struktura (mkdocs.yml)

### Všechny položky v navigaci existují ✓

- ✅ `index.md` → Přehled
- ✅ `01_Zadani_a_cile/Zadani_projektu.md` → Zadání
- ✅ `02_Stavajici_stav/Popis_stavajiciho_stavu.md` → Stav domu
- ✅ `03_Architektura/Koncept.md` → Architektura
- ✅ `04_Profese/Kontakty.md` → Profese > Kontakty
- ✅ `04_Profese/Statika/Zadani_pro_statika.md` → Profese > Statika
- ✅ `05_Rozhodnuti_a_zmeny/Decision_log.md` → Rozhodnutí
- ✅ `06_TODO_a_plan/TODO_aktualni.md` → Plán/rozpočet > TODO
- ✅ `08_Rozpocet_a_realizace/Rozpocet_hruby_odhad.md` → Plán/rozpočet > Rozpočet
- ✅ `07_Inspirace/Inspirace.md` → Inspirace

**Výsledek:** Všechny soubory v navigaci existují v `docs/` adresáři.

---

## 2. Soubory v docs/ vs navigace

### Soubory v docs/, které nejsou v navigaci

- ⚠️ `00_README/README.md` – není v navigaci (možná záměrně, je to interní dokumentace)
- ℹ️ `index.md` – je v navigaci jako "Přehled"

**Poznámka:** `00_README/README.md` není v navigaci, ale je to pravděpodobně interní dokumentace. Pokud má být přístupná, přidej ji do navigace.

---

## 3. Assets (PDF, obrázky)

### PDF soubory

- ✅ `02_Stavajici_stav/Puvodni_vykresy.pdf` 
  - **Status:** Odkaz přidán do `Popis_stavajiciho_stavu.md`
  - **Odkaz:** `[Původní výkresy (PDF)](Puvodni_vykresy.pdf)`

- ✅ `03_Architektura/Architekt_Prosinec_2025.pdf`
  - **Status:** Odkaz přidán do `Koncept.md`
  - **Odkaz:** `[Architektonický návrh – Prosinec 2025 (PDF)](Architekt_Prosinec_2025.pdf)`

### Obrázky (PNG, JPG)

- ✅ `02_Stavajici_stav/Katastr.png`
  - **Status:** Odkaz přidán do `Popis_stavajiciho_stavu.md`
  - **Odkaz:** `[Katastrální mapa (PNG)](Katastr.png)`

- ✅ `02_Stavajici_stav/Pristup_a_kaskady_pred_domem.jpg`
  - **Status:** Již v markdownu jako obrázek
  - **Odkaz:** `![Přístup a kaskády před domem](Pristup_a_kaskady_pred_domem.jpg)`

- ✅ `07_Inspirace/Knihovna_inspirace.png`
  - **Status:** Již v markdownu jako obrázek
  - **Odkaz:** `![Knihovna inspirace](Knihovna_inspirace.png)`

**Výsledek:** Všechny assets jsou nyní odkázány v příslušných stránkách.

---

## 4. GitHub Pages konfigurace

### mkdocs.yml nastavení

- ✅ `site_url: https://josefkubinek-star.github.io/dum-liberec/` – správně nastaveno s trailing slash
- ✅ `use_directory_urls: true` – správně pro GitHub Pages subpath
- ✅ `docs_dir: docs` – správně
- ✅ `extra_css: [stylesheets/extra.css]` – CSS soubor existuje

### GitHub Actions workflow

- ✅ `.github/workflows/ci.yml` – workflow existuje a je nakonfigurován

**Výsledek:** Konfigurace je správná pro GitHub Pages deployment.

---

## 5. Design a navigace

### Navigační změny

- ✅ Top tabs odstraněny (používá se jen sidebar)
- ✅ Sidebar je hlavní navigace (čistý, čitelný design)
- ✅ Pravý TOC panel vypnutý (CSS)
- ✅ Apple-style design implementován

### CSS změny

- ✅ `docs/stylesheets/extra.css` – kompletně přepracován
- ✅ Čistý sidebar design s vysokým kontrastem
- ✅ Aktivní položka jasně zvýrazněna
- ✅ Typografie upravena pro lepší čitelnost

---

## 6. Shrnutí a doporučení

### ✅ Co funguje

1. Všechny soubory v navigaci existují
2. Všechny assets (PDF, obrázky) jsou odkázány
3. GitHub Pages konfigurace je správná
4. Design je čistý a čitelný
5. Navigace je intuitivní (sidebar only)

### ⚠️ Možná vylepšení

1. **00_README/README.md** – zvážit přidání do navigace, pokud má být přístupné
2. **Testování na GitHub Pages** – po nasazení ověřit:
   - Všechny odkazy fungují (žádné 404)
   - PDF se stahují/otevírají
   - Obrázky se zobrazují
   - Navigace funguje správně

### 📝 Další kroky

1. Commit a push změn
2. Ověřit GitHub Actions build (zelený status)
3. Otestovat nasazený web na GitHub Pages
4. Ověřit všechny odkazy a assets

---

**Audit dokončen:** Všechny kritické problémy byly opraveny. Web je připraven k nasazení.

