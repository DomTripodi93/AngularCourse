import { Component, OnInit } from '@angular/core';
import { MetMuseumService } from '../services/met-museum-service.service';

@Component({
    selector: 'app-met-museum',
    standalone: true,
    imports: [],
    templateUrl: './met-museum.component.html',
    styleUrl: './met-museum.component.css'
})
export class MetMuseumComponent implements OnInit {
    worksOfArt: any[] = [];

    constructor(
        private metMuseumService: MetMuseumService
    ) { }
    ngOnInit(): void {
        this.getArt();
    }

    getArt() {
        this.worksOfArt = [];
        this.metMuseumService.randomIds.forEach(id => {
            this.metMuseumService.getArt(id).subscribe({
                next: (res) =>{
                    console.log(res);
                    this.worksOfArt.push(res);
                }
            })
        })
    }
}
