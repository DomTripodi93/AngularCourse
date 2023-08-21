import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ClientApp';
    helloWorld: string = "Hello World";
    //string interpolation
    clicked: number = 0;

    incrementClicked() {
        this.clicked += 1;
    }

}
