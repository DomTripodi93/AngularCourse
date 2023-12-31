import { Injectable } from "@angular/core";


@Injectable({ providedIn: "root" })
export class ProjectService {
    projectList: string[] = [
        "Scheduling or Advanced Calculation",
        "Small Business Marketing Site",
        "Memory Game"
    ]
}