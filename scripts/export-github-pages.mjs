import { cp, copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL("../github-pages/", import.meta.url);
const distClient = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const configuredSiteUrl =
  process.env.GITHUB_PAGES_URL ?? "https://ytak99.github.io/portfolio/";
const siteUrl = configuredSiteUrl.endsWith("/")
  ? configuredSiteUrl
  : `${configuredSiteUrl}/`;

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request(new URL("/", siteUrl), {
    headers: { accept: "text/html" },
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

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

let html = await response.text();
const absoluteSocialImage = new URL("og.png", siteUrl).toString();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replace(/<link\b(?=[^>]*\bas=["']script["'])[^>]*>/gi, "")
  .replace(/\b(href|src)="\/(?!\/)/g, '$1="./')
  .replace(/https?:\/\/[^"'<>\s]+\/og\.png/g, absoluteSocialImage)
  .replace(
    "</head>",
    `  <link rel="canonical" href="${siteUrl}">\n  <meta name="generator" content="GitHub Pages static export">\n</head>`,
  );

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

await Promise.all([
  cp(new URL("assets/", distClient), new URL("assets/", outputRoot), {
    recursive: true,
  }),
  copyFile(new URL("profile.jpg", distClient), new URL("profile.jpg", outputRoot)),
  copyFile(new URL("og.png", distClient), new URL("og.png", outputRoot)),
  copyFile(new URL("favicon.svg", distClient), new URL("favicon.svg", outputRoot)),
  writeFile(new URL(".nojekyll", outputRoot), "", "utf8"),
]);

await Promise.all([
  writeFile(new URL("index.html", outputRoot), html, "utf8"),
  writeFile(new URL("404.html", outputRoot), html, "utf8"),
]);

const generated = await readFile(new URL("index.html", outputRoot), "utf8");
if (!generated.includes("한영탁 | Han YoungTak")) {
  throw new Error("Static export verification failed: portfolio title missing");
}

console.log(`GitHub Pages files created in ${outputRoot.pathname}`);
console.log(`Canonical URL: ${siteUrl}`);
