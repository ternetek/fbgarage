#!/usr/bin/env bash
set -euo pipefail

# The FB Garage site is fully static and needs no build step; it is served
# directly over HTTP (see the "static-server" terminal in environment.json).
#
# This script only prepares the OPTIONAL logo-generation tooling used by
# scripts/export-logo.py (PyMuPDF + Pillow), so the documented .venv-pdf
# workflow works out of the box. It is safe to run repeatedly.

# ensurepip / python3-venv is required to create the git-ignored .venv-pdf.
if ! python3 -c "import ensurepip" >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -qq python3-venv
fi

if [ ! -x ".venv-pdf/bin/python" ]; then
  python3 -m venv .venv-pdf
fi

.venv-pdf/bin/pip install --quiet --upgrade pip
.venv-pdf/bin/pip install --quiet pymupdf pillow
