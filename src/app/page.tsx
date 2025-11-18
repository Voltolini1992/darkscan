"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Scan, Zap, Eye, Lock, CheckCircle, Star, 
  TrendingUp, Users, Clock, ArrowRight, Play, X,
  CreditCard, Check, AlertTriangle, Video, Shield,
  Search, Radar, Target, Database, Activity, FileText,
  Image as ImageIcon, AlertCircle
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const plans = [
    {
      id: "basic",
      name: "BASIC SCAN",
      price: "R$ 49,90",
      period: "/mês",
      description: "Investigação básica",
      features: [
        "3 varreduras por dia",
        "Relatório simplificado",
        "Acesso a bases públicas",
        "Trust Score básico",
        "Suporte por email",
      ],
      color: "from-slate-600 to-slate-800",
      popular: false,
    },
    {
      id: "dark",
      name: "DARK GRID",
      price: "R$ 149,90",
      period: "/mês",
      description: "Investigação profunda",
      features: [
        "Varreduras ilimitadas",
        "Acesso à Dark Grid completa",
        "Rastreamento de perfis fakes",
        "Detecção de conteúdo sensível",
        "Análise de fotos vazadas",
        "Histórico digital oculto",
        "Alertas em tempo real",
        "Suporte prioritário",
      ],
      color: "from-cyan-500 to-blue-600",
      popular: true,
    },
    {
      id: "ghost",
      name: "GHOST MODE",
      price: "R$ 499,90",
      period: "/mês",
      description: "Poder forense máximo",
      features: [
        "Tudo do plano DARK GRID +",
        "Scan total irrestrito",
        "Deep Web scanning",
        "Reconstrução de passado completa",
        "Conexões secretas reveladas",
        "IA forense avançada",
        "Relatórios detalhados ilimitados",
        "Acesso antecipado a recursos",
        "Suporte VIP 24/7",
      ],
      color: "from-purple-600 to-pink-600",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Carlos, 31",
      text: "Eu estava noivo. Graças a Deus, antes de assinar um papel, pesquisei no DarkScan. Descobri que ela tinha dezenas de perfis antigos, fotos expostas e conversas comprometedoras rodando há anos. O aplicativo literalmente salvou minha vida.",
      rating: 5,
    },
    {
      name: "Ricardo, 28",
      text: "Conheci uma mulher incrível online. Tudo parecia perfeito demais. Usei o DarkScan e descobri 14 contas falsas vinculadas ao mesmo e-mail, várias denúncias e histórico digital apagado. Foi a melhor decisão que tomei.",
      rating: 5,
    },
    {
      name: "Júlio, 35",
      text: "Eu ia fechar uma sociedade com um cara que parecia gente boa. Pesquisei no DarkScan só por segurança e achei: envolvimento em golpes antigos, reportagens negativas, reclamações judiciais ocultas. Fechou a porta, abriu meus olhos.",
      rating: 5,
    },
    {
      name: "Max, 29",
      text: "Comecei a sair com uma pessoa que parecia perfeita. Usei o DarkScan e descobri que muita coisa sobre a identidade online dela não batia. Eu não teria percebido sozinho. A ferramenta é absurda.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Histórico oculto revelado",
      description: "Perfis antigos, contas apagadas, rastros escondidos.",
    },
    {
      icon: ImageIcon,
      title: "Fotos vazadas identificadas",
      description: "Imagens sensíveis e conteúdos comprometores.",
    },
    {
      icon: FileText,
      title: "Menções negativas",
      description: "Artigos, comentários e registros que podem impactar sua reputação.",
    },
    {
      icon: AlertCircle,
      title: "Alertas de risco",
      description: "Sinais de comportamento digital perigoso.",
    },
    {
      icon: Database,
      title: "Relatório automático",
      description: "Tudo organizado, claro e confidencial.",
    },
  ];

  const microTestimonials = [
    {
      title: "Eu achava que ela era perfeita…",
      text: "Usei o DarkScan por curiosidade. Descobri três perfis antigos, fotos sensíveis expostas e envolvimento em páginas que ela nunca mencionou. Salvou minha vida emocional.",
    },
    {
      title: "Se eu não tivesse checado…",
      text: "Estava prestes a viajar para conhecer a pessoa. O DarkScan mostrou que nada batia: identidade digital incoerente, fotos recicladas, padrões claros de catfish. Desviei de uma bomba.",
    },
    {
      title: "Era tudo bom demais pra ser verdade.",
      text: "Perfis apagados, conversas suspeitas, nome vinculado a conteúdos antigos. O DarkScan abriu meus olhos.",
    },
    {
      title: "Obrigado, DarkScan",
      text: "Eu realmente achava que estava vivendo um conto de fadas. Acabou que era só edição, manipulação e um histórico que teria me custado caro.",
    },
  ];

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    
    alert(`Processando pagamento do plano ${selectedPlan.toUpperCase()}...\n\nEm produção, aqui seria integrado com gateway de pagamento real (Stripe, Mercado Pago, etc).`);
    
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Realista Provocativo +18 */}
      <div className="fixed inset-0 z-0">
        {/* Base escura com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Luzes neon ambiente */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid digital esfumaçado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center'
          }} />
        </div>

        {/* Silhuetas de pessoas (censura e julgamento) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Silhueta 1 - Esquerda superior */}
          <div className="absolute top-20 left-10 w-32 h-48 opacity-30">
            <div className="relative w-full h-full">
              {/* Cabeça com censura */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 blur-sm" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-cyan-500/60 blur-[2px]" />
              {/* Corpo */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-gray-800 to-transparent blur-md rounded-t-full" />
            </div>
          </div>

          {/* Silhueta 2 - Direita superior */}
          <div className="absolute top-32 right-20 w-28 h-44 opacity-25">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 blur-sm" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-500/50 blur-[2px]" />
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-18 h-30 bg-gradient-to-b from-gray-800 to-transparent blur-md rounded-t-full" />
            </div>
          </div>

          {/* Silhueta 3 - Centro esquerda */}
          <div className="absolute top-1/2 left-1/4 w-36 h-52 opacity-20">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-18 h-18 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 blur-sm" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-3 bg-blue-500/60 blur-[2px]" />
              <div className="absolute top-18 left-1/2 -translate-x-1/2 w-24 h-34 bg-gradient-to-b from-gray-800 to-transparent blur-md rounded-t-full" />
            </div>
          </div>

          {/* Silhueta 4 - Direita inferior */}
          <div className="absolute bottom-32 right-1/4 w-30 h-46 opacity-25">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-15 h-15 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 blur-sm" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-3 bg-cyan-500/50 blur-[2px]" />
              <div className="absolute top-15 left-1/2 -translate-x-1/2 w-20 h-31 bg-gradient-to-b from-gray-800 to-transparent blur-md rounded-t-full" />
            </div>
          </div>

          {/* Silhueta 5 - Esquerda inferior */}
          <div className="absolute bottom-20 left-1/3 w-34 h-50 opacity-18">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-17 h-17 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 blur-sm" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-22 h-4 bg-purple-500/60 blur-[2px]" />
              <div className="absolute top-17 left-1/2 -translate-x-1/2 w-22 h-33 bg-gradient-to-b from-gray-800 to-transparent blur-md rounded-t-full" />
            </div>
          </div>
        </div>

        {/* Fragmentos de telas borradas e notificações */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Tela borrada 1 */}
          <div className="absolute top-40 right-1/3 w-48 h-32 bg-gray-800/40 backdrop-blur-xl rounded-lg border border-cyan-500/20 opacity-30 rotate-12">
            <div className="p-3 space-y-2">
              <div className="h-2 bg-cyan-500/30 rounded w-3/4 blur-[1px]" />
              <div className="h-2 bg-gray-600/40 rounded w-1/2 blur-[1px]" />
              <div className="h-2 bg-gray-600/40 rounded w-2/3 blur-[1px]" />
            </div>
          </div>

          {/* Tela borrada 2 */}
          <div className="absolute bottom-1/3 left-1/4 w-40 h-28 bg-gray-800/30 backdrop-blur-xl rounded-lg border border-purple-500/20 opacity-25 -rotate-6">
            <div className="p-3 space-y-2">
              <div className="h-2 bg-purple-500/30 rounded w-2/3 blur-[1px]" />
              <div className="h-2 bg-gray-600/40 rounded w-1/2 blur-[1px]" />
            </div>
          </div>

          {/* Perfil apagado */}
          <div className="absolute top-1/3 left-1/2 w-36 h-36 bg-gray-900/50 backdrop-blur-xl rounded-full border border-blue-500/20 opacity-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-700/50 rounded-full blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-12 h-12 text-red-500/40 blur-[1px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Partículas brilhantes (dados secretos) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px] animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`purple-${i}`}
              className="absolute w-1 h-1 bg-purple-400 rounded-full blur-[1px] animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Scanlines sutis */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
          }} />
        </div>

        {/* Vinheta escura nas bordas */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
      </div>

      {/* Conteúdo da página */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-cyan-500/20 backdrop-blur-sm bg-black/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Logo Icon - Scanner + Olho Digital */}
                <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center relative overflow-hidden">
                  <Radar className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
                  <div className="absolute inset-0 blur-xl bg-cyan-500/30" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wider">
                  DARKSCAN
                </h1>
                <p className="text-xs text-cyan-300/60 tracking-widest">DIGITAL FORENSICS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/login")}
                className="px-4 py-2 text-cyan-300 hover:text-cyan-100 transition-colors text-sm font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-black text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Ver Planos
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">100% Automatizado • Tecnologia Forense Avançada</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Você realmente conhece o passado de quem está entrando na sua vida?
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
              Antes de confiar… escaneie.
            </p>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              DarkScan revela aquilo que ninguém te conta — perfis antigos, fotos vazadas, histórico digital oculto e possíveis envolvimentos sensíveis que podem te atingir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-black text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3 group"
              >
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Ver Demonstração
                <span className="text-xs bg-black/20 px-2 py-1 rounded-full">75s</span>
              </button>
              <button
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gray-900 border-2 border-cyan-500/30 rounded-xl text-cyan-100 text-lg font-bold hover:bg-gray-800 hover:border-cyan-400 transition-all"
              >
                Começar Agora
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Users, value: "50K+", label: "Investigações" },
                { icon: Database, value: "2M+", label: "Bases Escaneadas" },
                { icon: Clock, value: "< 30s", label: "Tempo Médio" },
                { icon: Activity, value: "99.8%", label: "Precisão" },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-xl p-4">
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-100">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg"
              >
                <X className="w-6 h-6" />
                <span className="text-sm">Fechar</span>
              </button>
              
              <div className="bg-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/30">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-cyan-900/30 flex items-center justify-center relative">
                  <div className="text-center p-8">
                    <Video className="w-24 h-24 text-cyan-400 mx-auto mb-6 animate-pulse" />
                    <h3 className="text-2xl font-bold text-cyan-100 mb-4">
                      🎬 Vídeo de Demonstração
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                      Veja como o DARKSCAN revela a verdade em 30 segundos
                    </p>
                    
                    <div className="bg-black/80 border border-cyan-500/30 rounded-xl p-6 text-left max-w-2xl mx-auto">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-cyan-100 font-bold mb-2">
                            Para Integrar o Vídeo Real:
                          </h4>
                          <ol className="text-sm text-gray-400 space-y-2 list-decimal list-inside">
                            <li>Gere o vídeo usando D-ID, HeyGen ou Synthesia</li>
                            <li>Faça upload no YouTube (não listado)</li>
                            <li>Copie o ID do vídeo da URL</li>
                            <li>Substitua "SEU_VIDEO_ID" no código</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => {
                          setShowVideo(false);
                          document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      >
                        Começar Minha Primeira Análise
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Seção de Funcionalidades com Animação */}
        <section className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-100 mb-4">
              O Que Revelamos
            </h2>
            <p className="text-gray-400 text-lg">
              Investigação profunda em múltiplas camadas de dados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900/50 to-cyan-900/20 backdrop-blur border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 hover:scale-105 transition-all hover:-translate-y-2"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-bold text-cyan-100 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-100 mb-4">
              Histórias Reais
            </h2>
            <p className="text-gray-400 text-lg">
              Veja como o DarkScan mudou vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-cyan-100 font-bold">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">Usuário Verificado</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO PROVOCATIVA - "E SE VOCÊ NÃO ESTIVER PRONTO PRA VER A VERDADE?" */}
        <section className="container mx-auto px-4 py-20 border-t border-cyan-500/20">
          <div className="max-w-6xl mx-auto">
            {/* Título Psicológico */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Você realmente conhece a pessoa com quem está se envolvendo… ou só a versão que ela te mostrou?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Existe sempre um lado que ninguém mostra. E quase ninguém tem coragem de investigar.
              </p>
            </div>

            {/* METRICS SOCIAIS - Dashboard de Provas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  percentage: "92%",
                  text: "das pessoas que investigaram com o DarkScan descobriram algo que não estava no perfil público.",
                  color: "from-red-500 to-orange-500"
                },
                {
                  percentage: "38%",
                  text: "evitaram um relacionamento ou situação que teria gerado enorme dor de cabeça.",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  percentage: "21%",
                  text: "detalhes sensíveis que mudaram completamente a percepção sobre alguém.",
                  color: "from-yellow-500 to-red-500"
                },
                {
                  percentage: "14%",
                  text: "descobriram que estavam conversando com alguém que não era quem dizia ser.",
                  color: "from-red-600 to-pink-500"
                }
              ].map((metric, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-900/80 to-red-900/20 backdrop-blur border border-red-500/30 rounded-2xl p-6 hover:border-red-400 hover:scale-105 transition-all"
                >
                  <div className={`text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.percentage}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {metric.text}
                  </p>
                </div>
              ))}
            </div>

            {/* MICRO-RELATOS Provocativos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {microTestimonials.map((micro, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-900/90 to-red-900/20 backdrop-blur border border-red-500/30 rounded-2xl p-8 hover:border-red-400 transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">💬</div>
                    <h3 className="text-xl font-bold text-red-300">
                      {micro.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    "{micro.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* SEÇÃO DE DÚVIDA PROFUNDA - Golpe Psicológico */}
            <div className="relative bg-black/80 backdrop-blur-xl border border-red-500/40 rounded-3xl p-12 mb-12 overflow-hidden">
              {/* Efeito de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-orange-900/20" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
              
              <div className="relative z-10 text-center">
                <div className="space-y-6 mb-10">
                  {[
                    "E se você estiver confiando em alguém que não existe?",
                    "E se o passado dessa pessoa for exatamente aquilo que ela esconde?",
                    "E se outras pessoas já viram algo que você ainda não viu?",
                    "Quanto vale evitar uma humilhação pública?",
                    "Quanto vale fugir de uma história mal contada?"
                  ].map((question, i) => (
                    <p
                      key={i}
                      className="text-2xl md:text-3xl font-bold text-red-200 hover:text-red-100 transition-colors"
                      style={{
                        animation: `fadeIn 0.8s ease-out ${i * 0.2}s both`
                      }}
                    >
                      {question}
                    </p>
                  ))}
                </div>

                <div className="border-t border-red-500/30 pt-8">
                  <p className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text mb-8">
                    A verdade não machuca. O que machuca é descobrir tarde demais.
                  </p>
                  
                  {/* CTA Inteligente e Agressiva */}
                  <button
                    onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-12 py-5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl text-black text-xl font-black hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105 mb-4"
                  >
                    LIBERAR O SCAN AGORA
                  </button>
                  
                  <p className="text-gray-400 text-sm">
                    Proteja sua reputação, seu tempo e sua paz mental.<br />
                    DarkScan encontra o que os olhos não veem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Provocativa Final */}
        <section className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-100 mb-6">
              A verdade é simples:
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              As pessoas mostram o que querem.<br />
              O passado mostra quem elas realmente são.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Com DarkScan, você descobre o que ficou escondido.
            </p>
            <div className="space-y-3 text-cyan-300 text-lg font-semibold mb-8">
              <p>Antes de se envolver.</p>
              <p>Antes de confiar.</p>
              <p>Antes de entregar seu tempo, sua vida ou seu dinheiro.</p>
            </div>
            <button
              onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-black text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              Começar Agora
            </button>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-100 mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-400 text-lg">
              Processo 100% automatizado em 3 passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Insira os Dados",
                description: "Upload de foto ou ID social. O sistema aceita múltiplos formatos para iniciar a investigação.",
                icon: Search,
              },
              {
                step: "02",
                title: "Scan Automático",
                description: "IA forense varre bases públicas, dark grid e histórico digital em menos de 30 segundos.",
                icon: Radar,
              },
              {
                step: "03",
                title: "Receba o Relatório",
                description: "Relatório completo com vestígios encontrados, perfis ocultos e análise de risco detalhada.",
                icon: Target,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 transition-all">
                  <div className="text-6xl font-bold text-cyan-500/20 mb-4">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-500/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-100 mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-gray-400 text-lg">
              Acesso imediato • Cancele quando quiser • Sem taxas ocultas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gray-900/50 backdrop-blur border rounded-2xl p-8 transition-all hover:scale-105 ${
                  plan.popular
                    ? "border-cyan-400 shadow-2xl shadow-cyan-500/30"
                    : "border-cyan-500/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 rounded-full text-black text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-cyan-100">{plan.price}</span>
                    <span className="text-gray-400 mb-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:shadow-2xl hover:shadow-cyan-500/50"
                      : "bg-gray-800 text-cyan-100 hover:bg-gray-700 border border-cyan-500/30"
                  }`}
                >
                  Assinar Agora
                </button>
              </div>
            ))}
          </div>

          {/* Garantia */}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-cyan-100 mb-2">
              Garantia de 7 Dias
            </h3>
            <p className="text-gray-400">
              Não satisfeito? Devolvemos 100% do seu dinheiro, sem perguntas.
            </p>
          </div>
        </section>

        {/* Checkout */}
        {selectedPlan && (
          <section id="checkout" className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-2">
                  Finalizar Assinatura
                </h2>
                <p className="text-gray-400">
                  Plano selecionado: <span className="text-cyan-400 font-bold">{selectedPlan.toUpperCase()}</span>
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
                <form onSubmit={handleCheckout} className="space-y-6">
                  <div>
                    <label className="block text-cyan-200 text-sm font-semibold mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutData.name}
                      onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-cyan-100 placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-200 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutData.email}
                      onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-cyan-100 placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="pt-6 border-t border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-bold text-cyan-100">
                        Dados do Cartão
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-cyan-200 text-sm font-semibold mb-2">
                          Número do Cartão
                        </label>
                        <input
                          type="text"
                          required
                          value={checkoutData.cardNumber}
                          onChange={(e) => setCheckoutData({ ...checkoutData, cardNumber: e.target.value })}
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-cyan-100 placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-cyan-200 text-sm font-semibold mb-2">
                            Validade
                          </label>
                          <input
                            type="text"
                            required
                            value={checkoutData.expiry}
                            onChange={(e) => setCheckoutData({ ...checkoutData, expiry: e.target.value })}
                            className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-cyan-100 placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                            placeholder="MM/AA"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <label className="block text-cyan-200 text-sm font-semibold mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            required
                            value={checkoutData.cvv}
                            onChange={(e) => setCheckoutData({ ...checkoutData, cvv: e.target.value })}
                            className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-cyan-100 placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-200">Plano {selectedPlan.toUpperCase()}</span>
                      <span className="text-cyan-100 font-bold">
                        {plans.find(p => p.id === selectedPlan)?.price}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Cobrança recorrente mensal • Cancele quando quiser
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-black text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Lock className="w-5 h-5" />
                    Confirmar Assinatura
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Pagamento seguro e criptografado • Seus dados estão protegidos
                  </p>
                </form>
              </div>

              <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 text-center">
                <p className="text-blue-300 text-sm">
                  <strong>Nota:</strong> Em produção, integre com gateway de pagamento real 
                  (Stripe, Mercado Pago, PagSeguro, etc). Este é um checkout demonstrativo.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="container mx-auto px-4 py-16 border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-100 mb-6">
              Nada Fica Oculto
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de usuários que já descobriram a verdade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-black text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                Começar Agora
              </button>
              <button
                onClick={() => router.push("/login")}
                className="px-8 py-4 bg-gray-900 border-2 border-cyan-500/30 rounded-xl text-cyan-100 text-lg font-bold hover:bg-gray-800 hover:border-cyan-400 transition-all"
              >
                Já Tenho Conta
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                  <Radar className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-cyan-300 font-bold tracking-wider">DARKSCAN</span>
              </div>
              <div className="text-gray-400 text-sm text-center">
                © 2024 DARKSCAN. Todos os direitos reservados.
                <br className="md:hidden" />
                <span className="hidden md:inline"> • </span>
                O scanner do seu passado digital
              </div>
              <div className="flex gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-cyan-300 transition-colors">Termos</a>
                <a href="#" className="hover:text-cyan-300 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-cyan-300 transition-colors">Contato</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
