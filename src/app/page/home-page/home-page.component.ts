import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Person {
  key: number;
  name: string;
  image: string;
  price: number;
  quantiny: number;
  address: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  count: string = '';
  numbers: number[] = [];
  total: number = 0;
  filter: string = '';
  title: string = 'pipes in angular';
  colums: any = [
    { name: 'Name', field: 'name' },
    {
      name: 'Image',
      field: 'image',
      ImageFunction: (linkImage: string) => {
        return null;
      },
    },
    { name: 'Price', field: 'price' },
    { name: 'Quantiny', field: 'quantiny' },
    { name: 'Address', field: 'address' },
    { name: 'Action', field: 'action' },
  ];
  listOfData: Person[] = JSON.parse(localStorage.getItem('cart') as string);

  constructor(protected router: Router, activatedroute: ActivatedRoute) {}
  ngOnInit(): void {
    this.setTotal();
  }
  setTotal() {
    this.numbers = this.listOfData.map(
      (item: Person) => item.price * item.quantiny
    );
    this.total = this.numbers.reduce(function (a, b) {
      return a + b;
    });
  }

  updatequantity(id: number, quantiny: number) {
    for (let product of this.listOfData) {
      if (product.key == id) {
        product.quantiny = quantiny;
      }
      localStorage.setItem('cart', JSON.stringify(this.listOfData));
    }
    this.setTotal();
  }

  onSubmit() {
    console.log(this.count);
  }
  async queryParam() {
    if (this.count) {
      this.router.navigate([''], {
        queryParams: {
          fulltextsearch: this.count,
          objectType: this.filter,
        },
      });
    } else {
    }
  }

  async onSearch() {
    console.log(this.count);
    await this.queryParam();
  }
  async onFilter(value: string) {
    this.filter = value;
    await this.queryParam();
  }
  async clearFilter() {
    this.filter = '';
    await this.queryParam();
  }
}
