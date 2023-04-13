import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';

@Component({
  selector: 'app-categ-products',
  templateUrl: './categ-products.component.html',
  styleUrls: ['./categ-products.component.scss']
})
export class CategProductsComponent implements OnInit {

  cate:string="";
  Products:Iproduct[] = [];

  constructor(private activatedRoute: ActivatedRoute , private prdServe:ProductServicesService){

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{this.cate = String(paramMap.get('id'))
    
      this.prdServe.getProductsByCategory(this.cate).subscribe(products => {
        this.Products = products;
        console.log(this.Products)
      })
    
    })
  }

}
