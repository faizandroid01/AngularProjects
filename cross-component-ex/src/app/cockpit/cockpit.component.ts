import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {

  //These below are the events which we will be transmitted back to 
  //Outer component inner Add server methods Hen decoratoe used will be @Output ;

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();;

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverInputContent', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInputVal: HTMLInputElement) {
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInputVal.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInputVal: HTMLInputElement) {
    this.blueprintCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInputVal.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value

    });


  }




}
