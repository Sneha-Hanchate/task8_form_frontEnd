import{RouterModule, Routes} from "@angular/router";
import {BasicinfoComponent} from './basicinfo/basicinfo.component';
import {BasicinfoeditComponent} from './basicinfo/basicinfoedit/basicinfoedit.component';
import {PermanantAddresseditComponent} from './basicinfo/permanant-addressedit/permanant-addressedit.component';
import {PresentAddresseditComponent} from './basicinfo/present-addressedit/present-addressedit.component';
import {ShowComponent} from './basicinfo/show/show.component';
import {ShowAllComponent} from './basicinfo/show-all/show-all.component';
import {QualificationeditComponent} from './basicinfo/qualificationedit/qualificationedit.component';

const arr:Routes=[
  {path:'',component:BasicinfoComponent},
  {path:'basicinfo/show',component:ShowComponent},
  {path:'basicinfo/basicinfoedit/:id',component:BasicinfoeditComponent},
  {path:'basicinfo/permanant-addressedit/:id1',component:PermanantAddresseditComponent},
  {path:'basicinfo/present-addressedit/:id2',component:PresentAddresseditComponent},
  {path:'basicinfo/show-all',component:ShowAllComponent},
  {path:'basicinfo/qualificationedit/:id3',component:QualificationeditComponent},
];

export const arrRouting = RouterModule.forRoot(arr);
