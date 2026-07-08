import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Principios from "./sections/Principios";
import Propostas from "./sections/Propostas";
import Midia from "./sections/Midia";
import Apoie from "./sections/Apoie";
import Cadastro from "./sections/Cadastro";
import Contato from "./sections/Contato";

export default function App() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-roxo-700 focus:px-5 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Principios />
        <Propostas />
        <Midia />
        <Apoie />
        <Cadastro />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
