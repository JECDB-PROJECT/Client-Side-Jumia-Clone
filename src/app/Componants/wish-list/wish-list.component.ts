import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';
import { WishListService } from './../../Services/wichList/wish-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {

  prodList=[]

  data = null


  constructor(private WishList:WishListService , private prdServe: ProductServicesService){
    this.WishList.getUserWichLists().subscribe(data=>{
      this.prodList=data[0].items
    })

  }

  addToCart(id: any) {

    this.data = { items: { productId: id } }
    this.prdServe.addToUserCart(this.data).subscribe(data => {
      this.prdServe.getUserCart().subscribe(data => {
        this.prdServe.emit<number>(data[0].items.length);

      })
    })

  }


  removFromWishLIst(prdId:string){
    this.WishList.deleteProductFromWishList(prdId).subscribe()
  }

}
