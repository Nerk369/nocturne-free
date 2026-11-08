NOCTURNE FREE 0.9

GitHub Pages: replace index.html, sw.js, manifest.webmanifest, icon-192.png and icon-512.png at repository root. NEVER upload NOCTURNE_WORKER_09.js to GitHub.

Cloudflare: Workers > nocturne-ai > Edit code: replace existing Worker code with NOCTURNE_WORKER_09.js and Deploy. Existing GEMINI_API_KEY and NOCTURNE_ACCESS_TOKEN secrets remain.

NOCTURNE: Settings > KI-Verbindung: keep Worker URL. Settings > Privater KI-Zugang: enter the exact NOCTURNE_ACCESS_TOKEN and save. Do not enter Gemini key.

This is a prototype. LocalStorage is not encrypted. The bearer token is accessible to scripts on the app origin. Cloudflare origin checks are not authentication; the bearer token is. Free-tier quotas and Google content policies apply. Do not upload secrets or chats to GitHub.
