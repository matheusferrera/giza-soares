import { Accessibility, ClipboardCheck, Ear, MessagesSquare, Users, type LucideIcon } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

type Principio = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  text: string;
};

const principios: Principio[] = [
  {
    icon: Accessibility,
    title: "Inclusão",
    subtitle: "Inclusão de verdade",
    text: "Incluir é muito mais do que garantir direitos no papel. É construir oportunidades para que todas as pessoas possam viver com dignidade, autonomia e respeito durante toda a vida. É enxergar potencial onde muitos ainda veem limitações.",
  },
  {
    icon: Users,
    title: "Pessoas",
    subtitle: "Pessoas em primeiro lugar",
    text: "A política faz sentido quando coloca as pessoas no centro das decisões, respeitando suas histórias, necessidades e direitos. Cada vida importa e merece ser vista, acolhida e valorizada.",
  },
  {
    icon: Ear,
    title: "Ouvir",
    subtitle: "Ouvir antes de decidir",
    text: "Toda mudança começa pela escuta. Antes de propor soluções, é preciso compreender as pessoas. Ouvir é um gesto de respeito e o primeiro passo para construir políticas públicas que façam sentido na vida de quem mais precisa.",
  },
  {
    icon: MessagesSquare,
    title: "Diálogo",
    subtitle: "Construir com diálogo",
    text: "Nenhuma transformação acontece sozinha. O diálogo aproxima, fortalece ideias e constrói soluções melhores para todos. Acredito que juntos podemos criar caminhos mais justos, humanos e eficazes para o nosso DF.",
  },
  {
    icon: ClipboardCheck,
    title: "Fiscalizar",
    subtitle: "Fiscalizar para fazer acontecer",
    text: "Leis e recursos públicos precisam gerar resultados reais. Fiscalizar é garantir que os direitos saiam do papel e que cada investimento se transforme em serviços, cuidado e qualidade de vida para a população.",
  },
];

export default function Principios() {
  return (
    <section id="principios" className="bg-creme-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Meus princípios"
          title="O que me move"
          subtitle="Cinco compromissos que guiam cada decisão do meu mandato."
        />
        <div className="flex flex-wrap justify-center gap-6">
          {principios.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-roxo-50 text-roxo-700 ring-1 ring-roxo-200">
                <p.icon size={30} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold text-roxo-800">{p.title}</h3>
              <div aria-hidden="true" className="mt-3 h-1 w-10 rounded-full bg-ouro-400" />
              <p className="mt-4 font-heading text-lg font-semibold text-roxo-700">{p.subtitle}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
