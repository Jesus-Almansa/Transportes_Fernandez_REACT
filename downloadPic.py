import os
import requests
from urllib.parse import urlparse
from pathlib import Path

NUM_IMAGES = 50
WIDTH = 1200
HEIGHT = 500
OUTPUT_DIR = Path("/mnt/d/Transportes_Fernandez_REACT/transportes-fernandez/src/assets_prod/Carrusel")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

for i in range(NUM_IMAGES):
    url = f"https://picsum.photos/{WIDTH}/{HEIGHT}"
    response = requests.get(url)

    # Detectar extensión desde URL final (ej: .jpg o .webp)
    ext = os.path.splitext(urlparse(response.url).path)[1] or ".jpg"
    filename = OUTPUT_DIR / f"image{i}{ext}"

    with open(filename, "wb") as f:
        f.write(response.content)

    print(f"✅ Saved {filename}")
