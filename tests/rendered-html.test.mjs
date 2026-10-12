import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the completed portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /한영탁 \| Han YoungTak/);
  assert.match(html, /Journey Connect/);
  assert.match(html, /ClassQ/);
  assert.match(html, /IoT Home System/);
  assert.match(html, /journey-connect-mechanism\.png/);
  assert.match(html, /journey-connect-feed\.png/);
  assert.match(html, /https:\/\/classq\.pythonanywhere\.com\//);
  assert.match(html, /https:\/\/journey-connect2\.kro\.kr\//);
  assert.match(html, /demo@jc\.com/);
  assert.match(html, /demo2026!/);
  assert.match(html, /Oracle Cloud에 서비스를 이중 배포/);
  assert.match(html, /ClassQ 시연 계정/);
  assert.match(html, /classq-state-sequence\.png/);
  assert.match(html, /classq-screen\.png/);
  assert.match(html, /iot-home-report\.png/);
  assert.match(html, /MIT App Inventor/);
  assert.match(html, /PHYSICAL PROTOTYPE/);
  assert.match(html, /FULL-STACK DEVELOPER/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("contains the project assets and no starter preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await access(new URL("../public/projects/journey-connect-mechanism.png", import.meta.url));
  await access(new URL("../public/projects/journey-connect-feed.png", import.meta.url));
  await access(new URL("../public/projects/classq-logo.png", import.meta.url));
  await access(new URL("../public/projects/classq-state-sequence.png", import.meta.url));
  await access(new URL("../public/projects/classq-screen.png", import.meta.url));
  await access(new URL("../public/projects/iot-home-report.png", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));

  assert.match(page, /Google Maps Platform/);
  assert.match(page, /github\.com\/YTAK99\/classQ/);
  assert.doesNotMatch(page, /src="\/profile\.jpg"/);
  assert.match(layout, /summary_large_image/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
