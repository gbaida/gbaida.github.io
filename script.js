const translations = {
  pt: {
    'nav1':          'projetos',
    'nav2':          'perfil',
    'tagline':       'Analista de Dados movido por curiosidade',
    'badge-active':  'ativo',
    'badge-archived':'arquivado',
    'proj1-desc':    'Dashboard interativo de análise de ingressos construído com Streamlit. Visualização de vendas, receita e dados de público para eventos ao vivo.',
    'proj2-desc':    'Análise econométrica da relação entre PIB e emissões de gases de efeito estufa. Estudo de dados ambientais com Python e Jupyter.',
'proj4-desc':    'Análise de NLP do debate em torno da urna eletrônica no Twitter. Mapeamento de sentimento e volume de discussão em período eleitoral.',
    'proj5-desc':    'Análise do impacto de desigualdades socioeconômicas no desempenho de alunos no ENEM 2021. Estudo com dados do INEP.',
    'skill-data':    'dados',
    'skill-viz':     'visualização',
    'skill-tools':   'ferramentas',
    'skill-cloud':   'cloud',
    'bio':           'Analista de Dados Sênior com mais de 10 anos de experiência em TI, transformando dados complexos em decisões úteis. Eu construo dashboards, faço automações de workflows e comunico insights de maneiras que geram ações. Me sinto confortável escrevendo queries em SQL, montando apresentações ou fazendo reuniões em qualquer fuso horário pra entender as necessidades de dados do negócio. Trabalho com Power BI, Bigquery, Python, Excel e atualmente estou experimentando com o Claude pra aprimorar e acelerar minhas habilidades em todas essas áreas.',
    'footer':        'feito à mão — sem frameworks.',
  },
  en: {
    'nav1':          'projects',
    'nav2':          'profile',
    'tagline':       'Curiosity Driven Data Analyst',
    'badge-active':  'active',
    'badge-archived':'archived',
    'proj1-desc':    'Interactive ticket analytics dashboard built with Streamlit. Real-time visualization of sales, revenue, and audience data for live events.',
    'proj2-desc':    'Econometric analysis of the relationship between GDP and greenhouse gas emissions. Environmental data study using Python and Jupyter.',
'proj4-desc':    'NLP analysis of the electronic voting machine debate on Twitter. Sentiment mapping and discussion volume tracking during election period.',
    'proj5-desc':    'Analysis of the impact of socioeconomic inequalities on student performance in Brazil\'s ENEM 2021 exam. Study using INEP open data.',
    'skill-data':    'data',
    'skill-viz':     'visualization',
    'skill-tools':   'tools',
    'skill-cloud':   'cloud',
    'bio':           'Senior Data Analyst with 10+ years in IT, turning complex data into decisions that stick. I specialize in bridging the gap between raw data and business strategy — making data useful, not just accurate. I build dashboards, automate workflows, and communicate insights in ways that actually move people to act. As comfortable in a SQL query as I am presenting findings. I combine technical depth in Python, BigQuery, and Power BI with a genuine obsession for data storytelling. Currently experimenting with Claude and agents to build data tools.',
    'footer':        'handcrafted — no frameworks.',
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

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.borderBottomColor =
    window.scrollY > 10 ? 'rgba(58,71,80,0.8)' : 'var(--border)';
}, { passive: true });
