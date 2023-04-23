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
  paymentForm: FormGroup;
  paynemtHandler: any = null

  success: boolean = false
  failure: boolean = false

  CashOnDelivery = {
    id: 1,
    name: 'Payment',
    value: 'CashOnDelivery',
    label: 'Cash on Delivery (COD) Pay by cash on delivery.. Learn more. Pay online for contactless deliveries.'
    ,
    labelAr: 'الدفع نقدا عند الاستلام ادفع نقدا عند الاستلام.  ادفع عبر الإنترنت للتسليم بدون تلامس.'
  }

  PayPal = {
    id: 2,
    name: 'Payment',
    value: 'Stripe',
    label: 'Stripe',
    labelAr: 'استريب'
  }
  currentLang: string;


  cartProducts: Icart;
  subscription!: Subscription;
  endpoint: any;
  totalPriceCart: number = 0;

  constructor(private prdservice: ProductServicesService, private fs: FormBuilder, private router: Router) {

    this.currentLang = localStorage.getItem('current_lang') || 'en';

    this.paymentForm = this.fs.group({
      paymentmethod: ['', [Validators.required]]
    })



  }
  ngOnInit(): void {
    this.getCard()
    this.invokeStripe()
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
  makePayment(amount: number) {
    const paynemtHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MwpKwL91jneEfqmxDgzybtIj4as6QPKXd2R0kRxIGQovhXSzSChRdXJE5nsr21tQgQFGYjFXb227UvWuIhoI0LA00sWiPoUXi',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paynemtStripe(stripeToken)
      }
    });
    const paynemtStripe = (stripeToken: any) => {
      // this.checkout.makePayment(stripeToken).subscribe((data:any)=>{
      this.prdservice.addPayment(stripeToken, amount).subscribe((data: any) => {
        console.log(amount);

        console.log(data);
        if (data.data === 'success') {
          this.success = true
          console.log(this.success);
          // this.prdservice.removeCart(this.cartProducts._id).subscribe(data=>{
          //   this.router.navigate(["/cart"])
          // })
        } else {
          this.failure = true
          console.log('payfail');
        }
      })
    }
    paynemtHandler.open(
      {

        name: 'UserCart',
        description: 'somePrd',
        amount: this.totalPriceCart * 100,
        price: this.totalPriceCart

      })
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {

        this.paynemtHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MwpKwL91jneEfqmxDgzybtIj4as6QPKXd2R0kRxIGQovhXSzSChRdXJE5nsr21tQgQFGYjFXb227UvWuIhoI0LA00sWiPoUXi',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);

          }
        })
      }
      window.document.body.appendChild(script);
    }
  }



}

