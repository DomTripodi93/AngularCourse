import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent {
    @Input() user: string = "";
    @Input() index: number = -1;
    @Output() removeUser: EventEmitter<number> = new EventEmitter<number>();

}
