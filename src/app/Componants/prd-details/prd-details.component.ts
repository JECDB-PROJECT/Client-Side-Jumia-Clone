import { Component } from '@angular/core';
import { SinglePrdService } from 'src/app/service/single-prd.service';
import { EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prd-details',
  templateUrl: './prd-details.component.html',
  styleUrls: ['./prd-details.component.scss']
})
export class PrdDetailsComponent implements OnInit,OnChanges{

prdId:number=1
singlePrd:any
constructor(private singlePrdserv:SinglePrdService){

  
}
ngOnInit(): void {
  
  this.singlePrdserv.getSinglePrd(this.prdId).subscribe(data=>this.singlePrd=data)
}
ngOnChanges():void{

  console.log(this.singlePrd);
  
}

addToCart():any{
  
  console.log(this.prdId);
  this.prdId++
  return this.singlePrdserv.getSinglePrd(this.prdId).subscribe(data=>this.singlePrd=data)
  
}
backPrd():any {
  console.log(this.prdId);
  this.prdId--
  return this.singlePrdserv.getSinglePrd(this.prdId).subscribe(data=>this.singlePrd=data)

}

}
