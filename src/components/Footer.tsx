import { Heart } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { INSTAGRAM_URL, whatsappLink } from "../config";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <img src="/img/logo-colorida.png" alt="Giza Soares" className="h-16 w-auto" />
          <div className="hidden h-12 w-px bg-roxo-200 md:block" aria-hidden="true" />
          <div className="text-center md:text-left">
            <p className="font-heading font-semibold text-roxo-800">Inclusão não é favor.</p>
            <p className="font-heading font-semibold text-roxo-800">É direito.</p>
            <div aria-hidden="true" className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-ouro-400 md:mx-0" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <p className="font-script text-2xl text-roxo-700">
            Feito com propósito para transformar vidas.{" "}
            <Heart aria-hidden="true" className="inline size-5 -translate-y-0.5 text-ouro-500" />
          </p>
          <div className="flex gap-3">
            <a
              href={whatsappLink("Olá! Vim pelo site da Giza Soares.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da campanha"
              className="flex size-11 items-center justify-center rounded-full bg-roxo-50 text-roxo-700 transition-colors hover:bg-roxo-700 hover:text-white"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Giza Soares"
              className="flex size-11 items-center justify-center rounded-full bg-roxo-50 text-roxo-700 transition-colors hover:bg-roxo-700 hover:text-white"
            >
              <FaInstagram size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-roxo-800 py-4">
        <p className="px-4 text-center text-sm text-roxo-100">
          © {new Date().getFullYear()} Página feita com carinho por Oraculo Tecnologia.
        </p>
      </div>
    </footer>
  );
}
