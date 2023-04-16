import { ProductService } from './../../Services/product/product.service';
import { IProduct } from './../../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: any = [
        {
            name: "ADIDAS Essentials Single Jersey 3-Stripes Full-Zip Hoodie Women",
            price: 1200.00,
            ratings: 3.5,
            description: "Order From Jumia express items and get free shipping.",
            imagePath: ["https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/41/255982/1.jpg?0249",
                "https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/41/255982/3.jpg?0249",
                "https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/41/255982/5.jpg?0249"],
            subcategory: "Subcategory id",
            category: "category id",
            countInStock: 1,
            sellerId: "User id => seller",
            reviews: [
                {
                    userId: "User id => customer",
                    name: "user name",
                    rating: 4,
                    comment: " user comment "
                }
            ],
            numReviews: 0,
            isDeleted: false
        },
        {
            name: "Air Walk Sports Sweatpants With Inner Fleece Material - Dark Grey",
            price: 179.00,
            ratings: 4,
            description: "Order From Jumia express items and get free shipping.",
            imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/296943/1.jpg?5065",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/296943/2.jpg?5065",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/296943/3.jpg?5065"],
            subcategory: "Subcategory id",
            category: "category id",
            countInStock: 1,
            sellerId: "User id => seller",
            reviews: [
                {
                    userId: "User id => customer",
                    name: "user name",
                    rating: 4,
                    comment: " user comment "
                }
            ],
            numReviews: 0,
            isDeleted: false
        },
        {
            name: "ADIDAS Essentials Single Jersey 3-Stripes Full-Zip Hoodie Women",
            price: 1299.00,
            ratings: 3.8,
            description: "Order From Jumia express items and get free shipping.",
            imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/255982/1.jpg?0247",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/255982/2.jpg?0247",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/255982/3.jpg?0247"],
            subcategory: "Subcategory id",
            category: "category id",
            countInStock: 1,
            sellerId: "User id => seller",
            reviews: [
                {
                    userId: "User id => customer",
                    name: "user name",
                    rating: 4,
                    comment: " user comment "
                }
            ],
            numReviews: 0,
            isDeleted: false
        },
        {
            name: "Defacto Woman Ruby Red Leggings",
            price: 199.00,
            ratings: 3.6,
            description: "Order From Jumia express items and get free shipping.",
            imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/425043/1.jpg?7854",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/425043/2.jpg?7854",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/425043/3.jpg?7854"],
            subcategory: "Subcategory id",
            category: "category id",
            countInStock: 1,
            sellerId: "User id => seller",
            reviews: [
                {
                    userId: "User id => customer",
                    name: "user name",
                    rating: 4,
                    comment: " user comment "
                }
            ],
            numReviews: 0,
            isDeleted: false
        },
        {
            name: "Nileton Sportswear - Sport Top Long Sleeves - Pink",
            price: 195.00,
            ratings: 4.1,
            description: "Order From Jumia express items and get free shipping.",
            imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/088272/1.jpg?9706",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/088272/2.jpg?9706",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/088272/3.jpg?9706"],
            subcategory: "Subcategory id",
            category: "category id",
            countInStock: 1,
            sellerId: "User id => seller",
            reviews: [
                {
                    userId: "User id => customer",
                    name: "user name",
                    rating: 4,
                    comment: " user comment "
                }
            ],
            numReviews: 0,
            isDeleted: false
        },
        {
            name: "Nileton Sportswear - Sport Leggings Pants With Pocket - High Stretch",
            price: 215.00,
            ratings: 4.5,
            description: "Order From Jumia express items and get free shipping.",
            imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/525952/1.jpg?0291",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/525952/2.jpg?0291",
                "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/525952/3.jpg?0291"],
            subcategory: "Subcategory id",
            category: "category id",
            countInStock: 1,
            sellerId: "User id => seller",
            reviews: [
                {
                    userId: "User id => customer",
                    name: "user name",
                    rating: 4,
                    comment: " user comment "
                }
            ],
            numReviews: 0,
            isDeleted: false
        },
        // {
        //     name: "Doe Dry-Fit Printed Sleeves T-shirt - Artistic Black",
        //     price: 249.00,
        //     ratings: 3.7,
        //     description: "Order From Jumia express items and get free shipping.",
        //     imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/401483/1.jpg?8905",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/401483/2.jpg?8905",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/401483/3.jpg?8905"],
        //     subcategory: "Subcategory id",
        //     category: "category id",
        //     countInStock: 1,
        //     sellerId: "User id => seller",
        //     reviews: [
        //         {
        //             userId: "User id => customer",
        //             name: "user name",
        //             rating: 4,
        //             comment: " user comment "
        //         }
        //     ],
        //     numReviews: 0,
        //     isDeleted: false
        // },
        // {
        //     name: "Diadora Women Summer Milton Wide Leg _ Black",
        //     price: 319.00,
        //     ratings: 4,
        //     description: "Order From Jumia express items and get free shipping.",
        //     imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/131062/1.jpg?9570",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/131062/2.jpg?9570",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/131062/3.jpg?9570"],
        //     subcategory: "Subcategory id",
        //     category: "category id",
        //     countInStock: 1,
        //     sellerId: "User id => seller",
        //     reviews: [
        //         {
        //             userId: "User id => customer",
        //             name: "user name",
        //             rating: 4,
        //             comment: " user comment "
        //         }
        //     ],
        //     numReviews: 0,
        //     isDeleted: false
        // },
        // {
        //     name: "Caesar Women Training Suit With Pocket",
        //     price: 389.00,
        //     ratings: 3.8,
        //     description: "Order From Jumia express items and get free shipping.",
        //     imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/848432/1.jpg?2187",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/848432/2.jpg?2187",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/848432/3.jpg?2187"],
        //     subcategory: "Subcategory id",
        //     category: "category id",
        //     countInStock: 1,
        //     sellerId: "User id => seller",
        //     reviews: [
        //         {
        //             userId: "User id => customer",
        //             name: "user name",
        //             rating: 4,
        //             comment: " user comment "
        //         }
        //     ],
        //     numReviews: 0,
        //     isDeleted: false
        // },
        // {
        //     name: "Defacto Woman Black Leggings",
        //     price: 299.00,
        //     ratings: 4.2,
        //     description: "Order From Jumia express items and get free shipping.",
        //     imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/425043/1.jpg?7853",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/425043/2.jpg?7853",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/425043/3.jpg?7853"],
        //     subcategory: "Subcategory id",
        //     category: "category id",
        //     countInStock: 1,
        //     sellerId: "User id => seller",
        //     reviews: [
        //         {
        //             userId: "User id => customer",
        //             name: "user name",
        //             rating: 4,
        //             comment: " user comment "
        //         }
        //     ],
        //     numReviews: 0,
        //     isDeleted: false
        // },
        // {
        //     name: "Caesar Women Training Suit With Pocket",
        //     price: 389.00,
        //     ratings: 3.8,
        //     description: "Order From Jumia express items and get free shipping.",
        //     imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/848432/1.jpg?2187",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/848432/2.jpg?2187",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/848432/3.jpg?2187"],
        //     subcategory: "Subcategory id",
        //     category: "category id",
        //     countInStock: 1,
        //     sellerId: "User id => seller",
        //     reviews: [
        //         {
        //             userId: "User id => customer",
        //             name: "user name",
        //             rating: 4,
        //             comment: " user comment "
        //         }
        //     ],
        //     numReviews: 0,
        //     isDeleted: false
        // },
        // {
        //     name: "Defacto Woman Black Leggings",
        //     price: 299.00,
        //     ratings: 4.2,
        //     description: "Order From Jumia express items and get free shipping.",
        //     imagePath: ["https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/425043/1.jpg?7853",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/425043/2.jpg?7853",
        //         "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/425043/3.jpg?7853"],
        //     subcategory: "Subcategory id",
        //     category: "category id",
        //     countInStock: 1,
        //     sellerId: "User id => seller",
        //     reviews: [
        //         {
        //             userId: "User id => customer",
        //             name: "user name",
        //             rating: 4,
        //             comment: " user comment "
        //         }
        //     ],
        //     numReviews: 0,
        //     isDeleted: false
        // }
    ]

    productList: IProduct[] = [];
    childFashions:IProduct[] = [];
    homeAppliances:IProduct[] = [];
    womenSprtswear:IProduct[] = [];

    constructor(private prodService: ProductService, private router: Router) { }

    ngOnInit(): void {
        this.prodService.getAllProducts("642c0aaaff89ab6980edd00a").subscribe((data) => {
            this.childFashions = data
        })
        this.prodService.getAllProducts("642c141aff89ab6980edd06a").subscribe((data) => {
            this.homeAppliances = data
        })
        this.prodService.getAllProducts("642c131dff89ab6980edd05e").subscribe((data) => {
            this.womenSprtswear = data
        })
    }


    ProductDetails(prodId: string){
        this.router.navigate(['products',prodId])
    }
}
