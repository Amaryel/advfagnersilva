import React, { useState } from 'react';
import { motion } from 'motion/react';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Mail, 
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Landmark,
  ShieldCheck,
  Instagram,
  Globe,
  Loader2,
  Sparkles
} from 'lucide-react';

export const Contato: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Contact Method: 'whatsapp' | 'email' (WhatsApp default for speed)
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');

  // Email form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Isaías Coelho - PI');
  const [subject, setSubject] = useState('Dúvida Jurídica Criminal');
  const [message, setMessage] = useState('');

  // Status state
  const [sendStatus, setSendStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Fast WhatsApp message state
  const [waName, setWaName] = useState('');
  const [waCity, setWaCity] = useState('Isaías Coelho - PI');
  const [waUrgency, setWaUrgency] = useState('Prisão em Flagrante / Plantão 24h');
  const [waDetails, setWaDetails] = useState('');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSendStatus('success');
        setFeedbackMessage(data.message || 'Sua mensagem foi entregue com sucesso à caixa de entrada do Dr. Fagner Silva!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSendStatus('error');
        setFeedbackMessage(data.error || 'Não foi possível processar o envio por e-mail no momento. Por favor, acione o WhatsApp de plantão.');
      }
    } catch (err: any) {
      console.error('Erro de requisição:', err);
      setSendStatus('error');
      setFeedbackMessage('Falha de conexão com o servidor de e-mail. Por favor, utilize o botão de WhatsApp direto para atendimento prioritário.');
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Olá, Dr. Fagner Silva!\n\n*Solicitante:* ${waName || 'Não informado'}\n*Cidade:* ${waCity}\n*Assunto/Urgência:* ${waUrgency}\n*Relato:* ${waDetails || 'Gostaria de orientação jurídica criminal.'}`;
    window.open(getWhatsAppUrl(formattedMsg), '_blank');
  };

  return (
    <div id="contato-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${
      isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
    }`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#ebdcc9]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
          <PhoneCall className="w-4 h-4" />
          <span>Atendimento Direto & Plantão 24h</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
          Canais de Contato com o <span className="gold-gradient-text">Dr. Fagner Silva</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Para urgências penais (prisões em flagrante e custódias), acione o WhatsApp de plantão ou o telefone direto para resposta imediata.
        </p>
      </motion.div>

      {/* Grid: Info Column vs Interactive Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Phone / Location / Instagram */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Urgent Phone Box */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-4 interactive-card ${
            isDark ? 'bg-[#101726] border-[#22334f]' : 'bg-white border-[#ebdcc9]'
          }`}>
            <div className="flex items-center gap-3">
              <div className="soft-icon-pod !p-3">
                <PhoneCall className="w-6 h-6 text-[#b89058]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b89058] font-bold block">
                  Plantão Criminal 24h
                </span>
                <a href={`tel:${lawyerProfile.phoneRaw}`} className="font-serif text-xl sm:text-2xl font-bold text-[#0f2137] dark:text-[#f8fafc] hover:text-[#b89058]">
                  {lawyerProfile.phoneFormatted}
                </a>
              </div>
            </div>

            <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
              Atendimento ininterrupto para flagrantes, mandados de busca, prisões preventivas e audiências de custódia na Comarca de Simplício Mendes e região.
            </p>

            <a
              id="contato-whatsapp-cta-left"
              href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de solicitar atendimento criminal com o escritório.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md btn-shimmer touch-press cursor-pointer select-none text-center"
            >
              <MessageSquare className="w-4 h-4 fill-black/20" />
              <span>Chamar no WhatsApp de Plantão</span>
            </a>
          </div>

          {/* Location & Social */}
          <div className={`p-6 rounded-3xl border space-y-4 ${
            isDark ? 'bg-[#0d121c] border-[#1e2a3f]' : 'bg-[#faf8f5] border-[#ebdcc9]'
          }`}>
            <div className="flex items-start gap-3">
              <div className="soft-icon-pod !p-2 shrink-0">
                <MapPin className="w-4 h-4 text-[#b89058]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0f2137] dark:text-[#f8fafc] block">
                  Endereço do Escritório
                </span>
                <span className={`text-[11px] leading-relaxed block ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  {lawyerProfile.address}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="soft-icon-pod !p-2 shrink-0">
                <Instagram className="w-4 h-4 text-[#e1306c]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0f2137] dark:text-[#f8fafc] block">
                  Instagram Oficial
                </span>
                <a 
                  href={lawyerProfile.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#e1306c] hover:underline font-bold"
                >
                  {lawyerProfile.instagram}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="soft-icon-pod !p-2 shrink-0">
                <Globe className="w-4 h-4 text-[#b89058]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0f2137] dark:text-[#f8fafc] block">
                  Processo Judicial Eletrônico
                </span>
                <a 
                  href={lawyerProfile.pje1gUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#b89058] hover:underline font-bold"
                >
                  PJe TJ-PI (1º e 2º Graus)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form (WhatsApp / Email) */}
        <div className="lg:col-span-7">
          <div className={`rounded-3xl border p-6 sm:p-8 shadow-xl space-y-6 ${
            isDark ? 'bg-[#0d121c] border-[#1e2a3f]' : 'bg-white border-[#ebdcc9]'
          }`}>
            
            {/* Form Mode Selector */}
            <div className="flex items-center gap-2 p-1 rounded-2xl border border-current/10 bg-current/5">
              <button
                type="button"
                onClick={() => setActiveTab('whatsapp')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 touch-press cursor-pointer select-none ${
                  activeTab === 'whatsapp'
                    ? 'bg-[#b89058] text-white shadow-sm'
                    : 'text-[#64748b] hover:text-[#0f2137] dark:hover:text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direto (Mais Rápido)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('email')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 touch-press cursor-pointer select-none ${
                  activeTab === 'email'
                    ? 'bg-[#b89058] text-white shadow-sm'
                    : 'text-[#64748b] hover:text-[#0f2137] dark:hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Formulário de Mensagem</span>
              </button>
            </div>

            {/* Tab 1: WhatsApp Fast Dispatch */}
            {activeTab === 'whatsapp' && (
              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={waName}
                    onChange={(e) => setWaName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                      isDark 
                        ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                        : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                      Cidade / Comarca:
                    </label>
                    <input
                      type="text"
                      value={waCity}
                      onChange={(e) => setWaCity(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                        isDark 
                          ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                          : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                      Tipo de Urgência:
                    </label>
                    <select
                      value={waUrgency}
                      onChange={(e) => setWaUrgency(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                        isDark 
                          ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                          : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                      }`}
                    >
                      <option value="Prisão em Flagrante / Plantão 24h">Prisão em Flagrante / Plantão 24h</option>
                      <option value="Audiência de Custódia">Audiência de Custódia</option>
                      <option value="Intimação Policial / Inquérito">Intimação Policial / Inquérito</option>
                      <option value="Tribunal do Júri">Tribunal do Júri</option>
                      <option value="Execução Penal / Progressão">Execução Penal / Progressão</option>
                      <option value="Outro Assunto Criminal">Outro Assunto Criminal</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                    Resumo do Caso:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva resumidamente o que aconteceu ou qual informação você necessita..."
                    value={waDetails}
                    onChange={(e) => setWaDetails(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                      isDark 
                        ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                        : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg btn-shimmer touch-press cursor-pointer select-none"
                >
                  <MessageSquare className="w-4 h-4 fill-black/20" />
                  <span>Enviar Mensagem Formatada no WhatsApp</span>
                </button>
              </form>
            )}

            {/* Tab 2: Email Form */}
            {activeTab === 'email' && (
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                      Nome:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                        isDark 
                          ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                          : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                      E-mail:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                        isDark 
                          ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                          : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                      Telefone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(89) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                        isDark 
                          ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                          : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                      Assunto:
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                        isDark 
                          ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                          : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase font-bold text-[#64748b] block">
                    Mensagem:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva sua dúvida ou solicitação..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs focus:outline-none transition-all ${
                      isDark 
                        ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                        : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                    }`}
                  />
                </div>

                {sendStatus === 'success' && (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {sendStatus === 'error' && (
                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sendStatus === 'loading'}
                  className="w-full py-4 px-6 rounded-2xl bg-[#b89058] hover:bg-[#a0773d] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg btn-shimmer touch-press cursor-pointer select-none"
                >
                  {sendStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando Mensagem...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem ao Escritório</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
