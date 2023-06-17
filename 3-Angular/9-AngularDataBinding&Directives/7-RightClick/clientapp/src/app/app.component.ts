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
    contextMenuOptions: any = {
        showMenu: false,
        menuX: 0,
        menuY: 0
    }
    contextClick: boolean = false;

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

    rightClickMethod(event: MouseEvent) {
        console.log(event);
        event.preventDefault();
        this.contextMenuOptions.menuX = event.clientX;
        this.contextMenuOptions.menuY = event.clientY;
        this.contextMenuOptions.showMenu = true;
    }

    @HostListener('document:click')
    hideContextMenu() {
        console.log("hit")
        this.contextMenuOptions.showMenu = false;
    }

    onContextClick() {
        if (!this.contextClick) {
            this.contextClick = true;
            setTimeout(() =>{
                this.contextClick = false;
            }, 20)
        }
    }
}
