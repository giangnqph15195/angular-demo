import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from 'src/app/compoment/footer/footer.component';

@Component({
  selector: 'app-layout-web',
  templateUrl: './layout-web.component.html',
  styleUrls: ['./layout-web.component.css'],
})
export class LayoutWebComponent implements OnInit, AfterViewInit {
  @ViewChild(FooterComponent) abc: any;
  message: string = '';
  senMessage: string = 'a';
  constructor() {}

  ngOnInit(): void {
    // this.message = this.abc.message;
  }
  ngAfterViewInit(): void {
    this.message = this.abc.message;
  }
  receiveMessage($event: any) {
    this.senMessage = $event;
  }
}
