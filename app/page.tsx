'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Package, 
  ShieldCheck, 
  Factory, 
  Headset, 
  Settings, 
  Coffee, 
  Zap,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function RangelLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trackGoogleAdsCTA = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const url = event.currentTarget.href;

    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXX/XXXXXXXXXXX',
        value: 1.0,
        currency: 'BRL',
        event_callback: function () {
          window.location.href = url;
        }
      });

      setTimeout(function () {
        window.location.href = url;
      }, 800);
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Package className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Rangel<span className="text-blue-600">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#solucoes" className="hover:text-blue-600 transition-colors">Soluções</a>
            <a href="#diferenciais" className="hover:text-blue-600 transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre Nós</a>
            <a href="#contato" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              Falar com Consultor
            </a>
          </div>

          <button className="md:hidden text-slate-900 relative z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
           <div className="flex flex-col gap-6 text-lg font-medium text-slate-900">
             <a href="#solucoes" onClick={() => setMobileMenuOpen(false)}>Soluções</a>
             <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
             <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
             <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-blue-600">Falar com Consultor</a>
           </div>
        </div>
      </nav>

      {/* Hero Section - Redesigned Premium Aura Style */}
      <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden flex items-center min-h-[92vh] bg-[#020817]">
        {/* CSS Keyframes injetados de forma nativa */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes customFadeUp {
            0% { opacity: 0; transform: translateY(24px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes productFloat {
            0%, 100% { transform: translateY(0) scale(1.12); }
            50% { transform: translateY(-10px) scale(1.12); }
          }
          @keyframes customFloatCard {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-6px) translateX(2px); }
          }
          .animate-fade-up {
            opacity: 0;
            animation: customFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .product-float {
            animation: productFloat 5s ease-in-out infinite;
          }
          .animate-float-card-1 {
            animation: customFloatCard 5s ease-in-out infinite;
          }
          .animate-float-card-2 {
            animation: customFloatCard 6s ease-in-out infinite 0.5s;
          }
          .animate-float-card-3 {
            animation: customFloatCard 7s ease-in-out infinite 1s;
          }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-400 { animation-delay: 400ms; }
          .delay-500 { animation-delay: 500ms; }
        ` }} />

        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Radial glows matching prompt palette */}
          <div className="absolute inset-0 pointer-events-none" 
            style={{
              background: 'radial-gradient(circle at 72% 42%, rgba(47, 128, 255, 0.22), transparent 38%), radial-gradient(circle at 22% 30%, rgba(47, 128, 255, 0.10), transparent 30%), #020817'
            }} 
          />
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.35] pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(rgba(92, 157, 255, 0.14) 1px, transparent 1px)', 
              backgroundSize: '22px 22px' 
            }} 
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full relative z-10">
          {/* Coluna Esquerda - Copy & CTAs */}
          <div className="max-w-2xl flex flex-col justify-center">
            {/* Tag Superior */}
            <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06142D]/60 backdrop-blur-xl border border-[#5C9DFF]/28 shadow-[0_0_15px_rgba(47,128,255,0.08)] mb-8 animate-fade-up">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#2F80FF] shadow-[0_0_10px_#2F80FF] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#5C9DFF] uppercase">
                Upgrade Industrial para sua Marca
              </span>
            </div>
            
            {/* Título H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-extrabold tracking-tight text-white leading-[1.1] mb-8 animate-fade-up delay-100">
              Embalagens de <br />
              alta qualidade — <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5C9DFF] to-[#2F80FF] drop-shadow-[0_2px_15px_rgba(47,128,255,0.25)]">
                sem exigir <br />
                grandes <br />
                estoques
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#AAB6CF] leading-relaxed mb-10 max-w-xl animate-fade-up delay-200">
              A Rangel Embalagens entrega padrão industrial para o seu produto, permitindo pedidos a partir de <strong className="text-white font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">200 unidades</strong>. Proteção total e design premium para o seu negócio.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[14px] sm:gap-[20px] mb-12 animate-fade-up delay-300 w-full sm:w-auto">
              <a 
                href="https://wa.me/5511900000000"
                onClick={trackGoogleAdsCTA}
                className="bg-[#FFD21F] hover:bg-[#FFE066] text-[#020817] px-[34px] min-h-[56px] min-w-full sm:min-w-[250px] rounded-full font-bold text-base tracking-tight shadow-[0_4px_25px_rgba(255,210,31,0.25)] hover:shadow-[0_4px_35px_rgba(255,210,31,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-[10px] group text-center"
              >
                <span>Solicitar orçamento</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#solucoes"
                className="bg-[#06142D]/40 hover:bg-[#0a1834]/60 text-white border border-[#5C9DFF]/30 hover:border-[#5C9DFF]/60 px-[34px] min-h-[56px] min-w-full sm:min-w-[210px] rounded-full font-bold text-base tracking-tight shadow-[0_4px_20px_rgba(47,128,255,0.05)] hover:shadow-[0_4px_30px_rgba(47,128,255,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center text-center"
              >
                Ver Soluções
              </a>
            </div>
            
            {/* Prova Social */}
            <div className="flex flex-wrap items-center gap-5 border-t border-[#5C9DFF]/10 pt-8 animate-fade-up delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#020817] overflow-hidden bg-slate-800 shadow-md">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="Cliente Rangel" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 text-[#FFD21F] fill-[#FFD21F]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#AAB6CF] font-medium tracking-wide mt-1">
                  +1.500 clientes atendidos com excelência
                </p>
              </div>
            </div>
          </div>
          
          {/* Coluna Direita - Produto e Cards Flutuantes */}
          <div className="relative flex items-center justify-center mt-16 lg:mt-0 w-full px-4 sm:px-0">
            {/* Box translúcido com borda de glow azul - Estágio do Produto (Vitrine) */}
            <div className="relative w-full max-w-[280px] min-[375px]:max-w-[340px] sm:max-w-[440px] md:max-w-[480px] xl:max-w-[520px] aspect-square flex items-center justify-center">
              
              {/* Painel de Fundo Externo (Linha de luz secundária paralela) */}
              <div 
                className="absolute inset-[-4px] rounded-[36px] pointer-events-none z-10 animate-pulse"
                style={{
                  border: '1.5px solid rgba(47, 128, 255, 0.25)',
                  boxShadow: '0 0 30px rgba(47, 128, 255, 0.1)',
                  animationDuration: '3s'
                }}
              />

              {/* O Painel de Fundo Principal (Estágio com Borda Neon e Glow) */}
              <div 
                className="absolute inset-0 rounded-[32px] pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(47, 128, 255, 0.26), transparent 50%), rgba(6, 20, 45, 0.65)',
                  border: '2px solid rgba(47, 128, 255, 0.95)',
                  boxShadow: '0 0 90px rgba(47, 128, 255, 0.35), inset 0 0 45px rgba(47, 128, 255, 0.2)'
                }}
              />

              {/* Ponto de Brilho Intenso (Lens Flare) - Canto Superior Esquerdo */}
              <div 
                className="absolute top-[2px] left-[2px] w-2 h-2 bg-white rounded-full z-20 pointer-events-none animate-pulse"
                style={{
                  boxShadow: '0 0 25px 12px rgba(47, 128, 255, 1), 0 0 10px 4px rgba(255, 255, 255, 1)',
                  animationDuration: '2s'
                }}
              />

              {/* Ponto de Brilho Intenso (Lens Flare) - Lateral Esquerda Inferior */}
              <div 
                className="absolute bottom-[20%] left-[-2px] w-2 h-2 bg-white rounded-full z-20 pointer-events-none animate-pulse"
                style={{
                  boxShadow: '0 0 25px 12px rgba(47, 128, 255, 1), 0 0 10px 4px rgba(255, 255, 255, 1)',
                  animationDuration: '2.5s'
                }}
              />

              {/* Produto Principal com Tamanho Dominante e Flutuação */}
              <div className="relative w-[110%] h-[110%] z-20 flex items-center justify-center select-none product-float">
                <img 
                  src="/prod sem fundo.webp" 
                  alt="Embalagem sanfonada preta de 4 soldas da Rangel Embalagens"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 35px 70px rgba(0,0,0,0.6))',
                    transform: 'scale(1.12)'
                  }}
                />
              </div>

              {/* Cards Flutuantes ao Redor */}
              
              {/* Card 1 - Satisfação (Superior Direito) */}
              <div className="absolute -top-8 -right-2 sm:-top-10 sm:-right-8 lg:-right-10 z-30 w-[130px] sm:w-[200px] bg-[#0a1834]/85 backdrop-blur-xl rounded-[20px] sm:rounded-[28px] border border-[#5C9DFF]/28 shadow-[0_20px_40px_rgba(0,0,0,0.6),_0_0_25px_rgba(47, 128, 255, 0.15)] p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 animate-float-card-1 transition-all duration-300 hover:border-[#5C9DFF]/50 hover:shadow-[0_25px_45px_rgba(47, 128, 255, 0.25)]">
                <div className="relative w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(92,157,255,0.08)" strokeWidth="6" />
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#FFD21F" strokeWidth="6" strokeDasharray="213.6" strokeDashoffset="10.68" strokeLinecap="round" />
                  </svg>
                  <span className="absolute font-extrabold text-xs sm:text-lg text-white">95%</span>
                </div>
                <div className="text-center">
                   <p className="text-[7px] sm:text-[9px] text-[#AAB6CF] font-bold uppercase tracking-widest leading-none mb-1">Satisfação dos</p>
                   <p className="text-[10px] sm:text-xs text-white font-extrabold tracking-wide uppercase">Nossos Clientes</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Autoridade Nacional
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]"
            >
              As marcas que você admira <br />
              <span className="text-blue-600">já estão com a Rangel.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Garantimos o mesmo padrão de excelência exigido pelas maiores indústrias do país, agora disponível para escalar o seu negócio.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  
              {/* Partner 1: 3 Corações */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
                className="relative h-[420px] sm:h-[520px] md:h-[680px] rounded-[44px] overflow-hidden shadow-[0_20px_45px_rgba(126,7,12,0.12)] hover:shadow-[0_45px_90px_rgba(126,7,12,0.28)] transition-shadow duration-[600ms] cursor-pointer"
              >
                {/* Image */}
                <img 
                  src="/card1.webp" 
                  alt="Grupo 3 Corações - Rangel Embalagens" 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.01]" 
                />
                {/* Vignette/Depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25 pointer-events-none z-10" />
                {/* Inner subtle border */}
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-[44px] pointer-events-none z-10" />
              </motion.div>

              {/* Partner 2: Nestlé */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8, delay: 0.15 }}
                className="relative h-[420px] sm:h-[520px] md:h-[680px] rounded-[44px] overflow-hidden shadow-[0_20px_45px_rgba(0,58,128,0.12)] hover:shadow-[0_45px_90px_rgba(0,58,128,0.28)] transition-shadow duration-[600ms] cursor-pointer"
              >
                {/* Image */}
                <img 
                  src="/card2.webp" 
                  alt="Nestlé Brasil - Rangel Embalagens" 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.01]" 
                />
                {/* Vignette/Depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25 pointer-events-none z-10" />
                {/* Inner subtle border */}
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-[44px] pointer-events-none z-10" />
              </motion.div>

            </div>
          </div>

          {/* Social Proof Stats Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Anos de Mercado", value: "30+" },
              { label: "Clientes Atendidos", value: "1.500+" },
              { label: "Satisfação", value: "95%" },
              { label: "Produtos Ativos", value: "500+" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600">{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reconhecimento & Premiações Section */}
      <section id="reconhecimento" className="py-24 bg-slate-950 relative overflow-hidden border-b border-slate-900">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Intro Copy */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                  A Rangel
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                  Liderança e excelência em <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">embalagens flexíveis</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  A Rangel é uma empresa brasileira especializada em embalagens pré-formadas e seus acessórios, entregando inovação e proteção para marcas em todo o país.
                </p>
              </motion.div>
            </div>

            {/* Right: Stats Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { value: "91,9%", label: "Confiável", color: "text-blue-400" },
                  { value: "59,5%", label: "Rápido", color: "text-blue-300" },
                  { value: "32,4%", label: "Útil", color: "text-blue-200" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.05)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</span>
                    <div className="w-10 h-1 bg-white/10 rounded-full mb-4 group-hover:bg-blue-500 transition-colors" />
                    <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Dos clientes que responderam nossa pesquisa de satisfação.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Section - Dark Premium Re-engineered */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                Reconhecimento
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Premiações e Reconhecimentos
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto text-base">
                Excelência de padrão nacional reconhecida pelas principais instituições e júris especializados do setor.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { 
                  name: "Prêmio ABRE 2013", 
                  category: "Design & Inovação",
                  desc: "Vencedor nacional na categoria de embalagens flexíveis com foco em funcionalidade.",
                  img: "/abre-logo.png", 
                  year: "2013" 
                },
                { 
                  name: "EmbalagemMarca 2017", 
                  category: "Destaque do Setor",
                  desc: "Reconhecimento pela qualidade de laminação e barreira protetora contra oxigênio.",
                  img: "/embalagem-marca-logo.png", 
                  year: "2017" 
                },
                { 
                  name: "Grandes Cases 2017", 
                  category: "Cases de Sucesso",
                  desc: "Premiado pela viabilidade técnica e impacto comercial no ponto de venda.",
                  img: "/grandes-cases-logo.png", 
                  year: "2017" 
                }
              ].map((award, i) => (
                <AwardCard key={i} award={award} delay={i * 0.12} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="solucoes" className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-blue-50/50 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
            >
              Qualidade industrial, agora acessível para o seu negócio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Escolha a embalagem ideal com flexibilidade de produção e pedidos reduzidos.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "ALMOFADA",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/almofada_01.png"
              },
              {
                title: "BISNAGA",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/bisnaga_01.png"
              },
              {
                title: "POUCH",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/pouch_01.png"
              },
              {
                title: "SANFONADA",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/sanfonada_01.png"
              },
              {
                title: "STAND UP",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/stand_up_01.png"
              }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] rounded-[24px] border border-blue-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-4 overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(37,99,235,0.15)] group-hover:-translate-y-2 group-hover:border-blue-300 flex items-center justify-center p-4">
                  {/* Edite a imagem abaixo (recomendo imagens com fundo transparente e object-contain ou fotos inteiras) */}
                  <img src={prod.img} alt={prod.title} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div className="bg-blue-500/90 text-white font-bold text-[10px] sm:text-xs tracking-widest py-2.5 px-2 rounded-full w-full text-center shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md truncate border border-blue-400">
                  {prod.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Bento Grid */}
      <section id="diferenciais" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10">
            <div className="mb-16 md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Por que escolher a Rangel Embalagens</h2>
              <p className="text-slate-400 text-lg">Acesso facilitado para o seu negócio alcançar o mercado com posicionamento premium e altamente competitivo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: Factory, title: "Produção com padrão de grandes indústrias", span: "md:col-span-2", bg: "bg-white/5 border-white/10" },
                { icon: Package, title: "Pedido mínimo acessível a partir de 200 unidades", span: "md:col-span-1", bg: "bg-blue-600/20 border-blue-500/30" },
                { icon: Zap, title: "Soluções ideais para pequenos e médios negócios", span: "md:col-span-1", bg: "bg-white/5 border-white/10" },
                { icon: ShieldCheck, title: "Controle rigoroso de qualidade", span: "md:col-span-1", bg: "bg-white/5 border-white/10" },
                { icon: Settings, title: "Personalização para destacar sua marca", span: "md:col-span-1", bg: "bg-white/5 border-white/10" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${item.span} ${item.bg} backdrop-blur-xl border p-8 rounded-[32px] hover:bg-white/10 transition-colors group cursor-default`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Refined Ethos Style */}
      <section id="sobre" className="py-24 px-6 relative bg-slate-950 overflow-hidden">
        {/* Background Effects - More dramatic like Ethos reference */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Package className="text-white w-7 h-7" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">Rangel<span className="text-blue-500">.</span></span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Conheça a <br />
                <span className="text-blue-500">Rangel Embalagens</span>
              </h2>
              
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8" />
              
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                A Rangel Embalagens é uma empresa brasileira especializada em embalagens flexíveis, focada em soluções pré-formadas e acessórios em pequenas quantidades.
              </p>
            </motion.div>

            {/* Right Side - Floating Content Card (Ethos Style) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.5)] relative border border-white/10"
            >
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg font-medium text-slate-900 border-l-4 border-blue-600 pl-4">
                  Fundada em 1991, surgimos para suprir a falta de um fornecedor <span className="text-blue-600 font-bold">ágil, confiável e com padrão de qualidade</span>, mesmo para volumes reduzidos.
                </p>
                
                <p>
                  Desde então, seguimos em crescimento sólido, impulsionados pela inovação e pela busca por soluções modernas para o setor.
                </p>

                <p>
                  Estamos em evolução constante: investindo em tecnologia, processos e novos produtos, para entregar embalagens que valorizam a apresentação e garantem qualidade, flexibilidade e excelência em qualquer escala de produção.
                </p>

                <div className="pt-8 border-t border-slate-100">
                  <div className="flex items-start gap-4 p-6 rounded-3xl bg-blue-50 border border-blue-100 shadow-sm">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <ShieldCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Compromisso Ambiental & Conformidade</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Atuamos em total conformidade com o <strong className="text-blue-700">Decreto nº 12.688/2025</strong>, que estabelece em âmbito nacional a obrigatoriedade da logística reversa de embalagens plásticas, com vigência desde 21 de outubro de 2025.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 transition-colors group cursor-default">
                    <Zap className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 transition-colors group cursor-default">
                    <Coffee className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 transition-colors group cursor-default">
                    <Factory className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_40px_rgb(37,99,235,0.2)] border border-blue-500"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Seu produto merece uma embalagem de qualidade — sem exigir grandes quantidades</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Solicite um orçamento e descubra como a Rangel pode atender o seu negócio com qualidade e flexibilidade.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5500000000000"
                  onClick={trackGoogleAdsCTA}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg flex justify-center items-center"
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-12 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Main Links & Info Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Package className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-white">Rangel<span className="text-blue-600">.</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">Industrializando qualidade e inovação em embalagens flexíveis para o seu negócio.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Soluções</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-semibold">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Embalagens para Café</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Embalagens Laminadas</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Projetos Personalizados</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-semibold">
                <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre a Rangel</a></li>
                <li><a href="#diferenciais" className="hover:text-blue-400 transition-colors">Diferenciais</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contato</h4>
              <ul className="space-y-4 text-sm text-slate-400 mb-6 font-semibold">
                <li>contato@rangelembalagens.com.br</li>
                <li>(11) 90000-0000</li>
                <li>Polo Industrial Tecnológico, SP</li>
              </ul>
              <button className="inline-flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Online no WhatsApp
              </button>
            </div>
          </div>

          {/* Legal Compliance Block (CNPJ & Address - Mandatory for Brazil E-commerce & Ads) */}
          <div className="pt-8 border-t border-white/10 text-xs text-slate-400 space-y-4 font-semibold leading-relaxed">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
              <div>
                <p className="font-bold text-slate-200 text-sm">Rangel Embalagens Flexíveis Ltda.</p>
                <p>CNPJ: 00.123.456/0001-99 | Inscrição Estadual: 123.456.789.111</p>
                <p>Endereço: Rua da Embalagem, 1200 - Distrito Industrial, Diadema - SP, CEP 09900-000</p>
              </div>
              <div className="flex gap-6">
                <span 
                  onClick={() => setPrivacyModalOpen(true)} 
                  className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer underline decoration-dotted"
                >
                  Políticas de Privacidade (LGPD)
                </span>
                <span 
                  onClick={() => setTermsModalOpen(true)} 
                  className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer underline decoration-dotted"
                >
                  Termos de Uso
                </span>
              </div>
            </div>

            {/* Platform Disclaimers (Required by Google Ads & Meta Ads) */}
            <div className="pt-6 border-t border-white/10 text-[10px] text-slate-500 space-y-3 leading-normal font-medium">
              <p>
                <strong>AVISO LEGAL FACEBOOK (META):</strong> Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook ou Meta de nenhuma maneira. FACEBOOK e META são marcas comerciais da Meta Platforms, Inc.
              </p>
              <p>
                <strong>AVISO LEGAL GOOGLE:</strong> Google e Google Ads são marcas comerciais registradas da Google LLC. Este site é de propriedade e responsabilidade da Rangel Embalagens Flexíveis Ltda. e não é afiliado, associado ou endossado pelo Google LLC de nenhuma forma.
              </p>
              <p>
                <strong>SEGURANÇA E LGPD:</strong> Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantimos total sigilo e proteção sobre os dados fornecidos em nossos formulários de contato, que serão tratados exclusivamente para envio de propostas e atendimento comercial solicitados pelo usuário.
              </p>
            </div>

            <div className="pt-6 text-center text-[10px] text-slate-500 border-t border-white/5">
              <p>© {new Date().getFullYear()} Rangel Embalagens Flexíveis. Todos os direitos reservados. Fotos ilustrativas.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modais de Políticas e Termos com animação Framer Motion */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setPrivacyModalOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-slate-100 z-10 text-left"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Políticas de Privacidade</h3>
              <button 
                onClick={() => setPrivacyModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-semibold">
              <p className="font-bold text-slate-900">1. Compromisso com a Privacidade</p>
              <p>A Rangel Embalagens Flexíveis Ltda. tem o compromisso de proteger a privacidade e a segurança dos dados pessoais de seus clientes e visitantes, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
              
              <p className="font-bold text-slate-900">2. Coleta e Tratamento de Dados</p>
              <p>Coletamos informações como nome, e-mail, telefone e informações sobre o seu negócio exclusivamente por meio de formulários que você preenche voluntariamente para solicitar propostas e contatos comerciais.</p>
              
              <p className="font-bold text-slate-900">3. Uso de Informações</p>
              <p>Seus dados são utilizados estritamente para o envio de orçamentos, comunicações comerciais pertinentes ao seu pedido e prestação dos serviços contratados. Em nenhuma hipótese compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros para fins de marketing.</p>
              
              <p className="font-bold text-slate-900">4. Seus Direitos</p>
              <p>Você possui o direito de solicitar a confirmação do tratamento, acesso aos dados, correção de dados incompletos ou a exclusão definitiva de suas informações de nossas bases a qualquer momento, enviando um e-mail para contato@rangelembalagens.com.br.</p>
            </div>
          </motion.div>
        </div>
      )}

      {termsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setTermsModalOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-slate-100 z-10 text-left"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Termos de Uso</h3>
              <button 
                onClick={() => setTermsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-semibold">
              <p className="font-bold text-slate-900">1. Aceitação dos Termos</p>
              <p>Ao acessar o site da Rangel Embalagens Flexíveis Ltda., você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
              
              <p className="font-bold text-slate-900">2. Licença de Uso</p>
              <p>É concedida permissão para baixar temporariamente uma cópia dos materiais no site da Rangel Embalagens apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>
              
              <p className="font-bold text-slate-900">3. Isenção de Responsabilidade</p>
              <p>Os materiais no site da Rangel Embalagens são fornecidos "como estão". A Rangel Embalagens não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.</p>
              
              <p className="font-bold text-slate-900">4. Limitações</p>
              <p>Em nenhum caso a Rangel Embalagens ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais, mesmo que a Rangel Embalagens tenha sido notificada oralmente ou por escrito da possibilidade de tais danos.</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function AwardCard({ award, delay }: { award: { name: string; category: string; desc: string; img: string; year: string }; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-6 rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-500/30 shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] transition-all duration-300 flex flex-col justify-between h-full group"
    >
      {/* Glow de hover suave no canto do card */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div>
        {/* Badge superior do ano e tag de estrela */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-extrabold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            {award.year}
          </span>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:rotate-12 transition-transform duration-300">
            <span className="text-sm font-bold">★</span>
          </div>
        </div>

        {/* Textos descritivos do prêmio */}
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">
          {award.name}
        </h4>
        <p className="text-xs font-semibold text-amber-500/80 mb-3">
          {award.category}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          {award.desc}
        </p>
      </div>
    </motion.div>
  );
}
