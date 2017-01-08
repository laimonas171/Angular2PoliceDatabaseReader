import { Component, OnInit } from '@angular/core';
import {RouteResource} from "../../models/route-resource";

@Component({
  selector: 'pdb-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

export class TopbarComponent implements OnInit {

  routeList: RouteResource[];
  constructor() { }

  initNavigationResources() {
    this.routeList = [];

    let startPage = new RouteResource();
    startPage.path = "start";
    startPage.displayName = "Homepage";

    let examplesPage = new RouteResource();
    examplesPage.path = "examples-page";
    examplesPage.displayName = "Examples page";

    this.routeList.push(startPage, examplesPage);

  }

  ngOnInit() {
    this.initNavigationResources();
  }

}
