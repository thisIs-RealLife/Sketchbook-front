import {Annotation} from './Annotation';

export class Note {
  static colors: string[] = ['#22a4f5', '#ba66ff', '#65e665', '#ffa500', '#987654', '#ff6666'];
  private _id?: number;
  private _topic: string;
  private _annotation: Annotation[];
  private _color: string;


  constructor(topic: string, annotation: Annotation[], color: string, id?: number) {
    this._id = id;
    this._topic = topic;
    this._annotation = annotation;
    this._color = color;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get annotation(): Annotation[] {
    return this._annotation;
  }

  set annotation(value: Annotation[]) {
    this._annotation = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}
