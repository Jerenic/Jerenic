import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private translate: TranslateService) {}

  getProjectStatus(projectKey: string): string {
    return this.translate.instant(`PROJECTS.${projectKey}.STATUS`);
  }

  getProjectUrl(projectKey: string): string {
    return this.translate.instant(`PROJECTS.${projectKey}.URL`);
  }
}
