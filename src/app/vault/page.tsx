"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Unlock, Image, Video, Eye, Zap, Database, AlertTriangle, ArrowLeft, Download } from "lucide-react";

type FileCategory = "visual" | "shadow" | "surveillance" | "ghost" | "timeline" | "darkgrid" | "corrupted";

interface VaultFile {
  id: string;
  category: FileCategory;
  name: string;
  locked: boolean;
  thumbnail: string;
}

const categories = {
  visual: { name: "Visual Recon", icon: Image, color: "from-blue-500 to-cyan-500" },
  shadow: { name: "Shadow Clips", icon: Video, color: "from-purple-500 to-pink-500" },
  surveillance: { name: "Surveillance Echoes", icon: Eye, color: "from-green-500 to-emerald-500" },
  ghost: { name: "Digital Ghosts", icon: Zap, color: "from-gray-500 to-slate-500" },
  timeline: { name: "Timeline Fragments", icon: Database, color: "from-orange-500 to-amber-500" },
  darkgrid: { name: "Dark Grid Archives", icon: AlertTriangle, color: "from-red-500 to-rose-500" },
  corrupted: { name: "Corrupted Frames", icon: AlertTriangle, color: "from-indigo-500 to-violet-500" },
};

export default function VaultRecon() {
  const router = useRouter();
  const [files] = useState<VaultFile[]>([
    { id: "1", category: "visual", name: "IMG_2847.jpg", locked: true, thumbnail: "/vault/1.jpg" },
    { id: "2", category: "shadow", name: "VID_0392.mp4", locked: true, thumbnail: "/vault/2.jpg" },
    { id: "3", category: "surveillance", name: "CAM_1847.jpg", locked: true, thumbnail: "/vault/3.jpg" },
    { id: "4", category: "ghost", name: "DELETED_0482.png", locked: true, thumbnail: "/vault/4.jpg" },
    { id: "5", category: "timeline", name: "FRAG_2019_08.jpg", locked: true, thumbnail: "/vault/5.jpg" },
    { id: "6", category: "darkgrid", name: "DARK_X847.mp4", locked: true, thumbnail: "/vault/6.jpg" },
    { id: "7", category: "corrupted", name: "CORRUPT_9284.jpg", locked: true, thumbnail: "/vault/7.jpg" },
    { id: "8", category: "visual", name: "IMG_3921.jpg", locked: true, thumbnail: "/vault/8.jpg" },
    { id: "9", category: "shadow", name: "VID_1029.mp4", locked: true, thumbnail: "/vault/9.jpg" },
    { id: "10", category: "surveillance", name: "CAM_2940.jpg", locked: true, thumbnail: "/vault/10.jpg" },
    { id: "11", category: "ghost", name: "DELETED_1847.png", locked: true, thumbnail: "/vault/11.jpg" },
    { id: "12", category: "darkgrid", name: "DARK_Y192.mp4", locked: true, thumbnail: "/vault/12.jpg" },
  ]);

  const [selectedFile, setSelectedFile] = useState<VaultFile | null>(null);
  const [isDecoding, setIsDecoding] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [hoveredFile, setHoveredFile] = useState<string | null>(null);
  const [unlockedFile, setUnlockedFile] = useState<VaultFile | null>(null);

  const handleFileClick = (file: VaultFile) => {
    if (!file.locked) {
      setUnlockedFile(file);
      return;
    }

    setSelectedFile(file);
    setIsDecoding(true);
    
    setTimeout(() => {
      setIsDecoding(false);
      setShowOffer(true);
    }, 2500);
  };

  const handleUnlockSingle = () => {
    if (selectedFile) {
      const updatedFile = { ...selectedFile, locked: false };
      setShowOffer(false);
      setSelectedFile(null);
      
      setTimeout(() => {
        setUnlockedFile(updatedFile);
      }, 800);
    }
  };

  const handleUnlockAll = () => {
    router.push("/plans");
  };

  const closeModal = () => {
    setSelectedFile(null);
    setShowOffer(false);
    setIsDecoding(false);
    setUnlockedFile(null);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#3b82f6" : "#fbbf24",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-amber-500/20 backdrop-blur-sm bg-black/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-amber-300/60 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Lock className="w-8 h-8 text-amber-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-amber-500/50 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">
                VAULT RECON
              </h1>
              <p className="text-xs text-amber-300/60">Arquivo Oculto</p>
            </div>
          </div>

          <button
            onClick={() => router.push("/plans")}
            className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg text-black font-bold text-sm hover:shadow-lg hover:shadow-amber-500/50 transition-all"
          >
            Assinar VAULT
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Info Banner */}
        <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/30 rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-amber-100 mb-2">
            VAULT RECON — O QUE É OCULTO, AGORA É SEU
          </h2>
          <p className="text-amber-200/70 text-sm mb-4">
            Existe aquilo que é mostrado… E existe aquilo que foi apagado, escondido, esquecido ou enterrado nas camadas profundas da rede.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-amber-300/60">
            <span>• Fotos perdidas</span>
            <span>• Vídeos esquecidos</span>
            <span>• Arquivos apagados</span>
            <span>• Registros reconstruídos</span>
            <span>• Fragmentos ocultos</span>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.map((file) => {
            const category = categories[file.category];
            const Icon = category.icon;
            
            return (
              <div
                key={file.id}
                className="relative group cursor-pointer"
                onClick={() => handleFileClick(file)}
                onMouseEnter={() => setHoveredFile(file.id)}
                onMouseLeave={() => setHoveredFile(null)}
              >
                {/* File Card */}
                <div className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  hoveredFile === file.id
                    ? "border-amber-400 scale-105 shadow-2xl shadow-amber-500/50"
                    : "border-blue-500/30"
                }`}>
                  {/* Thumbnail (blurred if locked) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                  <div className={`absolute inset-0 bg-slate-800 ${file.locked ? "backdrop-blur-xl" : ""}`}>
                    {!file.locked && (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        📷
                      </div>
                    )}
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md border border-amber-500/30">
                    <Icon className="w-3 h-3 text-amber-400" />
                    <span className="text-xs text-amber-300/80">{category.name}</span>
                  </div>

                  {/* Lock Overlay */}
                  {file.locked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
                      <Lock className="w-12 h-12 text-amber-400 mb-2" />
                      <div className="px-3 py-1 bg-black/90 border border-amber-500/50 rounded-md">
                        <p className="text-xs text-amber-300 font-semibold">🔒 Conteúdo Bloqueado</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Message */}
                  {hoveredFile === file.id && file.locked && (
                    <div className="absolute bottom-2 left-2 right-2 bg-black/90 backdrop-blur-sm border border-amber-500/50 rounded-md p-2 animate-fade-in">
                      <p className="text-xs text-amber-300 text-center">
                        Arquivo encontrado em varredura profunda.
                      </p>
                    </div>
                  )}
                </div>

                {/* File Name */}
                <p className="mt-2 text-xs text-blue-300/60 text-center truncate">{file.name}</p>
              </div>
            );
          })}
        </div>

        {/* Unlock All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleUnlockAll}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-xl text-black font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105 animate-pulse-slow"
          >
            <Unlock className="w-6 h-6 inline mr-2" />
            DESBLOQUEAR TUDO — Assinar VAULT
          </button>
          <p className="mt-3 text-sm text-amber-300/60">
            Acesso ilimitado a todos os arquivos ocultos
          </p>
        </div>
      </div>

      {/* Decoding Modal */}
      {isDecoding && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
            <p className="text-2xl font-bold text-amber-400 mb-4">Decodificando fragmento…</p>
            <div className="max-w-md mx-auto space-y-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="text-left text-xs font-mono text-blue-400/60 animate-fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {`> ${["SCAN", "DECRYPT", "ANALYZE", "RECONSTRUCT", "VERIFY", "COMPILE", "RENDER", "COMPLETE"][i]} ${["███████", "████████", "█████", "██████████", "████", "███████████", "██████", "████████"][i]}`}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Offer Modal */}
      {showOffer && selectedFile && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-amber-500/50 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-amber-500/30 animate-scale-in">
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <Lock className="w-16 h-16 text-amber-400" />
                <div className="absolute inset-0 blur-2xl bg-amber-500/50" />
              </div>
              <h3 className="text-2xl font-bold text-amber-100 mb-2">VAULT RECON – Acesso Restrito</h3>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between border-b border-amber-500/20 pb-2">
                <span className="text-amber-300/60">Arquivo Detectado:</span>
                <span className="text-amber-100 font-semibold">{selectedFile.name}</span>
              </div>
              <div className="flex justify-between border-b border-amber-500/20 pb-2">
                <span className="text-amber-300/60">Origem:</span>
                <span className="text-blue-400">Rede Profunda</span>
              </div>
              <div className="flex justify-between border-b border-amber-500/20 pb-2">
                <span className="text-amber-300/60">Status:</span>
                <span className="text-red-400 font-semibold">🔒 Bloqueado</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleUnlockSingle}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Desbloquear esse arquivo – 20 créditos
              </button>
              <button
                onClick={handleUnlockAll}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl text-black font-bold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
              >
                Desbloquear tudo — Assinar VAULT Premium
              </button>
              <button
                onClick={closeModal}
                className="w-full py-2 text-amber-300/60 hover:text-amber-300 transition-colors text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unlocked File Viewer */}
      {unlockedFile && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-amber-500/50 rounded-2xl p-6 max-w-3xl w-full shadow-2xl shadow-amber-500/30 animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-amber-500/20">
              <div>
                <h3 className="text-xl font-bold text-amber-100">{unlockedFile.name}</h3>
                <p className="text-sm text-amber-300/60">{categories[unlockedFile.category].name}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-amber-300/60 hover:text-amber-300 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* File Display */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-4 flex items-center justify-center text-6xl border-2 border-amber-500/30">
              📷
              <div className="absolute inset-0 border-2 border-amber-400/50 rounded-xl animate-pulse-border" />
            </div>

            {/* File Info */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="bg-black/50 rounded-lg p-3 border border-amber-500/20">
                <p className="text-amber-300/60 mb-1">Fonte</p>
                <p className="text-amber-100 font-semibold">Rede Profunda - Setor 7</p>
              </div>
              <div className="bg-black/50 rounded-lg p-3 border border-amber-500/20">
                <p className="text-amber-300/60 mb-1">Data</p>
                <p className="text-amber-100 font-semibold">2024-03-15 14:32:18</p>
              </div>
            </div>

            {/* Context */}
            <div className="bg-black/50 rounded-lg p-4 border border-amber-500/20 mb-4">
              <p className="text-amber-300/60 text-xs mb-2">FRAGMENTO DE CONTEXTO:</p>
              <p className="text-amber-100/80 text-sm">
                Arquivo recuperado de servidor desativado. Metadados indicam origem em dispositivo móvel.
                Coordenadas GPS removidas. Assinatura digital corrompida.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Exportar para Dossiê Privado
              </button>
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-amber-300 font-semibold transition-all"
              >
                Fechar
              </button>
            </div>

            {/* Revarredura Prompt */}
            <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <p className="text-amber-100 text-sm mb-3">
                Deseja ativar o <span className="font-bold">Rastreador de Novos Arquivos</span>?
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg text-black font-semibold text-sm transition-all">
                  Ativar Rastreador
                </button>
                <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-amber-300 font-semibold text-sm transition-all">
                  Agora Não
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes pulse-border {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
