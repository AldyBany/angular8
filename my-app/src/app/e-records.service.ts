import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ERecordsService {

  infos1: string[] = ["aldy","october","1996"]
  infos2: string[] = ["moi","december","1998"]
  infos3: string[] = ["paul","november","1999"]
  infos4: string[] = ["smith","april","1995"]

  getinfo1(): string[]{
    return this.infos1
  }

  getinfo2(): string[]{
    return this.infos2
  }

  constructor() { }
}
