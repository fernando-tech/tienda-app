import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: []
})
export class BreadcrumbsComponent implements OnInit {

  @Input() titleBreadcrumb: string = "";

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
