import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submit(login:any){
    console.log("Form submitted", login)
  }


  constructor() { }

  ngOnInit(): void {
  }

  
}
