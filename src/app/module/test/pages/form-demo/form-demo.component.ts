import { Component, OnInit } from '@angular/core';
import { FormCheckService } from './../../../../system/service/form-check.service';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
  providers: [FormCheckService]
})
export class FormDemoComponent implements OnInit {

  constructor(private formCheckService: FormCheckService) { }

  ngOnInit() { }

  //price check to valid
  toPrice(price: string) {
    return this.formCheckService.getPrice(price)
  }

  //submit
  doSubmit() {
    console.log(this.form)
  }

  //disabled the input
  disabled = false;

  //form data
  form: any = {}

}