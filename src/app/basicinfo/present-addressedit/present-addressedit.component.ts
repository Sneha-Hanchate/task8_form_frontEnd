import { Component, OnInit } from '@angular/core';
import {Basic, Basic1, PreAddress,PreAddress1, PerAddress,PerAddress1} from '../basicdata1';
import {BasicdataService} from '../basicdata.service';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-present-addressedit',
  templateUrl: './present-addressedit.component.html',
  styleUrls: ['./present-addressedit.component.css']
})
export class PresentAddresseditComponent implements OnInit {
  signupFormPreEdit: FormGroup;
  ArrPreAddress: PreAddress[]=[];
ArrPreAddressinterface: PreAddress1[]=[];
taskID2;
  constructor(private _data :BasicdataService,private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this.signupFormPreEdit = new FormGroup({


      empno: new FormControl(),
      presentAdd: new FormControl(),
      pcity: new FormControl(),
      pcountry: new FormControl(),
      pstate: new FormControl(),
      pdistrict: new FormControl(),
      ppincode: new FormControl(),
      pphone1: new FormControl(),
      pphone2: new FormControl(),
      pfax: new FormControl(),
      ppersonalmailId: new FormControl(),

    }),

    this.taskID2=this._actroute.snapshot.params['id2'];
    this._data.getAllPresentAddressById(this.taskID2).subscribe(
      (data:PreAddress[])=>{
       this.signupFormPreEdit.patchValue({

        empno:data[0].empno,
        presentAdd:data[0].presentAdd,
        pcity:data[0].pcity,
        pcountry:data[0].pcountry,
        pstate:data[0].pstate,
        pdistrict:data[0].pdistrict,
        ppincode:data[0].ppincode,
        pphone1:data[0].pphone1,
        pphone2:data[0].pphone2,
        pfax:data[0].pfax,
        ppersonalmailId:data[0].ppersonalmailId,

       });
      }
    )
  }

  presentaddedit(){
    this._data.editPresentAddress(this.signupFormPreEdit.value).subscribe(
      (x)=>{
       console.log('abc',this.signupFormPreEdit.value);
        this._router.navigate(['/basicinfo/show']);
      })

  }

  presave(){
    this._data.editPresentAddress(this.signupFormPreEdit.value).subscribe(
      (x)=>{
       console.log('abc',this.signupFormPreEdit.value);
        this._router.navigate(['/basicinfo/show']);
      })
  }
}
