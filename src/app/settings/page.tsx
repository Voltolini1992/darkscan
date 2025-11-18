"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  User,
  Mail,
  Building,
  Lock,
  Bell,
  Globe,
  Calendar,
  Shield,
  CreditCard,
  Save,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"account" | "security" | "preferences">("account");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: true,
    language: "pt-BR",
    dateFormat: "DD/MM/YYYY",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("deeptrace_user");
    if (!userData) {
      router.push("/login");
      return;
    }
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    setFormData({
      ...formData,
      name: parsedUser.name,
      email: parsedUser.email,
      company: parsedUser.company || "",
    });
  }, [router]);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      company: formData.company,
    };
    localStorage.setItem("deeptrace_user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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
            <Link href="/dashboard" className="flex items-center gap-3 group">
              <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              <Sparkles className="w-8 h-8 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                DEEPTRACE
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>
            <p className="text-gray-400">Gerencie sua conta e preferências</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-black/40 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab("account")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "account"
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <User className="w-5 h-5 inline mr-2" />
              Conta
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "security"
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Segurança
            </button>
            <button
              onClick={() => setActiveTab("preferences")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "preferences"
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Globe className="w-5 h-5 inline mr-2" />
              Preferências
            </button>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/30 rounded-xl p-8">
            {/* Account Tab */}
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Informações da Conta
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Atualize suas informações pessoais
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="Nome da empresa (opcional)"
                    />
                  </div>
                </div>

                {/* Plan Info */}
                <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Plano Atual</p>
                      <p className="text-lg font-bold text-white capitalize">
                        {user.plan}
                      </p>
                    </div>
                    <Link
                      href="/plans"
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
                    >
                      Upgrade
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <p className="text-sm text-gray-400">
                      Scans utilizados: {user.scansUsed} / {user.scansLimit}
                    </p>
                    <div className="w-full h-2 bg-black/40 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        style={{
                          width: `${(user.scansUsed / user.scansLimit) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Segurança da Conta
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Altere sua senha e gerencie a segurança
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha Atual
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.currentPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentPassword: e.target.value,
                        })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.newPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, newPassword: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Recomendamos usar uma senha forte com pelo menos 8 caracteres,
                    incluindo letras, números e símbolos.
                  </p>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Preferências do Sistema
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Personalize sua experiência no DEEPTRACE
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Idioma
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none"
                    >
                      <option value="pt-BR">Português (Brasil)</option>
                      <option value="en-US">English (US)</option>
                      <option value="es-ES">Español</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Formato de Data
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.dateFormat}
                      onChange={(e) =>
                        setFormData({ ...formData, dateFormat: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none"
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>

                <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium mb-1">
                        Notificações por E-mail
                      </p>
                      <p className="text-sm text-gray-400">
                        Receba alertas sobre novas análises e atualizações
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          notifications: !formData.notifications,
                        })
                      }
                      className={`relative w-14 h-8 rounded-full transition-colors ${
                        formData.notifications
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                          : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                          formData.notifications ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <button
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Salvar Alterações
              </button>

              {saved && (
                <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">
                    ✓ Alterações salvas com sucesso!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
