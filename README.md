# Imperial Food — křupavá pizza s rozvozem po Praze 4, od 219 Kč

Static concept page exported from site-factory (imperial-pizza / c-convert). Open `index.html` in a browser — no build needed.

## Publish on GitHub Pages

```bash
cd clients/imperial-pizza/final
git init && git add . && git commit -m "Concept page"
git branch -M main
gh repo create imperial-pizza --public --source=. --push          # or create the repo on github.com and: git remote add origin … && git push -u origin main
gh api -X POST repos/{owner}/imperial-pizza/pages -f "source[branch]=main" -f "source[path]=/"   # or: repo Settings → Pages → Deploy from a branch → main / root
```

After changes in the prototype, export again (`npm run final -- imperial-pizza`) and push: `git add -A && git commit -m "Update" && git push` — the export keeps this folder's `.git`.

The page appears at `https://<your-user>.github.io/imperial-pizza/` after a minute. Re-export with `--url=https://<your-user>.github.io/imperial-pizza/` so link previews show `og.jpg`.

Search engines are told not to index it (`noindex`). The visitor edit panel is enabled: the [data-try-edit] button opens it and visitors copy their changes as a plain message.

## Photos

These images are AI-generated placeholders (Gemini, SynthID watermark) — don't present them as real work, people or premises:

- media/banner-crust-1.webp
- media/box-home-1.webp
