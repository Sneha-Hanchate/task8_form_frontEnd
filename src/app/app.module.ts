import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { arrRouting } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BasicinfoeditComponent } from './basicinfo/basicinfoedit/basicinfoedit.component';
import { PermanantAddresseditComponent } from './basicinfo/permanant-addressedit/permanant-addressedit.component';
import { PresentAddresseditComponent } from './basicinfo/present-addressedit/present-addressedit.component';
import { ShowComponent } from './basicinfo/show/show.component';
import { ShowAllComponent } from './basicinfo/show-all/show-all.component';
import { QualificationeditComponent } from './basicinfo/qualificationedit/qualificationedit.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicinfoComponent,
    BasicinfoeditComponent,
    PermanantAddresseditComponent,
    PresentAddresseditComponent,
    ShowComponent,
    ShowAllComponent,
    QualificationeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, ReactiveFormsModule,RouterModule,arrRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
