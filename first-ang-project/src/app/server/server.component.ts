import {Component} from '@angular/core';

@Component({
  // selector: '[app-server]',
  // tslint:disable-next-line:component-selector
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  allowNewServer = false;
  serverName = '';

  serverCreationStatus = 'No server Created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  userName = 'Faiz Ahmed';
  role = 'Front Office';
  dept = 10;
  status = '';
  through2WayBinding: '';

  getStatus() {
    return this.status = 'Active';
  }

  onServerCreated() {
    this.serverCreationStatus = 'Server Created Successfully ';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}

