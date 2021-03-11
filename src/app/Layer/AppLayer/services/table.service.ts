import {Injectable, OnInit} from '@angular/core';
import {TableRepository} from '../MainLayer/Repository/TableRepository';
import {Note} from '../Model/Note';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  repository = new TableRepository();

  notes: BehaviorSubject<Note[]>;
  selectedNote: BehaviorSubject<Note>;


  constructor() {
    this.selectedNote = new BehaviorSubject<Note>(new Note('Напоминания', [], 'white'));
    this.notes = new BehaviorSubject<Note[]>(this.repository.get());
    this.create(new Note('Напоминания', [], 'white'));
  }

  create(note: Note): void {
    this.repository.create(note);
    this.notes.next(this.repository.get());
  }

  select(topic: string): void {
    const note = this.repository.get().filter(value => {
      return value.topic === topic;
    });
    this.selectedNote.next(note[0]);
  }
}
