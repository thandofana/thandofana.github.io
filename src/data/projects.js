import finAccessDashboard from '../assets/finaccess/dashboard-overview.png'

const projects = [
  {
    title: 'FinAccess Eswatini',
    slug: 'finaccess-eswatini',
    category: 'End-to-end analytics case study',
    year: '2025',
    subtitle: 'Understanding financial inclusion and mobile-money adoption in Eswatini.',
    executiveSummary:
      'I analysed World Bank Global Findex microdata for 1,051 respondents to understand who is being reached by formal financial services, where access gaps remain, and which factors are most useful for explaining those gaps. The work combines survey-weighted analysis, statistical testing, interpretable machine learning, and a responsive web application.',
    businessQuestion:
      'How do financial access and mobile-money adoption vary across demographic, socioeconomic, and digital-access groups in Eswatini?',
    role: 'Independent data analyst and developer',
    dataSource: 'World Bank Global Findex microdata',
    scope: '1,051 respondents / 199 raw variables',
    output: 'Analysis, two models, API, and web app',
    image: finAccessDashboard,
    imageAlt:
      'FinAccess Eswatini dashboard showing financial account ownership, mobile-money adoption, respondent count, and validated models.',
    imageWidth: 1440,
    imageHeight: 1050,
    findings: [
      { value: '43.1%', label: 'Estimated financial-institution account ownership' },
      { value: '50.4%', label: 'Estimated mobile-money account ownership' },
      {
        value: '36.8% to 82.4%',
        label: 'Financial inclusion from the lowest to highest education group',
      },
      {
        value: '34.1% to 65.0%',
        label: 'Financial inclusion from the lowest to highest income quintile',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Audit and prepare',
        description:
          'Reviewed 199 variables, documented data quality, selected defensible features, and checked for target leakage before analysis.',
      },
      {
        number: '02',
        title: 'Analyse the evidence',
        description:
          'Applied survey weights, compared access across population groups, and used statistical tests to distinguish meaningful patterns from noise.',
      },
      {
        number: '03',
        title: 'Model and explain',
        description:
          'Built two independently validated classification pipelines and used SHAP to explain global patterns and individual predictions.',
      },
      {
        number: '04',
        title: 'Deliver the work',
        description:
          'Turned the analysis into a tested FastAPI service and responsive Next.js application so the evidence can be explored clearly.',
      },
    ],
    modelResults: [
      'Financial-institution account model: ROC-AUC 0.745',
      'Mobile-money account model: ROC-AUC 0.726',
    ],
    interpretation:
      'Education, income, and digital access emerged as useful segmentation dimensions. The results make access gaps easier to locate and discuss, while the model explanations show which inputs contribute most strongly to predictions.',
    recommendations: [
      'Segment future service research and outreach by education and income level instead of treating the market as one uniform group.',
      'Investigate digital-access barriers before relying on mobile-first financial inclusion strategies.',
      'Pair national survey evidence with current local and qualitative research before making programme or policy decisions.',
    ],
    nextSteps: [
      'Validate the findings against newer Eswatini data when it becomes available.',
      'Test whether the observed gaps persist within age, gender, and rural-access subgroups.',
      'Add outcome monitoring so future interventions can be evaluated over time.',
    ],
    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'SHAP',
      'FastAPI',
      'Next.js',
      'TypeScript',
    ],
    responsibleUse:
      'This is a proof of concept for analysis and decision support, not a financial eligibility or credit-decision system. The findings are associations and should not be interpreted as causal effects.',
    readmeUrl: 'https://github.com/thandofana/finaccess-eswatini/blob/main/README.md',
    liveUrl: 'https://finaccess-eswatini.vercel.app',
  },
]

export default projects
