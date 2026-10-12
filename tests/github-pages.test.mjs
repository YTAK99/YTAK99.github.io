import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../github-pages/", import.meta.url);

test("GitHub Pages export is complete and portable", async () => {
  const [html, fallback, files] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("404.html", outputRoot), "utf8"),
    readdir(outputRoot),
  ]);

  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /한영탁 \| Han YoungTak/);
  assert.match(html, /Journey Connect/);
  assert.match(html, /ClassQ/);
  assert.match(html, /GitHub Pages static export/);
  assert.match(html, /https:\/\/ytak99\.github\.io\/portfolio\/og\.png/);
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /\b(?:href|src)="\/(?!\/)/i);
  assert.equal(fallback, html);

  assert.ok(files.includes(".nojekyll"));
  await access(new URL("projects/journey-connect-mechanism.png", outputRoot));
  await access(new URL("projects/journey-connect-feed.png", outputRoot));
  await access(new URL("projects/classq-logo.png", outputRoot));
  await access(new URL("projects/classq-state-sequence.png", outputRoot));
  await access(new URL("projects/classq-screen.png", outputRoot));
  await access(new URL("projects/iot-home-report.png", outputRoot));
  await access(new URL("og.png", outputRoot));
  await access(new URL("favicon.svg", outputRoot));

  const assetFiles = await readdir(new URL("assets/", outputRoot));
  assert.ok(assetFiles.some((name) => name.endsWith(".css")));
});

test("deployment workflow publishes the static export directory", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/deploy-pages.yml", import.meta.url),
    "utf8",
  );

  assert.match(workflow, /actions\/configure-pages@v5/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path:\s*github-pages/);
  assert.match(workflow, /GITHUB_PAGES_URL/);
});
