"use client";

import { useRouter } from "next/navigation";
import { Shield, Check, Zap, Eye, Lock, Crown, Infinity, TrendingUp, Users, Bell, FileText, Sparkles } from "lucide-react";

export default function PlansPage() {
  const router = useRouter();

  const plans = [
    {
      id: "basic",
      name: "BASIC",
      icon: Shield,
      price: "R$ 29,90",
      period: "/mês",
      color: "from-slate-600 to-slate-800",
      borderColor: "border-slate-500/50",
      features: [
        { text: "3 varreduras por dia", included: true },
        { text: "Relatório simplificado", included: true },
        { text: "Acesso a bases públicas", included: true },
        { text: "Trust Score básico", included: true },
        { text: "Suporte por email", included: true },
        { text: "Acesso a Dark Grid", included: false },
        { text: "Monitoramento em tempo real", included: false },
        { text: "Histórico completo", included: false },
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      id: "dark",
      name: "DARK",
      icon: Eye,
      price: "R$ 79,90",
      period: "/mês",
      color: "from-purple-600 to-cyan-600",
      borderColor: "border-purple-500",
      features: [
        { text: "Varreduras ilimitadas", included: true },
        { text: "Relatório avançado completo", included: true },
        { text: "Acesso total a Dark Grid", included: true },
        { text: "Análise psicológica profunda", included: true },
        { text: "Reconstrução de passado", included: true },
        { text: "Monitoramento de 2 perfis", included: true },
        { text: "Alertas em tempo real", included: true },
        { text: "Suporte prioritário 24/7", included: true },
      ],
      cta: "Assinar Dark",
      popular: true,
    },
    {
      id: "ghost",
      name: "GHOST",
      icon: Crown,
      price: "R$ 199,90",
      period: "/mês",
      color: "from-yellow-500 via-orange-500 to-red-500",
      borderColor: "border-yellow-500",
      features: [
        { text: "Tudo do plano DARK +", included: true },
        { text: "Scan total sem limites", included: true },
        { text: "Acesso ao Núcleo Fantasma", included: true },
        { text: "Históricos ocultos completos", included: true },
        { text: "Conexões secretas reveladas", included: true },
        { text: "IA de comportamento avançada", included: true },
        { text: "Monitoramento ilimitado", included: true },
        { text: "Consultoria humana exclusiva", included: true },
        { text: "Relatórios PDF premium", included: true },
        { text: "API de integração", included: true },
      ],
      cta: "Desbloquear Ghost",
      popular: false,
    },
  ];

  const addons = [
    {
      name: "Consulta Avulsa Extra",
      price: "R$ 19,90",
      icon: Zap,
      description: "Varredura única fora da franquia do plano",
    },
    {
      name: "Relatório PDF Premium",
      price: "R$ 29,90",
      icon: FileText,
      description: "Relatório completo formatado e compartilhável",
    },
    {
      name: "Consultoria Especializada",
      price: "R$ 149,90",
      icon: Users,
      description: "1h com psicólogo/advogado para análise de caso",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-purple-500/20 backdrop-blur-sm bg-slate-950/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
          >
            <Shield className="w-6 h-6" />
            <span className="font-bold">DEEPTRACE</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Escolha Seu Nível de Proteção</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Planos de Assinatura
          </h1>
          <p className="text-lg text-purple-300/70 max-w-2xl mx-auto">
            Proteja-se com inteligência. Escolha o plano ideal para suas necessidades de segurança digital.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-slate-900/50 backdrop-blur-xl border-2 rounded-2xl p-8 ${
                  plan.popular ? "border-purple-500 shadow-2xl shadow-purple-500/30" : plan.borderColor
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white text-sm font-bold">
                    ⭐ MAIS POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-100 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-purple-300/60 mb-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-30">
                          <div className="w-full h-0.5 bg-purple-500/50 mt-2" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? "text-purple-200" : "text-purple-300/40"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-purple-500/50"
                      : "bg-slate-800 text-purple-200 hover:bg-slate-700 border border-purple-500/30"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Addons */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-100 mb-8 text-center">Complementos (Add-ons)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-100 mb-1">{addon.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{addon.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-purple-300/70">{addon.description}</p>
                  <button className="w-full mt-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-purple-200 text-sm font-semibold hover:bg-slate-700 transition-all">
                    Adicionar
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-100 mb-8 text-center">Comparação Detalhada</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Recurso</th>
                  <th className="text-center py-4 px-4 text-purple-300 font-semibold">BASIC</th>
                  <th className="text-center py-4 px-4 text-purple-300 font-semibold">DARK</th>
                  <th className="text-center py-4 px-4 text-purple-300 font-semibold">GHOST</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Varreduras diárias", basic: "3", dark: "Ilimitado", ghost: "Ilimitado" },
                  { feature: "Bases de dados", basic: "Públicas", dark: "Públicas + Dark Grid", ghost: "Todas + Núcleo Fantasma" },
                  { feature: "Relatório", basic: "Simplificado", dark: "Avançado", ghost: "Premium Completo" },
                  { feature: "Monitoramento", basic: "—", dark: "2 perfis", ghost: "Ilimitado" },
                  { feature: "Alertas em tempo real", basic: "—", dark: "✓", ghost: "✓" },
                  { feature: "Suporte", basic: "Email", dark: "24/7 Prioritário", ghost: "VIP + Consultoria" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-purple-500/10">
                    <td className="py-4 px-4 text-purple-200">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-purple-300/70">{row.basic}</td>
                    <td className="py-4 px-4 text-center text-purple-300/70">{row.dark}</td>
                    <td className="py-4 px-4 text-center text-purple-300/70">{row.ghost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-100 mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.",
              },
              {
                q: "Os dados são seguros?",
                a: "Absolutamente. Todos os dados são criptografados e processados com máxima segurança.",
              },
              {
                q: "Posso fazer upgrade do plano?",
                a: "Sim! Você pode fazer upgrade a qualquer momento e pagar apenas a diferença proporcional.",
              },
              {
                q: "Como funciona o monitoramento?",
                a: "Você cadastra perfis de interesse e recebe alertas automáticos quando detectamos mudanças relevantes.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400 transition-all group"
              >
                <summary className="font-semibold text-purple-100 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-purple-300/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <p className="text-purple-300/60 mb-4">Ainda tem dúvidas?</p>
          <button className="px-8 py-4 bg-slate-800 border border-purple-500/30 rounded-xl text-purple-200 font-semibold hover:bg-slate-700 transition-all">
            Falar com Suporte
          </button>
        </div>
      </div>
    </div>
  );
}
