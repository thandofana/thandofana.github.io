import finAccessDashboard from '../assets/finaccess/dashboard-overview.png'

const projects = [
  {
    title: 'FinAccess Eswatini',
    slug: 'finaccess-eswatini',
    category: 'Data science application',
    status: 'complete',
    statusLabel: 'Completed',
    subtitle: 'Explainable Machine Learning for Financial Inclusion and Mobile-Money Adoption',
    shortDescription:
      'Explainable machine learning for financial inclusion and mobile-money adoption.',
    description:
      'A portfolio proof of concept that analyses financial access in Eswatini and serves two explainable machine-learning models through a web application.',
    image: finAccessDashboard,
    imageAlt:
      'FinAccess overview dashboard showing financial-inclusion and mobile-money estimates, respondent total, and two validated models',
    imageWidth: 1440,
    imageHeight: 1050,
    metrics: [
      { value: '1,051', label: 'survey respondents' },
      { value: '199', label: 'raw variables reviewed' },
      { value: '0.745', label: 'financial ROC-AUC' },
      { value: '0.726', label: 'mobile-money ROC-AUC' },
    ],
    highlights: [
      'Survey-weighted analysis and statistical testing',
      'Two independently validated prediction pipelines',
      'SHAP explanations for model and individual results',
      'FastAPI service with a responsive Next.js application',
    ],
    responsibleUse:
      'Proof of concept for analysis and decision support—not a financial eligibility or credit-decision system.',
    technologies: ['Python', 'Scikit-learn', 'SHAP', 'FastAPI', 'Next.js', 'React', 'TypeScript'],
    readmeUrl: 'https://github.com/thandofana/finaccess-eswatini/blob/main/README.md',
    liveUrl: 'https://finaccess-eswatini.vercel.app',
    featured: true,
  },
  {
    title: 'Eswatini Trade Intelligence Platform',
    slug: 'eswatini-trade-intelligence',
    category: 'Trade analytics platform',
    status: 'in-progress',
    statusLabel: 'Work in progress',
    subtitle: 'Machine Learning Forecasting, Trade Analytics & Anomaly Detection',
    shortDescription:
      'A trade-intelligence platform for analysing and forecasting Eswatini’s merchandise trade.',
    description:
      'I am currently developing an end-to-end platform to analyse Eswatini’s monthly merchandise trade using UN Comtrade data.',
    currentFocus: {
      label: 'Current phase',
      title: 'Data acquisition & audit',
      description:
        'Building and validating a reliable monthly dataset from January 2018 onward before analysis and modelling begin.',
      flow: ['UN Comtrade', 'Data validation', 'Monthly trade dataset'],
    },
    highlightsLabel: 'Planned scope',
    highlights: [
      'Analyse imports, exports, products, partners, and trade concentration',
      'Forecast exports, imports, trade balance, and selected product categories',
      'Detect and explain unusual trade movements',
      'Present automated insights through an interactive dashboard',
    ],
    responsibleUse:
      'Forecasts and scenarios will be presented as model-based estimates—not guarantees or causal claims.',
    technologies: [
      'Python',
      'UN Comtrade',
      'Parquet',
      'Time-series forecasting',
      'Anomaly detection',
      'Explainable AI',
    ],
    featured: false,
  },
]

export default projects
