import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductServicesService } from 'src/app/Services/productservices/product-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartProducts: any;
  userId: string = "6425633cf68f40eb571fff5f";
  subscription!: Subscription;
  len: number = 0
  currentLang: string = localStorage.getItem('current_lang') || 'en';;
  // translate: TranslateService;
  constructor(private prdservice: ProductServicesService) {
    // this.currentLang = localStorage.getItem('current_lang') || 'en';
  }
  ngOnInit(): void {
    this.subscription = this.prdservice.getUserCart().subscribe(data => {
      console.log('user data is *********> ', data);
      this.cartProducts = data[0];
    })

    this.subscription = this.prdservice.getUserCart().subscribe(data => {
      data[0].items.length
      this.prdservice.emit<number>(data[0].items.length);
    })
    this.prdservice.on<number>().subscribe(data => {
      this.len = data
    })

  }

  changeCurrentLang(lang: string) {
    // this.translate.use(lang);
    localStorage.setItem('current_lang', lang);
    this.currentLang = lang;
    window.location.reload()

  }
}
