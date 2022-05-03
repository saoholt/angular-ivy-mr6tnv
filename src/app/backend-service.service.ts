import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  list: space[];

  constructor(private httpClient: HttpClient) {}

  loadSpaces(): space[] {
    this.loadSpacesReal();
    this.list = [
      { id: 1, available: true, adress: 'Uhlandstraße 9, Darmstadt' },
      { id: 2, available: false, adress: 'Uhlandstraße 12, Darmstadt' },
    ];
    return this.list;
  }

  loadSpacesReal() {
    this.httpClient
      .get(
        'https://env436411.int-aws-de.webmethods.io/runflow/run/sync/1SnUnge5qM'
      )
      .subscribe((result) => {
        console.log(result);
      });
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
