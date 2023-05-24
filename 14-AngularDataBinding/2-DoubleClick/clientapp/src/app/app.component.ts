import { Component } from '@angular/core';

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

    clickMethod() {
        console.log("clicked")
        this.clicked += 1;
    }

    doubleClickMethod() {
        console.log("dobule clicked")
        this.doubleClicked += 1;
    }
}
