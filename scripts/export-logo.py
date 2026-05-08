#!/usr/bin/env python3
"""Genera logos/fb-garage-logo.png desde logos/FB_GARAGE.ai.

El arte en el PDF es claro sobre fondo oscuro: fondo -> transparente, trazos -> blanco.
Requisitos: PyMuPDF + Pillow (p. ej. .venv-pdf)."""

from __future__ import annotations

import sys
from io import BytesIO
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "logos" / "FB_GARAGE.ai"
OUT = ROOT / "logos" / "fb-garage-logo.png"
SCALE = 3.0
DARK_MAX = 55
LIGHT_MIN = 195


def main() -> int:
    if not SRC.is_file():
        print(f"No existe {SRC}", file=sys.stderr)
        return 1

    doc = fitz.open(SRC)
    page = doc[0]
    mat = fitz.Matrix(SCALE, SCALE)
    pix = page.get_pixmap(matrix=mat, alpha=True)
    png_bytes = pix.tobytes("png")
    doc.close()

    im = Image.open(BytesIO(png_bytes)).convert("RGBA")
    px = im.load()
    w, h = im.size

    for y in range(h):
        for x in range(w):
            r, g, b, a_pdf = px[x, y]
            if a_pdf < 8:
                px[x, y] = (255, 255, 255, 0)
                continue
            lum = (r + g + b) / 3.0
            if lum <= DARK_MAX:
                px[x, y] = (255, 255, 255, 0)
                continue
            if lum >= LIGHT_MIN:
                a = int(round(255 * (a_pdf / 255.0)))
                px[x, y] = (255, 255, 255, min(255, a))
                continue
            t = (lum - DARK_MAX) / (LIGHT_MIN - DARK_MAX)
            t = max(0.0, min(1.0, t))
            t = t * t * (3 - 2 * t)
            a = int(round(255 * t * (a_pdf / 255.0)))
            if a < 14:
                px[x, y] = (255, 255, 255, 0)
            else:
                px[x, y] = (255, 255, 255, a)

    px = im.load()
    for y in range(h):
        for x in range(w):
            if px[x, y][3] < 12:
                px[x, y] = (255, 255, 255, 0)

    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    im.save(OUT, optimize=True, compress_level=9)
    print(f"OK {OUT} ({im.size[0]}x{im.size[1]})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
