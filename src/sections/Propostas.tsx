import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

type Proposta = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const propostas: Proposta[] = [
  {
    title: "Inclusão durante toda a vida",
    text: "O autista cresce. As famílias continuam cuidando. As políticas públicas precisam acompanhar essa realidade.",
    img: "/img/proposta-1-ill.jpg",
    alt: "Ilustração de pessoas em diferentes fases da vida, da infância à vida adulta, incluindo um jovem em cadeira de rodas",
  },
  {
    title: "Cuidar de quem cuida",
    text: "Quem dedica a vida ao cuidado também precisa ser cuidado.",
    img: "/img/proposta-2-ill.jpg",
    alt: "Ilustração de uma cuidadora acolhendo outra mulher, que descansa com uma xícara nas mãos",
  },
  {
    title: "Saúde mais humana e acessível",
    text: "A saúde precisa enxergar a pessoa antes da doença.",
    img: "/img/proposta-3-ill.jpg",
    alt: "Ilustração de uma médica atendendo um menino com acolhimento",
  },
  {
    title: "Educação inclusiva de verdade",
    text: "Toda criança e todo estudante merecem aprender com dignidade.",
    img: "/img/proposta-4-ill.jpg",
    alt: "Ilustração de uma sala de aula inclusiva, com estudantes participando e um aluno em cadeira de rodas",
  },
  {
    title: "Mulheres protegidas e valorizadas",
    text: "Toda mulher merece segurança, respeito e oportunidades.",
    img: "/img/proposta-5-ill.jpg",
    alt: "Ilustração de três mulheres unidas em apoio mútuo",
  },
  {
    title: "Trabalho, autonomia e inclusão",
    text: "A inclusão também acontece quando existe oportunidade.",
    img: "/img/proposta-6-ill.jpg",
    alt: "Ilustração de uma equipe diversa trabalhando junta, incluindo um profissional em cadeira de rodas",
  },
  {
    title: "Envelhecimento com dignidade",
    text: "O DF está envelhecendo, e milhares de famílias convivem com o desafio de cuidar de idosos, muitos deles também com deficiência ou neurodivergência.",
    img: "/img/proposta-7-ill.jpg",
    alt: "Ilustração de uma família acompanhando um casal de idosos, um deles em cadeira de rodas",
  },
  {
    title: "Fiscalização e eficiência na gestão pública",
    text: "Mais do que criar leis, é preciso fazer as leis acontecerem.",
    img: "/img/proposta-8-ill.jpg",
    alt: "Ilustração de uma mulher com lupa observando um prédio público, com ícones de transparência, planejamento e resultados",
  },
];

export default function Propostas() {
  return (
    <section id="causas" className="bg-roxo-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Minhas propostas"
          title="Causas que vou defender"
          subtitle="Oito compromissos concretos com as pessoas do Distrito Federal."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {propostas.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 4) * 80}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="p-6">
                <p className="font-script text-2xl font-semibold text-ouro-500">{i + 1}.</p>
                <h3 className="mt-1 font-heading text-lg font-semibold leading-snug text-roxo-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
