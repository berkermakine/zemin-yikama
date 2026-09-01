const baseUrl = new URL(process.argv[2] ?? "http://127.0.0.1:3000");
const googlebotSmartphone =
  "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) " +
  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile " +
  "Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const userAgents = {
  normal: "Mozilla/5.0 (compatible; ZeminYikamaRouteCheck/1.0)",
  googlebot: googlebotSmartphone,
};
const requiredPaths = [
  "/yedek-parca",
  "/odeme",
  "/sitemap.xml",
  "/merchant-products.xml",
];

async function request(url, userAgent, method = "GET") {
  const response = await fetch(url, {
    method,
    redirect: "follow",
    headers: {
      "user-agent": userAgent,
      "cache-control": "no-cache",
    },
  });
  return { status: response.status, finalUrl: response.url, response };
}

const results = [];
for (const [agentName, userAgent] of Object.entries(userAgents)) {
  for (const path of requiredPaths) {
    const url = new URL(path, baseUrl);
    const result = await request(url, userAgent);
    results.push({ agent: agentName, method: "GET", path, ...result });
  }
}

const sitemapResult = await request(
  new URL("/sitemap.xml", baseUrl),
  googlebotSmartphone,
);
const sitemapXml = await sitemapResult.response.text();
const productUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1].replaceAll("&amp;", "&"))
  .filter((url) => new URL(url).pathname.startsWith("/yedek-parca/urun/"));

for (const productUrl of productUrls) {
  for (const method of ["GET", "HEAD"]) {
    const result = await request(productUrl, googlebotSmartphone, method);
    results.push({
      agent: "googlebot",
      method,
      path: new URL(productUrl).pathname,
      ...result,
    });
  }
}

for (const result of results) {
  console.log(
    `${result.agent.padEnd(9)} ${result.method.padEnd(4)} ${result.status} ${result.path}`,
  );
}

const failures = results.filter((result) => result.status !== 200);
if (failures.length) {
  console.error(`Route doğrulaması başarısız: ${failures.length} istek 200 dönmedi.`);
  process.exitCode = 1;
} else {
  console.log(
    `Route doğrulaması başarılı: ${results.length} istek, ${productUrls.length} yedek parça ürünü.`,
  );
}
