import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'Angular Example';

  public constructor(
      private titleService: Title,
      private metaService: Meta,
      private router: Router
  ) {}

  ngOnInit() {
    this.setTitle('Hello, Angular!');
    this.metaService.updateTag({name: 'author', content: 'Gabor Garami <garami.gabor@egis.hu>'});
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
