import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent {
    @Input() user: string = "";
    @Input() index: number = -1;
    // @Output() removeUser: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        public userServ: UserService
    ){}

    // removeUser(index: number){
    removeUser(){
        this.userServ.userList.splice(this.index, 1)
    }

}
