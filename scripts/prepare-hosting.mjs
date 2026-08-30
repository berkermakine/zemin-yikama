import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";

const source = resolve("dist", "standalone");
const target = resolve(".next", "standalone");
const entryFile = resolve(source, "server.js");
const projectModules = resolve("node_modules");

function packagePath(root, packageName) {
  return resolve(root, ...packageName.split("/"));
}

function copyRuntimePackage(packageName, copied = new Set()) {
  if (copied.has(packageName)) return;

  const packageSource = packagePath(projectModules, packageName);
  const packageTarget = packagePath(resolve(source, "node_modules"), packageName);
  const manifestPath = resolve(packageSource, "package.json");

  if (!existsSync(manifestPath)) {
    throw new Error(`Çalışma zamanı paketi bulunamadı: ${packageName}`);
  }

  copied.add(packageName);
  mkdirSync(dirname(packageTarget), { recursive: true });
  cpSync(packageSource, packageTarget, { recursive: true, force: true });

  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  for (const dependencyName of Object.keys(manifest.dependencies ?? {})) {
    copyRuntimePackage(dependencyName, copied);
  }
}

if (!existsSync(entryFile)) {
  throw new Error(
    "Standalone sunucu çıktısı bulunamadı: dist/standalone/server.js",
  );
}

for (const packageName of [
  "react",
  "react-dom",
  "react-server-dom-webpack",
]) {
  copyRuntimePackage(packageName);
}

rmSync(resolve(".next"), { recursive: true, force: true });
mkdirSync(resolve(".next"), { recursive: true });
cpSync(source, target, { recursive: true });

console.log("Hostinger uyumlu çıktı hazır: .next/standalone/server.js");
