# Tiny Melo

A personal project showcase for Tiny Melo, built with Astro, GSAP, and Bun. The site uses Tiny Melo’s existing paw mark, cream-and-gold palette, Melo illustration, and project artwork.

## Local development

```sh
bun install
bun run dev
```

Open http://127.0.0.1:4321 on the Mac, or http://<your-Mac-LAN-IP>:4321 from a device on the same network. The dev server listens on all interfaces. Astro updates the browser when source files change.

```sh
bun run check
```

Project copy and details live in `src/pages/index.astro`; styles live in `src/styles/global.css`. Assets copied from the local branding libraries live in `public/assets`.

## Projects

- **Melo TV**: Open source streaming server and app suite for movies and TV shows across macOS, iOS, Web, and Docker.
- **ZipMelo**: Open source ZIP & CBZ engine built for Swift 6.

The site is local only. No hosting, analytics, account system, or contact address has been configured.

## Color themes

The site follows the system color scheme on first visit. The navigation toggle switches between light and dark and saves the choice in local storage.

## Portfolio

`/about` introduces Christopher and lists the current app and library portfolio. The navigation and theme behavior are shared through `SiteHeader.astro`, `ThemeInit.astro`, and `src/scripts/theme.ts`. The personal page is intentionally limited to the confirmed project information; add a longer personal biography when available.
