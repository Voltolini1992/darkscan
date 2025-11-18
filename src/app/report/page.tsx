"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Shield, AlertTriangle, TrendingDown, TrendingUp, Eye, Users, Clock, MapPin, DollarSign, Heart, Zap, Lock, ChevronRight, Download, Share2 } from "lucide-react";

export default function ReportPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const targetId = searchParams.get("id") || "Desconhecido";

  // Simulated data (in real app, this would come from API)
  const trustScore = 34;
  const riskLevel = trustScore < 40 ? "high" : trustScore < 70 ? "medium" : "low";

  const riskFlags = [
    { icon: AlertTriangle, label: "Múltiplos perfis detectados", severity: "high" },
    { icon: Eye, label: "Atividade em plataformas adultas", severity: "high" },
    { icon: DollarSign, label: "Transações financeiras suspeitas", severity: "medium" },
    { icon: Users, label: "Conexões com perfis de risco", severity: "medium" },
    { icon: MapPin, label: "Inconsistências de localização", severity: "low" },
  ];

  const timeline = [
    { year: "2024", event: "Perfil atual ativo", type: "neutral" },
    { year: "2023", event: "Conta OnlyFans detectada", type: "warning" },
    { year: "2022", event: "Mudança de identidade digital", type: "danger" },
    { year: "2021", event: "Perfil anterior desativado", type: "warning" },
    { year: "2020", event: "Primeira atividade registrada", type: "neutral" },
  ];

  const shadowProfiles = [
    { platform: "Instagram", username: "@bella_luxe", status: "Ativo", risk: "high" },
    { platform: "OnlyFans", username: "bellalux_vip", status: "Ativo", risk: "high" },
    { platform: "Twitter/X", username: "@bellanight", status: "Desativado", risk: "medium" },
  ];

  const psychProfile = {
    type: "Manipulador Estratégico",
    traits: ["Alta inteligência social", "Tendências narcisistas", "Busca por validação financeira"],
    riskFactors: ["Histórico de relacionamentos múltiplos", "Padrão de exploração emocional", "Inconsistências narrativas"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-purple-500/20 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
          >
            <Shield className="w-6 h-6" />
            <span className="font-bold">DEEPTRACE</span>
          </button>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-800/50 border border-purple-500/30 rounded-lg hover:bg-slate-800 transition-colors">
              <Share2 className="w-5 h-5 text-purple-300" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar PDF
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Trust Score Hero */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-8 shadow-2xl shadow-purple-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Score Circle */}
            <div className="relative">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-slate-800"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - trustScore / 100)}`}
                  className={`${
                    riskLevel === "high"
                      ? "text-red-500"
                      : riskLevel === "medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  } transition-all duration-1000`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-white">{trustScore}</span>
                <span className="text-sm text-purple-300">Trust Score</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    riskLevel === "high"
                      ? "bg-red-500/20 text-red-300 border border-red-500/50"
                      : riskLevel === "medium"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                      : "bg-green-500/20 text-green-300 border border-green-500/50"
                  }`}
                >
                  {riskLevel === "high" ? "⚠️ RISCO ALTO" : riskLevel === "medium" ? "⚡ RISCO MÉDIO" : "✅ RISCO BAIXO"}
                </div>
              </div>
              <h1 className="text-3xl font-bold text-purple-100 mb-2">Relatório Completo</h1>
              <p className="text-purple-300/70 mb-4">Alvo: {targetId}</p>
              <p className="text-purple-200/80 leading-relaxed">
                A análise detectou <span className="text-red-400 font-bold">{riskFlags.length} sinais de alerta</span> críticos.
                Recomendamos extrema cautela ao prosseguir com qualquer tipo de relacionamento.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Flags */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            Sinais de Alerta (Risk Flags)
          </h2>
          <div className="space-y-3">
            {riskFlags.map((flag, i) => {
              const Icon = flag.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    flag.severity === "high"
                      ? "bg-red-500/10 border-red-500/50"
                      : flag.severity === "medium"
                      ? "bg-yellow-500/10 border-yellow-500/50"
                      : "bg-blue-500/10 border-blue-500/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      flag.severity === "high"
                        ? "bg-red-500/20"
                        : flag.severity === "medium"
                        ? "bg-yellow-500/20"
                        : "bg-blue-500/20"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        flag.severity === "high"
                          ? "text-red-400"
                          : flag.severity === "medium"
                          ? "text-yellow-400"
                          : "text-blue-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-purple-100">{flag.label}</p>
                    <p className="text-sm text-purple-300/60">
                      Severidade: {flag.severity === "high" ? "Alta" : flag.severity === "medium" ? "Média" : "Baixa"}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Psychological Profile */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-400" />
              Perfil Psicológico
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-purple-300/60 mb-1">Tipo de Personalidade</p>
                <p className="text-lg font-bold text-purple-100">{psychProfile.type}</p>
              </div>
              <div>
                <p className="text-sm text-purple-300/60 mb-2">Características</p>
                <ul className="space-y-2">
                  {psychProfile.traits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-2 text-purple-200/80">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-purple-300/60 mb-2">Fatores de Risco</p>
                <ul className="space-y-2">
                  {psychProfile.riskFactors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-300/80">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Shadow Profiles */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-cyan-400" />
              Perfis Paralelos (Máscaras Sociais)
            </h2>
            <div className="space-y-3">
              {shadowProfiles.map((profile, i) => (
                <div
                  key={i}
                  className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-4 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-purple-100">{profile.platform}</p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        profile.status === "Ativo"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      {profile.status}
                    </span>
                  </div>
                  <p className="text-purple-300/70 mb-2">@{profile.username}</p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        profile.risk === "high"
                          ? "bg-red-500"
                          : profile.risk === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                    <span className="text-xs text-purple-300/60">
                      Risco {profile.risk === "high" ? "Alto" : profile.risk === "medium" ? "Médio" : "Baixo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-400" />
            Linha do Tempo Oculta
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm ${
                      item.type === "danger"
                        ? "bg-red-500/20 border-2 border-red-500 text-red-300"
                        : item.type === "warning"
                        ? "bg-yellow-500/20 border-2 border-yellow-500 text-yellow-300"
                        : "bg-purple-500/20 border-2 border-purple-500 text-purple-300"
                    }`}
                  >
                    {item.year}
                  </div>
                  <div className="flex-1 bg-slate-950/50 border border-purple-500/20 rounded-xl p-4 mt-2">
                    <p className="text-purple-100 font-semibold">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Upgrade */}
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8 text-center">
          <Lock className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Desbloqueie Análise Completa</h3>
          <p className="text-purple-100 mb-6">
            Acesse deep scan, monitoramento em tempo real e muito mais com o plano DARK ou GHOST
          </p>
          <button
            onClick={() => router.push("/plans")}
            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Ver Planos Premium
          </button>
        </div>
      </div>
    </div>
  );
}
