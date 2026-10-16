import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Sparkles,
  Bot,
  Image as ImageIcon,
  Send,
  Upload,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage, ModelType } from '../types';

interface MarkdownContentProps {
  content: string;
  isUser?: boolean;
}

function MarkdownContent({ content, isUser }: MarkdownContentProps) {
  if (isUser) {
    return <div className="whitespace-pre-wrap font-sans text-sm">{content}</div>;
  }

  return (
    <div className="font-sans text-sm leading-relaxed text-ink-soft space-y-2.5">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="font-syne font-bold text-base text-gold mt-3 mb-1.5" {...props} />,
          h2: ({ node, ...props }) => <h2 className="font-syne font-bold text-sm text-gold mt-2.5 mb-1" {...props} />,
          h3: ({ node, ...props }) => <h3 className="font-syne font-semibold text-sm text-ink mt-2 mb-1" {...props} />,
          p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-relaxed text-ink-soft" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2 space-y-1 text-ink-soft" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 my-2 space-y-1 text-ink-soft" {...props} />,
          li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-ink" {...props} />,
          em: ({ node, ...props }) => <em className="italic text-ink-soft" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-2 border-gold/70 pl-3 my-2 italic text-muted bg-surface-2/40 py-1" {...props} />
          ),
          code: ({ node, className, children, ...props }) => {
            const isInline = !className && typeof children === 'string' && !children.includes('\n');
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 bg-surface-2 border border-border text-gold font-mono text-xs rounded-sm" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="p-3 my-2 bg-surface-2 border border-border overflow-x-auto font-mono text-xs text-ink rounded-sm">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          hr: () => <hr className="my-3 border-border" />,
          a: ({ node, ...props }) => (
            <a className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

interface AiAssistantProps {
  isOpen: boolean;
  initialTab?: 'chat' | 'analyze';
  onClose: () => void;
}

export function AiAssistant({
  isOpen,
  initialTab = 'chat',
  onClose,
}: AiAssistantProps) {
  const [activeTab, setActiveTab] = useState<'chat' | 'analyze'>(initialTab);

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // -------------------------
  // 1. Multi-turn Chat State
  // -------------------------
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content:
        'Olá! Sou o Consultor de Negócios da OPTIMAFY. Meu papel é te ajudar a ganhar mais dinheiro, economizar tempo e colocar sua empresa no piloto automático sem nenhuma complicação técnica.\n\nQual é o maior desafio da sua rotina hoje? (Ex: atendimento no WhatsApp, planilhas bagunçadas, site desatualizado...)',
      timestamp: 'Agora',
      modelUsed: 'qwen/qwen3.8-27b',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [selectedModel, setSelectedModel] = useState<ModelType>('qwen/qwen3.8-27b');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const scrollToChatBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab === 'chat') {
      scrollToChatBottom();
    }
  }, [messages, activeTab]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userText = chatInput.trim();
    setChatInput('');
    setChatError(null);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          model: selectedModel,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Erro ${response.status}: Falha na comunicação com o Assistente de IA.`);
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.modelUsed || selectedModel,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error(err);
      setChatError(err.message || 'Erro ao obter resposta da consultoria.');
    } finally {
      setChatLoading(false);
    }
  };

  // ----------------------------------------------------
  // 2. Image Analysis State (Vision)
  // ----------------------------------------------------
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisPrompt, setAnalysisPrompt] = useState(
    'Analise esta imagem (planilha, anotações de pedidos, tela de sistema ou site): aponte onde estou perdendo tempo ou dinheiro, os riscos de erros e como automatizar essa tarefa para aumentar meus lucros.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Business Presets for 1-click test
  const samplePresets = [
    {
      title: 'Exemplo: Planilha de Vendas Manual',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Exemplo: Controle de Caixa e Pedidos',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult(null);
        setAnalysisError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = async (url: string) => {
    setSelectedImage(url);
    setAnalysisResult(null);
    setAnalysisError(null);
  };

  const handleAnalyzeImage = async () => {
    if (!selectedImage || isAnalyzing) return;
    setIsAnalyzing(true);
    setAnalysisError(null);

    try {
      let base64Payload = selectedImage;
      if (selectedImage.startsWith('http')) {
        const resp = await fetch(selectedImage);
        const blob = await resp.blob();
        base64Payload = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      }

      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: base64Payload,
          prompt: analysisPrompt,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || 'Falha ao analisar imagem com o Assistente de IA.');
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);
    } catch (err: any) {
      console.error(err);
      setAnalysisError(err.message || 'Erro durante a análise da imagem.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        className="w-full max-w-5xl h-[88vh] max-h-[850px] bg-surface border border-border shadow-2xl flex flex-col overflow-hidden text-ink relative"
      >
        {/* Top Header of Modal */}
        <div className="px-6 py-4 border-b border-border bg-surface flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 border border-gold bg-canvas">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-syne font-bold text-base tracking-wide text-ink">
                  CONSULTORIA DIGITAL OPTIMAFY
                </h3>
                <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-gold/15 text-gold border border-gold/30 font-bold">
                  ASSISTENTE DE IA
                </span>
              </div>
              <p className="text-[11px] font-mono text-muted">
                Descubra onde seu negócio está perdendo dinheiro e como automatizar sua rotina.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-muted-soft hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-border bg-surface flex items-center gap-2 sm:gap-6 overflow-x-auto text-xs font-mono uppercase tracking-wider scrollbar-none">
          <button
            onClick={() => setActiveTab('chat')}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'chat'
                ? 'border-gold text-gold font-bold'
                : 'border-transparent text-muted-soft hover:text-muted'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>01. Consultor de Negócios</span>
          </button>

          <button
            onClick={() => setActiveTab('analyze')}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'analyze'
                ? 'border-gold text-gold font-bold'
                : 'border-transparent text-muted-soft hover:text-muted'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>02. Diagnóstico de Planilha / Foto</span>
          </button>
        </div>

        {/* Tab 1: Multi-turn Chat for Business Growth */}
        {activeTab === 'chat' && (
          <div className="flex-1 flex flex-col min-h-0 bg-canvas">
            {/* Model Selector Bar */}
            <div className="px-6 py-2.5 bg-surface border-b border-surface-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="text-muted-soft uppercase">Modelo:</span>
                <div className="flex items-center gap-1 bg-canvas p-0.5 border border-border">
                  <button
                    onClick={() => setSelectedModel('qwen/qwen3.8-27b')}
                    className={`px-2.5 py-1 transition-all cursor-pointer ${
                      selectedModel === 'qwen/qwen3.8-27b'
                        ? 'bg-gold text-canvas font-bold'
                        : 'text-muted hover:text-ink'
                    }`}
                    title="Qwen 3.8 - Inteligência & Raciocínio Profundo"
                  >
                    Qwen 3.8 (Recomendado)
                  </button>
                  <button
                    onClick={() => setSelectedModel('openai/gpt-oss-120b')}
                    className={`px-2.5 py-1 transition-all cursor-pointer ${
                      selectedModel === 'openai/gpt-oss-120b'
                        ? 'bg-gold text-canvas font-bold'
                        : 'text-muted hover:text-ink'
                    }`}
                    title="GPT-OSS 120B (OpenAI) - Alta Capacidade Analítica"
                  >
                    Modelo GPT-OSS (OpenAi)
                  </button>
                </div>
              </div>

              <span className="text-muted-soft hidden sm:inline">
                Assistente de IA Gratuito • Zero Jargões Técnicos • Foco em Lucro
              </span>
            </div>

            {/* Scrollable Message Thread */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 text-[10px] font-mono text-muted-soft">
                    <span>{msg.role === 'user' ? 'Você' : 'Consultor OPTIMAFY'}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                    {msg.modelUsed && (
                      <>
                        <span>•</span>
                        <span className="text-gold">{msg.modelUsed}</span>
                      </>
                    )}
                  </div>

                  <div
                    className={`max-w-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-surface-2 border border-border text-ink'
                        : 'bg-surface border border-border text-ink-soft'
                    }`}
                  >
                    <MarkdownContent content={msg.content} isUser={msg.role === 'user'} />
                  </div>
                </div>
              ))}

              {chatLoading && (
                <div className="flex items-center gap-3 p-4 bg-surface border border-border max-w-sm text-xs font-mono text-gold">
                  <RefreshCw className="w-4 h-4 animate-spin text-gold" />
                  <span>Processando resposta com o Assistente de IA...</span>
                </div>
              )}

              {chatError && (
                <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{chatError}</span>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Quick Business Suggestions */}
            <div className="px-6 py-2 bg-surface border-t border-border-soft flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
              <span className="text-muted-soft shrink-0">Dúvidas Frequentes:</span>
              <button
                onClick={() =>
                  setChatInput('Como fazer meu sistema de vendas conversar sozinho com o financeiro?')
                }
                className="px-2.5 py-1 bg-surface-2 hover:bg-surface-3 text-muted hover:text-ink border border-surface-3 truncate shrink-0 cursor-pointer"
              >
                Vendas e Financeiro Conectados
              </button>
              <button
                onClick={() =>
                  setChatInput('Quanto tempo minha equipe pode economizar automatizando planilhas manuais?')
                }
                className="px-2.5 py-1 bg-surface-2 hover:bg-surface-3 text-muted hover:text-ink border border-surface-3 truncate shrink-0 cursor-pointer"
              >
                Economia com Planilhas
              </button>
              <button
                onClick={() =>
                  setChatInput('O que meu site precisa ter para passar imagem de empresa grande e fechar mais vendas?')
                }
                className="px-2.5 py-1 bg-surface-2 hover:bg-surface-3 text-muted hover:text-ink border border-surface-3 truncate shrink-0 cursor-pointer"
              >
                Site com Imagem de Empresa Grande
              </button>
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-surface border-t border-border flex items-center gap-3"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Pergunte sobre automações, planilhas, WhatsApp, sites ou economia de tempo..."
                className="flex-1 bg-surface-2 border border-border px-4 py-3 text-sm text-ink placeholder-muted-soft focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                disabled={chatLoading || !chatInput.trim()}
                className="px-6 py-3 bg-gold disabled:opacity-50 text-canvas font-bold text-xs font-mono uppercase tracking-wider hover:bg-gold-hover transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Enviar</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Image Analysis (Vision) */}
        {activeTab === 'analyze' && (
          <div className="flex-1 overflow-y-auto p-6 bg-canvas space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column: Upload and Preview */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-gold tracking-wider font-bold">
                    Foto da Planilha, Tela de Pedidos ou Site
                  </span>
                  <span className="font-mono text-[10px] text-muted-soft">
                    Assistente de IA Vision
                  </span>
                </div>

                {/* Dropzone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                    selectedImage
                      ? 'border-gold/60 bg-surface'
                      : 'border-border hover:border-gold/50 bg-surface/50'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {selectedImage ? (
                    <div className="space-y-3 w-full">
                      <img
                        src={selectedImage}
                        alt="Imagem selecionada"
                        className="max-h-56 mx-auto object-contain border border-[#2a2a2a]"
                      />
                      <p className="font-mono text-xs text-gold">
                        Foto carregada! Clique para trocar ou clique no botão abaixo para analisar.
                      </p>
                    </div>
                  ) : (
                    <div className="py-6 space-y-2">
                      <Upload className="w-8 h-8 text-muted-soft mx-auto mb-2" />
                      <p className="font-mono text-xs text-muted">
                        Arraste ou clique para enviar uma foto da sua planilha, anotação ou tela
                      </p>
                      <p className="text-[10px] font-mono text-muted-soft">
                        PNG, JPG de anotações de pedidos, tela do Excel, recibos ou WhatsApp
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Presets */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-muted-soft">
                    Ou teste com um exemplo comum de rotina manual:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {samplePresets.map((preset, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectPreset(preset.url)}
                        className="p-2 bg-surface-2 hover:bg-surface-3 border border-border text-left text-[11px] font-mono text-muted truncate cursor-pointer"
                      >
                        {preset.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Prompt */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-muted uppercase">
                    O que você gostaria de saber sobre esse processo?
                  </label>
                  <textarea
                    rows={3}
                    value={analysisPrompt}
                    onChange={(e) => setAnalysisPrompt(e.target.value)}
                    className="w-full bg-surface-2 border border-border p-3 text-xs text-ink focus:outline-none focus:border-gold"
                  />
                </div>

                <button
                  onClick={handleAnalyzeImage}
                  disabled={!selectedImage || isAnalyzing}
                  className="w-full py-3.5 bg-gold disabled:opacity-50 text-canvas font-mono font-bold text-xs uppercase tracking-wider hover:bg-gold-hover transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--token-glow)]"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analisando com o Assistente de IA...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Descobrir Como Automatizar e Lucrar Mais</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column: Diagnostic Output */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase text-gold tracking-wider font-bold">
                    Diagnóstico Prático de Negócios
                  </span>
                </div>

                <div className="flex-1 bg-surface border border-border p-5 font-mono text-xs leading-relaxed text-muted overflow-y-auto min-h-[350px]">
                  {analysisResult ? (
                    <MarkdownContent content={analysisResult} />
                  ) : isAnalyzing ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3 text-muted-soft">
                      <RefreshCw className="w-8 h-8 text-gold animate-spin" />
                      <p className="font-mono text-xs text-gold">
                        Analisando sua imagem com o Assistente de IA...
                      </p>
                      <p className="text-[11px] text-muted-soft">
                        Identificando onde o trabalho manual está roubando seu tempo e suas vendas.
                      </p>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 text-muted-soft space-y-2">
                      <ImageIcon className="w-8 h-8 text-[#333333] mx-auto" />
                      <p className="text-xs">
                        Nenhuma imagem enviada ainda. Faça o upload à esquerda e clique em Descobrir Como Automatizar.
                      </p>
                    </div>
                  )}

                  {analysisError && (
                    <div className="mt-4 p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono">
                      {analysisError}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
