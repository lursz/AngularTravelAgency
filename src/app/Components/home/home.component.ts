import {Component} from '@angular/core';
import {AuthComponent} from "../auth/auth.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AuthComponent]
})
export class HomeComponent {

}
