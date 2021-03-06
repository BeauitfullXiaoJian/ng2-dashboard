import { Component, OnInit } from '@angular/core';
import { Page } from './../../../../../tools/classes/page.class';
@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  //on page changed
  pageChanged(page: number) {

    console.log(page)

    //the page waitting
    setTimeout(_ => {
      console.log(this.page)
    }, 2000)
  }

  page: Page = new Page(120, 1, 5)

}
