import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Note} from '../../../Model/Note';
import {TableService} from '../../../services/table.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  colors = Note.colors;
  formControl: FormGroup;
  selectedColor: string;

  constructor(private ref: MatDialogRef<AddListComponent>,
              private service: TableService) {
  }

  ngOnInit(): void {
    this.formControl = new FormGroup({
      topic: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  addTopic(): void {
    const note = new Note(this.formControl.get('topic').value, [], this.selectedColor);
    this.service.create(note);
    this.ref.close();
  }

  outDialog(): void {
    this.ref.close();
  }

  addColor(color: string): void {
    this.selectedColor = color;
  }

  isEmpty(): boolean {
    return !!this.selectedColor;
  }
}
