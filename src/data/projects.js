import assessmentInterface from '../assets/finaccess/assessment-interface.png'
import assessmentResults from '../assets/finaccess/assessment-results.png'
import finAccessDashboard from '../assets/finaccess/dashboard-overview.png'
import digitalAccessPatterns from '../assets/finaccess/digital-access-patterns.png'
import financialInclusionEvaluation from '../assets/finaccess/financial-inclusion-evaluation.png'
import globalShapImportance from '../assets/finaccess/global-shap-importance.png'
import mobileMoneyEvaluation from '../assets/finaccess/mobile-money-evaluation.png'
import overallAccessRates from '../assets/finaccess/overall-access-rates.png'
import socioeconomicPatterns from '../assets/finaccess/socioeconomic-patterns.png'
import bankingSectorSummary from '../assets/banking/banking-sector-summary.svg'
import bankingSectorOverview from '../assets/banking/01-banking-sector-overview.png'
import depositsAndCredit from '../assets/banking/02-deposits-and-credit.png'
import financialConditions from '../assets/banking/03-financial-conditions.png'

const projects = [
  {
    number: '01',
    title: 'FinAccess Eswatini',
    slug: 'finaccess-eswatini',
    category: 'Machine Learning',
    year: '2025',
    presentation: {
      kind: 'application',
      heroActionLabel: 'Live Project',
      exploreActionLabel: 'Live Application',
    },
    status: 'complete',
    statusLabel: 'Completed',
    subtitle: 'Financial inclusion and mobile-money adoption in Eswatini',
    cardSummary:
      'Predicting and explaining financial inclusion using Global Findex microdata.',
    highlight: 'ROC-AUC 0.745',
    summary:
      'An explainable machine-learning system combining survey-weighted analysis, statistical testing, two validated prediction pipelines and a responsive assessment application.',
    focus: 'Financial inclusion and mobile-money adoption',
    dataSource: 'World Bank Global Findex Eswatini microdata',
    methods: 'Survey-weighted analysis · Statistical testing · Machine learning · SHAP',
    image: finAccessDashboard,
    imageAlt:
      'FinAccess Eswatini dashboard showing financial-institution and mobile-money account ownership estimates for 1,051 respondents',
    imageWidth: 1440,
    imageHeight: 1050,
    executiveSummary: {
      businessProblem:
        'Researchers and financial-inclusion practitioners need to understand how formal financial access and mobile-money adoption vary across population groups in Eswatini.',
      headlineResult:
        'Survey-weighted ownership was estimated at 43.1% for financial-institution accounts and 50.4% for mobile money; protected-holdout ROC-AUC was 0.745 and 0.726.',
      recommendation:
        'Prioritise segmented follow-up around education, income, workforce status and digital access, while keeping prediction strictly within research and decision-support boundaries.',
    },
    businessProblem: {
      overview:
        'Financial inclusion affects saving, payments, emergency management and participation in the wider economy, but access to formal services and mobile money is not distributed equally. The project measured access patterns and tested whether two separate, leakage-reviewed models could support transparent profile-level assessment.',
      stakeholders:
        'Researchers, financial-inclusion practitioners, policymakers and development organisations.',
      question:
        'How do financial access and mobile-money adoption vary across demographic, socioeconomic and digital-access groups, and how reliably can each outcome be estimated from an individual profile?',
      decisionContext:
        'The analysis supports research prioritisation, service-design investigation and policy discussion. It is not an eligibility, credit-scoring or automated decision system.',
    },
    methodology: {
      introduction:
        'The workflow kept descriptive inference, statistical testing, model development, explanation and product delivery distinct so every result could be traced to a documented analytical stage.',
      steps: [
        {
          title: 'Data audit',
          description:
            'Reviewed 1,051 respondents and 199 raw variables, including value sets, special-response codes and missingness.',
        },
        {
          title: 'Eligibility review',
          description:
            'Screened identifiers, target derivations, post-outcome behaviour and conceptual leakage before approving predictors.',
        },
        {
          title: 'Cleaning and preprocessing',
          description:
            'Converted routed questions, nonresponse and special values into explicit semantic categories.',
        },
        {
          title: 'Exploratory analysis',
          description:
            'Used survey weights for population-oriented estimates while retaining unweighted counts for transparency.',
        },
        {
          title: 'Statistical analysis',
          description:
            'Applied chi-square and Mann–Whitney tests, effect sizes and Benjamini–Hochberg adjustment.',
        },
        {
          title: 'Feature engineering',
          description:
            'Created fixed age bands and interpretable phone and internet-access states without using target information.',
        },
        {
          title: 'Model development',
          description:
            'Compared four model families per outcome with grouped five-fold cross-validation and protected holdouts.',
        },
        {
          title: 'Evaluation and explanation',
          description:
            'Evaluated each selected pipeline once on its holdout and validated additive SHAP explanations.',
        },
        {
          title: 'Application delivery',
          description:
            'Served both models through FastAPI and a responsive Next.js interface deployed on one public domain.',
        },
      ],
    },
    skillsTools: [
      {
        group: 'Analysis & statistics',
        items: [
          'Python',
          'Pandas',
          'NumPy',
          'SciPy',
          'Survey weighting',
          'Chi-square testing',
          'Mann–Whitney testing',
          'Effect sizes',
          'False-discovery-rate adjustment',
        ],
      },
      {
        group: 'Machine learning & explanation',
        items: [
          'Scikit-learn',
          'Leakage review',
          'Feature engineering',
          'Grouped cross-validation',
          'Classification',
          'Calibration analysis',
          'Bootstrap intervals',
          'Tree SHAP',
          'Linear SHAP',
        ],
      },
      {
        group: 'Product delivery & validation',
        items: [
          'FastAPI',
          'Pydantic',
          'Joblib',
          'Next.js',
          'React',
          'TypeScript',
          'Vercel',
          'Automated regression testing',
          'Rendered-route testing',
        ],
      },
    ],
    results: [
      {
        title: 'National access estimates',
        visuals: [
          {
            image: overallAccessRates,
            imageWidth: 1990,
            imageHeight: 965,
            imageAlt:
              'Bar chart comparing weighted and sample rates for financial-institution and mobile-money account ownership',
          },
        ],
        metrics: [
          { value: '43.1%', label: 'Financial-institution account ownership' },
          { value: '50.4%', label: 'Mobile-money account ownership' },
        ],
        interpretation:
          'Mobile-money ownership was more common than financial-institution account ownership in the survey-weighted descriptive estimates. Both weighted estimates were lower than the corresponding raw sample proportions.',
      },
      {
        title: 'Socioeconomic access patterns',
        visuals: [
          {
            image: socioeconomicPatterns,
            imageWidth: 3099,
            imageHeight: 1287,
            imageAlt:
              'Grouped bar charts comparing financial access by education, household income quintile and workforce status',
          },
        ],
        metrics: [
          { value: '36.8% → 82.4%', label: 'Financial inclusion by lowest to highest education group' },
          { value: '34.1% → 65.0%', label: 'Financial inclusion from income quintile 1 to 5' },
        ],
        interpretation:
          'Financial inclusion increased strongly across the reported education and income comparisons. Workforce participation also aligned with higher observed financial inclusion: 55.8% in the workforce versus 30.6% outside it.',
      },
      {
        title: 'Digital-access patterns',
        visuals: [
          {
            image: digitalAccessPatterns,
            imageWidth: 3101,
            imageHeight: 1287,
            imageAlt:
              'Grouped bar charts comparing financial access by recent internet use, mobile-phone ownership and phone type',
          },
        ],
        metrics: [
          { value: '60.5% vs 39.7%', label: 'Mobile-money adoption by recent internet-use group' },
          { value: '55.2% vs 20.4%', label: 'Mobile-money adoption for phone owners versus respondents without a phone' },
        ],
        interpretation:
          'Recent internet use and phone ownership were associated with sizeable mobile-money adoption gaps. The combined no-internet-use category includes no, don’t know and refused responses.',
      },
      {
        title: 'Statistical evidence',
        metrics: [
          { value: '7 of 8', label: 'Associations significant after FDR adjustment for each outcome' },
          { value: '0.270 / 0.236', label: 'Largest corrected Cramér’s V for financial inclusion / mobile money' },
        ],
        interpretation:
          'Education, income, workforce status, recent internet use, phone ownership, phone type and age remained associated with both outcomes after adjustment. Gender did not; the reported effects were small or negligible.',
      },
      {
        title: 'Financial-inclusion model',
        visuals: [
          {
            image: financialInclusionEvaluation,
            imageWidth: 3092,
            imageHeight: 958,
            imageAlt:
              'Financial-inclusion holdout evaluation showing ROC curve, confusion matrix and calibration plot',
          },
        ],
        metrics: [
          { value: '0.745', label: 'Protected-holdout ROC-AUC' },
          { value: '0.710', label: 'Protected-holdout F1 score' },
        ],
        interpretation:
          'Gradient Boosting was selected after grouped cross-validation. The protected holdout contained 211 respondents, and its ROC-AUC bootstrap interval was 0.674–0.805.',
      },
      {
        title: 'Mobile-money model',
        visuals: [
          {
            image: mobileMoneyEvaluation,
            imageWidth: 3092,
            imageHeight: 958,
            imageAlt:
              'Mobile-money holdout evaluation showing ROC curve, confusion matrix and calibration plot',
          },
        ],
        metrics: [
          { value: '0.726', label: 'Protected-holdout ROC-AUC' },
          { value: '0.721', label: 'Protected-holdout F1 score' },
        ],
        interpretation:
          'Logistic Regression was selected using the one-standard-error complexity rule. The protected holdout contained 210 respondents, and its ROC-AUC bootstrap interval was 0.657–0.791.',
      },
      {
        title: 'Model explainability',
        visuals: [
          {
            image: globalShapImportance,
            imageWidth: 2900,
            imageHeight: 1460,
            imageAlt:
              'Global SHAP importance charts for financial-inclusion and mobile-money models on protected holdouts',
          },
        ],
        metrics: [
          { value: '2.67e−15', label: 'Maximum raw-score SHAP reconstruction error' },
          { value: '3.33e−16', label: 'Maximum probability reconstruction error' },
        ],
        interpretation:
          'Age group and workforce status led global importance for financial inclusion, while SIM registration and age group led mobile-money importance. SHAP explains model behaviour, not causation.',
      },
      {
        title: 'Validated assessment application',
        visuals: [
          {
            image: assessmentInterface,
            imageWidth: 1440,
            imageHeight: 731,
            imageAlt:
              'Four-step FinAccess Eswatini assessment interface collecting an individual profile',
            caption: 'One validated profile is submitted once and scored by two separate pipelines.',
          },
          {
            image: assessmentResults,
            imageWidth: 1440,
            imageHeight: 958,
            imageAlt:
              'FinAccess Eswatini assessment output showing two model estimates and five explanation factors for each outcome',
            caption: 'The interface returns two probabilities and five model-derived factors per outcome.',
          },
        ],
        metrics: [
          { value: '101', label: 'Project regression tests passed at final release' },
          { value: '15 / 15', label: 'Public deployment checks passed' },
        ],
        interpretation:
          'The final application combines both validated models, SHAP explanations and analytical evidence on one public domain. The displayed assessment is a documented smoke-test example, not a general finding.',
      },
    ],
    recommendations: [
      {
        title: 'Prioritise socioeconomic segmentation',
        description:
          'Use education, income and workforce status to structure follow-up research and service-design investigation because these dimensions showed clear descriptive gaps and statistically supported associations.',
      },
      {
        title: 'Investigate digital-access constraints separately',
        description:
          'Examine recent internet use, phone ownership, phone type and SIM registration when studying mobile-money adoption. Their associations should guide questions and experiments, not be treated as causal conclusions.',
      },
      {
        title: 'Keep prediction within a governed research role',
        description:
          'Use model outputs for exploration and decision support only. External validation, explicit operating costs and an approved threshold policy are required before considering operational use.',
      },
    ],
    nextSteps: [
      'Validate both pipelines on independent or newer Eswatini data before drawing conclusions about performance beyond the supplied survey file.',
      'Obtain full survey-design information, including strata and cluster variables, before estimating design-corrected uncertainty for population comparisons.',
      'Define an operational decision context and cost function before selecting classification thresholds; the current 0.50 thresholds are provisional.',
      'Continue deployment regression checks and dependency monitoring because the public application relies on Vercel Services and the Python runtime.',
    ],
    limitations: [
      'The data are observational. Descriptive comparisons, predictions and SHAP explanations do not establish causation.',
      'The protected holdouts contain 211 and 210 respondents, so model-performance estimates have material uncertainty.',
      'The 0.50 classification thresholds are provisional and are not tied to an operational policy or cost function.',
      'Recent digital-behaviour variables in the mobile-money model overlap the outcome observation period.',
      'The survey file provides weights but not the strata and cluster variables needed here for design-corrected inference.',
      'The no-recent-internet-use category combines no, don’t know and refused responses.',
      'The models apply to the supplied survey file and are not evidence of nationwide production readiness or suitability for eligibility decisions.',
    ],
    responsibleUse:
      'Proof of concept for research and decision support—not a financial eligibility, credit-scoring or automated decision system.',
    repositoryUrl: 'https://github.com/thandofana/finaccess-eswatini',
    readmeUrl: 'https://github.com/thandofana/finaccess-eswatini/blob/main/README.md',
    liveUrl: 'https://finaccess-eswatini.vercel.app',
    featured: true,
  },
  {
    number: '02',
    title: 'Eswatini Banking Sector Analytics',
    slug: 'eswatini-banking-sql-analysis',
    category: 'SQL Analytics',
    year: '2026',
    presentation: {
      kind: 'power-bi',
    },
    status: 'complete',
    statusLabel: 'Completed',
    subtitle: 'PostgreSQL banking analytics using official Central Bank statistics',
    cardSummary:
      'PostgreSQL and Power BI analysis of lending, deposits, liquidity, credit and monetary conditions in Eswatini.',
    highlight: 'Loan growth +28.45%',
    summary:
      'A revision-aware SQL analytics system and completed three-page Power BI dashboard built from 21 Central Bank of Eswatini statistical releases.',
    focus: 'Banking-sector performance, liquidity, credit and monetary conditions',
    dataSource: 'Central Bank of Eswatini Monthly Statistical Release',
    methods: 'PDF extraction · Revision handling · PostgreSQL · Time-series SQL · Power BI',
    cardImage: bankingSectorSummary,
    cardImageAlt:
      'Project summary visual for Eswatini Banking Sector Analytics showing verified loan growth, data coverage and SQL validation metrics',
    cardImageWidth: 1440,
    cardImageHeight: 1050,
    image: bankingSectorOverview,
    imageAlt:
      'Banking Sector Overview Power BI dashboard showing monthly loans, deposits, loan-to-deposit ratio, liquidity surplus and lending growth for Eswatini',
    imageWidth: 1536,
    imageHeight: 678,
    executiveSummary: {
      businessProblem:
        'Banking and monetary indicators are distributed across recurring official PDFs with overlapping months and revised figures, making consistent historical analysis difficult.',
      headlineResult:
        'The validated monthly model shows loans grew 28.45% from January 2024 to June 2026, compared with 20.55% growth in deposits.',
      recommendation:
        'Monitor lending and deposit momentum together with liquidity, credit composition and reserve conditions, while treating the findings as descriptive rather than causal.',
    },
    businessProblem: {
      overview:
        'The Central Bank releases important banking, monetary and reserve indicators through recurring PDF reports. Because reporting periods overlap and later publications may revise earlier figures, a simple file-by-file comparison can produce inconsistent time series. This project created a traceable monthly model that preserves source lineage, resolves revisions transparently and keeps reserve dates separate from banking dates.',
      stakeholders:
        'Banking analysts, financial-sector researchers, policymakers, reporting teams and decision-makers monitoring Eswatini’s financial conditions.',
      question:
        'How did lending, deposits, liquidity, credit composition, money and reserves change across the available reporting period, and how can those measures be delivered through a reusable SQL reporting layer?',
      decisionContext:
        'The analysis supports historical monitoring, recurring reporting and evidence-led investigation. It does not set prudential thresholds, forecast future conditions or establish why the observed changes occurred.',
    },
    methodology: {
      introduction:
        'The workflow separates source extraction from analytical calculation: Python prepares revision-aware datasets, PostgreSQL owns the model and KPI logic, and Power BI presents the governed reporting layer.',
      steps: [
        {
          title: 'Source inventory',
          description:
            'Catalogued 21 Central Bank statistical releases, their reporting periods, relevant pages and format differences.',
        },
        {
          title: 'PDF extraction',
          description:
            'Used Python, pdfplumber and Poppler to extract 1,449 observations while retaining observation-level source lineage.',
        },
        {
          title: 'Revision handling',
          description:
            'Compared overlapping releases and selected figures through a documented publication-order rule instead of silently overwriting history.',
        },
        {
          title: 'Data validation',
          description:
            'Checked coverage, unique month keys, units, numeric validity and published reconciliation differences before loading the analytical model.',
        },
        {
          title: 'Database modelling',
          description:
            'Built a compact monthly star schema with a conformed date dimension and separate banking, monetary and reserve fact tables.',
        },
        {
          title: 'SQL analysis',
          description:
            'Answered 15 business questions using joins, CTEs, CASE logic, exact-date LAG and LEAD comparisons, rolling windows and ranking functions.',
        },
        {
          title: 'Reporting layer',
          description:
            'Created three governed views and connected them to a completed three-page Power BI dashboard containing 24 data visuals.',
        },
        {
          title: 'Quality gates',
          description:
            'Rebuilt and tested the full pipeline through PostgreSQL 18.6, then opened, refreshed and visually verified the PBIP report in Power BI Desktop.',
        },
      ],
    },
    skillsTools: [
      {
        group: 'SQL & database',
        items: [
          'PostgreSQL 18.6',
          'Schema design',
          'Keys & constraints',
          'JOIN & LEFT JOIN',
          'CTEs & CASE',
          'LAG & LEAD',
          'Rolling windows',
          'Ranking functions',
          'Reporting views',
        ],
      },
      {
        group: 'Data preparation & quality',
        items: [
          'Python',
          'Pandas',
          'pdfplumber',
          'Poppler',
          'PDF extraction',
          'Revision handling',
          'Source lineage',
          'Automated validation',
        ],
      },
      {
        group: 'Analysis & reporting',
        items: [
          'Banking KPIs',
          'Time-series analysis',
          'Growth analysis',
          'Liquidity analysis',
          'Data dictionary',
          'Power BI Desktop',
          'PBIP source format',
          'Semantic modelling',
          'Reproducible reporting',
        ],
      },
    ],
    results: [
      {
        title: 'Lending and deposit growth',
        metrics: [
          { value: '+28.45%', label: 'Loan growth, January 2024 to June 2026' },
          { value: '+20.55%', label: 'Deposit growth over the same period' },
        ],
        interpretation:
          'Loans expanded faster across the full period, although deposits grew faster in 10 of 18 valid year-on-year comparison months. The different endpoint and recent-year patterns make both measures important to monitor together.',
      },
      {
        title: 'Deposit composition',
        visuals: [
          {
            image: depositsAndCredit,
            imageWidth: 1536,
            imageHeight: 678,
            imageAlt:
              'Deposits and Credit Power BI dashboard showing deposit composition, deposit balances, business and household credit, growth and monthly leadership',
            caption:
              'The completed Deposits & Credit page combines funding composition with private-sector credit comparisons.',
          },
        ],
        metrics: [
          { value: '+32.92%', label: 'Time-deposit growth' },
          { value: '58.62%', label: 'Time-deposit share in June 2026' },
        ],
        interpretation:
          'Time deposits were the largest and fastest-growing reported deposit category. The figures show a change in funding composition, but the source data does not identify the reasons for that shift.',
      },
      {
        title: 'Loan-to-deposit position',
        metrics: [
          { value: '67.56%–86.57%', label: 'Calculated ratio range' },
          { value: '79.88%', label: 'Ratio in June 2026' },
        ],
        interpretation:
          'Loans remained below the reported deposit base in every month, while the ratio’s wide range shows that lending and deposits did not move in parallel.',
      },
      {
        title: 'Liquidity conditions',
        metrics: [
          { value: '30 / 30', label: 'Months with a positive liquidity surplus' },
          { value: 'E1.753bn–E6.468bn', label: 'Calculated surplus range' },
        ],
        interpretation:
          'The difference between liquid assets and the reported requirement remained positive throughout the banking series, but the size of the buffer varied materially and ended below its late-2025 peak.',
      },
      {
        title: 'Credit composition',
        metrics: [
          { value: '+37.98%', label: 'Business-credit growth' },
          { value: '+17.10%', label: 'Households & NPISH credit growth' },
        ],
        interpretation:
          'Business credit led across the full horizon, while monthly growth leadership was nearly even: business led in 15 valid comparisons and households in 14.',
      },
      {
        title: 'Reserve and import-cover conditions',
        visuals: [
          {
            image: financialConditions,
            imageWidth: 1536,
            imageHeight: 678,
            imageAlt:
              'Financial Conditions Power BI dashboard showing liquidity, securities, money supply, foreign assets, reserves and import cover',
            caption:
              'The completed Financial Conditions page preserves the July 2026 reserve observation without forward-filling banking or monetary fields.',
          },
        ],
        metrics: [
          { value: 'E7.844bn–E15.476bn', label: 'Gross official reserve range' },
          { value: '2.30 months', label: 'Import cover in July 2026' },
        ],
        interpretation:
          'Reserve levels varied considerably and import cover ended 0.40 months below its January 2024 level. Reserve months remain separate from the banking series so July 2026 is not forward-filled into other domains.',
      },
      {
        title: 'Validated analytical system',
        metrics: [
          { value: '1,449', label: 'Extracted observations' },
          { value: '0', label: 'Critical cleaning and validation errors' },
        ],
        interpretation:
          'The end-to-end rebuild parsed all 21 releases, loaded the PostgreSQL model, executed 15 of 15 business questions and passed all 12 reporting-layer checks.',
      },
    ],
    recommendations: [
      {
        title: 'Track lending and funding together',
        description:
          'Review loan growth alongside deposit growth and the calculated loan-to-deposit ratio so the full-period expansion and shorter-horizon funding pattern remain visible in the same monitoring view.',
      },
      {
        title: 'Keep liquidity variation visible',
        description:
          'Monitor the liquidity surplus as a changing buffer rather than relying only on its positive sign. The project deliberately applies no invented regulatory threshold.',
      },
      {
        title: 'Separate internal and external conditions',
        description:
          'Assess credit composition, reserve movements and import cover as related monitoring signals while preserving their distinct dates and avoiding causal interpretation.',
      },
    ],
    nextSteps: [
      'Append future Central Bank releases through the same revision-aware pipeline and rerun the documented quality gates.',
      'Refresh the PBIP report and its screenshots whenever the validated source snapshots change.',
      'Publish through Power BI Service only if a suitable public-sharing option and data-governance review become available.',
      'Automate recurring extraction and validation checks while preserving the source inventory and revision log.',
      'Add explicit uncertainty or source-warning annotations to downstream reporting for the documented July reconciliation exceptions.',
    ],
    limitations: [
      'Central Bank figures may be revised by later releases, so results reflect the 21-source publication set used in the project.',
      'Publication ordering uses the second cover-period month as a documented proxy.',
      'July 2024 and July 2025 contain source-published component and total inconsistencies that were retained rather than rewritten.',
      'The household series includes non-profit institutions serving households (NPISH).',
      'Import-cover values are revision-prone because the underlying import inputs lag.',
      'The analysis is descriptive and does not establish causation, forecast outcomes or assess regulatory adequacy.',
      'The committed PBIP dashboard uses a reproducible snapshot of the supplied releases and must be refreshed when the source set changes.',
    ],
    responsibleUse:
      'Independent descriptive analysis for historical monitoring and decision support—not a forecast, causal study or regulatory assessment.',
    repositoryUrl: 'https://github.com/thandofana/eswatini-banking-sql-analysis',
    readmeUrl: 'https://github.com/thandofana/eswatini-banking-sql-analysis/blob/main/README.md',
    liveUrl: null,
    featured: true,
  },
]

export default projects
