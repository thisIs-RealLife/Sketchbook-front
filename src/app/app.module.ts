import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './Layer/HomeLayer/components/dialogs/login/login.component';
import {SignUpComponent} from './Layer/HomeLayer/components/dialogs/sign-up/sign-up.component';
import {HomeComponent} from './Layer/HomeLayer/components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DialogComponent} from './Layer/HomeLayer/components/dialogs/dialog/dialog.component';
import {AuthInterceptorService} from './Layer/HomeLayer/servises/service/auth-interceptor.service';
import {CookieService} from 'ngx-cookie-service';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {AuthGuardGuard} from './Layer/Guard/auth-guard.guard';
import {TaskComponent} from './Layer/AppLayer/MainLayer/task/task.component';
import {SidenavComponent} from './Layer/AppLayer/sidenav/sidenav.component';
import {ToolbarComponent} from './Layer/AppLayer/toolbar/toolbar.component';
import {MainComponent} from './Layer/AppLayer/main/main.component';
import { TableComponent } from './Layer/AppLayer/MainLayer/table/table.component';
import { AddListComponent } from './Layer/AppLayer/MainLayer/dialogs/add-list/add-list.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProgressSpinnerComponent,
    DialogComponent,
    AppComponent,
    TaskComponent,
    SidenavComponent,
    ToolbarComponent,
    MainComponent,
    TableComponent,
    AddListComponent,

  ],
  entryComponents: [LoginComponent, SignUpComponent, DialogComponent, AddListComponent, TableComponent],
  imports: [
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {
        path: '', component: MainComponent, canActivate: [AuthGuardGuard], children: [
          {
            path: 'tasks', component: TaskComponent, pathMatch: 'full'
          }
        ]
      },
    ]),
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
