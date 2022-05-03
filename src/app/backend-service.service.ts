import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  list: space[];

  constructor() {}

  loadSpaces(): space[] {
    this.list = [
      { id: 1, available: true, adress: 'Uhlandstraße 9, Darmstadt' },
      { id: 2, available: false, adress: 'Uhlandstraße 12, Darmstadt' },
    ];
    return this.list;
  }

  getSpaceById(id: number): space {
    return this.list.filter((x) => x.id == id)[0];
  }
}

export interface space {
  id: number;
  available: boolean;
  adress: string;
}
