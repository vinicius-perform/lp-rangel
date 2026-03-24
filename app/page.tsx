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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm' : 'bg-transparent'}`}>
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

      {/* Hero Section - Redesigned Dark Mode */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden flex items-center min-h-[95vh] bg-slate-950">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.15]" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Upgrade Industrial para sua Marca
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              Embalagens de alta qualidade — <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">sem exigir grandes estoques</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              A Rangel Embalagens entrega padrão industrial para o seu produto, permitindo pedidos a partir de <strong className="text-white">200 unidades</strong>. Proteção total e design premium para o seu negócio.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/5500000000000"
                onClick={trackGoogleAdsCTA}
                className="bg-[#FACC15] text-slate-900 px-10 py-5 rounded-full font-bold shadow-[0_20px_40px_rgba(250,204,21,0.2)] hover:bg-[#EAB308] hover:shadow-[0_20px_40px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
              >
                Solicitar orçamento
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#solucoes"
                className="px-10 py-5 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                Ver Soluções
              </a>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-8 border-t border-white/5 pt-12">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
               </div>
               <div>
                  <div className="flex text-yellow-500 gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <Zap key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-sm text-slate-500 font-medium">+1.500 clientes atendidos com excelência</p>
               </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* 3-Card Composite Inspired by Reference */}
            <div className="relative w-full max-w-md aspect-[4/5]">
              
              {/* Main Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full -z-10" />

              {/* Card 1: Main Product Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 z-10 rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/10 group"
              >
                <img 
                  src="https://rangel-production.s3.sa-east-1.amazonaws.com/sanfonada_01.png" 
                  alt="Embalagem Sanfonada Premium" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl">
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Qualidade Superior</p>
                    <p className="text-white font-bold text-lg">Embalagem Sanfonada (4 soldas)</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Satisfaction/Gauge (Satellite) */}
              <motion.div
                initial={{ x: 50, y: -20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-10 -right-10 z-20 w-48 h-56 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[-20px_20px_40px_rgba(0,0,0,0.3)] p-6 flex flex-col items-center justify-center gap-4"
              >
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <circle cx="40" cy="40" r="36" fill="none" stroke="#FACC15" strokeWidth="8" strokeDasharray="226" strokeDashoffset="11" />
                  </svg>
                  <span className="absolute font-bold text-xl text-white">95%</span>
                </div>
                <div className="text-center">
                   <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Satisfação dos</p>
                   <p className="text-sm text-white font-bold">Nossos Clientes</p>
                </div>
              </motion.div>

              {/* Card 3: Minimal Order (Satellite) */}
              <motion.div
                initial={{ x: -50, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-12 z-20 w-52 bg-slate-900 shadow-2xl rounded-2xl border border-blue-500/20 p-5 flex items-center gap-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Pedido Mínimo</p>
                  <p className="text-lg text-white font-bold tabular-nums">200un</p>
                </div>
              </motion.div>

              {/* Decorative Lines/dots from reference */}
              <div className="absolute -top-12 -left-12 w-24 h-24 border-t-2 border-l-2 border-white/5 rounded-tl-3xl opacity-50" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 border-b-2 border-r-2 border-white/5 rounded-br-3xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Soft aura background details behind the grid */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left side: Copy */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Qualidade de Indústria
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Grandes marcas confiam. <span className="text-blue-600">Pequenos negócios também podem.</span>
              </motion.h2>
              
              <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8 leading-relaxed">
                A Rangel atende grandes empresas como a <strong className="text-slate-900">3 Corações</strong> e a <strong className="text-slate-900">Nestlé</strong>, mas também possibilita que pequenos empreendedores tenham acesso ao mesmo padrão de qualidade — sem precisar investir em grandes quantidades.
              </motion.p>
              
              <motion.div variants={fadeIn} className="space-y-4">
                {[
                  "Produção com padrão de grandes indústrias",
                  "Pedido mínimo acessível a partir de 200 unidades",
                  "Soluções ideais para pequenos e médios negócios"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side: Image Composition (2 Imagens) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 md:gap-8 h-[400px] sm:h-[500px] relative z-10"
            >
              {/* Image 1 - 3 Corações */}
              <div className="relative h-full w-full pt-12 md:pt-20">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 relative group transition-transform duration-300 hover:scale-[1.02]">
                  {/* Edite a imagem abaixo: */}
                  <img src="https://images.unsplash.com/photo-1606859191214-25806e8e2423?auto=format&fit=crop&w=600&q=80" alt="Cliente 1 Rangel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="font-bold text-green-800 text-[10px] text-center leading-none">3<br/>Cor</span>
                      </div>
                      <p className="text-white font-semibold text-sm">Alta Barreira</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 2 - Nestlé */}
              <div className="relative h-full w-full pb-12 md:pb-20">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 relative group transition-transform duration-300 hover:scale-[1.02]">
                  {/* Edite a imagem abaixo: */}
                  <img src="https://images.unsplash.com/photo-1498604218824-388fbfeb2b06?auto=format&fit=crop&w=600&q=80" alt="Cliente 2 Rangel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/50">
                     <span className="font-bold text-blue-800 text-xs">Nst</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
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
      <footer className="bg-white pt-20 pb-10 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Package className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-slate-900">Rangel<span className="text-blue-600">.</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Industrializando qualidade e inovação em embalagens flexíveis para o seu negócio.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Soluções</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Embalagens para Café</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Embalagens Laminadas</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Projetos Personalizados</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Empresa</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre a Rangel</a></li>
                <li><a href="#diferenciais" className="hover:text-blue-600 transition-colors">Diferenciais</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-slate-500 mb-6 font-medium">
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
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400 font-medium">© {new Date().getFullYear()} Rangel Embalagens. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="text-sm text-slate-400 font-medium cursor-pointer hover:text-slate-600">Políticas de Privacidade</span>
              <span className="text-sm text-slate-400 font-medium cursor-pointer hover:text-slate-600">Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
