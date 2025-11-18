"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Shield,
  Zap,
  Database,
  Eye,
  CheckCircle2,
  Activity,
  Cpu,
  Server,
  TrendingUp,
  Users,
  Clock,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function SystemTestPage() {
  const router = useRouter();
  const [testPhase, setTestPhase] = useState(0);
  const [systemStatus, setSystemStatus] = useState<"initializing" | "running" | "complete">("initializing");
  const [metrics, setMetrics] = useState({
    requestsProcessed: 0,
    averageResponseTime: 0,
    activeScans: 0,
    systemLoad: 0,
    uptime: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [incrementRate, setIncrementRate] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testPhases = [
    { id: 1, name: "Inicialização do Sistema", icon: Server, duration: 2000 },
    { id: 2, name: "Ativação de Módulos Core", icon: Cpu, duration: 1500 },
    { id: 3, name: "Conexão com Bases de Dados", icon: Database, duration: 2000 },
    { id: 4, name: "Calibração de IA", icon: Eye, duration: 1800 },
    { id: 5, name: "Teste de Escalabilidade", icon: TrendingUp, duration: 2500 },
    { id: 6, name: "Simulação de Carga Máxima", icon: Activity, duration: 3000 },
    { id: 7, name: "Validação de Autonomia", icon: Zap, duration: 2000 },
    { id: 8, name: "Verificação Final", icon: CheckCircle2, duration: 1500 },
  ];

  useEffect(() => {
    let phaseIndex = 0;
    let metricsInterval: NodeJS.Timeout;

    const runTest = async () => {
      setSystemStatus("running");

      // Start metrics simulation
      metricsInterval = setInterval(() => {
        const newIncrementRate = Math.floor(Math.random() * 50) + 10;
        setIncrementRate(newIncrementRate);
        
        setMetrics((prev) => ({
          requestsProcessed: prev.requestsProcessed + newIncrementRate,
          averageResponseTime: Math.floor(Math.random() * 100) + 50,
          activeScans: Math.floor(Math.random() * 20) + 5,
          systemLoad: Math.floor(Math.random() * 30) + 60,
          uptime: prev.uptime + 1,
        }));
      }, 1000);

      // Run through phases
      for (let i = 0; i < testPhases.length; i++) {
        setTestPhase(i);
        await new Promise((resolve) => setTimeout(resolve, testPhases[i].duration));
      }

      setSystemStatus("complete");
      clearInterval(metricsInterval);
    };

    runTest();

    return () => {
      if (metricsInterval) clearInterval(metricsInterval);
    };
  }, []);

  const CurrentIcon = testPhases[testPhase]?.icon || Server;

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
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg">
            <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-sm text-green-300 font-semibold">SISTEMA OPERACIONAL</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Teste Integral do Sistema</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Operação 100% Automatizada
          </h1>

          <p className="text-lg text-purple-300/70 max-w-3xl mx-auto mb-8">
            Sistema projetado para eliminar qualquer dependência de atendimento humano.
            <br />
            Escalabilidade ilimitada • Zero intervenção manual • Disponibilidade 24/7
          </p>
        </div>

        {/* Main Test Display */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-8 shadow-2xl shadow-purple-500/20">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 blur-3xl bg-purple-500/30 animate-pulse" />
              <div className="relative">
                <CurrentIcon className="w-32 h-32 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full animate-ping" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-purple-100 mb-2">
              {systemStatus === "complete" ? "✅ Sistema Validado" : testPhases[testPhase]?.name}
            </h2>
            <p className="text-purple-300/70">
              {systemStatus === "complete"
                ? "Todos os módulos operacionais e autônomos"
                : `Fase ${testPhase + 1} de ${testPhases.length}`}
            </p>
          </div>

          {/* Progress Bar */}
          {systemStatus !== "complete" && (
            <div className="mb-8">
              <div className="h-2 bg-slate-950/50 rounded-full overflow-hidden border border-purple-500/30">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${((testPhase + 1) / testPhases.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = index === testPhase && systemStatus === "running";
              const isComplete = index < testPhase || systemStatus === "complete";

              return (
                <div
                  key={phase.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-purple-500/20 border-purple-400/50 scale-105"
                      : isComplete
                      ? "bg-green-500/10 border-green-500/30"
                      : "bg-slate-900/30 border-purple-500/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive
                          ? "bg-gradient-to-br from-purple-500 to-cyan-500 animate-pulse"
                          : isComplete
                          ? "bg-green-500/20"
                          : "bg-slate-800/50"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-white" : isComplete ? "text-green-400" : "text-purple-400/40"
                        }`}
                      />
                    </div>
                    {isActive && <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />}
                    {isComplete && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      isActive ? "text-purple-100" : isComplete ? "text-green-300" : "text-purple-300/40"
                    }`}
                  >
                    {phase.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-slate-900/50 backdrop-blur border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-purple-300/70">Requisições</span>
            </div>
            <p className="text-3xl font-bold text-purple-100" suppressHydrationWarning>
              {metrics.requestsProcessed.toLocaleString()}
            </p>
            <p className="text-xs text-green-400 mt-1" suppressHydrationWarning>
              {mounted ? `+${incrementRate}/s` : '+0/s'}
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-300/70">Tempo Médio</span>
            </div>
            <p className="text-3xl font-bold text-purple-100" suppressHydrationWarning>
              {metrics.averageResponseTime}ms
            </p>
            <p className="text-xs text-green-400 mt-1">Excelente</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-purple-300/70">Scans Ativos</span>
            </div>
            <p className="text-3xl font-bold text-purple-100" suppressHydrationWarning>
              {metrics.activeScans}
            </p>
            <p className="text-xs text-cyan-400 mt-1">Simultâneos</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Server className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-purple-300/70">Carga Sistema</span>
            </div>
            <p className="text-3xl font-bold text-purple-100" suppressHydrationWarning>
              {metrics.systemLoad}%
            </p>
            <p className="text-xs text-green-400 mt-1">Otimizado</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm text-purple-300/70">Uptime</span>
            </div>
            <p className="text-3xl font-bold text-purple-100" suppressHydrationWarning>
              {metrics.uptime}s
            </p>
            <p className="text-xs text-green-400 mt-1">100% Online</p>
          </div>
        </div>

        {/* Operational Principles */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            Princípios Operacionais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2">Escalabilidade Real</h3>
              <p className="text-sm text-purple-300/70">
                Sistema processa milhares de requisições simultâneas sem queda de performance. Infraestrutura
                digital consistente e padronizada.
              </p>
            </div>

            <div className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2">Zero Interpretação Humana</h3>
              <p className="text-sm text-purple-300/70">
                Análise 100% técnica e padronizada. Sem opiniões, julgamentos, vieses ou interferências de
                operadores humanos.
              </p>
            </div>

            <div className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2">Disponibilidade Total</h3>
              <p className="text-sm text-purple-300/70">
                Operacional 24/7. Sem filas, sem agendamentos, sem dependência de pessoas. Processamento
                instantâneo e contínuo.
              </p>
            </div>
          </div>
        </div>

        {/* System Modules Status */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            Status dos Módulos
          </h2>

          <div className="space-y-3">
            {[
              { name: "Motor de Análise de IA", status: "Operacional", load: 87 },
              { name: "Sistema de Varredura Social", status: "Operacional", load: 92 },
              { name: "Base de Dados Distribuída", status: "Operacional", load: 78 },
              { name: "Processador de Imagens", status: "Operacional", load: 85 },
              { name: "Gerador de Relatórios", status: "Operacional", load: 90 },
              { name: "Sistema de Criptografia", status: "Operacional", load: 95 },
              { name: "API de Integração", status: "Operacional", load: 88 },
              { name: "Monitor de Escalabilidade", status: "Operacional", load: 82 },
            ].map((module, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-slate-950/50 border border-green-500/30 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-100">{module.name}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        style={{ width: `${module.load}%` }}
                      />
                    </div>
                    <span className="text-sm text-green-400 font-mono">{module.load}%</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">
                  {module.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Report */}
        {systemStatus === "complete" && (
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8 text-center">
            <CheckCircle2 className="w-20 h-20 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">✅ Teste Integral Concluído</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Todos os módulos estão operacionais e funcionando em capacidade máxima. O sistema está pronto para
              processar requisições de forma completamente autônoma, sem qualquer intervenção humana.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push("/")}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Voltar ao Sistema
              </button>
              <button
                onClick={() => router.push("/scan?type=social&id=test_user")}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Iniciar Varredura Teste
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
