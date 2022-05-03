import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendServiceService, space } from '../backend-service.service';

@Component({
  selector: 'app-list-of-spaces',
  templateUrl: './list-of-spaces.component.html',
  styleUrls: ['./list-of-spaces.component.css'],
})
export class ListOfSpacesComponent implements OnInit {
  spaces: space[] = [];
  //  spaces$: Observable<space[]>;

  constructor(private backendservice: BackendServiceService) {}

  ngOnInit() {
    //    this.spaces = this.backendservice.loadSpaces();
    //    console.log('loaded spaces...' + this.spaces.length);
    console.log('loaded spaces observable...');
    this.backendservice.loadSpacesObservable().subscribe((res: any) => {
      this.spaces = res.status;
      console.log(this.spaces);
    });
  }

  selectSpace(id: number) {
    console.log('opening... ' + id);
  }
}
