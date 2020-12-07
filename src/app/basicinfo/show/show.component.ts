import { Component, OnInit } from '@angular/core';
import {Basic, Basic1, PreAddress,PreAddress1, PerAddress,PerAddress1, Qualification,Qualification1,PrevEmp,PrevEmp1, Skill,Skill1} from '../basicdata1';
import {BasicdataService} from '../basicdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
arrBasics:Basic[]=[];
arrPerAdd:PerAddress[]=[];
arrPreAdd:PreAddress[]=[];
arrQuali:Qualification[]=[];
arrQuali1:Qualification[]=[];
arrPrevEmp:PrevEmp[]=[];
arrSkill:Skill[]=[];
  constructor(private _data :BasicdataService , private _router: Router) { }

  ngOnInit(): void {
    this._data.getAllForm().subscribe(
      (data:Basic[]) => {
        this.arrBasics= data;
      }
  );
  this._data.getAllPermanantAddress().subscribe(
    (data:PerAddress[]) => {
      this.arrPerAdd= data;
    }
);
this._data.getAllPresentAddress().subscribe(
  (data:PreAddress[]) => {
    this.arrPreAdd= data;
  }
);
this._data.getAllQualification().subscribe(
  (data:Qualification[]) => {
    this.arrQuali= data;
  }
);
this._data.getAllPreviousemp().subscribe(
  (data:PrevEmp[]) => {
    this.arrPrevEmp= data;
  }
);
this._data.getAllSkill().subscribe(
  (data:Skill[]) => {
    this.arrSkill= data;
  }
);

  }

  // delete
  delbasic(item: Basic){
    this._data.deleteForm(item.empno).subscribe((x:any)=>{
        // if(x.affectedRows==1){
          this.arrBasics.splice(this.arrBasics.indexOf(item),1);
        // }
      });
    }
  delper(item: PerAddress){
    this._data.deletePermanantAddress(item.empno).subscribe((x:any)=>{
        // if(x.affectedRows==1){
          this.arrPerAdd.splice(this.arrPerAdd.indexOf(item),1);
        // }
      });
    }
    delpre(item: PreAddress){
    this._data.deletePresentAddress(item.empno).subscribe((x:any)=>{
        // if(x.affectedRows==1){
          this.arrPreAdd.splice(this.arrPreAdd.indexOf(item),1);
        // }
      });
    }
    delqua(item: Qualification){
    this._data.deleteQualification(item.empno).subscribe((x:any)=>{
        // if(x.affectedRows==1){
          this.arrQuali.splice(this.arrQuali.indexOf(item),1);
        // }
      });
    }
  delprev(item: PrevEmp){
    this._data.deletePreviousemp(item.empno).subscribe((x:any)=>{
        // if(x.affectedRows==1){
          this.arrPrevEmp.splice(this.arrPrevEmp.indexOf(item),1);
        // }
      });
    }
  delskill(item: Skill){
    this._data.deleteSkill(item.empno).subscribe((x:any)=>{
        // if(x.affectedRows==1){
          this.arrSkill.splice(this.arrSkill.indexOf(item),1);
        // }
      });
    }
// delete by qualifiaction
delqua1(item: Qualification){
  this._data.deleteQualification1(item.qualification).subscribe((x:any)=>{
      // if(x.affectedRows==1){
        this.arrQuali.splice(this.arrQuali.indexOf(item),1);
      // }
    });
  }
// editfor basic in table
EditBasic(item){
  this._router.navigate(['/basicinfo/basicinfoedit',item.empno]);
}
EditPerAdd(item){
  this._router.navigate(['/basicinfo/permanant-addressedit',item.empno]);
}
EditPreAdd(item){
  this._router.navigate(['/basicinfo/present-addressedit',item.empno]);
}
qua(item){
  console.log(item.qualification);
  this._router.navigate(['/basicinfo/qualificationedit',item.qualification]);

}


}
