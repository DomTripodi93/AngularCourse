import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent {
    @Input() user: string = "x";
}
