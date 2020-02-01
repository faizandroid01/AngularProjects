import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = '';
  listOfServers = ['Server 1 ', 'Server 2'];

  serverCreationStatus = 'No server Created';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }


  onServerCreated() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created Successfully & the name of server is ' + this.serverName;

    this.listOfServers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }


  onResetClicked() {
    this.serverName = ' ';
    this.serverCreated = false;
  }

}
