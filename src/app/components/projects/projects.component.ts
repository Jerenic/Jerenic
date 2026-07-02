import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  Project,
  ProjectCategory,
} from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly categories = PROJECT_CATEGORIES;

  projectsFor(category: ProjectCategory): Project[] {
    return PROJECTS.filter((project) => project.category === category);
  }
}
