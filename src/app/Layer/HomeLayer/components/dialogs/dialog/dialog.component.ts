import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SignUpComponent} from '../sign-up/sign-up.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  flag: boolean;
  text: string;

  constructor(private thisDialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [any, boolean]) {

    this.text = this.getMessageFromError();
    this.flag = data[1];
  }

  ngOnInit(): void {
  }

  getMessageFromError(): string {
    switch (this.data[0].status) {
      case 201: {
        return 'На вашу почту выслано письмо с подтверждением email.';
      }
      case 400: {
        return 'Вы ввели некорректные данные.';
      }
      case 409: {
        return 'Пользователь с таким email уже зарегистрирован.';

      }
      default: {
        return 'Вы ввели некорректные данные. Пожалуйста, попробуйте снова.';
      }
    }
  }

  close() {
    this.thisDialogRef.close();
  }
}

