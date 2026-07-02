export type ProjectBadge = 'GITHUB' | 'PRIVATE' | 'DONE_PRIVATE';

export type ProjectCategory =
  | 'FEATURED'
  | 'EXPERIMENTAL'
  | 'QUALITY'
  | 'UNIVERSITY';

export interface Project {
  /** i18n key below PROJECTS.* */
  key: string;
  category: ProjectCategory;
  badge: ProjectBadge;
  tags: string[];
  url?: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'FEATURED',
  'EXPERIMENTAL',
  'QUALITY',
  'UNIVERSITY',
];

export const PROJECTS: Project[] = [
  // --- Featured ---
  {
    key: 'TEVS',
    category: 'FEATURED',
    badge: 'GITHUB',
    url: 'https://github.com/Jerenic/tevs_abschlussprojekt_gruppe_7',
    tags: ['Python', 'Flask', 'Docker', 'NGINX', 'SQLite', 'TLS', 'REST', 'Testing'],
  },
  {
    key: 'GAMICODE',
    category: 'FEATURED',
    badge: 'DONE_PRIVATE',
    tags: ['Node.js', 'React', 'MongoDB', 'Docker', 'Java/SQL Sandbox'],
  },
  {
    key: 'ACTIVE',
    category: 'FEATURED',
    badge: 'GITHUB',
    url: 'https://github.com/Jerenic/HID-HW2-UX-Review-and-Refactoring',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Signals'],
  },

  // --- Experimental / BCI & Vision ---
  {
    key: 'NEUROFLOW',
    category: 'EXPERIMENTAL',
    badge: 'GITHUB',
    url: 'https://github.com/Jerenic/NeuroFlow',
    tags: ['Python', 'Pygame', 'BrainFlow', 'EEG/EXG', 'BCI', 'Prototype'],
  },
  {
    key: 'VISION',
    category: 'EXPERIMENTAL',
    badge: 'GITHUB',
    url: 'https://github.com/Jerenic/machinevisionessentials',
    tags: ['Python', 'YOLO', 'Label Studio', 'OpenCV', 'Machine Vision'],
  },

  // --- Software Quality & Infrastructure ---
  {
    key: 'SQT',
    category: 'QUALITY',
    badge: 'GITHUB',
    url: 'https://github.com/Jerenic/SoftwareQualityTest',
    tags: ['Java', 'Spring Boot', 'Gradle', 'CI/CD', 'Testcontainers', 'PostgreSQL', 'Quality Gates'],
  },

  // --- University projects (private FH repos) ---
  {
    key: 'WEBSHOP',
    category: 'UNIVERSITY',
    badge: 'PRIVATE',
    tags: ['Spring Boot', 'PostgreSQL', 'Docker'],
  },
  {
    key: 'SENSOR',
    category: 'UNIVERSITY',
    badge: 'PRIVATE',
    tags: ['Spring Cloud', 'Angular', 'Android (Capacitor)'],
  },
  {
    key: 'IOT',
    category: 'UNIVERSITY',
    badge: 'PRIVATE',
    tags: ['Python', 'MQTT', 'Raspberry Pi'],
  },
];
