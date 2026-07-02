import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface SkillGroup {
  /** i18n key below SKILLS.* */
  key: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = [
    {
      key: 'BACKEND',
      skills: [
        'Java', 'Spring Boot', 'Python', 'Flask', 'SQL',
        'PostgreSQL', 'SQLite', 'MongoDB', 'REST APIs',
      ],
    },
    {
      key: 'FRONTEND',
      skills: [
        'Angular', 'TypeScript', 'RxJS', 'Signals', 'Tailwind CSS', 'SCSS',
      ],
    },
    {
      key: 'DEVOPS',
      skills: [
        'Docker', 'NGINX', 'CI/CD', 'GitHub Actions', 'Gradle',
        'Testcontainers', 'Checkstyle', 'PMD', 'SpotBugs', 'Hadolint',
        'Git', 'Scrum/Kanban',
      ],
    },
    {
      key: 'EXPERIMENTAL',
      skills: [
        'BrainFlow', 'EEG/EXG', 'Pygame', 'YOLO', 'OpenCV', 'Label Studio',
      ],
    },
  ];
}
