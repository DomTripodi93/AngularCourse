import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { ProjectsComponent } from './projects/projects.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Standalone';

    constructor(
        private router: Router,
        private titleService: Title
    ){}

    goToRoute(route: string) {
        this.titleService.setTitle(route);
        this.router.navigate([route])
    }
}
