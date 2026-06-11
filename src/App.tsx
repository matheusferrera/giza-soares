import { Heart, Shield, Users, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-brand-500 selection:text-white flex flex-col">
      {/* Mobile-First Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="w-full px-5 py-4 flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <img 
                src="/profile.jpg" 
                alt="Giza Soares" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Giza Soares</span>
          </div>
          <a 
            href="https://www.instagram.com/gizasoares" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Mobile-First Hero Section */}
        <section className="relative bg-brand-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-900/50 to-transparent"></div>
          
          <div className="relative w-full px-5 pt-16 pb-20 md:pt-24 md:pb-28 max-w-5xl mx-auto flex flex-col items-center text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-800/80 border border-brand-700/50 text-brand-100 text-sm font-semibold mb-6 tracking-wide uppercase">
              Compromisso com o Futuro
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 text-white balance">
              Coragem para Mudar. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-100">
                Valores para Conservar.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-200 mb-10 max-w-2xl leading-relaxed balance">
              Cristã, esposa e mãe de quatro filhos. Dedicada a trazer renovação com princípios reais para a nossa cidade.
            </p>
            
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
              <a 
                href="#propostas" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-brand-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-transform active:scale-[0.98] shadow-lg shadow-brand-900/20"
              >
                Conheça as Propostas
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/gizasoares" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-brand-700 transition-colors active:scale-[0.98]"
              >
                <FaInstagram className="w-5 h-5" />
                Siga no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-16 md:py-24 bg-white px-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              {/* Using the image as a refined badge instead of a huge blurry picture */}
              <div className="shrink-0 relative">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl relative z-10">
                  <img 
                    src="/profile.jpg" 
                    alt="Giza Soares" 
                    className="w-full h-full object-cover grayscale-[30%]"
                  />
                </div>
                <div className="absolute inset-0 bg-brand-200 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  Minha Base, Minha Força
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Sou <strong>Giza Soares</strong>. Como mãe do Tito, Cora, Zuri e Dayo, acordo todos os dias pensando em qual cidade deixaremos para as próximas gerações. 
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0" />
                    <span className="font-medium">Defesa intransigente da família</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0" />
                    <span className="font-medium">Transparência e combate à corrupção</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Propostas Section */}
        <section id="propostas" className="py-16 md:py-24 bg-gray-50 px-5 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Nossas Propostas
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto balance">
                Pilares de atuação para garantir um futuro mais seguro e próspero.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Defesa da Família",
                  desc: "Políticas públicas que fortalecem a estrutura familiar e apoiam a educação."
                },
                {
                  icon: Shield,
                  title: "Segurança e Ética",
                  desc: "Luta por mais segurança e total transparência na gestão pública."
                },
                {
                  icon: Users,
                  title: "Futuro dos Jovens",
                  desc: "Projetos focados na formação de jovens com valores e preparo profissional."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-3xl mx-auto text-center bg-brand-900 rounded-[2rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight balance">
              Faça parte dessa mudança!
            </h2>
            <p className="relative text-brand-100 text-lg mb-8 balance">
              Acompanhe nosso trabalho e ajude a construir o futuro que sonhamos para nossos filhos.
            </p>
            <a 
              href="https://www.instagram.com/gizasoares" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-flex items-center justify-center gap-2 bg-white text-brand-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-transform active:scale-[0.98] w-full sm:w-auto"
            >
              <FaInstagram className="w-6 h-6" />
              Siga no Instagram
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700">
                <img src="/profile.jpg" alt="Giza" className="w-full h-full object-cover grayscale" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Giza Soares</h3>
            </div>
            <p className="text-sm max-w-sm mx-auto md:mx-0">
              Por uma política com valores, ética e compromisso com o que realmente importa.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end justify-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">contato@gizasoares.com.br</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/gizasoares" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Giza Soares. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;