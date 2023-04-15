import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class UserCartComponent implements OnInit, OnChanges {
  [x: string]: any;
  cartProducts: Icart;
  subscription!: Subscription;
  endpoint: any;
  totalPriceCart: number = 0;
  
  constructor(private prdservice: ProductServicesService , private router:Router) {
    this.endpoint = environment.jDBUrl

  }
  ngOnChanges(changes: SimpleChanges): void {
    //var countInstock=cartProducts..productId.countInStock
  }
  ngOnInit(): void {
    //this.cartProducts=this.prdservice.getUserCart(this.userId);
    this.subscription = this.prdservice.getUserCart().subscribe(data => {
      console.log('user data is *********> ', data);
      this.cartProducts = data[0];
      this.cartProducts?.items?.map((item) => {
        this.totalPriceCart = this.totalPriceCart + (item.productId.price * item.quantity)
      })
      console.log('user data is --------> ', this.cartProducts);
    })



  }

  private getCartProducts() {

    this.subscription = this.prdservice.getUserCart().subscribe(data => {
      this.cartProducts = data;
    })

  }


  increaseQuantity(i: number, price: number) {
    console.log(this.cartProducts.items[i].quantity);
    this.cartProducts.items[i].quantity++;
    console.log(this.cartProducts.items[i].quantity);
    this.totalPriceCart = this.totalPriceCart + price
  }
  decreaseQuantity(i: number, price: number) {
    console.log(this.cartProducts.items[i].quantity);
    this.cartProducts.items[i].quantity--
    console.log(this.cartProducts.items[i].quantity);
    this.totalPriceCart = this.totalPriceCart - price
  }


  onDeleteItem(cartId: any, prodId: any) {
    console.log(prodId)
    this.prdservice.deleteItemFromCart(cartId, prodId).subscribe()
    this.router.navigate(["/cart"])
  }




  onCheckout():void{
    // this.httpClient.post('http://localhost:4200/checkout',{items:this.cartProducts.items})
    // .subscribe(async (res:any) => {
    //   let stripe=await loadStripe('pk_test_51MwpKwL91jneEfqmxDgzybtIj4as6QPKXd2R0kRxIGQovhXSzSChRdXJE5nsr21tQgQFGYjFXb227UvWuIhoI0LA00sWiPoUXi');
    //   stripe?.redirectToCheckout({sessionId:res.id})
    // })
    }


}
