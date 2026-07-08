import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { EMAIL, INSTAGRAM_URL, whatsappLink } from "../config";

const canais = [
  {
    icon: <FaWhatsapp size={28} aria-hidden="true" />,
    title: "WhatsApp",
    text: "Fale direto com a equipe da campanha.",
    label: "Chamar no WhatsApp",
    href: whatsappLink("Olá! Vim pelo site da Giza Soares e quero conversar."),
  },
  {
    icon: <FaInstagram size={28} aria-hidden="true" />,
    title: "Instagram",
    text: "Acompanhe a agenda e os bastidores.",
    label: "Seguir no Instagram",
    href: INSTAGRAM_URL,
  },
  {
    icon: <Mail size={28} aria-hidden="true" />,
    title: "E-mail",
    text: "Para imprensa, parcerias e sugestões.",
    label: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Vamos conversar?"
          title="Fale com a Giza"
          subtitle="Toda mudança começa pela escuta — e a sua voz importa."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {canais.map((canal, i) => (
            <Reveal
              key={canal.title}
              delay={i * 100}
              className="flex flex-col items-start rounded-3xl bg-creme-100 p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-roxo-700 text-white">
                {canal.icon}
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-roxo-800">{canal.title}</h3>
              <p className="mt-1 text-ink-soft">{canal.text}</p>
              <a
                href={canal.href}
                target={canal.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="mt-4 font-heading text-sm font-semibold text-roxo-700 underline-offset-4 transition-colors hover:text-roxo-500 hover:underline"
              >
                {canal.label}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
