import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartProducts:any;
  userId: string="6425633cf68f40eb571fff5f";
  subscription!:Subscription;
  constructor(private prdservice: ProductServicesService){

  }
  ngOnInit(): void {
    this.subscription = this.prdservice.getUserCart().subscribe(data => {
      console.log('user data is *********> ', data);
      this.cartProducts = data[0];
  })

  }
}
