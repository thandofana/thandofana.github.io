import finAccessDashboard from '../assets/finaccess/dashboard-overview.png'

const projects = [
  {
    title: 'FinAccess Eswatini',
    slug: 'finaccess-eswatini',
    category: 'Data science application',
    status: 'complete',
    statusLabel: 'Completed',
    subtitle: 'Financial inclusion and mobile-money adoption in Eswatini',
    businessQuestion:
      'How do financial access and mobile-money adoption vary across demographic, socioeconomic and digital-access groups in Eswatini?',
    summary:
      'I analysed 1,051 Eswatini respondents from the World Bank Global Findex using survey-weighted analysis, statistical testing and two independently validated machine-learning pipelines. I then delivered the evidence and model explanations through a responsive web application.',
    image: finAccessDashboard,
    imageAlt:
      'FinAccess Eswatini dashboard showing 43.1% financial-institution account ownership, 50.4% mobile-money account ownership and 1,051 respondents',
    imageWidth: 1440,
    imageHeight: 1050,
    findings: [
      { value: '43.1%', label: 'Estimated financial-institution account ownership' },
      { value: '50.4%', label: 'Estimated mobile-money account ownership' },
      {
        value: '36.8% → 82.4%',
        label:
          'Financial inclusion, from primary education or less to tertiary education or more',
      },
      {
        value: '34.1% → 65.0%',
        label: 'Financial inclusion, from the lowest to the highest income quintile',
      },
    ],
    decisionRelevance:
      'The findings identify education, income and digital access as important segmentation dimensions for further financial-service design and policy research. They describe observed associations and should not be interpreted as causal effects.',
    deliverables: [
      'Survey-weighted exploratory and statistical analysis',
      'Documented data audit and leakage review',
      'Two independently validated prediction pipelines',
      'SHAP-based global and individual explanations',
      'FastAPI inference service',
      'Responsive Next.js analytical application',
      'Automated data, model, API and interface tests',
    ],
    technicalDetails: [
      'Financial-institution account model: ROC-AUC 0.745',
      'Mobile-money account model: ROC-AUC 0.726',
      '1,051 respondents and 199 raw variables reviewed before analysis and modelling',
    ],
    responsibleUse:
      'Proof of concept for analysis and decision support—not a financial eligibility or credit-decision system.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'SHAP',
      'FastAPI',
      'Next.js',
      'TypeScript',
    ],
    readmeUrl: 'https://github.com/thandofana/finaccess-eswatini/blob/main/README.md',
    liveUrl: 'https://finaccess-eswatini.vercel.app',
    featured: true,
  },
]

export default projects
