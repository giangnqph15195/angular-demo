import {
  Component,
  OnInit,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() ListOfData: any;
  @Input() listOfColumns: any;
  @Output() onClickRows = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  nzSortChange(ev: any, column: any){
    let sortOrder : any = null
    if (ev !== null) {
      const keyOrder = ev === 'ascend' ? '+' : '-';
      sortOrder = keyOrder + column.sortKey;
    } else {
      sortOrder = null;
    }
    return sortOrder
  }
  clickRow(ev:any){
    this.onClickRows.emit(ev)
  }
}
