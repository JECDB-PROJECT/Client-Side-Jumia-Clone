import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';

@Component({
  selector: 'app-sub-categ-products',
  templateUrl: './sub-categ-products.component.html',
  styleUrls: ['./sub-categ-products.component.scss']
})
export class SubCategProductsComponent implements OnInit {

  subCateg:string=""
  Products:Iproduct[] = [];
  constructor(private activatedRoute: ActivatedRoute , private prdServe:ProductServicesService){

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{this.subCateg = String(paramMap.get('id'))
    
      this.prdServe.GetProductsBySubCate(this.subCateg).subscribe(products => {
        this.Products = products;
        console.log(this.Products)
      })
    
    })

}
}
