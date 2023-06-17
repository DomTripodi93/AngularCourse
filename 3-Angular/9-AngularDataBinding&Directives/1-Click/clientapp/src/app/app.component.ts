import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'clientapp';
    someValue: number = 12;
    clicked: number = 0;

    // clickMethod() {
    clickMethod(event: MouseEvent) {
        console.log(event);
        console.log("clicked")
        this.clicked += 1;
    }
}
