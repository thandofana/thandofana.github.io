export const datasetFacts = [
  { value: '1,051', label: 'respondents' },
  { value: '199', label: 'raw variables reviewed' },
  { value: '15', label: 'financial-inclusion predictors' },
  { value: '16', label: 'mobile-money predictors' },
]

export const projectQuestions = [
  {
    label: 'Financial inclusion',
    question:
      'Is a person with a given demographic, socioeconomic, and digital-access profile likely to have a financial institution account?',
  },
  {
    label: 'Mobile money',
    question: 'Is that individual likely to have a mobile-money account?',
  },
]

export const workflow = [
  'World Bank Global Findex microdata',
  'Data audit and data dictionary',
  'Target leakage review',
  'Data cleaning and preprocessing',
  'Exploratory data analysis',
  'Statistical analysis',
  'Feature engineering',
  'Model training and evaluation',
  'SHAP explainability',
  'FastAPI prediction service',
  'Next.js web application',
  'Vercel deployment',
]

export const keyFindings = [
  {
    value: '43.1%',
    label: 'Financial institution account',
    description: 'Survey-weighted estimated ownership.',
  },
  {
    value: '50.4%',
    label: 'Mobile-money account',
    description: 'Survey-weighted estimated ownership.',
  },
  {
    value: '36.8 → 82.4%',
    label: 'Education',
    description: 'Financial inclusion from primary education or less to tertiary education or more.',
  },
  {
    value: '34.1 → 65.0%',
    label: 'Household income',
    description: 'Financial inclusion from income quintile 1 to income quintile 5.',
  },
  {
    value: '60.5 vs 39.7%',
    label: 'Recent internet use',
    description: 'Mobile-money adoption among recent users versus the combined no / don’t know / refused group.',
  },
]

export const featureEngineering = [
  'Explicit treatment of routed survey responses and missing data',
  'Leakage review across all 199 raw variables',
  'One-hot encoding inside modelling pipelines with unseen-category tolerance',
  'Fixed age bands and phone-access tiers',
  'Model-specific digital-behaviour features',
  'Removal of direct target representations and post-outcome behaviours',
  'Separate predictor sets for the two outcomes',
]

export const models = [
  {
    label: 'Financial inclusion',
    selected: 'Gradient Boosting',
    cvRocAuc: '0.768',
    holdout: '211',
    interval: '0.674–0.805',
    metrics: [
      ['ROC-AUC', '0.745'],
      ['F1', '0.710'],
      ['Accuracy', '0.706'],
      ['Precision', '0.717'],
      ['Recall', '0.704'],
      ['Balanced accuracy', '0.706'],
      ['Brier score', '0.204'],
    ],
    note: 'Selected for the strongest mean cross-validation ROC-AUC with a controlled train-to-validation gap and competitive protected-holdout performance.',
  },
  {
    label: 'Mobile-money adoption',
    selected: 'Logistic Regression',
    cvRocAuc: '0.710',
    holdout: '210',
    interval: '0.657–0.791',
    metrics: [
      ['ROC-AUC', '0.726'],
      ['F1', '0.721'],
      ['Accuracy', '0.676'],
      ['Precision', '0.721'],
      ['Recall', '0.721'],
      ['Balanced accuracy', '0.667'],
      ['Brier score', '0.205'],
    ],
    note: 'Random Forest scored 0.716 mean CV ROC-AUC, but Logistic Regression was statistically competitive and selected under a one-standard-error complexity rule for simplicity and interpretability.',
  },
]

export const architecture = [
  'User profile',
  'Next.js / React interface',
  'FastAPI prediction API',
  'Input validation',
  'Preprocessing',
  'Financial inclusion model + Mobile money model',
  'SHAP explanations',
  'Probabilities + key factors',
]

export const technologyStack = [
  { category: 'Data science', items: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Scikit-learn'] },
  { category: 'Explainability', items: ['SHAP'] },
  { category: 'API', items: ['FastAPI', 'Pydantic', 'Uvicorn', 'Joblib'] },
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'CSS'] },
  { category: 'Deployment', items: ['Vercel'] },
  { category: 'Version control', items: ['Git', 'GitHub'] },
]

export const validation = [
  { value: '101', label: 'project tests' },
  { value: '4', label: 'deployment-backend tests' },
  { value: '5', label: 'rendered-route tests' },
  { value: '13', label: 'executed notebooks' },
  { value: '15', label: 'public deployment checks' },
  { value: '0', label: 'reported production dependency vulnerabilities' },
]

export const limitations = [
  'Portfolio proof of concept—not a nationwide financial-decision engine.',
  'Observational data and SHAP explanations cannot establish causality.',
  'Protected holdouts are relatively small, so performance estimates have material uncertainty.',
  'The 0.50 classification thresholds are provisional and are not tied to an operational policy.',
  'Some recent digital-behaviour variables overlap the mobile-money outcome observation period.',
  'Submitted profiles are not persisted by the API.',
]

export const demonstratedCapabilities = [
  'Real-world data preparation',
  'Exploratory data analysis',
  'Statistical analysis',
  'Leakage-aware feature engineering',
  'Machine learning',
  'Model evaluation',
  'Explainable AI',
  'API development',
  'Frontend integration',
  'Testing',
  'Deployment',
]
