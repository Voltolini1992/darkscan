"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Shield, Database, Eye, Zap, CheckCircle2 } from "lucide-react";

export default function ScanPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { icon: Database, label: "Acessando bases públicas", duration: 1500 },
    { icon: Eye, label: "Varredura de redes sociais", duration: 2000 },
    { icon: Shield, label: "Análise de registros sombrios", duration: 1800 },
    { icon: Zap, label: "Deep scan em dark grid", duration: 2200 },
    { icon: CheckCircle2, label: "Compilando relatório", duration: 1500 },
  ];

  useEffect(() => {
    let phaseIndex = 0;
    let progressValue = 0;

    const runPhases = async () => {
      for (let i = 0; i < phases.length; i++) {
        setCurrentPhase(i);
        const phase = phases[i];
        const increment = 100 / phases.length;
        const steps = 20;
        const stepDuration = phase.duration / steps;

        for (let j = 0; j <= steps; j++) {
          await new Promise((resolve) => setTimeout(resolve, stepDuration));
          progressValue = (i * increment) + (increment * (j / steps));
          setProgress(Math.min(progressValue, 100));
        }
      }

      // Redirect to report
      setTimeout(() => {
        const type = searchParams.get("type");
        const id = searchParams.get("id") || searchParams.get("file");
        router.push(`/report?type=${type}&id=${encodeURIComponent(id || "unknown")}`);
      }, 500);
    };

    runPhases();
  }, [router, searchParams]);

  const CurrentIcon = phases[currentPhase]?.icon || Loader2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Scanning Animation */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 blur-3xl bg-purple-500/30 animate-pulse" />
            <div className="relative">
              <CurrentIcon className="w-24 h-24 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full animate-ping" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Varredura em Andamento
          </h1>
          <p className="text-lg text-purple-300/70 mb-8">
            {phases[currentPhase]?.label}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl shadow-purple-500/20">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-purple-300 mb-2">
              <span>Progresso</span>
              <span className="font-mono font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="h-3 bg-slate-950/50 rounded-full overflow-hidden border border-purple-500/30">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 transition-all duration-300 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>

          {/* Phases List */}
          <div className="space-y-3">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = index === currentPhase;
              const isComplete = index < currentPhase;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-purple-500/20 border border-purple-400/50"
                      : isComplete
                      ? "bg-green-500/10 border border-green-500/30"
                      : "bg-slate-900/30 border border-purple-500/10"
                  }`}
                >
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
                        isActive
                          ? "text-white"
                          : isComplete
                          ? "text-green-400"
                          : "text-purple-400/40"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-purple-100"
                        : isComplete
                        ? "text-green-300"
                        : "text-purple-300/40"
                    }`}
                  >
                    {phase.label}
                  </span>
                  {isActive && (
                    <Loader2 className="w-4 h-4 text-purple-400 animate-spin ml-auto" />
                  )}
                  {isComplete && (
                    <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Warning */}
        <div className="mt-6 text-center">
          <p className="text-xs text-purple-300/50">
            🔒 Todos os dados são processados de forma segura e criptografada
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
