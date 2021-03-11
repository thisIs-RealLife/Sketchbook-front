import {

  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TableService} from '../../services/table.service';
import {Note} from '../../Model/Note';
import {MatDialog} from '@angular/material/dialog';
import {AddListComponent} from '../dialogs/add-list/add-list.component';
import {TableComponent} from '../table/table.component';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TaskComponent implements OnInit, AfterViewInit{

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR: ViewContainerRef;

  scrHeight: number;
  scrWidth: number;
  refresh = true;
  selectedTopic: string;
  notes: Note[];
  note = this.service.selectedNote.value;

  tableComponentRef: ComponentRef<TableComponent>;

  constructor(private service: TableService,
              private dialog: MatDialog,
              private componentFactoryResolver: ComponentFactoryResolver,
              private cd: ChangeDetectorRef
  ) {
    this.selectedTopic = this.note.topic;
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    this.refresh = false;
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.refresh = true;
  }


  ngOnInit(): void {
    this.service.notes.subscribe(next => {
      this.notes = next;
    });

  }

  getCount(topic: string): number {
    return 0;
  }

  selectTopic(topic: string): void {
    this.remove();
    this.selectedTopic = topic;
    this.service.select(topic);
    this.createComponent();
  }

  openAddListDialog(): void {
    const dialogRef = this.dialog.open(AddListComponent);
  }


  createComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TableComponent);
    this.tableComponentRef = this.VCR.createComponent(componentFactory);

  }

  remove(): void {
    this.VCR.remove(this.VCR.indexOf(this.tableComponentRef.hostView));
  }

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TableComponent);
    this.tableComponentRef = this.VCR.createComponent(componentFactory);
    this.cd.detectChanges();
  }
}
