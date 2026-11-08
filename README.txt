NOCTURNE FREE 0.8 — GitHub Pages + optional Cloudflare Worker

1. Upload index.html, sw.js, manifest.webmanifest and icon-*.png to the ROOT of your existing GitHub Pages repository. Do NOT upload worker.js to GitHub Pages (it is backend source only).
2. Create a free Cloudflare account and a Worker. Paste the contents of worker.js into its editor and deploy.
3. Under Worker Settings > Variables and Secrets, set GEMINI_API_KEY as a SECRET using a key from Google AI Studio, and ALLOWED_ORIGIN as plain text: https://nerk369.github.io
4. In NOCTURNE Settings, enter your worker URL (https://....workers.dev), save and test.
5. Free tiers have limits, can change, and may require identity/payment verification depending on provider/region. Do not enable paid billing. Chat contents go to Cloudflare and Google when AI is enabled. Provider content policies apply.
6. The Cloudflare Worker is accessible from the public Internet. Origin checks limit ordinary browser access, but are NOT authentication and do not prevent abuse by scripts. For private production use add proper authentication, quotas, and rate limiting. Do not publish the API key.
7. Existing characters are retained in localStorage. Conversations are now stored locally; export them from Settings.
8. Images are NOT generated. No guaranteed unrestricted or NSFW capabilities.
