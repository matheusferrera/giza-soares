import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#causas", label: "Causas" },
  { href: "#apoie", label: "Apoie" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "bg-creme-50/95 shadow-md backdrop-blur" : "bg-creme-50/80 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#inicio" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/img/logo-colorida.png" alt="Giza Soares" className="h-14 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-sm font-medium text-roxo-800 transition-colors hover:text-roxo-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#apoie"
            className="hidden items-center gap-2 rounded-full bg-roxo-700 px-6 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-roxo-600 sm:inline-flex"
          >
            <Heart size={16} aria-hidden="true" />
            Apoiar
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-roxo-800 transition-colors hover:bg-roxo-100 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-roxo-100 bg-creme-50 px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 font-heading font-medium text-roxo-800 hover:bg-roxo-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#apoie"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-roxo-700 px-6 py-3 font-heading text-sm font-semibold text-white"
          >
            <Heart size={16} aria-hidden="true" />
            Apoiar
          </a>
        </div>
      )}
    </header>
  );
}
