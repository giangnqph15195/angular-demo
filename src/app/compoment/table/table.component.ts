import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() ListOfData: any;
  @Input() listOfColumns: any;

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
}
