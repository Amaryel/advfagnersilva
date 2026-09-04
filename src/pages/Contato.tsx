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

  // Contact Method: 'email' | 'whatsapp'
  const [activeTab, setActiveTab] = useState<'email' | 'whatsapp'>('email');

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
    <div id="contato-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#cbd5e1]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
          <PhoneCall className="w-4 h-4" />
          <span>Central de Contato & Plantão Jurídico</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
          Fale com o <span className="gold-gradient-text">Dr. Fagner Silva</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Envie sua dúvida jurídica para resposta oficial por e-mail ou acione o plantão criminal 24 horas para casos de flagrantes, custódia e urgências em Isaías Coelho e região.
        </p>
      </motion.div>

      {/* Main Grid: Direct Contacts + Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contacts & Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Emergency Box */}
          <div className="rounded-xl bg-gradient-to-br from-red-950/60 via-[#101420] to-[#0c0f18] border border-red-800/60 p-6 space-y-4 shadow-xl text-white">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>Plantão Criminal 24h para Urgências</span>
            </div>
            
            <h2 className="font-serif text-lg font-bold text-[#f8fafc]">
              Prisão em andamento, flagrante ou custódia?
            </h2>
            
            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              O tempo é determinante para a concessão de liberdade. Ligue ou acione o plantão via WhatsApp agora mesmo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <a
                id="contato-emergency-whatsapp-btn"
                href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de atendimento criminal URGENTE!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 24h</span>
              </a>

              <a
                id="contato-emergency-call-btn"
                href={`tel:${lawyerProfile.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-gradient-to-r from-red-700 to-amber-700 hover:from-red-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Official Portals & Social Links */}
          <div className={`p-6 rounded-xl border space-y-4 text-xs ${
            isDark ? 'bg-[#0d121c] border-[#1f2d43]' : 'bg-white border-[#e2e8f0] shadow-sm'
          }`}>
            <h3 className={`font-serif text-base font-bold border-b pb-3 ${
              isDark ? 'text-[#f1f5f9] border-[#182438]' : 'text-[#0f172a] border-[#cbd5e1]'
            }`}>
              Canais & Links Oficiais
            </h3>

            <div className="space-y-3 pt-1">
              {/* Instagram */}
              <a
                href={lawyerProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors group ${
                  isDark ? 'bg-[#121824] border-[#1f2d43] hover:border-[#c5a880]' : 'bg-[#f8fafc] border-[#cbd5e1] hover:border-[#c5a880]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#e1306c]/15 text-[#e1306c]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs block text-[#e1306c]">Instagram Oficial</span>
                    <span className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>@advfagnersilva</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-[#c5a880]" />
              </a>

              {/* PJe TJ-PI */}
              <a
                href={lawyerProfile.pje1gUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors group ${
                  isDark ? 'bg-[#121824] border-[#1f2d43] hover:border-[#c5a880]' : 'bg-[#f8fafc] border-[#cbd5e1] hover:border-[#c5a880]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#c5a880]/15 text-[#c5a880]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs block text-[#c5a880]">PJe TJ-PI (1º Grau)</span>
                    <span className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>pje.tjpi.jus.br/1g/</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-[#c5a880]" />
              </a>

              {/* OAB CNA */}
              <a
                href={lawyerProfile.oabCnaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors group ${
                  isDark ? 'bg-[#121824] border-[#1f2d43] hover:border-[#c5a880]' : 'bg-[#f8fafc] border-[#cbd5e1] hover:border-[#c5a880]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-500/15 text-blue-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs block text-blue-500">Cadastro OAB (CNA)</span>
                    <span className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>cna.oab.org.br</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-[#c5a880]" />
              </a>
            </div>
          </div>

          {/* Institutional Address */}
          <div className={`p-6 rounded-xl border space-y-3 text-xs ${
            isDark ? 'bg-[#0d121c] border-[#1f2d43]' : 'bg-white border-[#e2e8f0] shadow-sm'
          }`}>
            <h3 className={`font-serif text-base font-bold border-b pb-3 ${
              isDark ? 'text-[#f1f5f9] border-[#182438]' : 'text-[#0f172a] border-[#cbd5e1]'
            }`}>
              Gabinete de Atendimento
            </h3>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className={`font-semibold block ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
                    {lawyerProfile.city} — {lawyerProfile.state}
                  </span>
                  <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                    {lawyerProfile.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Landmark className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className={`font-semibold block ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
                    {lawyerProfile.mandate}
                  </span>
                  <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>
                    Câmara Municipal de Isaías Coelho
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className={`font-semibold block ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
                    E-mail do Escritório
                  </span>
                  <span className={`text-[11px] font-mono block mt-0.5 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                    {lawyerProfile.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Channels (Email Form + WhatsApp Form) */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-8 rounded-xl border shadow-xl space-y-6 ${
            isDark ? 'bg-[#0d121c] border-[#22314a]' : 'bg-white border-[#cbd5e1]'
          }`}>
            
            {/* Tabs Selector */}
            <div className="flex items-center justify-between border-b pb-4 gap-2">
              <div className="flex items-center gap-2">
                <button
                  id="tab-select-email"
                  onClick={() => setActiveTab('email')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
                    activeTab === 'email'
                      ? 'bg-[#c5a880] text-[#070a10] shadow'
                      : isDark
                        ? 'bg-[#151c2a] text-[#94a3b8] hover:text-[#f8fafc]'
                        : 'bg-[#f1f5f9] text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enviar por E-mail</span>
                </button>

                <button
                  id="tab-select-whatsapp"
                  onClick={() => setActiveTab('whatsapp')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
                    activeTab === 'whatsapp'
                      ? 'bg-[#25D366] text-black shadow'
                      : isDark
                        ? 'bg-[#151c2a] text-[#94a3b8] hover:text-[#f8fafc]'
                        : 'bg-[#f1f5f9] text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Atendimento WhatsApp</span>
                </button>
              </div>
            </div>

            {/* TAB 1: EMAIL SENDING VIA BACKEND (/api/send-email) */}
            {activeTab === 'email' && (
              <form onSubmit={handleSendEmail} className="space-y-4 text-xs">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                    Envie sua Dúvida por E-mail
                  </h2>
                  <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                    Sua mensagem será encaminhada diretamente para a caixa postal do Dr. Fagner Silva.
                  </p>
                </div>

                {/* Status Feedback Banner */}
                {sendStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-xs">{feedbackMessage}</p>
                      <p className="text-[11px] mt-1 text-emerald-300/80">
                        O advogado responderá pelo e-mail ou telefone informado no formulário.
                      </p>
                    </div>
                  </div>
                )}

                {sendStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-xs">{feedbackMessage}</p>
                      <a 
                        href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Tive uma dúvida e gostaria de falar com o senhor.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] mt-1.5 underline font-semibold block text-amber-300"
                      >
                        Clique aqui para conversar direto no WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Nome Completo *
                  </label>
                  <input
                    id="input-email-name"
                    type="text"
                    required
                    placeholder="Seu nome ou de quem solicita orientação"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                      isDark 
                        ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                        : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Seu E-mail *
                    </label>
                    <input
                      id="input-email-email"
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                          : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="input-email-phone"
                      type="tel"
                      placeholder="(89) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                          : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Cidade / Comarca
                    </label>
                    <input
                      id="input-email-city"
                      type="text"
                      placeholder="Isaías Coelho, Simplício Mendes, Picos..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                          : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Assunto da Mensagem
                    </label>
                    <select
                      id="input-email-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                          : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                      }`}
                    >
                      <option value="Dúvida Jurídica Criminal">Dúvida Jurídica Criminal</option>
                      <option value="Intimação para Delegacia">Intimação para Delegacia</option>
                      <option value="Audiência de Custódia">Audiência de Custódia</option>
                      <option value="Tribunal do Júri">Tribunal do Júri</option>
                      <option value="Habeas Corpus / Recursos">Habeas Corpus / Recursos</option>
                      <option value="Execução Penal / Progressão">Execução Penal / Progressão</option>
                      <option value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Mensagem / Relato da Dúvida *
                  </label>
                  <textarea
                    id="input-email-message"
                    rows={4}
                    required
                    placeholder="Descreva detalhadamente sua dúvida ou situação jurídica..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                      isDark 
                        ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                        : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                    }`}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    id="btn-submit-email"
                    type="submit"
                    disabled={sendStatus === 'loading'}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#c5a880] hover:bg-[#d4b992] text-[#070a10] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.99] disabled:opacity-50"
                  >
                    {sendStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#070a10]" />
                        <span>Enviando Mensagem ao Advogado...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#070a10]" />
                        <span>Enviar E-mail para Dr. Fagner Silva</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: WHATSAPP DIRECT */}
            {activeTab === 'whatsapp' && (
              <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                    Atendimento Estruturado no WhatsApp
                  </h2>
                  <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                    Preencha os dados para iniciar uma conversa prioritária no WhatsApp oficial.
                  </p>
                </div>

                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={waName}
                    onChange={(e) => setWaName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                      isDark 
                        ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                        : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Cidade onde ocorreu o fato:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Isaías Coelho, PI"
                      value={waCity}
                      onChange={(e) => setWaCity(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                          : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Natureza do Caso:
                    </label>
                    <select
                      value={waUrgency}
                      onChange={(e) => setWaUrgency(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                          : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                      }`}
                    >
                      <option value="Prisão em Flagrante / Plantão 24h">Prisão em Flagrante (Urgência 24h)</option>
                      <option value="Intimação Policial para Depoimento">Intimação para Delegacia</option>
                      <option value="Audiência de Custódia">Audiência de Custódia</option>
                      <option value="Tribunal do Júri">Tribunal do Júri</option>
                      <option value="Habeas Corpus">Habeas Corpus</option>
                      <option value="Execução Penal">Execução Penal</option>
                      <option value="Consulta Geral">Consulta Geral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Breve resumo do caso:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva resumidamente o que aconteceu..."
                    value={waDetails}
                    onChange={(e) => setWaDetails(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors ${
                      isDark 
                        ? 'bg-[#121927] border-[#23314d] focus:border-[#c5a880] text-[#f8fafc]' 
                        : 'bg-[#f8fafc] border-[#cbd5e1] focus:border-[#c5a880] text-[#0f172a]'
                    }`}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.99]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Iniciar Conversa no WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
