import finAccessDashboard from '../assets/finaccess/dashboard-overview.png'

const projects = [
  {
    title: 'FinAccess Eswatini',
    slug: 'finaccess-eswatini',
    category: 'Data science application',
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
]

export default projects
