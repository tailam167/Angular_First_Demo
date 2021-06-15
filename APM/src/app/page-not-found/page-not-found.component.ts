import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let self = this;
    setTimeout(function () {
      self.router.navigateByUrl('/welcome');
    }, 4000)
  }

}
