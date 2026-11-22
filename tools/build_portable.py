from pathlib import Path
from base64 import b64encode
import json

root = Path(__file__).resolve().parents[1]
dist = root / "dist"
page = (dist / "index.html").read_text(encoding="utf-8")
css = (dist / "style.css").read_text(encoding="utf-8")
embedded = {}

def data_url(path, mime):
    return f"data:{mime};base64," + b64encode(path.read_bytes()).decode("ascii")

for path in (dist / "assets").glob("*.woff2"):
    css = css.replace("assets/" + path.name, data_url(path, "font/woff2"))
for pattern, mime in [("assets/*.jpg", "image/jpeg"), ("cenas/*.blend", "application/octet-stream")]:
    for path in dist.glob(pattern):
        key = path.relative_to(dist).as_posix()
        embedded[key] = data_url(path, mime)
        page = page.replace(f'src="{key}"', f'data-embedded="{key}"')
page = page.replace('<link rel="stylesheet" href="style.css">', "<style>" + css + "</style>")
for name in ("app", "curso"):
    page = page.replace(f'<script src="{name}.js" defer></script>', "")
scripts = (dist / "curso.js").read_text(encoding="utf-8") + "\n" + (dist / "app.js").read_text(encoding="utf-8").replace("return caminho;", "return embedded[caminho] || caminho;")
boot = "document.querySelectorAll('[data-embedded]').forEach(img => img.src = embedded[img.dataset.embedded]);"
page = page.replace("</body>", "<script>const embedded=" + json.dumps(embedded) + ";\n" + boot + "\n" + scripts + "</script></body>")
notices = "\n".join(path.read_text(encoding="utf-8") for path in (dist / "assets").glob("*-OFL.txt"))
(root / "BlenderBoss.html").write_text(page.replace("</html>", "<!--\n" + notices.replace("--", "-") + "\n-->\n</html>"), encoding="utf-8")
