import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  public list: space[];

  constructor(private httpClient: HttpClient) {}

  loadSpaces(): space[] {
    this.list = [
      { id: 1, available: true, adress: 'Uhlandstraße 9, Darmstadt' },
      { id: 2, available: false, adress: 'Uhlandstraße 12, Darmstadt' },
    ];
    return this.list;
  }

  A;

  getSpaceById(id: number): space {
    return this.list.filter((x) => x.id == id)[0];
  }
}

export interface space {
  id: number;
  available: boolean;
  adress: string;
}
