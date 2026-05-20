const translations = {
  pt: {
    'tagline':        'Analista de Dados movido por curiosidade',
    'notice':         'Este artigo é sobre um analista de dados. Para outros usos, veja dados (desambiguação).',
    'infobox-title':  'Gustavo Baida',
    'infobox-subtitle':'Analista de Dados Sênior',
    'ib-exp':         'Experiência',
    'ib-exp-val':     '10+ anos em TI',
    'ib-stack':       'Stack',
    'ib-tools':       'Ferramentas',
    'ib-ai':          'IA',
    'ib-links':       'Links',
    'toc-title':      'Conteúdo',
    'nav1':           'Sobre',
    'nav2':           'Projetos',
    'nav3':           'Habilidades',
    'edit':           '[editar]',
    'bio':            'Analista de Dados Sênior com mais de 10 anos de experiência em TI, transformando dados complexos em decisões úteis. Eu construo dashboards, faço automações de workflows e comunico insights de maneiras que geram ações. Me sinto confortável escrevendo queries em SQL, montando apresentações ou fazendo reuniões em qualquer fuso horário pra entender as necessidades de dados do negócio. Trabalho com Power BI, Bigquery, Python, Excel e atualmente estou experimentando com o Claude pra aprimorar e acelerar minhas habilidades em todas essas áreas.',
    'badge-active':   'ativo',
    'badge-archived': 'arquivado',
    'proj1-desc':     'Dashboard interativo de análise de ingressos construído com Streamlit. Visualização de vendas, receita e dados de público para eventos ao vivo.',
    'proj2-desc':     'Análise econométrica da relação entre PIB e emissões de gases de efeito estufa. Estudo de dados ambientais com Python e Jupyter.',
    'proj4-desc':     'Análise de NLP do debate em torno da urna eletrônica no Twitter. Mapeamento de sentimento e volume de discussão em período eleitoral.',
    'proj5-desc':     'Análise do impacto de desigualdades socioeconômicas no desempenho de alunos no ENEM 2021. Estudo com dados do INEP.',
    'link-app':       '↗ Ver aplicação',
    'proj-tech':      'Tecnologias',
    'skill-data':     'Dados',
    'skill-viz':      'Visualização',
    'skill-tools':    'Ferramentas',
    'skill-cloud':    'Cloud',
  },
  en: {
    'tagline':        'Curiosity Driven Data Analyst',
    'notice':         'This article is about a data analyst. For other uses, see data (disambiguation).',
    'infobox-title':  'Gustavo Baida',
    'infobox-subtitle':'Senior Data Analyst',
    'ib-exp':         'Experience',
    'ib-exp-val':     '10+ years in IT',
    'ib-stack':       'Stack',
    'ib-tools':       'Tools',
    'ib-ai':          'AI',
    'ib-links':       'Links',
    'toc-title':      'Contents',
    'nav1':           'About',
    'nav2':           'Projects',
    'nav3':           'Skills',
    'edit':           '[edit]',
    'bio':            'Senior Data Analyst with 10+ years in IT, turning complex data into decisions that stick. I build dashboards, automate workflows, and communicate insights in ways that actually move people to act. As comfortable writing SQL queries as I am presenting findings or running meetings across any time zone to understand business data needs. I work with Power BI, BigQuery, Python, and Excel, and I am currently experimenting with Claude to sharpen and accelerate my skills across all these areas.',
    'badge-active':   'active',
    'badge-archived': 'archived',
    'proj1-desc':     'Interactive ticket analytics dashboard built with Streamlit. Real-time visualization of sales, revenue, and audience data for live events.',
    'proj2-desc':     'Econometric analysis of the relationship between GDP and greenhouse gas emissions. Environmental data study using Python and Jupyter.',
    'proj4-desc':     'NLP analysis of the electronic voting machine debate on Twitter. Sentiment mapping and discussion volume tracking during election period.',
    'proj5-desc':     'Analysis of the impact of socioeconomic inequalities on student performance in Brazil\'s ENEM 2021 exam. Study using INEP open data.',
    'link-app':       '↗ View app',
    'proj-tech':      'Technologies',
    'skill-data':     'Data',
    'skill-viz':      'Visualization',
    'skill-tools':    'Tools',
    'skill-cloud':    'Cloud',
  }
};

let currentLang = 'pt';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById('lang-toggle').textContent = lang === 'pt' ? 'EN' : 'PT';
  currentLang = lang;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
});
