import { useState, type FormEvent } from "react";
import { UserPlus } from "lucide-react";
import Reveal from "../components/Reveal";
import { whatsappLink } from "../config";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Quero me cadastrar como apoiador(a) da campanha da Giza Soares.\n` +
      `Nome: ${nome}\n` +
      (cidade ? `Cidade/RA: ${cidade}\n` : "") +
      (email ? `E-mail: ${email}` : "");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cadastro" className="bg-creme-100 pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl bg-roxo-800 bg-cover bg-center p-8 shadow-lg sm:p-12"
            style={{ backgroundImage: "url(/img/cadastrar-band.jpg)" }}
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-white">
                  <UserPlus size={32} aria-hidden="true" />
                  <h2 className="font-heading text-3xl font-bold uppercase tracking-wide">
                    Cadastrar
                  </h2>
                </div>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-roxo-100">
                  Caminhe com a gente! Deixe seu contato para receber novidades da campanha e
                  participar das ações no seu bairro.
                </p>
                <p className="mt-3 text-sm text-roxo-200">
                  Ao enviar, uma conversa no WhatsApp da campanha será aberta com seus dados
                  preenchidos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block font-heading text-sm font-medium text-white">
                    Nome <span aria-hidden="true" className="text-ouro-300">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="h-12 w-full rounded-xl border-0 bg-white px-4 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-4 focus:ring-ouro-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cidade" className="mb-1.5 block font-heading text-sm font-medium text-white">
                      Cidade / RA
                    </label>
                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      autoComplete="address-level2"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="h-12 w-full rounded-xl border-0 bg-white px-4 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-4 focus:ring-ouro-300"
                      placeholder="Ex.: Ceilândia"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-heading text-sm font-medium text-white">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 w-full rounded-xl border-0 bg-white px-4 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-4 focus:ring-ouro-300"
                      placeholder="voce@email.com"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-ouro-400 px-8 font-heading text-sm font-semibold uppercase tracking-wide text-roxo-900 transition-colors hover:bg-ouro-300 focus:outline-none focus:ring-4 focus:ring-white/60"
                >
                  <UserPlus size={16} aria-hidden="true" />
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
