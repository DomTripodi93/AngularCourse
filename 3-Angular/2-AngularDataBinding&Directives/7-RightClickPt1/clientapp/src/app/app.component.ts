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
    doubleClicked: number = 0;

    // willShowBlock: boolean = true;
    willShowBlock: boolean = false;

    contextMenuInfo: any = {
        pageX: 0,
        pageY: 0,
        willContextMenuShow: false
    }

    valuesToLoopThrough: number[] = [
        4, 
        2,
        5,
        8
    ];

    incrementClicked() {
        this.clicked += 1;
    }

    incrementDoubleClicked() {
        this.doubleClicked += 1;
    }

    toggleContextMenu(showContextMenu: boolean, event: MouseEvent) {
        console.log(event);
        this.contextMenuInfo.pageX = event.pageX
        this.contextMenuInfo.pageY = event.pageY
        this.contextMenuInfo.willContextMenuShow = showContextMenu;
    }

}
