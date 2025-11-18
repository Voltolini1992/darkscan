"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Search,
  TrendingUp,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  Filter,
  Download,
  Eye,
  Settings,
  LogOut,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface ScanHistory {
  id: string;
  target: string;
  date: string;
  trustScore: number;
  riskLevel: "low" | "medium" | "high";
  status: "completed" | "processing";
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [scans, setScans] = useState<ScanHistory[]>([]);
  const [filter, setFilter] = useState<"all" | "low" | "medium" | "high">("all");

  useEffect(() => {
    // Carregar dados do usuário
    const userData = localStorage.getItem("deeptrace_user");
    if (!userData) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userData));

    // Gerar histórico de scans simulado
    const mockScans: ScanHistory[] = [
      {
        id: "1",
        target: "@maria_silva",
        date: "2024-01-15",
        trustScore: 85,
        riskLevel: "low",
        status: "completed",
      },
      {
        id: "2",
        target: "@joao_santos",
        date: "2024-01-14",
        trustScore: 45,
        riskLevel: "high",
        status: "completed",
      },
      {
        id: "3",
        target: "@ana_costa",
        date: "2024-01-13",
        trustScore: 62,
        riskLevel: "medium",
        status: "completed",
      },
      {
        id: "4",
        target: "@carlos_oliveira",
        date: "2024-01-12",
        trustScore: 78,
        riskLevel: "low",
        status: "completed",
      },
      {
        id: "5",
        target: "@patricia_lima",
        date: "2024-01-11",
        trustScore: 38,
        riskLevel: "high",
        status: "completed",
      },
    ];
    setScans(mockScans);
  }, [router]);

  const filteredScans = scans.filter(
    (scan) => filter === "all" || scan.riskLevel === filter
  );

  const stats = {
    totalScans: scans.length,
    lowRisk: scans.filter((s) => s.riskLevel === "low").length,
    mediumRisk: scans.filter((s) => s.riskLevel === "medium").length,
    highRisk: scans.filter((s) => s.riskLevel === "high").length,
    avgTrustScore: Math.round(
      scans.reduce((acc, s) => acc + s.trustScore, 0) / scans.length
    ),
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low":
        return "text-green-400 bg-green-500/20 border-green-500/30";
      case "medium":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "high":
        return "text-red-400 bg-red-500/20 border-red-500/30";
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "low":
        return <CheckCircle className="w-5 h-5" />;
      case "medium":
        return <AlertTriangle className="w-5 h-5" />;
      case "high":
        return <XCircle className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("deeptrace_user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-purple-500/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Sparkles className="w-8 h-8 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                DEEPTRACE
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/settings"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Settings className="w-5 h-5" />
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Bem-vindo, {user.name}!
          </h1>
          <p className="text-gray-400">
            Aqui está um resumo das suas análises recentes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Total Scans */}
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              {stats.totalScans}
            </p>
            <p className="text-sm text-gray-400">Total de Análises</p>
          </div>

          {/* Low Risk */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              {stats.lowRisk}
            </p>
            <p className="text-sm text-gray-400">Baixo Risco</p>
          </div>

          {/* Medium Risk */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-xl border border-yellow-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              {stats.mediumRisk}
            </p>
            <p className="text-sm text-gray-400">Risco Moderado</p>
          </div>

          {/* High Risk */}
          <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-xl border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              {stats.highRisk}
            </p>
            <p className="text-sm text-gray-400">Alto Risco</p>
          </div>

          {/* Avg Trust Score */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              {stats.avgTrustScore}
            </p>
            <p className="text-sm text-gray-400">Trust Score Médio</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/"
            className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Nova Análise
          </Link>
          <Link
            href="/plans"
            className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-yellow-500/50 flex items-center justify-center gap-2"
          >
            <TrendingUp className="w-5 h-5" />
            Upgrade de Plano
          </Link>
        </div>

        {/* History Section */}
        <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Histórico de Análises
              </h2>
              <p className="text-gray-400">
                Suas últimas {scans.length} consultas
              </p>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                    : "bg-black/40 text-gray-400 hover:text-white"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilter("low")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "low"
                    ? "bg-green-500 text-white"
                    : "bg-black/40 text-gray-400 hover:text-white"
                }`}
              >
                Baixo
              </button>
              <button
                onClick={() => setFilter("medium")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "medium"
                    ? "bg-yellow-500 text-white"
                    : "bg-black/40 text-gray-400 hover:text-white"
                }`}
              >
                Médio
              </button>
              <button
                onClick={() => setFilter("high")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "high"
                    ? "bg-red-500 text-white"
                    : "bg-black/40 text-gray-400 hover:text-white"
                }`}
              >
                Alto
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/20">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Alvo
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Data
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Trust Score
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Nível de Risco
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredScans.map((scan) => (
                  <tr
                    key={scan.id}
                    className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {scan.target[1].toUpperCase()}
                        </div>
                        <span className="text-white font-medium">
                          {scan.target}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(scan.date).toLocaleDateString("pt-BR")}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-black/40 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              scan.trustScore >= 70
                                ? "bg-green-500"
                                : scan.trustScore >= 40
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${scan.trustScore}%` }}
                          />
                        </div>
                        <span className="text-white font-bold">
                          {scan.trustScore}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${getRiskColor(
                          scan.riskLevel
                        )}`}
                      >
                        {getRiskIcon(scan.riskLevel)}
                        <span className="font-medium capitalize">
                          {scan.riskLevel === "low"
                            ? "Baixo"
                            : scan.riskLevel === "medium"
                            ? "Médio"
                            : "Alto"}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href="/report"
                          className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          title="Ver Relatório"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                        <button
                          className="p-2 text-purple-400 hover:text-purple-300 transition-colors"
                          title="Baixar PDF"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredScans.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                Nenhuma análise encontrada com este filtro
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
