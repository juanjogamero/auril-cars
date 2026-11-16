"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Gauge, Menu, ShieldCheck, Sparkles, Wrench, X } from "lucide-react";

type Category = "Todos" | "Mecánica" | "Mantenimiento" | "Estética";
const categories: Category[] = ["Todos", "Mecánica", "Mantenimiento", "Estética"];
const services: { id: string; name: string; category: Exclude<Category,"Todos">; detail: string; icon: "wrench"|"gauge"|"shield"|"sparkles" }[] = [
 { id:"01", name:"Diagnóstico y revisión", category:"Mecánica", detail:"Concepto de servicio para presentar comprobaciones electrónicas, diagnosis y revisiones preventivas.", icon:"gauge" },
 { id:"02", name:"Mecánica general", category:"Mecánica", detail:"Reparaciones y mantenimiento de componentes mecánicos con información clara para el visitante.", icon:"wrench" },
 { id:"03", name:"Frenos y seguridad", category:"Mantenimiento", detail:"Sección dedicada a los sistemas de frenado, neumáticos y seguridad del vehículo.", icon:"shield" },
 { id:"04", name:"Mantenimiento periódico", category:"Mantenimiento", detail:"Punto de entrada para revisiones, filtros, lubricación y cuidados esenciales.", icon:"gauge" },
 { id:"05", name:"Cuidado del automóvil", category:"Estética", detail:"Propuesta de servicio de limpieza, puesta a punto y acabado exterior.", icon:"sparkles" },
 { id:"06", name:"Llantas y neumáticos", category:"Mantenimiento", detail:"Presentación de revisiones y soluciones para el contacto con la carretera.", icon:"wrench" }
];
const gallery=[
 {title:"Precisión de taller",tag:"Instalaciones",image:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=85"},
 {title:"Mecánica profesional",tag:"Mecánica",image:"https://images.unsplash.com/photo-1632823471565-1ecdf6b753f4?auto=format&fit=crop&w=1100&q=85"},
 {title:"Detalles que importan",tag:"Estética",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85"}
];
const icons={wrench:Wrench,gauge:Gauge,shield:ShieldCheck,sparkles:Sparkles};

export default function Home() {
 const [active,setActive]=useState<Category>("Todos");
 const [mobileOpen,setMobileOpen]=useState(false);
 const [selected,setSelected]=useState<string|null>(null);
 const filtered=services.filter(s=>active==="Todos"||s.category===active);
 return <main className="bg-[#f5f5f2] text-[#1b2329] selection:bg-[#e65a46] selection:text-white">
  <div className="bg-[#15212b] px-5 py-2.5 text-center text-[10px] font-bold uppercase tracking-[.22em] text-[#bccad2]">Proyecto de portfolio · Web conceptual de servicios de automoción</div>
  <header className="sticky top-0 z-40 border-b border-[#e9e9e5] bg-white/95 backdrop-blur-md">
   <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
    <a href="#inicio" className="flex items-center gap-3" aria-label="Auril Cars, inicio"><span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#e65a46] text-lg font-black tracking-tight text-white">AC</span><span className="text-[20px] font-black tracking-[-.07em]">AURIL<span className="text-[#e65a46]">CARS</span><span className="block pt-0.5 text-[9px] font-bold tracking-[.22em] text-[#7d8a92]">AUTOMOTIVE CONCEPT</span></span></a>
    <nav aria-label="Navegación principal" className="hidden items-center gap-9 text-xs font-bold uppercase tracking-wider md:flex"><a href="#servicios" className="hover:text-[#e65a46]">Servicios</a><a href="#filosofia" className="hover:text-[#e65a46]">Concepto</a><a href="#galeria" className="hover:text-[#e65a46]">Galería</a><a href="#proyecto" className="hover:text-[#e65a46]">Proyecto</a></nav>
    <a href="#servicios" className="hidden items-center gap-3 bg-[#17232c] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#e65a46] md:inline-flex">Descubrir servicios <ArrowUpRight size={16}/></a>
    <button type="button" aria-label={mobileOpen?"Cerrar menú":"Abrir menú"} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)} className="p-2 md:hidden">{mobileOpen?<X/>:<Menu/>}</button>
   </div>
   {mobileOpen&&<nav className="flex flex-col gap-5 border-t bg-white px-7 py-6 text-sm font-semibold md:hidden">{[["Servicios","#servicios"],["Concepto","#filosofia"],["Galería","#galeria"],["Proyecto","#proyecto"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMobileOpen(false)}>{label}</a>)}</nav>}
  </header>

  <section id="inicio" className="relative isolate overflow-hidden bg-[#14222d] text-white">
   <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center"/>
   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111e29f7] via-[#111e29dd] to-[#111e2980]"/>
   <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:min-h-[730px]">
    <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.27em] text-[#ffb49d]"><span className="h-2 w-2 bg-[#f26853]"/> AUTOMOTIVE DESIGN / 001</p>
    <h1 className="max-w-[920px] text-[clamp(3.6rem,8vw,8.4rem)] font-black leading-[.95] tracking-[-.075em]">PASIÓN POR<br/><span className="text-[#f46b55]">CADA DETALLE.</span></h1>
    <p className="mt-9 max-w-[570px] border-l-2 border-[#f46b55] pl-6 text-base leading-8 text-[#d6dee2] sm:text-lg">Una experiencia digital moderna para presentar servicios de automoción con confianza, claridad y personalidad.</p>
    <div className="mt-10 flex flex-wrap gap-4"><a className="inline-flex items-center gap-4 bg-[#ef654f] px-7 py-4 text-xs font-extrabold uppercase tracking-wide transition-colors hover:bg-[#ff8b73]" href="#servicios">Explorar servicios <ArrowRight size={18}/></a><a className="inline-flex items-center gap-4 border border-white/50 px-7 py-4 text-xs font-extrabold uppercase tracking-wide transition-colors hover:bg-white/10" href="#galeria">Ver galería <ArrowUpRight size={18}/></a></div>
   </div>
   <div className="mx-auto flex max-w-7xl justify-between border-t border-white/20 px-6 py-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#c4ced3] sm:px-8"><span>DISEÑO WEB / NEXT.JS</span><span className="hidden sm:inline">SERVICIOS · ESTÉTICA · PRECISIÓN</span></div>
  </section>

  <section id="servicios" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
   <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#e65a46]">01 — Qué ofrece la web</p><h2 className="mt-4 text-4xl font-black tracking-[-.06em] sm:text-6xl">SERVICIOS <span className="text-[#a4acae]">A MEDIDA.</span></h2></div><p className="max-w-[350px] text-sm leading-7 text-[#647078]">Un catálogo interactivo que permite explorar de forma sencilla las distintas áreas de una propuesta de taller.</p></div>
   <div className="mb-8 mt-12 flex flex-wrap gap-2" aria-label="Filtrar servicios">{categories.map(cat=><button key={cat} type="button" aria-pressed={active===cat} onClick={()=>{setActive(cat);setSelected(null)}} className={`border px-5 py-3 text-xs font-bold transition-colors ${active===cat?"border-[#1b2933] bg-[#1b2933] text-white":"border-[#d8dfe0] bg-white text-[#44545f] hover:border-[#ef654f]"}`}>{cat}</button>)}</div>
   <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{filtered.map(s=>{const Icon=icons[s.icon];const expanded=selected===s.id;return <article key={s.id} className="border border-[#e3e6e6] bg-white p-7 transition-all hover:border-[#f07a68] hover:shadow-lg sm:p-9"><div className="flex items-start justify-between"><span className="text-xs font-extrabold tracking-[.2em] text-[#a8b4ba]">{s.id} / {s.category.toUpperCase()}</span><Icon size={28} strokeWidth={1.5} className="text-[#e65a46]"/></div><h3 className="mt-16 text-2xl font-black tracking-[-.045em]">{s.name}</h3><p className="mt-3 min-h-[72px] text-sm leading-7 text-[#687781]">{s.detail}</p><button type="button" aria-expanded={expanded} onClick={()=>setSelected(expanded?null:s.id)} className="mt-5 flex items-center gap-2 border-b-2 border-[#e65a46] pb-2 text-xs font-bold uppercase tracking-wider">Más información <ChevronRight size={15}/></button>{expanded&&<p className="mt-5 border-t border-[#e5e9e8] pt-5 text-sm leading-7 text-[#526571]">Esta tarjeta es una demostración de experiencia de usuario; el servicio no está vinculado a reservas ni presupuestos reales.</p>}</article>})}</div>
  </section>

  <section id="filosofia" className="bg-[#18262f] text-white"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:py-32"><div><p className="text-xs font-extrabold tracking-[.22em] text-[#fc9c88]">02 — FILOSOFÍA DE DISEÑO</p><h2 className="mt-7 text-5xl font-black leading-[1.05] tracking-[-.065em] sm:text-7xl">MÁS QUE<br/><span className="text-[#f06b55]">UN TALLER.</span></h2><p className="mt-7 max-w-[520px] text-base leading-8 text-[#b8c7ce]">Auril Cars es una demo corporativa para mostrar cómo la imagen de un negocio de automoción puede trasladarse a una web rápida, visual y accesible.</p><div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-8 text-sm font-semibold"><span className="flex items-center gap-3"><Check className="text-[#f06b55]" size={20}/> Diseño responsive para móvil y escritorio</span><span className="flex items-center gap-3"><Check className="text-[#f06b55]" size={20}/> Componentes React y filtros interactivos</span><span className="flex items-center gap-3"><Check className="text-[#f06b55]" size={20}/> Exportación estática compatible con Pages</span></div></div><div className="min-h-[380px] overflow-hidden border-[10px] border-white/10 lg:min-h-[530px]"><img alt="Fotografía ilustrativa de un automóvil moderno" loading="lazy" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"/></div></div></section>

  <section id="galeria" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#e65a46]">03 — Referencias visuales</p><div className="flex flex-wrap items-end justify-between gap-6"><h2 className="mt-4 text-4xl font-black tracking-[-.06em] sm:text-6xl">EL MUNDO <span className="text-[#a4acae]">DEL MOTOR.</span></h2><p className="max-w-[300px] text-sm leading-7 text-[#697b84]">Imágenes ilustrativas de stock; no representan trabajos realizados por un taller real.</p></div><div className="mt-12 grid gap-7 md:grid-cols-3">{gallery.map((item,i)=><article key={item.title}><div className="aspect-[4/3] overflow-hidden bg-[#d2d6d7]"><img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" src={item.image} alt={item.title+" — imagen ilustrativa"}/></div><div className="flex items-center justify-between border-b border-[#d8dedf] py-6"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e65a46]">0{i+1} / {item.tag}</p><h3 className="mt-2 text-xl font-extrabold">{item.title}</h3></div><ArrowUpRight size={23}/></div></article>)}</div></section>

  <section id="proyecto" className="bg-[#ea6551] px-5 py-20 text-[#1a282f] sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 lg:flex-row lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.22em]">04 — Proyecto frontend</p><h2 className="mt-5 text-4xl font-black tracking-[-.06em] sm:text-6xl">DISEÑADO PARA<br/>DESTACAR.</h2><p className="mt-5 max-w-xl text-sm leading-7">Concepto web para portfolio. No gestiona citas, ventas ni solicitudes de clientes; el repositorio contiene la implementación técnica.</p></div><a href="https://github.com/juanjogamero/auril-cars" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 whitespace-nowrap bg-[#18262f] px-7 py-5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#293e49]">Ver código en GitHub <ArrowUpRight size={19}/></a></div></section>
  <footer className="bg-[#111c24] px-5 py-10 text-[#b0c0c8] sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs sm:flex-row sm:items-center"><span className="font-black tracking-wider text-white">AURIL<span className="text-[#e65a46]">CARS</span> <span className="ml-2 font-medium text-[#91a5b2]">— Web concept</span></span><span>Proyecto frontend · No es una empresa operativa</span><a href="#inicio" className="font-bold text-white">Volver arriba ↑</a></div></footer>
 </main>;
}