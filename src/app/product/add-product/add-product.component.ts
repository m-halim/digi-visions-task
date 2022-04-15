import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public mainService:MainService
    ) { }

  ngOnInit() {
      this.productForm = this.formBuilder.group({
          title: ['', Validators.required],
          price: [null, Validators.required],
          description: ['', Validators.required],
          image: ['', [Validators.required]],
          category: ['', Validators.required],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit() {

      this.submitted = true;

      // stop here if form is invalid
      if (this.productForm.invalid) {
          return;
      }

      this.mainService.addProduct(this.productForm.value).subscribe()
  }

}
