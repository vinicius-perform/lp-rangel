'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Package, 
  ShieldCheck, 
  Factory, 
  Settings, 
  Zap,
  CheckCircle2,
  Menu,
  X,
  Clock,
  Shield,
  Layers,
  Sparkles,
  Coffee,
  Cookie,
  Droplets,
  TrendingUp
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.497 1.45 5.416 1.451 5.38 0 9.755-4.378 9.759-9.759.002-2.607-1.011-5.059-2.855-6.905C17.079 2.097 14.632.822 12.002.822c-5.38 0-9.759 4.378-9.764 9.76-.001 1.91.503 3.775 1.464 5.378L2.716 21.282l5.931-1.554zm11.006-7.391c-.302-.15-1.788-.882-2.057-.982-.269-.099-.465-.149-.662.15-.196.299-.762.982-.934 1.18-.172.199-.344.224-.646.074-.3-.15-1.269-.467-2.417-1.492-.893-.797-1.497-1.783-1.672-2.083-.176-.3-.018-.462.132-.61.135-.133.302-.35.453-.524.151-.174.2-.299.302-.498.101-.199.05-.374-.025-.524-.075-.15-.662-1.6-.906-2.185-.238-.57-.479-.492-.662-.501-.172-.008-.368-.01-.564-.01-.196 0-.515.074-.784.374-.269.299-1.03.1-1.03 2.508 0 2.409 1.751 4.73 1.996 5.06.246.33 3.447 5.263 8.351 7.388 1.166.505 2.078.807 2.785 1.031 1.17.372 2.238.319 3.082.193.94-.14 1.926-.788 2.198-1.513.272-.725.272-1.346.191-1.47-.081-.125-.298-.199-.6-.349z" />
  </svg>
);

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
    <div className="min-h-screen bg-[#F7FAFC] text-slate-700 font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden relative">
      
      {/* CSS Keyframes nativos para animações personalizadas */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes customFadeUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes productFloat {
          0%, 100% { transform: translateY(0) scale(1.03); }
          50% { transform: translateY(-8px) scale(1.03); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: customFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .product-float {
          animation: productFloat 6s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      ` }} />

      {/* Navigation (Navbar) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_2px_15px_rgba(15,23,42,0.05)]' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#06142D] rounded-xl flex items-center justify-center shadow-lg shadow-[#06142D]/20">
              <Package className="text-white w-5.5 h-5.5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#06142D]">Rangel<span className="text-[#2F80FF] font-light text-base ml-1">\soulpack</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#334155]">
            <a href="#produto-destaque" className="hover:text-[#2563EB] transition-colors">Destaque</a>
            <a href="#solucoes" className="hover:text-[#2563EB] transition-colors">Embalagens</a>
            <a href="#alta-barreira" className="hover:text-[#2563EB] transition-colors">Alta Barreira</a>
            <a href="#diferenciais" className="hover:text-[#2563EB] transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-[#2563EB] transition-colors">Sobre Nós</a>
            
            <a 
              href="https://wa.me/5511900000000"
              onClick={trackGoogleAdsCTA}
              className="bg-[#009E73] hover:bg-[#008762] text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Falar com time comercial</span>
            </a>
          </div>

          <button className="md:hidden text-[#06142D] relative z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
           <div className="flex flex-col gap-6 text-lg font-medium text-slate-800">
             <a href="#produto-destaque" onClick={() => setMobileMenuOpen(false)}>Destaque</a>
             <a href="#solucoes" onClick={() => setMobileMenuOpen(false)}>Embalagens</a>
             <a href="#alta-barreira" onClick={() => setMobileMenuOpen(false)}>Alta Barreira</a>
             <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
             <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
             <a 
               href="https://wa.me/5511900000000" 
               onClick={(e) => { setMobileMenuOpen(false); trackGoogleAdsCTA(e); }}
               className="bg-[#009E73] hover:bg-[#008762] text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,158,115,0.18)]"
             >
               <WhatsAppIcon className="w-5 h-5" />
               Falar com time comercial
             </a>
           </div>
        </div>
      </nav>

      {/* Hero Section - Sem imagem, focado na promessa e vantagens */}
      <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden flex items-center min-h-[90vh]">
        {/* Efeitos de Fundo Dinâmicos Corporativos */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 pointer-events-none" 
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(47, 128, 255, 0.08), transparent 45%), radial-gradient(circle at 15% 15%, rgba(59, 130, 246, 0.03), transparent 30%), #F8FAFC'
            }} 
          />
          {/* Grade blueprint industrial sutil */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Badge de Destaque */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/20 shadow-sm mb-8 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-[#2F80FF] shadow-[0_0_8px_#2F80FF] animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-[#12345A] uppercase">
              Pedidos a partir de apenas 200 unidades
            </span>
          </div>

          {/* Promessa Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#020817] leading-[1.1] mb-6 max-w-4xl animate-fade-up delay-100">
            Embalagens de <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F80FF] to-[#1d4ed8]">alta barreira</span> com entrega rápida
          </h1>

          {/* Descrição */}
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            Proteja o sabor, aroma e frescor do seu produto com tecnologia industrial de ponta. A Rangel fabrica embalagens flexíveis com entrega recorde de <strong className="text-[#06142D] font-bold">1 a 3 dias úteis</strong> e lote mínimo de <strong className="text-[#06142D] font-bold">200 unidades</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16 animate-fade-up delay-300 w-full sm:w-auto">
            <a 
              href="https://wa.me/5511900000000"
              onClick={trackGoogleAdsCTA}
              className="bg-[#009E73] hover:bg-[#008762] text-white px-8 py-4 rounded-full font-bold text-base tracking-tight shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 text-center"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Solicitar Orçamento WhatsApp</span>
            </a>
            <a 
              href="#produto-destaque"
              className="bg-white hover:bg-slate-50 text-[#334155] border border-slate-200 px-8 py-4 rounded-full font-semibold text-base tracking-tight transition-all duration-300 flex items-center justify-center text-center shadow-sm"
            >
              Ver Produto Destaque
            </a>
          </div>

          {/* Grid de Vantagens (Sem Imagem) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full animate-fade-up delay-400">
            {[
              {
                icon: Package,
                title: "Lote Mínimo Viável",
                desc: "Apenas 200 unidades para testar ou rodar pequenos lotes sem travar capital."
              },
              {
                icon: Clock,
                title: "1 a 3 Dias Úteis",
                desc: "Logística ágil e entrega expressa para não deixar sua produção parada."
              },
              {
                icon: ShieldCheck,
                title: "Grau Alimentício",
                desc: "Materiais 100% atóxicos certificados pela ANVISA para segurança de alimentos."
              },
              {
                icon: Factory,
                title: "Fabricação Nacional",
                desc: "Garantia de padrão industrial premium utilizando tecnologia de ponta."
              }
            ].map((v, i) => (
              <div 
                key={i}
                className="bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(47,128,255,0.06)] hover:border-[#2F80FF]/25 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#2F80FF] mb-4">
                  <v.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-extrabold text-sm text-[#06142D] mb-1.5 uppercase tracking-wide">{v.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção: Foco no Produto Destaque (Anteriormente no Hero) */}
      <section id="produto-destaque" className="py-24 px-6 relative bg-white border-t border-b border-slate-200/50">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 10% 50%, rgba(47, 128, 255, 0.04), transparent 45%)'
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Coluna Esquerda: Mockup Ampliado do Produto com Foco Total */}
          <div className="relative flex items-center justify-center w-full px-4 sm:px-0">
            {/* Efeitos de fundo e glow para dar destaque */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-[#2F80FF]/10 to-[#2563EB]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              {/* Borda translúcida de glassmorphism premium */}
              <div 
                className="absolute inset-[-6px] rounded-[42px] pointer-events-none z-10"
                style={{
                  border: '1.5px solid rgba(47, 128, 255, 0.18)',
                }}
              />
  
              <div 
                className="absolute inset-0 rounded-[36px] pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(47, 128, 255, 0.06), transparent 50%), rgba(255, 255, 255, 0.9)',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08), inset 0 0 24px rgba(47, 128, 255, 0.03)',
                  backdropFilter: 'blur(12px)'
                }}
              />
  
              {/* Lens Flare Azul Sutil */}
              <div 
                className="absolute top-[4px] left-[4px] w-3 h-3 bg-white rounded-full z-20 pointer-events-none"
                style={{
                  boxShadow: '0 0 20px 8px rgba(47, 128, 255, 0.5), 0 0 8px 3px rgba(255, 255, 255, 1)',
                }}
              />
  
              {/* Imagem do Produto Flutuante */}
              <div className="relative w-[100%] h-[100%] z-20 flex items-center justify-center select-none product-float">
                <img 
                  src="/img3.webp" 
                  alt="Embalagem flexível Rangel de alta barreira"
                  className="w-[95%] h-[95%] object-contain"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(15,23,42,0.15))',
                  }}
                />
              </div>
  
              {/* Badges Técnicos no Mockup */}
              <div className="absolute -bottom-6 -left-6 z-30 bg-white/90 backdrop-blur-md rounded-[24px] border border-[#E2E8F0] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-5 flex items-center gap-3.5 transition-transform duration-300 hover:scale-105">
                <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] flex items-center justify-center border border-[#2F80FF]/15 text-[#2F80FF]">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-widest leading-none mb-1">Lote Mínimo</p>
                  <p className="text-base text-[#020817] font-extrabold tracking-tight">A partir de 200 un.</p>
                </div>
              </div>
  
              <div className="absolute -top-6 -right-6 z-30 bg-white/90 backdrop-blur-md rounded-[24px] border border-[#E2E8F0] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-5 flex items-center gap-3.5 transition-transform duration-300 hover:scale-105">
                <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] flex items-center justify-center border border-[#2F80FF]/15 text-[#2F80FF]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-widest leading-none mb-1">Prazo de Entrega</p>
                  <p className="text-base text-[#020817] font-extrabold tracking-tight">1 a 3 Dias Úteis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Informações Detalhadas do Produto */}
          <div className="max-w-2xl text-left flex flex-col justify-center">
            <span className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              Produto de Destaque
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142D] mb-6 tracking-tight leading-tight">
              Embalagem Pouch Flexível <br />
              <span className="text-[#2F80FF]">Laminada com Alta Barreira</span>
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed mb-8">
              A nossa embalagem de destaque é projetada especificamente para marcas que exigem conservação impecável do produto final. Com acabamento translúcido de altíssima clareza e rigidez estrutural, ela oferece a barreira perfeita contra os elementos externos.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Selagem Hermética Avançada",
                  desc: "Polímeros de alta fusão que evitam micro-fissuras e garantem a integridade total da selagem."
                },
                {
                  title: "Barreira Isoladora Multipropósito",
                  desc: "Proteção total contra oxigênio, umidade, gordura e odores para manter a frescura original."
                },
                {
                  title: "Aparência Premium no PDV",
                  desc: "Material cristalino de altíssima transparência que valoriza o produto e atrai o olhar do consumidor."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/15 flex items-center justify-center text-[#2F80FF] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#06142D] text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="https://wa.me/5511900000000"
                onClick={trackGoogleAdsCTA}
                className="bg-[#009E73] hover:bg-[#008762] text-white px-8 py-4 rounded-full font-bold text-base tracking-tight shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 text-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Orçar esta Embalagem</span>
              </a>
              <a 
                href="#solucoes"
                className="bg-white hover:bg-slate-50 text-[#334155] border border-slate-200 px-8 py-4 rounded-full font-semibold text-base tracking-tight transition-all duration-300 flex items-center justify-center text-center shadow-sm"
              >
                Ver Outros Formatos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Formatos e Modelos de Embalagens (Catálogo Industrial) */}
      <section id="solucoes" className="py-24 px-6 relative bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/15 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-4">
              Formatos de Entrega
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#06142D] mb-4 tracking-tight">
              Formatos industriais para qualquer necessidade
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Estruturas flexíveis prontas para envase, com selagens de alta integridade técnica e prontas para receber vácuo ou gás inerte.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "ALMOFADA",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/almofada_01.png",
              },
              {
                title: "BISNAGA",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/bisnaga_01.png",
              },
              {
                title: "POUCH VÁCUO",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/pouch_01.png",
              },
              {
                title: "SANFONADA",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/sanfonada_01.png",
              },
              {
                title: "STAND UP POUCH",
                img: "https://rangel-production.s3.sa-east-1.amazonaws.com/stand_up_01.png",
              }
            ].map((prod, i) => (
              <div 
                key={i}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.04)] mb-4 overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] group-hover:-translate-y-2 group-hover:border-[#2F80FF]/35 flex items-center justify-center p-6">
                  <img src={prod.img} alt={prod.title} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div className="bg-[#EAF2FF] text-[#12345A] font-extrabold text-[10px] sm:text-xs tracking-widest py-2.5 px-2 rounded-full w-full text-center border border-[#2F80FF]/15 shadow-sm transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] truncate">
                  {prod.title}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <a 
              href="https://wa.me/5511900000000"
              onClick={trackGoogleAdsCTA}
              className="bg-[#009E73] hover:bg-[#008762] text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group text-center"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Solicitar orçamento de formatos</span>
            </a>
          </div>
        </div>
      </section>

      {/* Seção 1: Tecnologia de Alta Barreira (Tema Escuro Profundo) */}
      <section id="alta-barreira" className="py-24 bg-[#020817] text-slate-100 relative overflow-hidden border-t border-b border-white/5">
        {/* Glow azul sutil sob fundo escuro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F80FF]/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/70 border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-4 h-4" />
              Conservação Científica do Produto
            </span>
            <h2 className="text-3xl md:text-[44px] font-black text-white mb-6 tracking-tight leading-tight">
              A ciência por trás da <span className="text-[#2F80FF]">Alta Barreira</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Nossas embalagens flexíveis são desenvolvidas com estruturas multilaminadas de altíssima performance técnica, bloqueando totalmente os principais agentes de degradação.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Esquerda: Infográfico de Camadas */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="text-[#2F80FF] w-5 h-5" />
                Estrutura Multicamadas de Proteção
              </h3>
              
              {[
                { 
                  name: "Camada Externa Mecânica (PET)", 
                  desc: "Alta resistência contra furos, rasgos, impactos de logística e abrasão física.", 
                  color: "bg-[#0B1F3A]/40 border-white/5 text-slate-200" 
                },
                { 
                  name: "Camada de Barreira Absoluta (ALU)", 
                  desc: "Bloqueio microscópico intransponível contra oxigênio, vapor de água, umidade, gorduras e aromas externos.", 
                  color: "bg-[#2563EB] text-white border-[#2F80FF]/30 shadow-[0_8px_30px_rgba(37,99,235,0.15)]" 
                },
                { 
                  name: "Camada de Selagem Interna (PE / PP Especial)", 
                  desc: "Polímero de grau alimentício que garante selagem hermética impecável, sem vazamentos e atóxico.", 
                  color: "bg-[#0B1F3A]/40 border-white/5 text-slate-200" 
                }
              ].map((layer, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-[24px] border backdrop-blur-xl ${layer.color} flex gap-4 transition-all duration-300 hover:translate-x-1.5`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#020817] flex items-center justify-center font-extrabold text-sm border border-white/10 shrink-0 text-[#2F80FF]">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">{layer.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direita: Grid de Benefícios da Alta Barreira */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Shelflife Estendido",
                  desc: "Aumenta em até 5x a durabilidade dos alimentos sem a necessidade de conservantes químicos."
                },
                {
                  title: "Proteção contra Oxigênio",
                  desc: "Impede a oxidação lipídica e o escurecimento do produto, preservando o aspect visual fresco."
                },
                {
                  title: "Bloqueio de Umidade",
                  desc: "Evita o amolecimento de alimentos crocantes e previne a proliferação de fungos e bactérias."
                },
                {
                  title: "Retenção de Aromas",
                  desc: "Mantém as características voláteis de cafés, grãos e condimentos totalmente intactas no interior."
                }
              ].map((benefit, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-[24px] bg-[#0B1F3A]/72 border border-[#2F80FF]/18 shadow-[0_18px_60px_rgba(37,99,235,0.12)] hover:bg-[#0B1F3A]/90 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center text-[#2F80FF] mb-4 border border-[#2F80FF]/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-sm sm:text-base">{benefit.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 3: Por que a alta barreira importa? (Alta barreira não é detalhe técnico) */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Garantia de Qualidade Comercial
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#06142D] mb-6 tracking-tight">
              Alta barreira não é detalhe técnico. <span className="text-[#2F80FF]">É proteção para o valor do seu produto.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Luz, oxigênio, umidade, gases e aromas podem comprometer frescor, textura, sabor e percepção de qualidade. Por isso, a escolha da embalagem influencia diretamente na conservação e na experiência do consumidor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Proteção contra umidade",
                desc: "Ajuda a preservar textura, crocância e integridade de produtos secos, grãos, pós e alimentos sensíveis."
              },
              {
                title: "Proteção contra oxigênio",
                desc: "Reduz o contato do produto com o ar, ajudando a preservar aroma, sabor e qualidade por mais tempo."
              },
              {
                title: "Proteção contra luz",
                desc: "Estruturas metalizadas ou aluminizadas de alta performance ajudam a proteger produtos sensíveis à exposição luminosa."
              },
              {
                title: "Proteção contra aromas/gases",
                desc: "Ideal para produtos que precisam manter suas características originais intactas durante armazenamento, transporte e venda."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-6 hover:border-[#2F80FF]/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#2F80FF] mb-4 border border-[#2F80FF]/15">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#06142D] mb-2 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 2: Acessórios de Alta Performance (Tema Escuro Contrastante) */}
      <section className="py-24 bg-[#020817] text-slate-100 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F80FF]/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/70 border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
              <Settings className="w-4 h-4" />
              Customização Avançada
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Acessórios que aumentam <span className="text-[#2F80FF]">proteção, praticidade e valor percebido</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Além dos formatos flexíveis, a Rangel oferece acessórios que melhoram a conservação do produto, facilitam o uso no dia a dia e tornam a embalagem mais funcional para o consumidor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Válvula desgaseificadora",
                desc: "Ideal para cafés em grão ou moídos, permite a saída natural dos gases do produto e ajuda a preservar aroma e frescor por mais tempo."
              },
              {
                title: "Tin Tie",
                desc: "Fecho prático para abrir e fechar a embalagem várias vezes, mantendo o produto protegido sem depender de outro recipiente."
              },
              {
                title: "Zíper abre e fecha",
                desc: "Mais conveniência para o consumidor final, com fechamento simples e melhor experiência de uso após a abertura."
              },
              {
                title: "Picote abre fácil",
                desc: "Facilita o primeiro contato do consumidor com o produto, transmitindo praticidade e cuidado no acabamento."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-[#0B1F3A]/72 border border-[#2F80FF]/18 shadow-[0_18px_60px_rgba(37,99,235,0.12)] p-6 rounded-[24px] hover:bg-[#0B1F3A]/90 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center text-[#2F80FF] mb-4 border border-[#2F80FF]/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href="https://wa.me/5511900000000"
              onClick={trackGoogleAdsCTA}
              className="bg-[#009E73] hover:bg-[#008762] text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Quero escolher o melhor acessório</span>
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais Bento Grid com Tabela Comparativa de Prazos (Tema Claro Premium) */}
      <section id="diferenciais" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            Por que somos diferentes?
          </span>
          <h2 className="text-3xl md:text-[44px] font-black text-[#020817] mb-6 tracking-tight">
            Os diferenciais que impulsionam o seu negócio
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Eliminamos os gargalos tradicionais do mercado de embalagens flexíveis: burocracia, prazos excessivos e grandes investimentos travados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Bento Card 1: Entrega Recorde de 1 a 3 dias */}
          <div className="md:col-span-2 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-8 transition-all duration-300 relative overflow-hidden group hover:border-[#2F80FF]/40">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#EAF2FF]/40 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/15 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-4">
                  Velocidade de Startup
                </span>
                <h3 className="text-2xl font-black text-[#020817] mb-4 leading-tight">
                  Sua embalagem pronta em tempo recorde
                </h3>
                <p className="text-sm text-[#64748B] max-w-xl leading-relaxed">
                  Enquanto a concorrência tradicional exige que você planeje seus estoques com meses de antecedência, nós agilizamos sua operação para você rodar novos lotes ou testes instantaneamente.
                </p>
              </div>

              {/* Tabela Comparativa de Prazos */}
              <div className="w-full bg-[#F7FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 overflow-hidden">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-[#CBD5E1] text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#64748B]">
                  <div>Operador</div>
                  <div className="text-center">Prazo Médio</div>
                  <div className="text-right">Pedido Mínimo</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-slate-200/50 items-center">
                  <div className="font-bold text-[#06142D] flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#2F80FF]" />
                    Rangel Embalagens
                  </div>
                  <div className="text-center font-black text-[#2F80FF] text-xs sm:text-sm">
                    1 a 3 dias úteis
                  </div>
                  <div className="text-right font-semibold text-[#334155] text-xs sm:text-sm">
                    A partir de 200 un.
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 items-center">
                  <div className="font-semibold text-slate-400 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    Concorrentes Padrão
                  </div>
                  <div className="text-center font-bold text-slate-400 text-xs sm:text-sm">
                    Até 60 dias úteis
                  </div>
                  <div className="text-right font-bold text-slate-400 text-xs sm:text-sm">
                    De 20.000 a 50.000 un.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Lote de 200 un */}
          <div className="md:col-span-1 bg-[#EAF2FF]/30 p-8 rounded-[24px] border border-[#2F80FF]/25 hover:border-[#2F80FF]/50 transition-all duration-300 relative overflow-hidden group shadow-sm flex flex-col justify-between gap-8">
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#2F80FF]/15 flex items-center justify-center text-[#2F80FF] mb-6 group-hover:scale-105 transition-transform shadow-sm">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-3">Pedidos a partir de 200 unidades</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Ideal para pequenas indústrias, produtores artesanais, lançamentos de novos produtos ou edições limitadas. Não enterre seu capital de giro em estoques gigantescos de embalagens plásticas.
                </p>
              </div>
              <div className="bg-white border border-[#2F80FF]/20 rounded-xl p-4 text-center shadow-sm">
                <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest block mb-1">Flexibilidade Financeira</span>
                <span className="text-xl font-black text-[#06142D]">Lote Viável e sem Excesso</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Padrão Industrial */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-8 hover:border-[#2F80FF]/25 transition-all duration-300 flex flex-col justify-between gap-6 group shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2F80FF] mb-2 group-hover:scale-105 transition-transform">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#020817] mb-2">Padrão Técnico de Grandes Indústrias</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Utilizamos o mesmo maquinário e as mesmas matérias-primas importadas das multinacionais para entregar o melhor visual e proteção mecânica.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Personalização Total */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-8 hover:border-[#2F80FF]/25 transition-all duration-300 flex flex-col justify-between gap-6 group shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2F80FF] mb-2 group-hover:scale-105 transition-transform">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#020817] mb-2">Estruturas Sob Medida</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Seja pouch plano, sanfonado com ou sem válvula, stand up pouch ou bisnagas. Desenvolvemos com as micragens e tamanhos exatos para o seu produto.
              </p>
            </div>
          </div>

          {/* Bento Card 5: Logística Reversa Integrada */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-8 hover:border-[#2F80FF]/25 transition-all duration-300 flex flex-col justify-between gap-6 group shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2F80FF] mb-2 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#020817] mb-2">Total Conformidade Ambiental</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Logística reversa estruturada e em total conformidade com o Decreto nº 12.688/2025 de embalagens plásticas. Sua marca segura perante a lei.
              </p>
            </div>
          </div>

        </div>

        {/* Call to Action Comercial Verde */}
        <div className="flex justify-center">
          <motion.a 
            href="https://wa.me/5511900000000"
            onClick={trackGoogleAdsCTA}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#009E73] hover:bg-[#008762] text-white px-10 py-5 rounded-full font-bold text-lg tracking-tight shadow-[0_8px_24px_rgba(0,158,115,0.18)] transition-all duration-300 flex items-center gap-3"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Falar com time comercial</span>
            <ChevronRight className="w-5 h-5 ml-1" />
          </motion.a>
        </div>
      </section>

      {/* NOVA SEÇÃO 4: Comece com pequenas quantidades. Cresça com padrão industrial. */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Esquerda: Copy Comercial */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingUp className="w-4 h-4" />
                Viabilidade e Escala
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#06142D] mb-6 tracking-tight leading-tight">
                Comece com pequenas quantidades. <br />
                <span className="text-[#2F80FF]">Cresça com padrão industrial.</span>
              </h2>
              <p className="text-base text-[#334155] leading-relaxed mb-6 font-semibold">
                Muitos negócios ainda não precisam comprar milhares de embalagens. A Rangel permite que marcas em crescimento tenham acesso a embalagens profissionais, com qualidade e acabamento, mesmo em volumes reduzidos.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Se você está validando um novo produto, lançando uma linha, testando o mercado ou profissionalizando sua marca, a embalagem não precisa ser uma barreira. Com pedidos a partir de 200 unidades, é possível começar com mais segurança, menos estoque parado e mais presença no ponto de venda.
              </p>
              <a 
                href="https://wa.me/5511900000000"
                onClick={trackGoogleAdsCTA}
                className="bg-[#009E73] hover:bg-[#008762] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Falar com time comercial
              </a>
            </div>

            {/* Direita: Grid de Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Menos estoque parado",
                  desc: "Compre de forma mais inteligente, sem comprometer seu capital de giro em grandes volumes de embalagens logo no início."
                },
                {
                  title: "Mais qualidade desde o início",
                  desc: "Mesmo em pequena escala, seu produto pode chegar ao cliente final com apresentação visual e barreira industrial de ponta."
                },
                {
                  title: "Flexibilidade para testes",
                  desc: "Ideal para lançamentos rápidos, novos sabores, edições limitadas, linhas sazonais e validação de produtos no varejo."
                },
                {
                  title: "Segurança para crescer",
                  desc: "Quando a sua demanda de vendas aumentar, sua marca já começa com um formato de embalagem escalável e aprovado."
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-6 hover:border-[#2F80FF]/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#2F80FF] mb-4 border border-[#2F80FF]/15">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#06142D] mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 1: A embalagem ideal depende do que você vende */}
      <section className="py-24 bg-[#F7FAFC] relative overflow-hidden border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/15 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-4">
              Segmentos e Aplicações
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#06142D] mb-6 tracking-tight">
              A embalagem ideal depende do que você vende
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Cada produto exige uma solução diferente de proteção, apresentação e fechamento. A Rangel orienta sua escolha com base no tipo de produto, volume, barreira necessária e experiência desejada para o consumidor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Café, grãos e em pó",
                desc: "Embalagens sanfonadas, stand up pouch e pouches com alta barreira para preservar o aroma, frescor e apresentação excelente no ponto de venda.",
                icon: Coffee
              },
              {
                title: "Cremes e pastosos",
                desc: "Bisnagas flexíveis para requeijão, doce de leite, cheddar, chocolate e produtos pastosos que exigem praticidade e vedação hermética segura.",
                icon: Droplets
              },
              {
                title: "Snacks e alimentos secos",
                desc: "Soluções flexíveis com ótima resistência mecânica, fechamento prático e excelente exposição visual para produtos de alto giro no varejo.",
                icon: Cookie
              },
              {
                title: "Suplementos e premium",
                desc: "Embalagens stand up pouch com aparência corporativa, proteção extrema contra umidade/oxigênio e opções de acabamentos metalizados sofisticados.",
                icon: Sparkles
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-6 hover:border-[#2F80FF]/25 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#2F80FF] mb-6 border border-[#2F80FF]/15 group-hover:scale-105 transition-transform">
                    <item.icon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="font-bold text-[#06142D] mb-3 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social & Parceiros (Fundo Claro) */}
      <section className="py-24 bg-[#F7FAFC] text-[#020817] relative overflow-hidden border-b border-slate-200/50">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#64748B] text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#2F80FF]" />
              Autoridade Nacional
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#06142D] mb-8 tracking-tighter leading-[1.05]">
              Marcas de peso que <br />
              <span className="text-[#2F80FF]">já confiam na Rangel.</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed">
              Fornecemos para as maiores marcas de café e alimentos do Brasil, assegurando o mesmo crivo rígido de qualidade em todas as remessas.
            </p>
          </div>

          <div className="max-w-5xl mx-auto w-full mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Partner 1: 3 Corações */}
              <div className="relative h-[420px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-[0_14px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-500 cursor-pointer group hover:-translate-y-1.5">
                <img 
                  src="/card1.webp" 
                  alt="Grupo 3 Corações - Rangel Embalagens" 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                  <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest block mb-2">Estrutura Laminada Premium</span>
                  <h4 className="text-2xl font-bold tracking-tight">Grupo 3 Corações</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">Laminação de alta barreira para preservação do sabor puro e aroma do café moído.</p>
                </div>
              </div>

              {/* Partner 2: Nestlé */}
              <div className="relative h-[420px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-[0_14px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-500 cursor-pointer group hover:-translate-y-1.5">
                <img 
                  src="/card2.webp" 
                  alt="Nestlé Brasil - Rangel Embalagens" 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                  <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest block mb-2">Proteção Hermética Total</span>
                  <h4 className="text-2xl font-bold tracking-tight">Nestlé Brasil</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">Embalagens sob rigorosos padrões globais de segurança alimentar e barreira à umidade.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Proof Stats Banner */}
          <div className="pt-16 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Anos de Mercado", value: "30+" },
              { label: "Clientes Atendidos", value: "1.500+" },
              { label: "Prazo de Entrega", value: "1-3 Dias" },
              { label: "Satisfação Geral", value: "95%" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-black text-[#06142D] mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:text-[#2563EB]">{stat.value}</p>
                <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5: Liderança Técnica e Premiações (Tema Escuro Profundo) */}
      <section className="py-24 bg-[#020817] text-slate-100 relative overflow-hidden border-t border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F80FF]/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A]/70 border border-[#2F80FF]/25 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-6">
                História de Rigor
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Liderança técnica em <br />
                <span className="text-[#2F80FF]">embalagens flexíveis</span>
              </h2>
              <p className="text-base text-slate-400 leading-relaxed mb-8">
                A Rangel é uma empresa brasileira especializada em embalagens pré-formadas de alta performance, entregando a mais alta barreira de proteção e agilidade comercial do setor.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { value: "91.9%", label: "Confiabilidade", desc: "Aprovados em auditoria de integridade de selagem." },
                  { value: "59.5%", label: "Velocidade", desc: "De redução no leadtime de lançamento de produtos dos clientes." },
                  { value: "100%", label: "Atóxico", desc: "Embalagens livres de Bisfenol-A e com certificação para alimentos." }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-[24px] bg-[#0B1F3A]/72 border border-[#2F80FF]/18 flex flex-col items-center text-center group hover:bg-[#0B1F3A]/90 hover:border-[#2F80FF]/30 hover:shadow-[0_18px_60px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-3xl font-black mb-2 text-[#2F80FF]">{stat.value}</span>
                    <div className="w-10 h-[2px] bg-white/10 rounded-full mb-4 group-hover:bg-[#2F80FF] transition-colors" />
                    <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: "Prêmio ABRE 2013", 
                category: "Design & Inovação",
                desc: "Vencedor nacional na categoria de embalagens flexíveis com foco em funcionalidade.",
                year: "2013" 
              },
              { 
                name: "EmbalagemMarca 2017", 
                category: "Destaque do Setor",
                desc: "Reconhecimento pela qualidade de laminação e barreira protetora contra oxigênio.",
                year: "2017" 
              },
              { 
                name: "Grandes Cases 2017", 
                category: "Cases de Sucesso",
                desc: "Premiado pela viabilidade técnica e impacto comercial no ponto de venda.",
                year: "2017" 
              }
            ].map((award, i) => (
              <div
                key={i}
                className="relative p-6 rounded-[24px] bg-[#0B1F3A]/72 border border-[#2F80FF]/18 hover:border-[#2F80FF]/35 shadow-[0_18px_60px_rgba(37,99,235,0.12)] hover:bg-[#0B1F3A]/90 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold text-[#2F80FF] tracking-widest uppercase bg-[#2F80FF]/10 px-3 py-1 rounded-full border border-[#2F80FF]/25">
                      {award.year}
                    </span>
                    <span className="text-sm text-[#2F80FF] font-bold">★</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#2F80FF] transition-colors">
                    {award.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#2F80FF] mb-3">
                    {award.category}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 5: Como funciona o atendimento (Do briefing ao orçamento) */}
      <section className="py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/15 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-4">
              Atendimento Consultivo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#06142D] mb-6 tracking-tight">
              Do briefing ao orçamento: <span className="text-[#2F80FF]">um processo simples e orientado</span>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              A Rangel ajuda você a entender qual embalagem faz mais sentido para o seu produto, considerando aplicação, quantidade, barreira, formato e acabamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Você informa o produto",
                desc: "Conte o que será embalado, volume aproximado, necessidade de proteção e objetivo comercial."
              },
              {
                step: "02",
                title: "A equipe indica o formato",
                desc: "A Rangel avalia opções como sanfonada, stand up pouch, pouch simples, bisnaga e acessórios adequados."
              },
              {
                step: "03",
                title: "Orientação técnica",
                desc: "São considerados barreira de proteção ao oxigênio/luz, refechamento, apresentação de PDV e viabilidade."
              },
              {
                step: "04",
                title: "Orçamento direcionado",
                desc: "Com as informações técnicas certas, nossa equipe comercial indica uma solução alinhada ao seu momento."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-6 relative group hover:border-[#2F80FF]/25 transition-all duration-300">
                <div className="absolute top-4 right-6 text-3xl font-black text-slate-100 group-hover:text-[#EAF2FF] transition-colors">{item.step}</div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#2F80FF] mb-6 border border-[#2F80FF]/15">
                  <CheckCircle2 className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-bold text-[#06142D] mb-3 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href="https://wa.me/5511900000000"
              onClick={trackGoogleAdsCTA}
              className="bg-[#009E73] hover:bg-[#008762] text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Falar com o time comercial</span>
            </a>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 6: Tabela de Formatos e Aplicações */}
      <section className="py-24 bg-[#F7FAFC] relative overflow-hidden border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#2F80FF]/15 text-[#2F80FF] text-xs font-bold uppercase tracking-wider mb-4">
              Guia Técnico Rápido
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#06142D] mb-4 tracking-tight">
              Compare os principais formatos de embalagem
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Veja qual solução pode fazer mais sentido de acordo com o tipo de produto, necessidade de proteção e experiência desejada.
            </p>
          </div>

          {/* Versão Desktop (Tabela) */}
          <div className="hidden md:block w-full bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#06142D] text-white font-extrabold text-xs uppercase tracking-wider">
                  <th className="p-6">Formato</th>
                  <th className="p-6">Aplicações Recomendadas</th>
                  <th className="p-6">Diferenciais Técnicos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm text-[#334155]">
                {[
                  { format: "Sanfonada", app: "Café, grãos, pós, cereais, snacks", diff: "Fica estruturada em pé no ponto de venda, valoriza o produto e permite fechos/acessórios." },
                  { format: "Stand Up", app: "Alimentos, naturais, suplementos, pet, cosméticos", diff: "Excelente exposição no PDV e possibilita aplicação de zíper hermético ou válvulas." },
                  { format: "Pouch", app: "Produtos de maior volume, transporte de insumos", diff: "Alta resistência a rasgos, ótimo rendimento logístico e proteção superior contra elementos externos." },
                  { format: "Bisnaga", app: "Requeijão, cremes, doce de leite, cheddar, chocolate", diff: "Praticidade absoluta para produtos viscosos e facilidade no manuseio/dosagem comercial." },
                  { format: "Tin Tie", app: "Cafés especiais e produtos que demandam refechamento", diff: "Acessório acoplado que permite abrir e fechar a embalagem várias vezes sem rasgar." },
                  { format: "Válvula", app: "Cafés em grãos ou moídos que liberam gases", diff: "Válvula desgaseificadora que permite saída de gases e impede entrada do oxigênio." }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-[#06142D]">{row.format}</td>
                    <td className="p-6 font-medium text-[#334155]">{row.app}</td>
                    <td className="p-6 text-slate-500 leading-relaxed">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Versão Mobile (Cards Empilhados) */}
          <div className="md:hidden space-y-4">
            {[
              { format: "Sanfonada", app: "Café, grãos, pós, cereais, snacks", diff: "Fica estruturada em pé no ponto de venda, valoriza o produto e permite fechos/acessórios." },
              { format: "Stand Up", app: "Alimentos, naturais, suplementos, pet, cosméticos", diff: "Excelente exposição no PDV e possibilita aplicação de zíper hermético ou válvulas." },
              { format: "Pouch", app: "Produtos de maior volume, transporte de insumos", diff: "Alta resistência a rasgos, ótimo rendimento logístico e proteção superior contra elementos externos." },
              { format: "Bisnaga", app: "Requeijão, cremes, doce de leite, cheddar, chocolate", diff: "Praticidade absoluta para produtos viscosos e facilidade no manuseio/dosagem comercial." },
              { format: "Tin Tie", app: "Cafés especiais e produtos que demandam refechamento", diff: "Acessório acoplado que permite abrir e fechar a embalagem várias vezes sem rasgar." },
              { format: "Válvula", app: "Cafés em grãos ou moídos que liberam gases", diff: "Válvula desgaseificadora que permite saída de gases e impede entrada do oxigênio." }
            ].map((row, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-sm">
                <div className="text-xs font-bold text-[#2F80FF] uppercase tracking-wider mb-2">Formato</div>
                <h4 className="text-base font-extrabold text-[#06142D] mb-4">{row.format}</h4>
                
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Aplicações</div>
                <p className="text-sm text-[#334155] mb-4 font-semibold">{row.app}</p>

                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Diferenciais</div>
                <p className="text-xs text-slate-500 leading-relaxed">{row.diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre Nós com Logística Reversa (Tema Claro Premium) */}
      <section id="sobre" className="py-24 px-6 relative bg-[#F7FAFC] overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F80FF]/3 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563eb]/2 rounded-full blur-[100px] pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Esquerda: Copy História */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#06142D] rounded-xl flex items-center justify-center shadow-lg shadow-[#06142D]/20">
                  <Package className="text-white w-6 h-6" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-[#06142D]">Rangel<span className="text-[#2F80FF]">.</span></span>
              </div>
              
              <h2 className="text-4xl font-black text-[#06142D] tracking-tight leading-[1.15] mb-6">
                Tradição de 30 anos em <br />
                <span className="text-[#2F80FF]">soluções flexíveis</span>
              </h2>
              
              <div className="w-20 h-1 bg-[#2F80FF] rounded-full mb-8" />
              
              <p className="text-[#334155] text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                Fundada em 1991, a Rangel Embalagens nasceu para preencher a lacuna de fornecedores de embalagens plásticas que aliam agilidade, conformidade total e padrão de excelência nacional.
              </p>
              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                Nossa fábrica opera em São Paulo com linhas de laminação e corte de precisão tecnológica. Evoluímos de forma contínua com investimentos em processos atóxicos e testes de estanqueidade para garantir as melhores soluções de embalagem flexível.
              </p>
            </div>

            {/* Direita: Card de Logística Reversa / Decreto 12.688/2025 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-8 md:p-12 backdrop-blur-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#06142D] flex items-center gap-3">
                  <ShieldCheck className="text-[#2F80FF] w-6 h-6" />
                  Sustentabilidade e Lei
                </h3>
                
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed border-l-4 border-[#2F80FF] pl-4 font-semibold">
                  Operamos em estrita conformidade com o <strong className="text-[#06142D]">Decreto Federal nº 12.688/2025</strong>, que regula a obrigatoriedade nacional de logística reversa de embalagens plásticas descartadas.
                </p>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Adquirindo as embalagens Rangel, sua empresa conta com auditoria e certificação de compensação ambiental, garantindo que o seu produto atenda aos requisitos do Ministério do Meio Ambiente e a metas de sustentabilidade corporativas.
                </p>

                <div className="pt-6 border-t border-[#CBD5E1] flex gap-4">
                  <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px] sm:text-xs font-bold text-[#334155]">
                    Certificado de Reciclagem
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px] sm:text-xs font-bold text-[#334155]">
                    Decreto 12.688/2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: CTA Final Premium & Corporativo */}
      <section id="contato" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#06142D] via-[#0B1F3A] to-[#12345A] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_18px_60px_rgba(37,99,235,0.12)] border border-[#2F80FF]/15 backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F80FF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Embalagens de alta barreira a partir de 200 unidades
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-10 leading-relaxed font-semibold">
                Sua produção pronta em até 3 dias úteis. Converse com o nosso time comercial e garanta a melhor embalagem e agilidade operacional para o seu produto escalar.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/5511900000000"
                  onClick={trackGoogleAdsCTA}
                  className="bg-[#009E73] hover:bg-[#008762] text-white px-10 py-5 rounded-full font-extrabold shadow-[0_8px_24px_rgba(0,158,115,0.18)] hover:-translate-y-0.5 transition-all text-lg flex items-center justify-center gap-3"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>Falar com time comercial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Tema Escuro Institucional) */}
      <footer className="bg-[#020817] pt-20 pb-12 px-6 border-t border-white/5 text-slate-400 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <Package className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-white">Rangel<span className="text-[#2F80FF] font-light text-base ml-1">\soulpack</span></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                Desenvolvimento e corte sob medida de embalagens flexíveis com alta barreira contra elementos e prazo recorde no mercado.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Formatos</h4>
              <ul className="space-y-4 text-xs sm:text-sm font-semibold">
                <li><a href="#solucoes" className="hover:text-[#2F80FF] transition-colors">Pouch de Alta Barreira</a></li>
                <li><a href="#solucoes" className="hover:text-[#2F80FF] transition-colors">Sanfonadas com Válvula</a></li>
                <li><a href="#solucoes" className="hover:text-[#2F80FF] transition-colors">Stand Up Pouches</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Institucional</h4>
              <ul className="space-y-4 text-xs sm:text-sm font-semibold">
                <li><a href="#sobre" className="hover:text-[#2F80FF] transition-colors">Sobre a Rangel</a></li>
                <li><a href="#diferenciais" className="hover:text-[#2F80FF] transition-colors">Comparativo de Prazos</a></li>
                <li><a href="#alta-barreira" className="hover:text-[#2F80FF] transition-colors">Tecnologia de Barreira</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contato Comercial</h4>
              <ul className="space-y-4 text-xs sm:text-sm mb-6 font-semibold">
                <li>contato@rangelembalagens.com.br</li>
                <li>(11) 3346-6666</li>
                <li>Parque da Moóca, São Paulo/SP</li>
              </ul>
              <a 
                href="https://wa.me/5511900000000"
                onClick={trackGoogleAdsCTA}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3.5 py-2 rounded-full border border-emerald-500/20 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Online: Falar com Consultor
              </a>
            </div>
          </div>

          {/* Linha de separação sutil */}
          <div className="w-full h-[1px] bg-white/5 my-8" />

          {/* Compliance & CNPJ */}
          <div className="text-[10px] sm:text-xs text-slate-500 space-y-4 font-semibold leading-relaxed">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
              <div>
                <p className="font-bold text-slate-300 text-sm">RANGEL INDUSTRIA E COMERCIO LTDA</p>
                <p>C.N.P.J. 66.037.045/0001-49 | I.E.: 113.993.858.110</p>
                <p>Endereço: Av. Henry Ford, 2380/2400 - Parque da Moóca - São Paulo/SP - CEP: 03109-001</p>
              </div>
              <div className="flex gap-6">
                <span 
                  onClick={() => setPrivacyModalOpen(true)} 
                  className="text-slate-400 hover:text-[#2F80FF] transition-colors cursor-pointer underline decoration-dotted"
                >
                  Políticas de Privacidade (LGPD)
                </span>
                <span 
                  onClick={() => setTermsModalOpen(true)} 
                  className="text-slate-400 hover:text-[#2F80FF] transition-colors cursor-pointer underline decoration-dotted"
                >
                  Termos de Uso
                </span>
              </div>
            </div>

            {/* Ads Platforms Compliance */}
            <div className="pt-6 border-t border-white/5 text-[9px] sm:text-[10px] text-[#64748B] space-y-3 leading-normal font-medium">
              <p>
                <strong>AVISO LEGAL META (FACEBOOK):</strong> Este site não pertence à Meta Platforms, Inc. de nenhuma forma. Os nomes de produtos e marcas Meta são de responsabilidade de suas respectivas marcas.
              </p>
              <p>
                <strong>AVISO LEGAL GOOGLE:</strong> Este site é promovido por campanhas de tráfego pago Google Ads de responsabilidade exclusiva da RANGEL INDUSTRIA E COMERCIO LTDA, sem qualquer vinculação direta ou endosso do Google LLC.
              </p>
            </div>

            <div className="pt-6 text-center text-[10px] text-[#64748B] border-t border-white/5">
              <p>© {new Date().getFullYear()} RANGEL INDUSTRIA E COMERCIO LTDA. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modais de Termos e LGPD */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setPrivacyModalOpen(false)}
            className="absolute inset-0 bg-[#020817]/80 backdrop-blur-sm"
          />
          <div className="relative bg-white text-slate-800 rounded-3xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 text-left">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Políticas de Privacidade</h3>
              <button onClick={() => setPrivacyModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors font-bold">✕</button>
            </div>
            <div className="space-y-4 text-sm text-slate-600 font-semibold leading-relaxed font-sans">
              <p className="font-bold text-[#06142D]">1. Tratamento de Dados (LGPD)</p>
              <p>Coletamos nome, telefone de contato e detalhes comerciais fornecidos por livre e espontânea vontade pelo usuário ao acionar os botões de contato com o WhatsApp Comercial. Seus dados são utilizados única e exclusivamente para elaboração de cotação.</p>
              <p className="font-bold text-[#06142D]">2. Armazenamento e Exclusão</p>
              <p>Em conformidade com a LGPD, o titular de dados possui o direito de exigir a remoção imediata e integral de qualquer dado pessoal armazenado em nosso sistema, bastando solicitar através do e-mail contato@rangelembalagens.com.br.</p>
            </div>
          </div>
        </div>
      )}

      {termsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setTermsModalOpen(false)}
            className="absolute inset-0 bg-[#020817]/80 backdrop-blur-sm"
          />
          <div className="relative bg-white text-slate-800 rounded-3xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 text-left">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Termos de Uso</h3>
              <button onClick={() => setTermsModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors font-bold">✕</button>
            </div>
            <div className="space-y-4 text-sm text-slate-600 font-semibold leading-relaxed font-sans">
              <p className="font-bold text-[#06142D]">1. Uso dos Materiais</p>
              <p>Todos os conteúdos, imagens, marcas registradas e patentes expressas neste portal pertencem à RANGEL INDUSTRIA E COMERCIO LTDA. É proibida a cópia, republicação ou alteração sem expressa autorização por escrito dos administradores.</p>
            </div>
          </div>
        </div>
      )}

      {/* Botão de Whatsapp Flutuante Comercial Verde */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      >
        <span className="bg-white text-slate-800 text-xs font-bold py-2 px-4 rounded-full border border-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none backdrop-blur-md">
          Falar com Comercial
        </span>
        <a
          href="https://wa.me/5511900000000"
          onClick={trackGoogleAdsCTA}
          className="w-14 h-14 bg-[#009E73] hover:bg-[#008762] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,158,115,0.25)] hover:-translate-y-1 transition-all duration-300 text-white relative border border-emerald-500/20"
        >
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </motion.div>
      
    </div>
  );
}
