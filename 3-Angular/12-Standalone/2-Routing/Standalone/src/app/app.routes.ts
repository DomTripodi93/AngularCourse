import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: "projects", component: ProjectsComponent},
    {path: "about", component: AboutComponent},
    {path: "**", redirectTo:"projects"}
];
