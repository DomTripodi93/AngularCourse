import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = 'Social App';
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
    toolTipOptions: any = {
        showToolTip: false,
        menuX: 0,
        menuY: 0
    }
    showUsers: boolean = true;

    constructor(
        public userServ: UserService,
        private titleServ: Title,
        private router: Router,
        public authServ: AuthService
    ) { }

    ngOnInit() {
        this.titleServ.setTitle(this.title);
    }

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

    toggleShowUsers() {
        this.showUsers = !this.showUsers;
    }

    @HostListener('document:click')
    hideContextMenu() {
        // console.log("hit")
        setTimeout(() => {
            if (!this.contextClick) {
                this.contextMenuOptions.showMenu = false;
            }
        }, 10)
    }

    onContextClick() {
        if (!this.contextClick) {
            this.contextClick = true;
            setTimeout(() => {
                this.contextClick = false;
            }, 20)
        }
    }

    onMouseMove(event: MouseEvent, over: boolean) {
        // console.log(event);
        this.toolTipOptions.showToolTip = over;
        // this.toolTipOptions.menuX = event.clientX;
        // this.toolTipOptions.menuY = event.clientY;
        this.toolTipOptions.menuX = event.clientX - 55;
        this.toolTipOptions.menuY = event.clientY + 15;
    }

    updateCustomColor(){
        this.userServ.customColorHasChanged.next();
    }

    navigateTo(route: string) {
        this.router.navigate([route])
    }
}
