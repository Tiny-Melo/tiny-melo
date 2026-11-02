const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle')!;
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let themePreference: string | null = null;
try { themePreference = localStorage.getItem('tiny-melo-theme'); } catch { }
function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  document.querySelector('meta[name="theme-color"]')!.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
}
applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  themePreference = theme;
  try { localStorage.setItem('tiny-melo-theme', theme); } catch { }
  applyTheme(theme);
});
systemTheme.addEventListener('change', event => {
  if (themePreference !== 'dark' && themePreference !== 'light') applyTheme(event.matches ? 'dark' : 'light');
});
