import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../servises/service/auth.service';
import {__await} from 'tslib';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formControl: FormGroup;


  constructor(private dialogRef: MatDialogRef<SignUpComponent>,
              private auth: AuthService,
              private dialog: MatDialog,
              ) {
  }

  ngOnInit(): void {
    this.formControl = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }


  getErrorMessage(): string {
    if (this.formControl.get('email').invalid) {
      return 'Not a valid email';
    }
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  signUp(): void {
    this.formControl.disable();
    this.auth.registration(this.formControl.value).subscribe(date => {
        this.dialogRef.close();
        console.log(date);
      },
      error => {
        this.formControl.enable();
        this.dialog.open(DialogComponent, {
          data: [error, error.code]
        });
        if (error.status === 201)
          this.dialogRef.close();
      }
    );
  }

}
