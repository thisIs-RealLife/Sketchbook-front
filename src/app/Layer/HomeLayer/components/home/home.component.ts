import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../dialogs/login/login.component';
import {SignUpComponent} from '../dialogs/sign-up/sign-up.component';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
        if (params['/accessDenied']) {

        }
      }
    );
  }

  openLogin(): void {
    const dialog = this.dialog.open(LoginComponent, {
      disableClose: false
    });

    dialog.afterClosed().subscribe(data => {
        console.log(data);
      }
    );
  }

  openSignUp(): void {
    const dialog = this.dialog.open(SignUpComponent, {
      disableClose: true
    });
  }
}
