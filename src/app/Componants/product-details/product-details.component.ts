import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct | undefined = undefined;
  prodId: string ;
  stok:number = 9;
  endpoint:any;

  constructor(private activatedRoute: ActivatedRoute, private prodService: ProductService){
    this.endpoint=environment.jDBUrl
  }
  ngOnInit(): void {
    this.productDetails()
  }


  productDetails() {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.prodId = paramMap.get('prodId');
      this.prodService.getProductById(this.prodId).subscribe((prod)=>{
        this.product = prod;
      })
    })
  }
}
