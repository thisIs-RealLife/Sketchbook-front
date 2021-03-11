import {Note} from '../../Model/Note';

export class TableRepository {
  private arrayNote = new Array<Note>();

  public get(): Note[] {
    return this.arrayNote;
  }

  public create(note: Note): void {
    this.arrayNote.push(note);
  }

  public update(note: Note): void {

  }

  public delete(note: Note): void {
  }
}
