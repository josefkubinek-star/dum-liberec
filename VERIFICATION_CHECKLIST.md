# Verification Checklist for GitHub Pages Deployment

## Initial Setup (One-time)

1. **Enable GitHub Pages in repository settings:**
   - Go to: `Settings` → `Pages`
   - Source: Select `GitHub Actions` (not "Deploy from a branch")
   - Save

2. **Verify repository name matches:**
   - Repository should be named: `dum-liberec`
   - GitHub username/organization: `josefkubinek-star`
   - Expected URL: `https://josefkubinek-star.github.io/dum-liberec/`

## After First Deployment

### 1. Open the Site
- **URL to open:** `https://josefkubinek-star.github.io/dum-liberec/`
- Should load without errors
- CSS should be applied (Material theme styling visible)

### 2. Test Navigation Menu
Click through each menu item and verify:

- [ ] **Home** (`/00_README/README.html`)
- [ ] **Zadání projektu** (`/01_Zadani_a_cile/Zadani_projektu.html`)
- [ ] **Stávající stav** (`/02_Stavajici_stav/Popis_stavajiciho_stavu.html`)
- [ ] **Architektura** (`/03_Architektura/Koncept.html`)
- [ ] **Profese** → **Kontakty** (`/04_Profese/Kontakty.html`)
- [ ] **Profese** → **Zadání pro statika** (`/04_Profese/Statika/Zadani_pro_statika.html`)
- [ ] **Decision log** (`/05_Rozhodnuti_a_zmeny/Decision_log.html`)
- [ ] **TODO a plán** (`/06_TODO_a_plan/TODO_aktualni.html`)
- [ ] **Inspirace** (`/07_Inspirace/Inspirace.html`)
- [ ] **Rozpočet a realizace** (`/08_Rozpocet_a_realizace/Rozpocet_hruby_odhad.html`)

### 3. Verify Assets Load Correctly

Check that images and PDFs are accessible:

- [ ] **Images:**
  - `/02_Stavajici_stav/Katastr.png` - loads correctly
  - `/02_Stavajici_stav/Pristup_a_kaskady_pred_domem.jpg` - loads correctly
  - `/07_Inspirace/Knihovna_inspirace.png` - loads correctly

- [ ] **PDFs:**
  - `/02_Stavajici_stav/Puvodni_vykresy.pdf` - opens/downloads correctly
  - `/03_Architektura/Architekt_Prosinec_2025.pdf` - opens/downloads correctly

### 4. Check for 404 Errors

Open browser Developer Tools (F12) → Network tab:
- [ ] No 404 errors for CSS files (`main.*.css`, `palette.*.css`)
- [ ] No 404 errors for JavaScript files (`bundle.*.js`)
- [ ] No 404 errors for images or PDFs
- [ ] No 404 errors for navigation links

### 5. Verify Styling

- [ ] Material theme is applied (check for Material Design styling)
- [ ] Navigation menu is visible and functional
- [ ] Search functionality works (if enabled)
- [ ] Responsive design works on mobile/tablet viewports

### 6. Test GitHub Actions Workflow

After pushing to `main` branch:
- [ ] Go to `Actions` tab in GitHub repository
- [ ] Verify "Deploy MkDocs to GitHub Pages" workflow runs successfully
- [ ] Check that deployment completes without errors
- [ ] Site updates within 1-2 minutes after workflow completes

## Troubleshooting

### If CSS/JS don't load:
- Check `site_url` in `mkdocs.yml` matches your GitHub Pages URL exactly
- Verify `use_directory_urls: false` is set in `mkdocs.yml`
- Clear browser cache and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### If navigation links are broken:
- Verify all paths in `nav:` section of `mkdocs.yml` point to files in `docs/` directory
- Check that file extensions are `.md` (not `.html`)

### If assets (images/PDFs) don't load:
- Verify files exist in `docs/` directory (not just root)
- Check that filenames don't contain spaces (should use underscores)
- Ensure file paths in markdown match actual file locations

### If GitHub Actions fails:
- Check that `mkdocs-material` is listed in workflow dependencies
- Verify Python version compatibility
- Check workflow logs in Actions tab for specific error messages

## Manual Deployment (Alternative)

If GitHub Actions doesn't work, you can deploy manually:

```bash
# Install dependencies
pip install mkdocs-material

# Build the site
mkdocs build

# Deploy to gh-pages branch
mkdocs gh-deploy
```

Note: Manual deployment requires `ghp-import` package:
```bash
pip install ghp-import
```

