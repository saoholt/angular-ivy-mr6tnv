import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  public list: space[];
  private wmIoUrl =
    'https://env436411.int-aws-de.webmethods.io/runflow/run/sync/1SnUnge5qM';

  constructor(private httpClient: HttpClient) {}

  loadSpacesObservable(): Observable<any> {
    return this.httpClient.get(this.wmIoUrl, {
      responseType: 'json',
    }) as Observable<any[]>;
  }

  /*  
  loadSpaces(): space[] {
    this.list = [
      { id: 1, occupied: '0.0', adress: 'Uhlandstraße 9, Darmstadt' },
      { id: 2, occupied: '1.0', adress: 'Uhlandstraße 12, Darmstadt' },
    ];
    return this.list;
  }
*/

  getSpaceById(id: number): space {
    return this.list.filter((x) => x.id == id)[0];
  }
}

export interface space {
  id: number;
  occupied: string;
  adress: string;
}
