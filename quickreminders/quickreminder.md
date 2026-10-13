## quick reminders so that i dont forget where are my files
hallo
# stage header controls
src/components/stage-header/stagecontrols/'
old PenguinMod controls are in /controlssssssss (there are exactly 7 "s" there, just if you wondered.)

# domain & title rules
- Project browser/player pages use "Permafy - A PenguinMod Fork".
- Editor pages use "Permafy - Studio".
- Current project site CNAME is `projects.permafy.org`.
- Clean project URLs are `/ID`, `/ID/editor`, `/scratch/ID`, `/penguinmod/ID`, and `/projects/featured/ID`.
- Featured listing is `/projects/featured/`.
- GitHub Pages' 404 fallback serves the player app so the wildcard router can read clean project paths.
- Studio editor URLs redirect from the projects host to `https://studio.permafy.org/`.
- Domain toggle implementation is the exact current contents of `static/permafy-domain-toggle.js`.
- Featured project loader implementation is the exact current contents of `static/permafy-featured-projects.js`.

# Suggested repository split
- `Permafy/projects`: player, featured projects, `/scratch/ID`, `/penguinmod/ID`; CNAME `projects.permafy.org`.
- `Permafy/studio`: editor-only build; CNAME `studio.permafy.org`; title `Permafy - Studio`.
- `Permafy/permafy.github.io`: dashboard/home site at `permafy.github.io`; do not add a `CNAME` file unless choosing a custom domain.
- Prepare the deployable folders with `npm run build:studio-site` and `npm run build:dashboard-site`; this creates `studio-site/` and `dashboard-site/`.
- In this Codespace/source repo terminal, publish with:
	- `npm run build && npx gh-pages -d build -r https://github.com/Permafy/projects.git -b gh-pages`
	- `npm run build:studio-site && npx gh-pages -d studio-site -r https://github.com/Permafy/studio.git -b gh-pages`
	- `npm run build:dashboard-site && npx gh-pages -d dashboard-site -r https://github.com/Permafy/permafy.github.io.git -b gh-pages`
- No terminal commands are needed inside the three destination repos; `gh-pages` pushes from this source repo.
- In Settings > Pages, projects and studio already use `gh-pages`; after the dashboard push, change home from `main` to `gh-pages` (root folder).
- Set custom domains only for projects (`projects.permafy.org`) and studio (`studio.permafy.org`). Leave home on `permafy.github.io` without a CNAME.
- DNS: add CNAME records for `projects` and `studio` pointing to `permafy.github.io`. The dashboard uses GitHub's default `permafy.github.io` hostname and needs no CNAME file.
- The repository was renamed from `permafy.github.io` to `projects`; its default Pages URL therefore changed to `https://permafy.github.io/projects/`. The org homepage requires a separate repository named exactly `Permafy.github.io`.
- To publish one repository's build into another repository, configure a repository-scoped fine-grained token as a GitHub Actions secret with Contents: Read and write, then deploy the relevant build output with `actions/checkout`/`actions/upload-pages-artifact` in that destination repository. Do not put the token in source files.