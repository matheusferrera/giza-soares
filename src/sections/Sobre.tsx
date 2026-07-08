import { Quote } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <img
            src="/img/quem-sou-eu.jpg"
            alt="Giza Soares em uma ação comunitária ao ar livre, sorrindo e mostrando a palma da mão pintada de amarelo"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="font-script text-3xl text-ouro-500">Quem sou eu</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-roxo-800 sm:text-4xl">
            Uma voz real pela inclusão
          </h2>
          <div aria-hidden="true" className="mt-4 h-1 w-16 rounded-full bg-ouro-400" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Sou <strong className="text-roxo-800">Giza Soares</strong> — esposa, mãe, avó,
              jornalista, mulher negra e pessoa com deficiência. Diagnosticada com autismo aos 50
              anos, conheço na própria pele os desafios enfrentados por pessoas neurodivergentes e
              suas famílias.
            </p>
            <p>
              Hoje, como pré-candidata a deputada distrital, transformo essa vivência em uma missão
              de acolhimento, representatividade e defesa de quem muitas vezes enfrenta essa jornada
              sem apoio ou compreensão.
            </p>
          </div>

          <blockquote className="mt-8 rounded-2xl border-l-4 border-ouro-400 bg-creme-100 p-6">
            <Quote aria-hidden="true" className="mb-2 text-ouro-500" size={22} />
            <p className="text-lg font-medium leading-relaxed text-roxo-800">
              "Quando recebi o diagnóstico, muitas respostas finalmente chegaram. Foi como olhar
              para toda a minha trajetória e, pela primeira vez, compreender quem eu realmente era."
            </p>
          </blockquote>

          <p className="mt-8 rounded-2xl bg-roxo-50 p-5 text-base text-ink-soft">
            Segundo o IBGE, mais de <strong className="text-roxo-800">34 mil pessoas</strong> possuem
            diagnóstico de Transtorno do Espectro Autista no DF — e o número revela apenas parte da
            realidade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
