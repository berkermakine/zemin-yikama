import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("dist", "standalone");
const target = resolve(".next", "standalone");
const entryFile = resolve(source, "server.js");

if (!existsSync(entryFile)) {
  throw new Error(
    "Standalone sunucu çıktısı bulunamadı: dist/standalone/server.js",
  );
}

rmSync(resolve(".next"), { recursive: true, force: true });
mkdirSync(resolve(".next"), { recursive: true });
cpSync(source, target, { recursive: true });

console.log("Hostinger uyumlu çıktı hazır: .next/standalone/server.js");
