import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export default function SectionHeading({ kicker, title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className={`font-script text-3xl ${light ? "text-ouro-300" : "text-ouro-500"}`}>{kicker}</p>
      <h2
        className={`mt-2 font-heading text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-roxo-800"
        }`}
      >
        {title}
      </h2>
      <div aria-hidden="true" className="mx-auto mt-4 h-1 w-16 rounded-full bg-ouro-400" />
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? "text-roxo-100" : "text-ink-soft"}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
