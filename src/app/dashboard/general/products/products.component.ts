import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  activeTile = 1;
  attributeTiles = [
    {name: 'Units', key: 1},
    {name: 'Manufatures', key: 2}
  ];

  constructor() { }

  ngOnInit() {
  }

}
