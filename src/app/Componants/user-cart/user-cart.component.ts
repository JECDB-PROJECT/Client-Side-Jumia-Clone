import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Icart } from 'src/app/Models/icart';
import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';
import { CommonModule } from '@angular/common'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit,OnChanges{
  userId: string="6425633cf68f40eb571fff5f";
  cartProducts: Icart;
  subscription!:Subscription;
  endpoint:any;

   // cartProductstest: Icart;
  // testProducts: string[];
  constructor(private prdservice: ProductServicesService){
    this.endpoint=environment.jDBUrl

    this.cartProducts={
      _id:"",
      items:[
      {
        price: 100,
        productId: {
          _id: "642c1754ff89ab6980edd0a9",
              name: "Patio-Lawn-Garden",
              imagePath: [
                "uploads\\2023-04-04T12-25-56.169Z-child1.2.jpg",
                "uploads\\2023-04-04T12-25-56.169Z-child1.3.jpg",
                "uploads\\2023-04-04T12-25-56.170Z-child1.4.jpg"
              ],
              description: "Order From Jumia express items and get free shipping.",
              price: 170,
              totalPrice: 0,
              category: '',
              arcategory: '',
              subcategory: '',
              arsubcategory: '',
              ratings: 1,
              ardescription: '',
              countInStock: 10,
              isDeleted: false,
              createdAt: {},
              updatedAt: {}
        },
        quantity: 1,
        sellerId:""
      },
      {
        price: 100,
        productId: {
          _id: "642c1754ff89ab6980edd0a9",
              name: "Patio-Lawn-Garden",
              imagePath: [
                "uploads\\2023-04-04T12-25-56.169Z-child1.2.jpg",
                "uploads\\2023-04-04T12-25-56.169Z-child1.3.jpg",
                "uploads\\2023-04-04T12-25-56.170Z-child1.4.jpg"
              ],
              description: "Order From Jumia express items and get free shipping.",
              price: 170,
              totalPrice: 0,
              category: '',
              arcategory: '',
              subcategory: '',
              arsubcategory: '',
              ratings: 1,
              ardescription: '',
              countInStock: 10,
              isDeleted: false,
              createdAt: {},
              updatedAt: {}
        },
        quantity: 1,
        sellerId:""
      }
    ],
    userId:this.userId,
  totalPrice:100
  };

  }
  ngOnChanges(changes: SimpleChanges): void {
    //var countInstock=cartProducts..productId.countInStock
  }
   ngOnInit(): void {
    //this.cartProducts=this.prdservice.getUserCart(this.userId);
    this.subscription=this.prdservice.getUserCart(this.userId).subscribe(data=>{
      console.log('user data is *********> ',data);
      this.cartProducts=data;
      console.log('user data is --------> ',this.cartProducts);
    })



  }

  private getCartProducts()
{

    this.subscription=this.prdservice.getUserCart(this.userId).subscribe(data=>{
      this.cartProducts=data;
    })

}


 increaseQuantity(i:any){
  console.log(this.cartProducts.items[i].quantity);
  this.cartProducts.items[i].quantity++;
  console.log(this.cartProducts.items[i].quantity);

}
 decreaseQuantity(i:any){
  console.log(this.cartProducts.items[i].quantity);
  this.cartProducts.items[i].quantity--
  console.log(this.cartProducts.items[i].quantity);
}

}
