import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.css']
})
export class ButtonBaseComponent implements OnInit {

  @Input() rights: string[] = [];
  @Input() text = '';
  @Input() buttonType = 'primary';
  @Input() size = 'default';
  @Input() danger: boolean = false;
  @Input() buttonClass = 'mr-2';
  @Input() iconSource: string = 'fontAwesome';
  @Input() iconType = 'question';
  @Input() iconTheme = 'outline';
  @Input() disabled = false;
  @Input() buttonShape = '';
  @Input() iconClass = '';
  @Input() iconSpin = false;
  @Input() iconFont = '';
  @Input() iconRotate = 0;
  @Input() loading = false;
  @Input() popConfirm = false;
  @Input() confirmOkI18n = 'layout.confirm.cancel.confirm.accept';
  @Input() confirmCancelI18n = 'layout.confirm.cancel.confirm.cancel';
  @Input() confirmTitleI18n = 'layout.confirm.discard-change';
  @Input() titleTooltip: string = '';
  @Input() tooltipPlacement: string = 'bottom';
  @Input() popconfirmPlacement: string = 'top';
  @Input() isShowTooltip: boolean = false;
  @Input() iconPosition: string = 'left';
  @Output() onClick = new EventEmitter();
  isShowBtn: boolean = true;

  constructor(protected cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
  }

  ngAfterViewInit() {
    this.cdr.markForCheck();
  }

  ngOnInit(): any {}

  handleClick(): any {
    this.onClick.emit();
  }

}
