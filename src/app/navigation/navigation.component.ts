import {Component, Inject, OnInit} from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // constructor(@Inject(RouterLinkActive) private active: RouterLinkActive) {}
  constructor() {}


  ngOnInit() {
  }

}
