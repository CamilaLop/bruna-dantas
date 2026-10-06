export const contact = {
  whatsapp: '5522999139286',
  phone: '(22) 99913-9286',
  email: 'dra.brunadantasadv@gmail.com',
  location: 'Búzios · Rio de Janeiro',
  registration: 'OAB/RJ 260.703',
  serviceMode: 'Atendimento online e presencial',
  instagram: 'https://www.instagram.com/dra.brunadantasadv/',
  instagramLabel: '@dra.brunadantasadv',
  hours: ['Segunda a sexta, das 9h às 18h', 'Sábado, das 9h às 13h'],
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp}`;

export const areas = [
  {
    id: 'trabalho',
    title: 'Direito do Trabalho',
    short: 'Cuidado com os direitos nas relações de trabalho.',
    description: 'Orientação e representação de empregados e empregadores, com análise individual das relações e dos conflitos trabalhistas.',
    topics: ['Rescisões contratuais', 'Reclamações trabalhistas', 'Acordos coletivos', 'Assédio moral e discriminação'],
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    short: 'Escuta e orientação nas questões familiares.',
    description: 'Acompanhamento em questões familiares, com atenção às particularidades de cada situação e espaço para o diálogo.',
    topics: ['Divórcio e separação', 'Guarda e visitação', 'Pensão alimentícia', 'Partilha de bens'],
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    short: 'Orientação sobre produtos, serviços e seus direitos.',
    description: 'Assistência em conflitos de consumo relacionados a práticas abusivas, produtos defeituosos, cobranças e serviços inadequados.',
    topics: ['Vícios e defeitos de produtos', 'Cobranças indevidas', 'Reparação de danos', 'Relações de consumo'],
  },
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário',
    short: 'Segurança jurídica nas questões envolvendo imóveis.',
    description: 'Orientação e acompanhamento jurídico em questões imobiliárias, com atenção aos documentos, às relações contratuais e às particularidades de cada caso.',
    topics: ['Compra e venda', 'Locação de imóveis', 'Análise documental', 'Conflitos imobiliários'],
  },
  {
    id: 'contratos',
    title: 'Elaboração e análise de contratos',
    short: 'Clareza e cuidado antes de assumir compromissos.',
    description: 'Consultoria para elaborar e revisar contratos, compreender obrigações e avaliar os riscos envolvidos em acordos entre pessoas e empresas.',
    topics: ['Elaboração de contratos', 'Revisão de cláusulas', 'Análise de riscos', 'Assessoria preventiva'],
  },
];

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function buildWhatsAppUrl(fields: ContactFields) {
  const alternativeContacts = [
    ...(fields.email.trim() ? [`E-mail: ${fields.email.trim()}`] : []),
    ...(fields.phone.trim() ? [`Telefone: ${fields.phone.trim()}`] : []),
  ].join('\n');
  const message = [
    `Olá, Bruna! Meu nome é ${fields.name.trim()}.`,
    alternativeContacts,
    fields.message.trim(),
  ].filter(Boolean).join('\n\n');
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}
