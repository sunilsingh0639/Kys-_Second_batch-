import { Component, EventEmitter, Input } from '@angular/core';
import { Data } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  //apiDatabook: any= [];
constructor () {}
@Input() 
title: string=''
@Input() 
Data: any[]=[]
 @Input()
 headers: any[]=[];
 booklist: any[] = [];
  

 pageNumber = 1;
 totalRecord = 0;
 noOfPage: any[] = [];
 apiEnpoint: string = 'http://103.224.246.103:3004/';
 response: any[] = [];



  
    
  }
  // @Input() title = {}
  // @Input() 
  // title: string = '';

//   apiData () {
// this._service.getBooksList()
// .subscribe((res) =>{
//   console.log(res)
//  // this.apiDatabook.push(res)
//   console.log(this.apiDatabook)
//   this.apiDatabook = res
  
// })
//   }
// }

// }


