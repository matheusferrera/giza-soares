import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const itens = [
  {
    img: "/img/imprensa-capa.jpg",
    alt: "Capa do jornal Capital Federal com a manchete 'Uma voz real pela inclusão' e foto de Giza Soares",
    caption: "Capa do Capital Federal — \"Uma voz real pela inclusão\"",
  },
  {
    img: "/img/imprensa-p5.jpg",
    alt: "Página de jornal com a matéria 'Mais que uma bandeira, uma vivência' sobre Giza Soares",
    caption: "Matéria — \"Mais que uma bandeira, uma vivência\"",
  },
  {
    img: "/img/galeria-acao.jpg",
    alt: "Giza Soares sorrindo ao lado de uma apoiadora em um evento",
    caption: "Nos encontros e eventos, ouvindo as pessoas de perto",
  },
];

export default function Midia() {
  return (
    <section id="midia" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Na mídia e nas ruas"
          title="Uma história que já é notícia"
          subtitle="A trajetória de Giza tem inspirado reportagens e mobilizado pessoas por todo o DF."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((item, i) => (
            <Reveal key={item.img} delay={i * 100} className="flex flex-col">
              <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-creme-100 shadow-sm">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <figcaption className="p-5 text-sm font-medium text-ink-soft">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
