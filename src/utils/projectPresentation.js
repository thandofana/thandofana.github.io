const applicationDefaults = {
  kind: 'application',
  heroActionLabel: 'Live Project',
  exploreActionLabel: 'Live Application',
}

const powerBiDefaults = {
  kind: 'power-bi',
  heroActionLabel: 'Open Interactive Dashboard',
  exploreActionLabel: 'Open Interactive Dashboard',
}

export function getProjectPresentation(project) {
  const configuredPresentation = project.presentation ?? {}
  const defaults = configuredPresentation.kind === 'power-bi'
    ? powerBiDefaults
    : applicationDefaults

  // Power BI links are shown only through an explicitly verified public URL.
  // Without one, the static screenshots and written case study remain complete.
  const liveUrl = defaults.kind === 'power-bi'
    ? configuredPresentation.publicDashboardUrl ?? null
    : project.liveUrl ?? null

  return {
    ...defaults,
    ...configuredPresentation,
    liveUrl,
    repositoryUrl: project.repositoryUrl ?? null,
  }
}
