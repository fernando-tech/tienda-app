import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  title: string = '';


  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {

    this.setTitle();

  }

  ngOnInit(): void {
  }

  setTitle(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
    .subscribe(data => {
      this.title = data['title'];
      //this.titleService.setTitle(data['title']);
    });
  }

}
