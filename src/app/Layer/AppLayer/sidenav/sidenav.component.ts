import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sideNavFlag = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  closeNav(): void {
    this.sideNavFlag = false;
  }

  openNav(): void {
    this.sideNavFlag = true;
  }

  openTasks() {

  }
}
