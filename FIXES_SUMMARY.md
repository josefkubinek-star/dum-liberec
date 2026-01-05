# MkDocs Configuration Fixes Summary

## What Was Fixed

### 1. mkdocs.yml Configuration

**Base URL Configuration:**
- ✅ `site_url: https://josefkubinek-star.github.io/dum-liberec/` - Correctly configured with trailing slash for subpath
- ✅ `use_directory_urls: false` - Ensures `.html` files work correctly with GitHub Pages subpath
- ✅ `docs_dir: docs` - Explicitly set to use docs directory

**Navigation:**
- ✅ All navigation paths correctly point to files in `docs/` directory
- ✅ All 10 markdown files are included in navigation (no warnings)

**Theme Improvements:**
- ✅ Added color palette with light/dark mode toggle
- ✅ Added navigation features:
  - `navigation.tabs` - Tab-based navigation for better organization
  - `navigation.top` - Back-to-top button
  - `search.suggest` - Search suggestions
  - `search.highlight` - Highlight search results
- ✅ Added professional fonts (Roboto for text, Roboto Mono for code)
- ✅ Added tasklist extension for better markdown support

### 2. Image Path Fixes

**Fixed in `docs/02_Stavajici_stav/Popis_stavajiciho_stavu.md`:**
- Changed: `` `Pristup_a_kaskady_pred_domem.jpg` ``
- To: `![Přístup a kaskády před domem](Pristup_a_kaskady_pred_domem.jpg)`
- **Path:** Relative path (same directory) - will work correctly with `use_directory_urls: false`

**Fixed in `docs/07_Inspirace/Inspirace.md`:**
- Changed: `` `Knihovna_inspirace.png` ``
- To: `![Knihovna inspirace](Knihovna_inspirace.png)`
- **Path:** Relative path (same directory) - will work correctly with `use_directory_urls: false`

### 3. Why These Fixes Work

**For GitHub Pages with subpath (`/dum-liberec/`):**
- `use_directory_urls: false` generates files like `README.html` instead of `README/index.html`
- Relative image paths work because they're resolved relative to the HTML file location
- `site_url` with trailing slash ensures all absolute paths (CSS/JS) include the subpath
- Navigation links will resolve to `/dum-liberec/00_README/README.html` etc.

**Image Path Resolution:**
- Images in same directory: `image.png` → resolves to same directory as HTML file
- Images in subdirectories: `subdir/image.png` → resolves relative to HTML file location
- All paths are relative, so they work regardless of base URL

## Files Changed

1. **mkdocs.yml** - Enhanced theme configuration, verified base URL settings
2. **docs/02_Stavajici_stav/Popis_stavajiciho_stavu.md** - Fixed image reference
3. **docs/07_Inspirace/Inspirace.md** - Fixed image reference

## No Changes Needed

- ✅ PDF files (`Puvodni_vykresy.pdf`, `Architekt_Prosinec_2025.pdf`) - Not referenced in markdown, accessible via direct URL
- ✅ `Katastr.png` - Not referenced in markdown, accessible if needed
- ✅ All navigation paths - Already correct
- ✅ Content structure - No changes to content meaning

## Verification

After deployment, verify:
1. Navigation links work (no 404s)
2. Images display correctly on pages
3. CSS/JS load from `/dum-liberec/assets/...`
4. Dark/light mode toggle works
5. Search functionality works

