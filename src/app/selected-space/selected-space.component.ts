import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selected-space',
  templateUrl: './selected-space.component.html',
  styleUrls: ['./selected-space.component.css'],
})
export class SelectedSpaceComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {

    console.log(this.route.paramMap);
  }
}
