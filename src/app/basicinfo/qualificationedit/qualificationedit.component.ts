import { Component, OnInit } from '@angular/core';
import {Basic, Basic1, PreAddress,PreAddress1, PerAddress,PerAddress1, Qualification1,Qualification} from '../basicdata1';
import {BasicdataService} from '../basicdata.service';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qualificationedit',
  templateUrl: './qualificationedit.component.html',
  styleUrls: ['./qualificationedit.component.css']
})
export class QualificationeditComponent implements OnInit {
  qualificationEdit: FormGroup;
  ArrQuali: Qualification[]=[];
ArrPreAddressinterface: PreAddress1[]=[];
taskID3;
  constructor(private _data :BasicdataService,private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this.qualificationEdit = new FormGroup({
    empno:new FormControl(),
    qualification:new FormControl(),
    institute:new FormControl(),
    passing_year:new FormControl(),
    score:new FormControl(),
    qualification_area:new FormControl(),
  }),

  this.taskID3=this._actroute.snapshot.params['id3'];
  this._data.getAllQualificationById(this.taskID3).subscribe(
    (data:Qualification[])=>{
     this.qualificationEdit.patchValue({

      empno:data[0].empno,
      qualification:data[0].qualification,

      institute:data[0].institute,
      passing_year:data[0].passing_year,
      score:data[0].score,
      qualification_area:data[0].qualification_area,


     });
    }
  )
}
quali(){
  this._data.editQualificationBYQua(this.qualificationEdit.value).subscribe(
    (x)=>{
     console.log('abc',this.qualificationEdit.value);
      this._router.navigate(['/basicinfo/show']);
});
}
quasave(){
this._data.editQualificationBYQua(this.qualificationEdit.value).subscribe(
      (x)=>{
       console.log('abc',this.qualificationEdit.value);
        this._router.navigate(['/basicinfo/show']);
});

}
}
