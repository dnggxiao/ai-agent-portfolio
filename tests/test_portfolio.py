"""Dependency-free checks for public portfolio content and local assets."""
import json
import re
import unittest
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
TEXT = (ROOT / "docs" / "content.js").read_text(encoding="utf-8")
DATA = json.loads(TEXT.split("window.PORTFOLIO = ", 1)[1].strip().removesuffix(";"))

class PortfolioTests(unittest.TestCase):
    def test_inventory(self):
        self.assertEqual(len(DATA["projects"]), 6)
        self.assertEqual(len(DATA["skills"]), 5)

    def test_unique_identifiers(self):
        for group in DATA.values():
            ids = [entry["id"] for entry in group]
            self.assertEqual(len(ids), len(set(ids)))

    def test_project_language_parity(self):
        fields = {"title", "name", "type", "status", "role", "summary",
                  "problem", "solution", "decision", "ownership", "result"}
        for project in DATA["projects"]:
            for language in ("zh", "en"):
                self.assertEqual(set(project[language]), fields)
                self.assertTrue(all(project[language].values()))

    def test_skill_language_parity(self):
        fields = {"name", "subtitle", "access", "input", "process",
                  "output", "guard", "example"}
        for skill in DATA["skills"]:
            for language in ("zh", "en"):
                self.assertEqual(set(skill[language]), fields)
                self.assertTrue(all(skill[language].values()))

    def test_skill_project_references(self):
        ids = {project["id"] for project in DATA["projects"]}
        for skill in DATA["skills"]:
            self.assertIn(skill["project"], ids)

    def test_public_source_scope(self):
        for project in DATA["projects"]:
            url = urlparse(project["url"])
            self.assertEqual(url.scheme, "https")
            self.assertEqual(url.netloc, "github.com")
            self.assertTrue(url.path.startswith("/dnggxiao/"))

    def test_assets_and_language_entries(self):
        for name, lang in [("index.html", "zh-CN"), ("index.en.html", "en")]:
            html = (ROOT / "docs" / name).read_text(encoding="utf-8")
            self.assertIn(f'<html lang="{lang}">', html)
            for asset in re.findall(r'(?:src|href)="([^"]+)"', html):
                if asset.startswith(("https:", "http:", "data:", "#")):
                    continue
                self.assertTrue((ROOT / "docs" / asset).is_file(), asset)
        self.assertTrue((ROOT / "docs" / ".nojekyll").is_file())

if __name__ == "__main__":
    unittest.main()
