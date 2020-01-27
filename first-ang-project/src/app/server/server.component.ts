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
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }


  onServerCreated() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created Successfully & the name of server is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }


  onResetClicked() {
    this.serverName = ' ';
    this.serverCreated = false;
  }
}

