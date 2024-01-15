import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  listOfColumns: any = [
    {
      name: 'Name',
      field: 'name',
      sortOrder: null,
      width: '15%',
      sortDirections: ['ascend', 'descend', null],
      class: '',
    },
    {
      name: 'Age',
      field: 'age',
      sortOrder: null,
      width: '10%',
      sortDirections: ['ascend', 'descend', null],
      class: 'text-right',
    },
    {
      name: 'Address',
      field: 'address',
      sortOrder: null,
      width: 'auto',
      class: '',
    },
    {
      name: 'Action',
      field: 'action',
      sortOrder: null,
      width: '15%',
      class: 'text-center',
    },
  ];
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
