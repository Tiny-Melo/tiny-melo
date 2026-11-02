# Website icon bundle

Copy this entire folder to a website asset directory and update these paths to match. The files are supplied for a website favicon/touch icon, not a platform-layered native app icon.

```html
<link rel="icon" href="/brand/favicons/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/brand/favicons/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/brand/favicons/favicon-brand-180.png">
<link rel="manifest" href="/brand/favicons/site.webmanifest">
<meta name="theme-color" content="#232821">
```

The adaptive SVG changes between cream and charcoal with the browser color preference. Explicit light/dark SVGs are also supplied. The small PNGs use a tighter optical fit than profile avatars. The webmanifest's icon paths are relative to itself.
