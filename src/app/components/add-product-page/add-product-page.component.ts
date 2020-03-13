import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit() {
    if (!window.localStorage.token) {
      this.router.navigateByUrl('/');
    }
  }
}
