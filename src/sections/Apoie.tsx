import { Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import { DONATION_URL, whatsappLink } from "../config";

export default function Apoie() {
  const apoiarUrl =
    DONATION_URL || whatsappLink("Olá! Quero apoiar a campanha da Giza Soares. 💜");

  return (
    <section id="apoie" className="bg-creme-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-roxo-50 via-white to-white shadow-lg lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-roxo-800">
                Apoie esta causa
              </h2>
              <div className="mt-3 flex items-center gap-2 text-ouro-500">
                <Heart size={18} aria-hidden="true" />
                <div aria-hidden="true" className="h-1 w-12 rounded-full bg-ouro-400" />
              </div>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                Sua contribuição ajuda a manter este projeto vivo, ampliar ações e transformar
                vidas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={apoiarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ouro-400 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-roxo-900 transition-colors hover:bg-ouro-300"
                >
                  <Heart size={16} aria-hidden="true" />
                  Quero apoiar
                </a>
                <a
                  href="#cadastro"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-roxo-700 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-roxo-700 transition-colors hover:bg-roxo-700 hover:text-white"
                >
                  Cadastre-se
                </a>
              </div>
            </div>
            <img
              src="/img/apoie.jpg"
              alt="Giza Soares abraçando, sorridente, um mascote inflável em formato de coração vermelho"
              loading="lazy"
              className="h-full max-h-96 w-full object-cover object-center lg:max-h-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
