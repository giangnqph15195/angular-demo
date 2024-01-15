import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  message: string = 'I Love You';
  constructor() {}
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {}
  senMessage() {
    this.messageEvent.emit(this.message);
  }
}
