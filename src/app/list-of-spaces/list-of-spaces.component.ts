import { Component, OnInit } from '@angular/core';
import { BackendServiceService, space } from '../backend-service.service';

@Component({
  selector: 'app-list-of-spaces',
  templateUrl: './list-of-spaces.component.html',
  styleUrls: ['./list-of-spaces.component.css'],
})
export class ListOfSpacesComponent implements OnInit {
  spaces: space[];

  constructor(private backendservice: BackendServiceService) {}

  ngOnInit() {
    this.spaces = this.backendservice.loadSpaces();
    console.log('loaded spaces...' + this.spaces.length);
  }

  selectSpace(id: number) {
    console.log('opening... ' + id);
  }
}
