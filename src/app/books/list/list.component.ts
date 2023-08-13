import { Component, OnInit, Output } from '@angular/core';
import { Element } from '@angular/compiler';
import { BooksService } from 'src/app/services/books.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { TableComponent } from 'src/app/shared/table/table.component';
import { share } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})



export class ListComponent implements OnInit {
  booklist: any[] = [];

  pageNumber = 1;
  totalRecord = 0;
  noOfPage: any[] = [];
  apiEnpoint: string = 'http://103.224.246.103:3004/';
  response: any[] = [];
  headers : any = [
    {name:'#', key: 'id', type: 'number'},
    {name:'Name', key: 'bookName', type: 'string'},
{name:'Image', key:'image', type: 'URL'}, 
{name:'price', key: 'pricing', type:'number' },
{name:'category', key: 'category', type:'string' },
{name:'Action', key: 'action', type: 'string'},];
page:any
heading: string = 'manage book'


apiDatabook: any;





  constructor(private _service: BooksService) {
    console.log(this.booklist)
   }

  ngOnInit(): void {
    this._service.getBooksList().subscribe((data: any) => {
     
      // this._service.Data.push(data)
      // this.booklist.push(this.item)
      // console.log(data)
      
      console.log(this.booklist)
      // this.booklist.forEach((element: any) => {
      //   element.image = this.apiEnpoint + element.image;

      // })
      this.totalRecord = data.data.length;
      this.response = [...data.data];




      this.booklist = [...data.data.slice(0, 10)];
      this.totalRecord = data.data.length;
      for (let index = 0; index < this.totalRecord / 10; index++) {
        this.noOfPage.push(index + 1);

      }

      this.booklist.forEach((element: any) => {
        element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;
      });


    })
    this.servicedata()
  }
  // getPaginatedData(pageNumber: number) {
  //   this.booklist = [...this.response.splice((pageNumber - 1) * 10, pageNumber * 10)]
  //   this.booklist.forEach((element: any) => {
  //     element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;

  //   })
  // }




  getPaginatedData(pageNumber: number) {
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;
    this.pageNumber = pageNumber;
    this.booklist =  [...this.response.slice(startIndex, endIndex)];
  
    this.booklist.forEach((element: any) => {
      element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;
    });
  }

  previous() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.getPaginatedData(this.pageNumber);
    }

  }

  next() {
    if (this.pageNumber < this.noOfPage.length) {
      this.pageNumber = this.pageNumber + 1
      this.getPaginatedData(this.pageNumber);
    }
  }




  sarch(val: any) {
    this.booklist = this.response.filter((res: any) => (res.bookName.includes(val)) || (res.category.includes(val)))
  }
  pricesortup() {
    this.booklist = this.booklist.sort((a: any, b: any) => {
      return (a.pricing - b.pricing)

    })
  }
  pricesortdown() {
    this.booklist = this.booklist.sort((a: any, b: any) => {
      return (b.pricing - a.pricing)
    })

  }


  namesortup() {
   
    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName < y.bookName) {
        return -1;
      }
      if (x.bookName > y.bookName) {
        return 1;
      }
      return 0;
    });
  }

  namesortdown() {
   
    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName > y.bookName) {
        return -1;
      }
      if (x.bookName < y.bookName) {
        return 1;
      }
      return 0;
    });
  }




  categorysortup() {
   
    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName < y.bookName) {
        return -1;
      }
      if (x.bookName > y.bookName) {
        return 1;
      }
      return 0;
    });
  }

  categorysortdown() {
   
    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName > y.bookName) {
        return -1;
      }
      if (x.bookName < y.bookName) {
        return 1;
      }
      return 0;
    });


   

  }





  // getdata() {
  //   throw new Error('Method not implemented.');
  // }


  //   getdata(): void {
  //   this._service['getbooklist']()
  //   .subscribe((res: any) =>{
  //     console.log(res)

  //   })
  // }

  servicedata() {
    console.log(this._service.Data)
  }

}
