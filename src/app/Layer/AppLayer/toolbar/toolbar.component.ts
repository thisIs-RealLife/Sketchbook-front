import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavComponent} from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild(SidenavComponent)
  sidenav: SidenavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  open(): void{
    this.sidenav.sideNavFlag = true;
  }
}
