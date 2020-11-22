import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularAssignment';
  ngOnInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
