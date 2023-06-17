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
    doubleClicked: number = 0;
    valuesToIterate: number[] = [4, 5, 1, 3, 12]

    // clickMethod() {
    clickMethod(event: MouseEvent) {
        console.log(event);
        console.log("clicked")
        this.clicked += 1;
    }

    // doubleClickMethod() {
    doubleClickMethod(event: MouseEvent) {
        console.log(event);
        console.log("double clicked")
        this.doubleClicked += 1;
    }
}
