import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listproducts = []

  constructor(
    public mainService:MainService,
  ) { }

  ngOnInit(): void {
    this.mainService.getProducts().subscribe(res=>{
      this.listproducts = res
    })
  }
}
