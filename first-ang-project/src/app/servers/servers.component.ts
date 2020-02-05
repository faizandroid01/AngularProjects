import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverName = '';
    listOfServers = ['Server 1 '];

    serverCreationStatus = 'No server Created';
    serverCreated = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    allowedToAddServer() {
        if (this.allowNewServer && this.serverName.toString().length !== 0) {
            return true;
        }
        return false;
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
        this.serverName = '';
    }

}
