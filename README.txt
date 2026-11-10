NOCTURNE 2.0 PREVIEW – local media library and relationship bar

This is a development preview, not the finished 2.0 release.

NEW: IndexedDB media import (multiple images/videos), per-character Master/Selfies/Rewards, 20 reward levels, chat selfie delivery, relationship progress bar, and simple XP heuristic.

IMPORTANT: True AI-based relationship scoring is NOT yet implemented; XP currently uses message activity and a transparent keyword heuristic. Gemini chat is still connected through the existing Worker. English is sent as the character language for chat requests; some legacy editor labels and initial messages remain German.

The app cannot directly monitor folders in iOS Files; import media through the Media Library screen. Original files stay in Files.

Back up the old app data before upgrading. Old localStorage data is retained by this preview, while new media is stored in IndexedDB. The legacy JSON backup does NOT include new IndexedDB media. Keep original images/videos separately.

Use GitHub Pages to host these files. No Worker changes required for local media.
