import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    status = 'InActive';
    userName = 'Faiz Ahmed';
    role = 'Front Office';
    dept = 10;

    constructor() {
        // setTimeout(() => {
        //   this.status = 'Active';
        // }, 2000);

        this.status = Math.random() > 0.5 ? 'Active' : 'InActive';


    }

    getColor() {
        return this.status === 'Active' ? 'green' : 'red';
    }


}
