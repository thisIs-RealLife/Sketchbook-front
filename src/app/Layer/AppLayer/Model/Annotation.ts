export class Annotation {
  private _text = '';
  private _completed = false;


  constructor(text: string) {
    this._text = text;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}
