export function initNavIsland(): () => void {
  const notch = document.querySelector<HTMLElement>(".island-notch");
  const burger = document.querySelector<HTMLButtonElement>(".island-burger");
  const menu = document.querySelector<HTMLElement>(".island-mobile-menu");
  const links = document.querySelectorAll<HTMLAnchorElement>(".island-mobile-link");

  if (!notch || !burger) {
    return () => {};
  }

  const toggle = (force?: boolean) => {
    const shouldOpen =
      typeof force === "boolean" ? force : !notch.classList.contains("is-open");
    notch.classList.toggle("is-open", shouldOpen);
    burger.setAttribute("aria-expanded", String(shouldOpen));
    if (menu) {
      menu.setAttribute("aria-hidden", String(!shouldOpen));
    }
  };

  const onBurgerClick = (e: MouseEvent) => {
    e.stopPropagation();
    toggle();
  };

  const onDocClick = (e: MouseEvent) => {
    if (notch.classList.contains("is-open")) {
      const target = e.target as Node | null;
      if (target && !notch.contains(target)) {
        toggle(false);
      }
    }
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && notch.classList.contains("is-open")) {
      toggle(false);
      burger.focus();
    }
  };

  const onLinkClick = () => {
    toggle(false);
  };

  burger.addEventListener("click", onBurgerClick);
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKeydown);
  links.forEach((link) => link.addEventListener("click", onLinkClick));

  return () => {
    burger.removeEventListener("click", onBurgerClick);
    document.removeEventListener("click", onDocClick);
    document.removeEventListener("keydown", onKeydown);
    links.forEach((link) => link.removeEventListener("click", onLinkClick));
  };
}

if (typeof window !== "undefined") {
  initNavIsland();
  document.addEventListener("astro:after-swap", initNavIsland);
}
