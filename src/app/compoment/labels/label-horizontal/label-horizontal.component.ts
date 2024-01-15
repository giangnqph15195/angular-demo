import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-label-horizontal',
  templateUrl: './label-horizontal.component.html',
  styleUrls: ['./label-horizontal.component.css']
})
export class LabelHorizontalComponent implements OnInit {
  @Input() required = false;
  @Input() noColon = false;
  @Input() for = '';
  @Input() classLabel = '';
  @Input() content: string = '';
  @Input() contentTpl: string | TemplateRef<void> | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
