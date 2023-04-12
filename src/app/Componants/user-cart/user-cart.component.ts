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
// products:any=[
//   {
//       name: "ADIDAS Essentials Single Jersey 3-Stripes Full-Zip Hoodie Women",
//       price: 1200.00,
//       ratings: 3.5,
//       description: "Order From Jumia express items and get free shipping.",
//       imagePath: ["https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/41/255982/1.jpg?0249",
//           "https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/41/255982/3.jpg?0249",
//           "https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/41/255982/5.jpg?0249"],
//       subcategory: "Subcategory id",
//       category: "category id",
//       countInStock: 1,
//       sellerId: "User id => seller",
//       reviews: [
//           {
//               userId: "User id => customer",
//               name: "user name",
//               rating: 4,
//               comment: " user comment "
//           }
//       ],
//       numReviews: 0,
//       isDeleted: false
//   },
//   {
//       name: "Air Walk Sports Sweatpants With Inner Fleece Material - Dark Grey",
//       price: 179.00,
//       ratings: 4,
//       description: "Order From Jumia express items and get free shipping.",
//       imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/296943/1.jpg?5065",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/296943/2.jpg?5065",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/296943/3.jpg?5065"],
//       subcategory: "Subcategory id",
//       category: "category id",
//       countInStock: 1,
//       sellerId: "User id => seller",
//       reviews: [
//           {
//               userId: "User id => customer",
//               name: "user name",
//               rating: 4,
//               comment: " user comment "
//           }
//       ],
//       numReviews: 0,
//       isDeleted: false
//   },
//   {
//       name: "ADIDAS Essentials Single Jersey 3-Stripes Full-Zip Hoodie Women",
//       price: 1299.00,
//       ratings: 3.8,
//       description: "Order From Jumia express items and get free shipping.",
//       imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/255982/1.jpg?0247",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/255982/2.jpg?0247",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/255982/3.jpg?0247"],
//       subcategory: "Subcategory id",
//       category: "category id",
//       countInStock: 1,
//       sellerId: "User id => seller",
//       reviews: [
//           {
//               userId: "User id => customer",
//               name: "user name",
//               rating: 4,
//               comment: " user comment "
//           }
//       ],
//       numReviews: 0,
//       isDeleted: false
//   },
//   {
//       name: "Defacto Woman Ruby Red Leggings",
//       price: 199.00,
//       ratings: 3.6,
//       description: "Order From Jumia express items and get free shipping.",
//       imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/425043/1.jpg?7854",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/425043/2.jpg?7854",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/425043/3.jpg?7854"],
//       subcategory: "Subcategory id",
//       category: "category id",
//       countInStock: 1,
//       sellerId: "User id => seller",
//       reviews: [
//           {
//               userId: "User id => customer",
//               name: "user name",
//               rating: 4,
//               comment: " user comment "
//           }
//       ],
//       numReviews: 0,
//       isDeleted: false
//   },
//   {
//       name: "Nileton Sportswear - Sport Top Long Sleeves - Pink",
//       price: 195.00,
//       ratings: 4.1,
//       description: "Order From Jumia express items and get free shipping.",
//       imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/088272/1.jpg?9706",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/088272/2.jpg?9706",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/088272/3.jpg?9706"],
//       subcategory: "Subcategory id",
//       category: "category id",
//       countInStock: 1,
//       sellerId: "User id => seller",
//       reviews: [
//           {
//               userId: "User id => customer",
//               name: "user name",
//               rating: 4,
//               comment: " user comment "
//           }
//       ],
//       numReviews: 0,
//       isDeleted: false
//   },
//   {
//       name: "Nileton Sportswear - Sport Leggings Pants With Pocket - High Stretch",
//       price: 215.00,
//       ratings: 4.5,
//       description: "Order From Jumia express items and get free shipping.",
//       imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/525952/1.jpg?0291",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/525952/2.jpg?0291",
//           "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/525952/3.jpg?0291"],
//       subcategory: "Subcategory id",
//       category: "category id",
//       countInStock: 1,
//       sellerId: "User id => seller",
//       reviews: [
//           {
//               userId: "User id => customer",
//               name: "user name",
//               rating: 4,
//               comment: " user comment "
//           }
//       ],
//       numReviews: 0,
//       isDeleted: false
//   },

// ]

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
