/**
 * Cloudflare Worker for Oase x Vitamart (vitamartoase.biz.id)
 * Melayani:
 * 1. /sitemap.xml (Peta Situs untuk Google Search Console)
 * 2. /robots.txt (Instruksi Bot Mesin Pencari)
 * 3. /favicon.ico, /logo.png, /foto-kelapa.jpg (Aset gambar & logo dari GitHub)
 * 4. / dan halaman lainnya (Halaman Utama HTML)
 */

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/akmalnurfauzii-dev/website-vitamartoase/main";

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://vitamartoase.biz.id/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://vitamartoase.biz.id/logo.png</image:loc>
      <image:title>Logo Oase x Vitamart</image:title>
    </image:image>
    <image:image>
      <image:loc>https://vitamartoase.biz.id/foto-kelapa.jpg</image:loc>
      <image:title>Es Kelapa Muda Segar Oase x Vitamart</image:title>
    </image:image>
  </url>
</urlset>`;

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://vitamartoase.biz.id/sitemap.xml`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. Sajikan Sitemap XML untuk Google Search Console
    if (path === "/sitemap.xml") {
      return new Response(SITEMAP_XML, {
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=86400"
        }
      });
    }

    // 2. Sajikan Robots.txt
    if (path === "/robots.txt") {
      return new Response(ROBOTS_TXT, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=86400"
        }
      });
    }

    // 3. Proxy Otomatis untuk Aset Gambar & Favicon dari GitHub
    const staticAssets = [
      "/favicon.ico",
      "/logo.png",
      "/apple-touch-icon.png",
      "/foto-kelapa.jpg"
    ];

    if (staticAssets.includes(path)) {
      const assetResp = await fetch(`${GITHUB_RAW_BASE}${path}`, {
        cf: { cacheTtl: 604800, cacheEverything: true }
      });
      if (assetResp.ok) {
        return new Response(assetResp.body, assetResp);
      }
    }

    // 4. Default: Sajikan Halaman HTML Website (variabel html Anda)
    // Ganti atau biarkan 'html' merujuk ke template literal HTML Anda yang sudah ada
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" }
    });
  }
};
