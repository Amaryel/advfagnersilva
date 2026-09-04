import { PracticeArea, ContentArticle, FaqItem, ConfirmedLawyerProfile, CasePrecedent } from '../types';

export const lawyerProfile: ConfirmedLawyerProfile = {
  name: "Dr. Fagner Silva",
  specialty: "Direito Penal & Processual Penal Especializado",
  mandate: "Vereador do Município de Isaías Coelho - PI",
  city: "Isaías Coelho",
  state: "PI",
  phoneRaw: "5589994148236",
  phoneFormatted: "(89) 99414-8236",
  oabNumber: "OAB/PI (Consulta via CNA)",
  academicFormation: "Bacharel em Direito • Especialista em Ciências Criminais",
  email: "amaryelcc@gmail.com",
  address: "Centro, Isaías Coelho - PI, CEP 64700-000",
  instagram: "@advfagnersilva",
  instagramUrl: "https://www.instagram.com/advfagnersilva/",
  pje1gUrl: "https://pje.tjpi.jus.br/1g/",
  pje2gUrl: "https://pje.tjpi.jus.br/2g/",
  oabCnaUrl: "https://cna.oab.org.br/",
  tjpiUrl: "https://www.tjpi.jus.br/",
  avatarUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"
};

export const casePrecedents: CasePrecedent[] = [
  {
    id: 'caso-hc-tjpi-1',
    category: 'Habeas Corpus',
    title: 'Concessão de Liminar em Habeas Corpus por Excesso de Prazo',
    court: 'Tribunal de Justiça do Estado do Piauí (TJ-PI)',
    caseSummary: 'Impetração de ordem de Habeas Corpus perante a Câmara Criminal do TJ-PI em razão de constrangimento ilegal decorrente do prolongamento injustificado da prisão preventiva sem conclusão da instrução processual.',
    legalThesis: 'Violação ao princípio da razoável duração do processo (Art. 5º, LXXVIII da CF/88) e ausência de complexidade extraordinária que justificasse a delonga estatal na formação da culpa.',
    outcome: 'Ordem concedida com expedição imediata de Alvará de Soltura e fixação de medidas cautelares alternativas previstas no Art. 319 do CPP.',
    dateOrYear: 'Atuação Colegiada TJ-PI',
    pjeLink: 'https://pje.tjpi.jus.br/2g/',
    tags: ['Habeas Corpus', 'TJ-PI', 'Liberdade', 'Excesso de Prazo']
  },
  {
    id: 'caso-custodia-1',
    category: 'Audiência de Custódia',
    title: 'Relaxamento de Prisão em Flagrante por Inviolabilidade de Domicílio',
    court: 'Vara Única da Comarca / Juízo de Garantias',
    caseSummary: 'Atuação imediata em sede de Audiência de Custódia demonstrando a ilicitude do ingresso forçado em domicílio sem consentimento válido, sem fundadas razões prévias e sem mandado judicial.',
    legalThesis: 'Nulidade absoluta do flagrante e das provas derivadas com base no Tema 280 da Repercussão Geral do STF e Art. 5º, XI da Constituição Federal.',
    outcome: 'Relaxamento da prisão por manifesta ilegalidade do ato flagrancial, com determinação do desentranhamento das provas ilícitas.',
    dateOrYear: 'Plantão de Custódia 24h',
    pjeLink: 'https://pje.tjpi.jus.br/1g/',
    tags: ['Custódia', 'Inviolabilidade Domiciliar', 'Tema 280 STF', 'Relaxamento']
  },
  {
    id: 'caso-juri-1',
    category: 'Tribunal do Júri',
    title: 'Defesa em Plenário do Júri: Acolhimento de Tese de Legítima Defesa',
    court: 'Vara do Tribunal do Júri • Comarcas do Piauí',
    caseSummary: 'Sustentação oral combativa perante o Conselho de Sentença em processo de imputação de homicídio tentado decorrente de desentendimento em zona rural.',
    legalThesis: 'Demonstração detalhada da moderação dos meios empregados e da injusta agressão iminente, respaldada pela contradição dos depoimentos acusatórios e reconstituição pericial.',
    outcome: 'Absolvição do acusado pelos jurados com base na excludente de ilicitude da Legítima Defesa (Art. 23, II e Art. 25 do CP).',
    dateOrYear: 'Julgamento em Plenário',
    pjeLink: 'https://pje.tjpi.jus.br/1g/',
    tags: ['Tribunal do Júri', 'Legítima Defesa', 'Absolvição', 'Sustentação Oral']
  },
  {
    id: 'caso-anpp-1',
    category: 'Acordo ANPP',
    title: 'Homologação de Acordo de Não Persecução Penal (ANPP)',
    court: 'Justiça Comum Estadual • Comarca de Origem',
    caseSummary: 'Negociação jurídica e acompanhamento de celebração de ANPP perante o Ministério Público Estadual para cidadão primário investigado por delito patrimonial sem violência.',
    legalThesis: 'Incidência do Art. 28-A do CPP, preenchimento de todos os requisitos subjetivos e objetivos para evitar a instauração de ação penal e preservar a primariedade.',
    outcome: 'Acordo devidamente homologado pelo juízo competente com cumprimento das condições e posterior extinção da punibilidade sem antecedentes.',
    dateOrYear: 'Fase Pré-Processual',
    pjeLink: 'https://pje.tjpi.jus.br/1g/',
    tags: ['ANPP', 'Art. 28-A CPP', 'Primariedade', 'Sem Condenação']
  },
  {
    id: 'caso-execucao-1',
    category: 'Execução Penal',
    title: 'Progressão Imediata de Regime & Remição de Pena por Trabalho',
    court: 'Vara de Execuções Penais do Piauí',
    caseSummary: 'Pedido de retificação da Guia de Recolhimento e cômputo dos dias trabalhados em estabelecimento prisional, com alcance do lapso temporal para regime semiaberto/aberto.',
    legalThesis: 'Aplicação do Art. 126 da Lei de Execução Penal (LEP) e cumprimento estrito dos percentuais objetivos introduzidos pela Lei 13.964/19.',
    outcome: 'Concessão da progressão de regime prisional e deferimento de saídas temporárias com parecer favorável do Ministério Público.',
    dateOrYear: 'Vara de Execução Penal',
    pjeLink: 'https://pje.tjpi.jus.br/1g/',
    tags: ['Execução Penal', 'LEP', 'Remição', 'Progressão de Regime']
  },
  {
    id: 'caso-inquerito-1',
    category: 'Inquérito Policial',
    title: 'Acompanhamento de Interrogatório e Arquivamento de Inquérito',
    court: 'Delegacia de Polícia Civil / Juizado Criminal',
    caseSummary: 'Acompanhamento técnico desde a intimação, exame prévio dos autos com base na Súmula Vinculante 14 do STF e juntada de documentos comprobatórios de álibi.',
    legalThesis: 'Comprovação da atipicidade da conduta e ausência de justa causa para deflagração da ação penal pelo Ministério Público.',
    outcome: 'Promoção de arquivamento pelo Ministério Público acolhida pelo magistrado, evitando a estigmatização de um processo criminal.',
    dateOrYear: 'Fase Investigatória',
    pjeLink: 'https://pje.tjpi.jus.br/1g/',
    tags: ['Inquérito Policial', 'Súmula Vinculante 14', 'Arquivamento', 'Álibi']
  }
];

