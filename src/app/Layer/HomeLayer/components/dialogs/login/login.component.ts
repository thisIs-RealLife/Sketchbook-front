import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../servises/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formControl: FormGroup;


  constructor(private dialogRef: MatDialogRef<LoginComponent>,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.formControl = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  login(): void {
    this.formControl.disable();
    this.auth.login(this.formControl.value).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.formControl.enable();
      }
    );
  }

}
