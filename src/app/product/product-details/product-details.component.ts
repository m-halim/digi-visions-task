import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product
  id
  constructor(
    public mainService:MainService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

   });


    this.mainService.getProductDetails(this.id).subscribe(res=>{
      this.product = res
    })
  }

}
