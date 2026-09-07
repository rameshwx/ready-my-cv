const aliases: Record<string, string[]> = {
  'Kotlin Multiplatform': ['KMP'],
  'Jetpack Compose': ['Compose'],
  'REST APIs': ['REST', 'RESTful API'],
  'Node.js': ['NodeJS', 'Node'],
  PostgreSQL: ['Postgres'],
  'CI/CD': ['continuous integration'],
  'Test automation': ['automated testing'],
  'User research': ['UX research'],
};

const roles: Array<[string, string, string[]]> = [
  ['android-developer', 'Android Developer', ['Kotlin', 'Android SDK', 'Jetpack Compose', 'REST APIs', 'Git']],
  ['flutter-developer', 'Flutter Developer', ['Flutter', 'Dart', 'Riverpod', 'REST APIs', 'Git']],
  ['kotlin-multiplatform-developer', 'Kotlin Multiplatform Developer', ['Kotlin', 'Kotlin Multiplatform', 'Coroutines', 'Compose Multiplatform', 'Git']],
  ['ios-developer', 'iOS Developer', ['Swift', 'SwiftUI', 'iOS SDK', 'REST APIs', 'Git']],
  ['frontend-developer', 'Frontend Developer', ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Git']],
  ['backend-developer', 'Backend Developer', ['Node.js', 'SQL', 'REST APIs', 'PostgreSQL', 'Git']],
  ['full-stack-developer', 'Full Stack Developer', ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Git']],
  ['qa-engineer', 'QA Engineer', ['Test automation', 'API testing', 'Regression testing', 'Bug tracking', 'Git']],
  ['devops-engineer', 'DevOps Engineer', ['Docker', 'CI/CD', 'Linux', 'Cloud infrastructure', 'Monitoring']],
  ['ui-ux-designer', 'UI/UX Designer', ['User research', 'Wireframing', 'Prototyping', 'Figma', 'Usability testing']],
  ['project-manager', 'Project Manager', ['Project planning', 'Risk management', 'Stakeholder management', 'Agile', 'Delivery']],
];

const seniorities = ['junior', 'mid', 'senior', 'lead'];

export const initialCatalog = {
  version: '1.0.0',
  engineVersion: '1.0.0',
  publishedAt: '2026-09-07T00:00:00.000Z',
  recommendations: [
    { id: 'add-evidence', text: 'Add truthful experience or project evidence for important missing skills you genuinely have.' },
    { id: 'add-impact', text: 'Replace vague responsibilities with specific outcomes and measurable impact where possible.' },
    { id: 'use-headings', text: 'Use conventional headings such as Skills, Experience, Projects, and Education.' },
  ],
  roles: roles.map(([slug, title, skills]) => ({
    slug,
    title,
    description: `${title} readiness rules`,
    active: true,
    seniorities,
    requirements: skills.map((term, index) => ({
      id: `${slug}-${index + 1}`,
      term,
      aliases: aliases[term] ?? [],
      exclusions: [],
      phrases: [],
      required: index < 3,
      weight: index < 3 ? 3 : 2,
      category: index < 3 ? 'roleSkills' : 'experience',
      expectedSections: ['experience', 'projects', 'skills'],
      recommendationIds: ['add-evidence'],
    })),
  })),
};
