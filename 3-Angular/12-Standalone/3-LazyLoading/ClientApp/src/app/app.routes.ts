import { Routes } from '@angular/router';
// import { ProjectsComponent } from './projects/projects.component';
// import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    // { path: "projects", component: ProjectsComponent },
    // { path: "about", component: AboutComponent },
    {
        path: "projects",
        loadComponent: () => {
            return import('./projects/projects.component')
                .then(projects => projects.ProjectsComponent)
        }
    },
    {
        path: "about",
        loadComponent: () => {
            return import('./about/about.component')
                .then(about => about.AboutComponent)
        }
    },
    { path: "**", redirectTo: "projects" }
];
