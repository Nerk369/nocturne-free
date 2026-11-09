// In den vorhandenen Worker integrieren, NICHT den bestehenden Worker ersetzen.
// Im bestehenden fetch-Handler, nach CORS-/Auth-Prüfung und vor dem Chat-Handler:
// if (url.pathname === '/image' && request.method === 'POST') {
//   if (!env.AI) return Response.json({error:'Workers AI Binding AI fehlt'}, {status:503, headers:corsHeaders});
//   const {prompt} = await request.json();
//   if (typeof prompt !== 'string' || !prompt.trim() || prompt.length > 2048)
//      return Response.json({error:'Ungültige Bildbeschreibung'}, {status:400, headers:corsHeaders});
//   const result = await env.AI.run('@cf/black-forest-labs/flux-1-schnell', {prompt, steps:4});
//   return Response.json({dataURI:'data:image/jpeg;base64,'+result.image}, {headers:corsHeaders});
// }
// Hinweis: corsHeaders ist ein Platzhalter für die CORS-Header des BESTEHENDEN Workers.
// Die bestehende NOCTURNE_ACCESS_TOKEN-Prüfung MUSS auch /image schützen.
// Zusätzlich Cloudflare Workers AI Binding mit Variablennamen AI anlegen.
