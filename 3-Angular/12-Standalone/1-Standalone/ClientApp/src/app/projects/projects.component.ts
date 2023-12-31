import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {

    constructor(
        public projectService: ProjectService
    ) { }
}
