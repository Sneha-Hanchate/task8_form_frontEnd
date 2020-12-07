import { Component, OnInit } from '@angular/core';
import {Basic, Basic1, PreAddress,PreAddress1, PerAddress,PerAddress1} from '../basicdata1';
import {BasicdataService} from '../basicdata.service';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-permanant-addressedit',
  templateUrl: './permanant-addressedit.component.html',
  styleUrls: ['./permanant-addressedit.component.css']
})
export class PermanantAddresseditComponent implements OnInit {
  signupFormperAdEdit: FormGroup;
arrBasic : Basic[]=[];
arrBasicinterface : Basic1[]=[];
  ArrPerAddress: PerAddress[]=[];
  ArrPerAddressinterface: PerAddress1[]=[];
  taskID1;
  constructor(private _data :BasicdataService,private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this.signupFormperAdEdit = new FormGroup({

        empno: new FormControl(),
        permanantAdd: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
        state: new FormControl(),
        district: new FormControl(),
        pincode: new FormControl(),
        phone1: new FormControl(),
        phone2: new FormControl(),
        fax: new FormControl(),
        personalmailId: new FormControl(),

    }),
        this.taskID1=this._actroute.snapshot.params['id1'];
      this._data.getAllPermanantAddById(this.taskID1).subscribe(
        (data:PerAddress[])=>{
         this.signupFormperAdEdit.patchValue({

          empno:data[0].empno,
          permanantAdd:data[0].permanantAdd,
          city:data[0].city,
          country:data[0].country,
          state:data[0].state,
          district:data[0].district,
          pincode:data[0].pincode,
          phone1:data[0].phone1,
          phone2:data[0].phone2,
          fax:data[0].fax,
          personalmailId:data[0].personalmailId,

         });
        }
      )
  }
  PerAddEdit(){
    this._data.editPermanantAddress(this.signupFormperAdEdit.value).subscribe(
      (x)=>{
       console.log('abc',this.signupFormperAdEdit.value);
        this._router.navigate(['/basicinfo/show']);
      })
  }
  perSave(){
    this._data.editPermanantAddress(this.signupFormperAdEdit.value).subscribe(
      (x)=>{
       console.log('abc',this.signupFormperAdEdit.value);
        this._router.navigate(['/basicinfo/show']);
      })
  }
}
