import { Component, OnInit } from '@angular/core';
import {ERecordsService} from '../e-records.service';

@Component({
  selector: 'app-e-infos',
  templateUrl: './e-infos.component.html',
  styleUrls: ['./e-infos.component.scss'],
  providers: [ERecordsService]
})
export class EInfosComponent implements OnInit {

  info1R: string[]=[]
  info2R: string[]=[]
  info3R: string[]=[]

  getInfoService1(){
    this.info1R = this.rservice.getinfo1()
  }
  getInfoService2(){
    this.info2R = this.rservice.getinfo2()
  }




  constructor(private rservice: ERecordsService) { }

  ngOnInit(): void {
  }

}