export const getWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${lawyerProfile.phoneRaw}?text=${encoded}`;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'flagrantes',
    title: 'Prisão em Flagrante & Custódia',
    subtitle: 'Atendimento emergencial e acompanhamento em delegacias',
    description: 'Atuação imediata na análise da legalidade da prisão, garantia dos direitos constitucionais e formulação de pedidos de liberdade provisória ou relaxamento.',
    details: [
      'Acompanhamento presencial em Delegacias de Polícia Civil e Federal',
      'Atuação técnica e imediata em Audiência de Custódia (24h)',
      'Defesa contra abusos de autoridade e ilegalidades no flagrante',
      'Elaboração de pedidos de revogação de prisão preventiva'
    ],
    urgencyLevel: 'immediate',
    whatsappMessage: 'Olá, Dr. Preciso de atendimento urgente para um caso de Prisão em Flagrante / Audiência de Custódia. Poderia me orientar?',
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    badge: 'Urgência Máxima 24h'
  },
  {
    id: 'inquerito',
    title: 'Inquérito Policial & Investigação',
    subtitle: 'Defesa técnica desde os primeiros atos investigatórios',
    description: 'Acompanhamento estratégico em oitivas, interrogatórios e diligências antes do oferecimento de eventual denúncia pelo Ministério Público.',
    details: [
      'Orientação prévia e acompanhamento de depoimentos',
      'Acesso formal aos autos de inquérito e provas produzidas (Súmula Vinculante 14)',
      'Requerimento de diligências e juntada de provas defensivas',
      'Impetração de Habeas Corpus para trancamento de inquérito ilegal'
    ],
    whatsappMessage: 'Olá, Dr. Fui intimado para prestar depoimento ou tenho um inquérito em andamento e gostaria de agendar uma consulta.',
    iconName: 'FileSearch',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    badge: 'Fase Pré-Processual'
  },
  {
    id: 'juri',
    title: 'Tribunal do Júri',
    subtitle: 'Defesa especializada em crimes dolosos contra a vida',
    description: 'Preparação minuciosa e sustentação oral combativa perante o Conselho de Sentença para julgamentos de homicídio tentado ou consumado.',
    details: [
      'Atuação completa em todas as fases da instrução preliminar',
      'Estudo aprofundado dos laudos periciais e reconstituições',
      'Sustentação oral perante os jurados com rigor técnico e retórica persuasiva',
      'Interposição de recursos cabíveis contra decisões contrárias à prova'
    ],
    whatsappMessage: 'Olá, Dr. Gostaria de uma análise para um processo criminal em fase de Tribunal do Júri.',
    iconName: 'Scale',
    imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
    badge: 'Sustentação Oral'
  },
  {
    id: 'recursos',
    title: 'Habeas Corpus & Recursos Criminais',
    subtitle: 'Atuação nos Tribunais Estaduais e Superiores',
    description: 'Medidas urgentes para cessar coação ilegal e recursos perante o TJ-PI, STJ e STF visando anulação de processos ou redução de penas.',
    details: [
      'Elaboração e impetração de Habeas Corpus com pedido liminar',
      'Recursos de Apelação, Recurso em Sentido Estrito (RESE) e Agravos',
      'Recurso Especial (STJ) e Recurso Extraordinário (STF em Brasília)',
      'Sustentação oral presencial e por videoconferência nos colegiados'
    ],
    whatsappMessage: 'Olá, Dr. Preciso de auxílio para impetração de Habeas Corpus ou interposição de recurso criminal.',
    iconName: 'ScrollText',
    imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=800&q=80',
    badge: 'TJ-PI • STJ • STF'
  },
  {
    id: 'execucao',
    title: 'Execução Penal & Benefícios',
    subtitle: 'Acompanhamento do cumprimento de pena e garantias',
    description: 'Defesa técnica para que a execução penal respeite estritamente a lei, assegurando a concessão célere de todos os direitos do apenado.',
    details: [
      'Cálculo e pedidos de Progressão de Regime (fechado, semiaberto, aberto)',
      'Requerimento de Livramento Condicional e Saídas Temporárias',
      'Remição de pena por estudo ou trabalho comprovado',
      'Transferência de estabelecimento prisional e pedidos de indulto'
    ],
    whatsappMessage: 'Olá, Dr. Gostaria de verificar a situação de cumprimento de pena e benefícios de execução penal para um familiar.',
    iconName: 'LockOpen',
    imageUrl: 'https://images.unsplash.com/photo-1453733197781-79dfb0c51f49?auto=format&fit=crop&w=800&q=80',
    badge: 'Direitos do Apenado'
  },
  {
    id: 'patrimonio',
    title: 'Defesa em Ações Penais Gerais',
    subtitle: 'Crimes patrimoniais, drogas, trânsito e legislação especial',
    description: 'Defesa integral em processos que tramitam na comarca de Isaías Coelho, Simplício Mendes, Picos e demais jurisdições do Piauí.',
    details: [
      'Apresentação de Resposta à Acusação com teses preliminares e nulidades',
      'Produção e inquirição de testemunhas em audiência de instrução',
      'Alegações Finais por memoriais com análise crítica das provas',
      'Negociação de Acordos de Não Persecução Penal (ANPP)'
    ],
    whatsappMessage: 'Olá, Dr. Gostaria de agendar uma consulta para defesa técnica em processo criminal em andamento.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    badge: 'Processo Comum'
  }
];

export const contentArticles: ContentArticle[] = [
  {
    id: 'intimacao-delegacia',
    title: 'Fui intimado para comparecer à Delegacia: como devo proceder?',
    category: 'Direito do Cidadão',
    readTime: '3 min de leitura',
    date: 'Guia Prático',
    summary: 'Entenda por que o cidadão nunca deve comparecer desacompanhado de um advogado e qual é o alcance do direito ao silêncio garantido pela Constituição.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    fullContent: [
      'Receber uma intimação policial pode gerar grande apreensão. No entanto, é fundamental manter a calma e compreender que o comparecimento sem a devida orientação técnica pode trazer prejuízos irreversíveis para a defesa.',
      'A Constituição Federal assegura a todo cidadão o direito fundamental de permanecer em silêncio e de não produzir provas contra si mesmo. Isso significa que o silêncio jamais pode ser interpretado como confissão ou admissão de culpa.',
      'O papel do advogado criminalista antes da oitiva consiste em: (1) ter acesso prévio aos autos da investigação; (2) instruir o cliente sobre as perguntas relevantes; (3) garantir que a autoridade policial respeite os limites legais durante o depoimento.',
      'Se você ou alguém próximo recebeu uma intimação, procure imediatamente orientação jurídica especializada antes de prestar qualquer declaração.'
    ],
    instagramRef: '[CONFIRMAR COM O CLIENTE - Link do Post no Instagram]'
  },
  {
    id: 'audiencia-custodia',
    title: 'Audiência de Custódia: a primeira barreira contra prisões ilegais',
    category: 'Processo Penal',
    readTime: '4 min de leitura',
    date: 'Garantias Processuais',
    summary: 'Saiba como funciona a audiência obrigatória em até 24 horas após o flagrante e por que ela é decisiva para responder ao processo em liberdade.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    fullContent: [
      'Instituída para assegurar que toda pessoa presa seja apresentada a um juiz no prazo de até 24 horas, a Audiência de Custódia é um dos instrumentos mais vitais do processo penal contemporâneo.',
      'O objetivo central não é julgar se a pessoa é culpada ou inocente do fato imputado, mas sim verificar: a legalidade do ato da prisão, a eventual ocorrência de tortura ou maus-tratos policiais e a estrita necessidade da manutenção da custódia cautelar.',
      'A prisão preventiva é a exceção no ordenamento jurídico brasileiro. Havendo preenchimento dos requisitos legais (como primariedade, bons antecedentes e residência fixa), a defesa técnica pleiteia a concessão de liberdade provisória com ou sem aplicação de medidas cautelares diversas.',
      'A atuação enérgica e fundamentada do advogado nesta audiência pode definir se o acusado enfrentará as apurações em liberdade ou sob cárcere provisório.'
    ],
    instagramRef: '[CONFIRMAR COM O CLIENTE - Link do Post no Instagram]'
  },
  {
    id: 'anpp-acordo',
    title: 'Acordo de Não Persecução Penal (ANPP): quando é possível evitar o processo?',
    category: 'Legislação Criminal',
    readTime: '3 min de leitura',
    date: 'Estratégia Defensiva',
    summary: 'Com a Lei Anticrime, determinados delitos sem violência física permitem celebrar acordo com o Ministério Público para não gerar condenação criminal.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    fullContent: [
      'O Acordo de Não Persecução Penal (ANPP), introduzido no artigo 28-A do Código de Processo Penal, revolucionou a resolução de casos criminais no Brasil.',
      'Aplica-se a infrações penais cometidas sem violência ou grave ameaça à pessoa e com pena mínima cominada inferior a 4 anos, desde que seja necessário e suficiente para reprovação e prevenção do crime.',
      'Cumpridas integralmente as condições pactuadas (como prestação de serviços à comunidade ou pagamento de prestação pecuniária), o juiz declara a extinção da punibilidade, mantendo a primariedade e a ficha limpa do investigado.',
      'A análise de conveniência do ANPP exige olhar técnico apurado do advogado para certificar se a denúncia não possui nulidades que ensejariam a absolvição direta.'
    ],
    instagramRef: '[CONFIRMAR COM O CLIENTE - Link do Post no Instagram]'
  },
  {
    id: 'execucao-direitos',
    title: 'Progressão de Regime Prisional: prazos e requisitos legais',
    category: 'Execução Penal',
    readTime: '4 min de leitura',
    date: 'Direitos do Apenado',
    summary: 'Descubra como funcionam os novos percentuais para progressão após a Lei 13.964 e o direito de remição por trabalho e estudo.',
    imageUrl: 'https://images.unsplash.com/photo-1453733197781-79dfb0c51f49?auto=format&fit=crop&w=800&q=80',
    fullContent: [
      'A execução penal tem por finalidade reintegrar o condenado ao convívio social de maneira gradativa, progredindo do regime fechado para o semiaberto e deste para o aberto.',
      'Com as recentes alterações legislativas, os prazos de progressão são calculados com base em percentuais objetivos da pena cumprida (16%, 20%, 25%, 30%, 40%, 50%, 60% ou 70%), dependendo da primariedade, reincidência e natureza do delito (comum ou hediondo).',
      'Além do tempo, cada 3 dias trabalhados ou 12 horas de estudo comprovadas descontam 1 dia de pena (remição), acelerando o momento de retorno ao seio familiar.',
      'O acompanhamento contínuo da Guia de Execução Penal pelo advogado impede que o apenado permaneça no cárcere além do tempo determinado pela legislação.'
    ],
    instagramRef: '[CONFIRMAR COM O CLIENTE - Link do Post no Instagram]'
  }
];

export interface DefensePhase {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  lawReference: string;
  actionRequired: string;
}

export const defensePhasesTimeline: DefensePhase[] = [
  {
    step: '01',
    title: 'Flagrante & Custódia (0 a 24h)',
    subtitle: 'Momento crítico da restrição da liberdade',
    description: 'Exame de integridade física, verificação da legalidade da prisão e pleito imediato de liberdade provisória perante o juiz de garantias.',
    lawReference: 'Art. 310 do CPP & Pacto de San José',
    actionRequired: 'Acionar plantão de atendimento imediato.'
  },
  {
    step: '02',
    title: 'Inquérito Policial',
    subtitle: 'Fase investigatória e coleta de provas',
    description: 'Acesso formal aos autos, acompanhamento de oitivas e produção de elementos técnicos de defesa antes da decisão do Ministério Público.',
    lawReference: 'Súmula Vinculante nº 14 do STF',
    actionRequired: 'Exercício orientado do direito ao silêncio.'
  },
  {
    step: '03',
    title: 'Resposta à Acusação & Instrução',
    subtitle: 'Início formal da ação penal',
    description: 'Arguição de preliminares e nulidades, rol de testemunhas defensivas, perícias e interrogatório judicial sob o crivo do contraditório.',
    lawReference: 'Arts. 396 e 400 do CPP',
    actionRequired: 'Apresentação de estratégia probatória robusta.'
  },
  {
    step: '04',
    title: 'Tribunal do Júri ou Memoriais',
    subtitle: 'Fase decisória de mérito',
    description: 'Sustentação oral perante os jurados para crimes dolosos contra a vida ou memoriais finais escritos para a Justiça Comum.',
    lawReference: 'Art. 5º, XXXVIII da CF/88',
    actionRequired: 'Defesa oral persuasiva e minuciosa.'
  },
  {
    step: '05',
    title: 'Recursos & Tribunais Superiores',
    subtitle: 'Revisão colegiada e Habeas Corpus',
    description: 'Impetração de Habeas Corpus no TJ-PI, Recursos Especiais ao STJ e Recursos Extraordinários ao STF visando nulidades ou redução de pena.',
    lawReference: 'TJ-PI, STJ & STF (Brasília)',
    actionRequired: 'Sustentação perante os colegiados.'
  }
];

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Um familiar ou amigo foi preso agora. O que devo fazer de imediato?',
    answer: 'Mantenha a tranquilidade e evite confrontos na delegacia. Entre em contato imediatamente com o advogado criminalista pelo plantão telefônico/WhatsApp. Informe o nome completo da pessoa detida e, se souber, em qual delegacia ou batalhão ela se encontra. O advogado irá prontamente ao local para tomar ciência da ocorrência, acompanhar o flagrante e resguardar a integridade física e os direitos constitucionais do detido.',
    category: 'urgencias',
    whatsappFollowUp: 'Olá, Dr. Um familiar foi detido e preciso de orientação imediata sobre os primeiros passos.'
  },
  {
    id: 'faq-2',
    question: 'O escritório realiza atendimentos de urgência em finais de semana e madrugadas?',
    answer: 'Sim. Situações que envolvam prisões em flagrante, apreensões, mandados de busca e custódia não escolhem horário. Por isso, mantemos canal de atendimento em regime de plantão no WhatsApp para demandas de urgência criminal em Isaías Coelho e municípios vizinhos.',
    category: 'urgencias',
    whatsappFollowUp: 'Olá, Dr. Gostaria de solicitar atendimento criminal de urgência no plantão.'
  },
  {
    id: 'faq-3',
    question: 'Em quais cidades e comarcas o advogado atua presencialmente?',
    answer: 'A base principal de atuação é o município de Isaías Coelho - PI e a comarca de Simplício Mendes, estendendo-se a Picos, Floriano, Oeiras, Paulistana, Teresina e todo o Estado do Piauí. Em recursos perante Tribunais Superiores (STJ e STF em Brasília), a atuação é realizada de forma integrada com sustentações virtuais e memoriais presenciais.',
    category: 'atendimento',
    whatsappFollowUp: 'Olá, Dr. Gostaria de saber se o senhor atua presencialmente na minha comarca.'
  },
  {
    id: 'faq-4',
    question: 'O que devo levar ou relatar na primeira consulta jurídica?',
    answer: 'Traga consigo seus documentos pessoais (RG/CPF), cópia da intimação ou mandado recebido (se houver), e qualquer documento ou testemunha que conheça os fatos. Na consulta, relate a verdade integral dos fatos ao advogado: o sigilo profissional entre cliente e advogado é inviolável por lei e protegido pelo Estatuto da OAB.',
    category: 'atendimento',
    whatsappFollowUp: 'Olá, Dr. Gostaria de agendar uma consulta e saber quais documentos apresentar.'
  },
  {
    id: 'faq-5',
    question: 'É possível responder ao inquérito ou ao processo penal em liberdade?',
    answer: 'Sim, a regra no direito brasileiro é a liberdade. A prisão antes do trânsito em julgado de uma sentença condenatória somente pode ocorrer em hipóteses estritas e quando comprovada a real necessidade de garantia da ordem pública ou conveniência da instrução. A defesa técnica trabalha para demonstrar que medidas cautelares alternativas são suficientes.',
    category: 'processual',
    whatsappFollowUp: 'Olá, Dr. Gostaria de entender as possibilidades de pedido de liberdade provisória para um caso específico.'
  },
  {
    id: 'faq-6',
    question: 'Como são calculados e fixados os honorários advocatícios?',
    answer: 'Os honorários são estabelecidos com total transparência e contratualização formal, observando a Tabela de Honorários da OAB/PI, a complexidade da matéria, a urgência requerida, a necessidade de deslocamento e as fases processuais a serem desempenhadas. As condições de pagamento são dialogadas de forma justa e clara antes do início dos trabalhos.',
    category: 'processual',
    whatsappFollowUp: 'Olá, Dr. Gostaria de conversar sobre honorários e proposta de atuação para um processo.'
  }
];
