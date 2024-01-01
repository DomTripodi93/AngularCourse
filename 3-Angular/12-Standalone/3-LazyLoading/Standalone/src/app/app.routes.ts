import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    // {path: "projects", component: ProjectsComponent},
    // {path: "about", component: AboutComponent},
    {
        path: "projects", 
        loadComponent: () => {
            return import('./projects/projects.component')
                .then((file) => {return file.ProjectsComponent})
        }
    },
    {
        path: "about", 
        loadComponent: () => {
            return import('./about/about.component')
                .then((file) => {return file.AboutComponent})
        }
    },
    {path: "**", redirectTo:"projects"}
];
