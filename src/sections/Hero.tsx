import { Heart } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-creme-50 bg-cover bg-bottom"
      style={{ backgroundImage: "url(/img/fundo-hero.jpg)" }}
    >
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
        <Reveal className="pb-12 lg:pb-20">
          <h1 className="font-script text-5xl font-semibold leading-tight text-roxo-700 sm:text-6xl">
            Inclusão começa quando alguém decide{" "}
            <span className="whitespace-nowrap text-ouro-500">
              ouvir.{" "}
              <Heart aria-hidden="true" className="inline size-9 -translate-y-1 sm:size-10" strokeWidth={2.5} />
            </span>
          </h1>
          <div aria-hidden="true" className="mt-6 h-1 w-16 rounded-full bg-ouro-400" />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink">
            Acredito que políticas públicas só fazem sentido quando colocam as pessoas no centro.
            Vamos juntos construir um DF mais humano, inclusivo e justo para todos!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full bg-roxo-700 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-roxo-600"
            >
              <Heart size={16} aria-hidden="true" />
              Conheça minha história
            </a>
            <a
              href="#apoie"
              className="inline-flex items-center gap-2 rounded-full bg-ouro-400 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-roxo-900 transition-colors hover:bg-ouro-300"
            >
              Quero apoiar
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative flex justify-center lg:justify-end">
          <img
            src="/img/giza-hero.png"
            alt="Giza Soares sorrindo, usando um cordão com estampa de quebra-cabeça, símbolo da causa do autismo"
            className="w-72 max-w-full drop-shadow-xl sm:w-96 lg:w-[26rem]"
            width={1200}
            height={1600}
          />
        </Reveal>
      </div>
    </section>
  );
}
