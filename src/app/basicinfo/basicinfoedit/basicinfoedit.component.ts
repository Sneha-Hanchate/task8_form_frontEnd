import { Component, OnInit } from '@angular/core';

import {Basic, Basic1} from '../basicdata1';
import {BasicdataService} from '../basicdata.service';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-basicinfoedit',
  templateUrl: './basicinfoedit.component.html',
  styleUrls: ['./basicinfoedit.component.css']
})
export class BasicinfoeditComponent implements OnInit {
  signupFormedit: FormGroup;

  arrBasicInfo: Basic[]=[];
  taskID;
// arrBasic : Basic[]=[];
arrBasicinterface : Basic1[]=[];
  constructor(private _data :BasicdataService, private _actroute: ActivatedRoute,
    private _router: Router) { }

    age;

  ngOnInit(): void {
    this.signupFormedit = new FormGroup({


          empno: new FormControl(),
          title: new FormControl(),
          initial: new FormControl(),
          fname: new FormControl(),
          mname: new FormControl(),
          lname: new FormControl(),
          gender: new FormControl(),
          dob: new FormControl(),
          Eage: new FormControl(),
          officephone: new FormControl(),
          personalMobile: new FormControl(),
          officemail: new FormControl(),
          personalmail1: new FormControl(),
          personalmail2: new FormControl(),
          personalmail3: new FormControl(),
          photo: new FormControl(),
          birth: new FormControl(),
          domicile: new FormControl(),
          religion: new FormControl(),
          caste: new FormControl(),
          nationality: new FormControl(),
          overid: new FormControl(),
          panno: new FormControl(),
          adharno: new FormControl(),
          marriage: new FormControl(),
          child: new FormControl(),
          date: new FormControl(),
          sname: new FormControl(),
          bankname: new FormControl(),
          accnttype: new FormControl(),
          paymenttype: new FormControl(),
          accountno: new FormControl(),
          branch: new FormControl(),
          ifsc: new FormControl(),
          rbanknm: new FormControl(),
          raccntno: new FormControl(),
    });

      // this.basicInfoEdit.get('DOB').valueChanges.subscribe((x)=>this.updateEmpAge(x));


      this.taskID=this._actroute.snapshot.params['id'];
      this._data.getBasicInfoById(this.taskID).subscribe(
        (data:Basic[])=>{
         this.signupFormedit.patchValue({

          empno:data[0].empno,
          title:data[0].title,
          initial:data[0].initial,
          fname:data[0].fname,
          mname:data[0].mname,
          lname:data[0].lname,
          gender:data[0].gender,
          dob:data[0].dob,
          Eage:data[0].Eage,
          officephone:data[0].officephone,
          personalMobile:data[0].personalMobile,
          officemail:data[0].officemail,
          personalmail1:data[0].personalmail1,
          personalmail2:data[0].personalmail2,
          personalmail3:data[0].personalmail3,
          // Photo:data[0].Photo,
          birth:data[0].birth,
          domicile:data[0].domicile,
          religion:data[0].religion,
          caste:data[0].caste,
          nationality:data[0].nationality,
          overid:data[0].overid,
          panno:data[0].panno,
          adharno:data[0].adharno,
          marriage:data[0].marriage,
          child:data[0].child,
          date:data[0].date,
          sname:data[0].sname,
          bankname:data[0].bankname,
          accnttype:data[0].accnttype,
          paymenttype:data[0].paymenttype,
          accountno:data[0].accountno,
          branch:data[0].branch,
          ifsc:data[0].ifsc,
          rbanknm:data[0].rbanknm,
          raccntno:data[0].raccntno,
         });
        }
      )
  }
  basicedit(){
    this._data.editForm(this.signupFormedit.value).subscribe(
      (x)=>{
       console.log('abc',this.signupFormedit.value);
        this._router.navigate(['/basicinfo/show']);
      })

  }
  onSignupedit(){


  }

}
