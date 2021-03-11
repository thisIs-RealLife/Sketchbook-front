import {

  Component,

  HostListener,

  OnInit,

} from '@angular/core';
import {Note} from '../../Model/Note';
import {TableService} from '../../services/table.service';
import {Annotation} from '../../Model/Annotation';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  text: string[] = [];
  selectedNote: Note;
  scrHeight: number;
  scrWidth: number;
  numbRowTable: number[] = [];
  numBtn = 0;

  disabledTextArea = true;
  done = false;
  save = false;
  edit = true;


  constructor(private service: TableService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    for (let i = 0; i <= this.scrHeight / 50; i++) {
      this.numbRowTable.push(i);
    }
  }

  ngOnInit(): void {
    this.service.selectedNote.subscribe(next => {
      console.log('aksjdkjaskdas')
      this.selectedNote = next;
      console.log('ITIS', this.selectedNote);
    });
  }


  disableTextArea(i: number): boolean {
    if (!this.disabledTextArea) {
      if (this.text[i] === undefined) {
        return true;
      }
      if (!(this.text[i].trim() && i === this.numBtn)) {
        return false;
      }
    }
    return !(this.done && i === this.numBtn);
  }

  ready(): void {
    this.selectedNote.annotation.push(new Annotation(''));
    this.done = true;
    this.edit = false;
    this.save = false;
  }

  addText(i: number): void {
    if (this.text[i] !== undefined) {
      this.selectedNote.annotation.push(new Annotation(this.text[i]));
      this.done = false;
      this.save = false;
      this.edit = true;
      this.numBtn++;
    }
    this.done = false;
    this.save = false;
    this.edit = true;
  }

  allowEdit(): void {
    this.disabledTextArea = false;
    this.save = true;
    this.done = false;
    this.edit = false;
  }

  acceptChanges(): void {
    this.disabledTextArea = true;
    this.save = false;
    this.done = false;
    this.edit = true;
  }

}
