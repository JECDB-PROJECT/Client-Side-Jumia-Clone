import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Icart } from 'src/app/Models/icart';
import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  paymentForm:FormGroup;

  CashOnDelivery= {
      id:1,
      name:'Payment',
      value:'CashOnDelivery',
      label:'Cash on Delivery (COD) Pay by cash on delivery.. Learn more. Pay online for contactless deliveries.'
      ,
      labelAr:'الدفع نقدا عند الاستلام ادفع نقدا عند الاستلام.  ادفع عبر الإنترنت للتسليم بدون تلامس.'
    }
  
  PayPal= {
      id:2,
      name:'Payment',
      value:'Stripe',
      label:'Stripe',
      labelAr:'استريب'
    }
  currentLang: string;


  cartProducts: Icart;
  subscription!: Subscription;
  endpoint: any;
  totalPriceCart: number = 0;

  constructor(private prdservice: ProductServicesService,private fs:FormBuilder, private router:Router) { 
   
    this.currentLang=localStorage.getItem('current_lang')||'en';
   
    this.paymentForm = this.fs.group({
      paymentmethod: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    this.getCard()
  }


  getCard(): void {
    this.totalPriceCart = 0
    this.subscription = this.prdservice.getUserCart().subscribe(data => {
      console.log('user data is *********> ', data);
      this.cartProducts = data[0];
      this.cartProducts?.items?.map((item) => {
        this.totalPriceCart = this.totalPriceCart + (item.productId.price * item.quantity)
      })
      console.log('user data is --------> ', this.cartProducts);
    })
  }



  //payment
  submit(){
    
    
  }


}