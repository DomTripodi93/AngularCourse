import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: string[] = [
        "Scheduling or Advanced Calculation",
        "Business Advertising",
        "Memory Game"
    ]
}
