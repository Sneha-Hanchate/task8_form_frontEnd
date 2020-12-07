import { Component, OnInit } from '@angular/core';
import {Basic, Basic1, PreAddress,PreAddress1, PerAddress,PerAddress1, Qualification,Qualification1,PrevEmp,PrevEmp1, Skill,Skill1} from './basicdata1';
import {BasicdataService} from './basicdata.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  ValidatorFn
} from '@angular/forms';
@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  flag1:boolean=true;
  flag2:boolean=false;
  flag3:boolean=false;
  flag4:boolean=false;
  flag5:boolean=false;
  flag6:boolean=false;
  signupForm: FormGroup;
  // basicadd: FormGroup;
  empno1:Number;
  arrBasicInfo: Basic[]=[];
  taskId;
  count;
  res;
  count2;
  res2;
  count1;
  res1;

arrBasic : Basic[]=[];
arrPreviousEmp:PrevEmp[]=[];
arrBasicinterface : Basic1[]=[];
ArrPerAddress: PerAddress[]=[];
ArrPerAddressinterface: PerAddress1[]=[];
ArrPreAddress: PreAddress[]=[];
ArrPreAddressinterface: PreAddress1[]=[];
ArrQualification: Qualification[]=[];
ArrQualificationinterface: Qualification1[]=[];


constructor(private _data :BasicdataService, private ang: FormBuilder, private _actroute: ActivatedRoute,
  private _router: Router ) { }
  taskID;
ngOnInit(): void {

this.signupForm = new FormGroup({

  user_hobbies: this.ang.array([this.qualification_Group()]),
  user_hobbies1: this.ang.array([this.qualification_Group1()]),
  user_hobbies2: this.ang.array([this.qualification_Group2()]),


  basicadd: new FormGroup({
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
      raccntno: new FormControl()
  }),
  permanantAddress: new FormGroup({
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
presentAddress: new FormGroup({
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
  ppersonalmailId: new FormControl()

}),
// empno: new FormControl(),
// qualification: new FormControl(),
    });

  }




onSignup(){

  if(this.signupForm.get('basicadd').status=='VALID'){
    this._data.addForm(this.signupForm.get('basicadd').value).subscribe(
      (x:any)=>{
         if(x.affectedValue==1){
          alert('Saved Successfully');
          this.arrBasicInfo.push(this.signupForm.get('basicadd').value);

    console.log('new details', this.signupForm.get('basicadd').value);

        }else if(x.code=='ER_DUP_ENTRY'){
          alert('Duplicate')
        }

      });}else{
        alert('not valid')
      }
}
peraddsave(){

  if(this.signupForm.get('permanantAddress').status=='VALID'){
    this._data.addPermanantAddress(this.signupForm.get('permanantAddress').value).subscribe(
      (x:any)=>{
         if(x.affectedValue==1){
          alert('Saved Successfully');
          this.ArrPerAddress.push(this.signupForm.get('permanantAddress').value);

    console.log('new details', this.signupForm.get('permanantAddress').value);

        }else if(x.code=='ER_DUP_ENTRY'){
          alert('Duplicate')
        }

      });}else{
        alert('not valid')
      }


}
preaddsave(){

  if(this.signupForm.get('presentAddress').status=='VALID'){
    this._data.addPresentAddress(this.signupForm.get('presentAddress').value).subscribe(
      (x:any)=>{
         if(x.affectedValue==1){
          alert('Saved Successfully');
          this.ArrPreAddress.push(this.signupForm.get('presentAddress').value);

    console.log('new details', this.signupForm.get('presentAddress').value);

        }else if(x.code=='ER_DUP_ENTRY'){
          alert('Duplicate')
        }

      });}else{
        alert('not valid')
      }


}

basicedit()
{

  this._data.editForm(this.signupForm.get('basicadd').value).subscribe(
    (x)=>{
      alert('Update Successfully');
     console.log('abc',this.signupForm.value);
      // this._router.navigate(['/basicinfo']);
    })
}
peredit(){
  this._data.editPermanantAddress(this.signupForm.get('permanantAddress').value).subscribe(
    (x)=>{
      alert('Update Successfully');
     console.log('abc',this.signupForm.value);
      // this._router.navigate(['/basicinfo']);
    })
}
preedit(){
  this._data.editPresentAddress(this.signupForm.get('presentAddress').value).subscribe(
    (x)=>{
      alert('Update Successfully');
     console.log('abc',this.signupForm.value);
      // this._router.navigate(['/basicinfo']);
    })
}


// qualification
qualification_Group()
{
  return this.ang.group
    ({
      empno:new FormControl(),
      qualification:new FormControl(),
      institute:new FormControl(),
      passing_year:new FormControl(),
      score:new FormControl(),
      qualification_area:new FormControl(),

    });
}

getControl() {
  return (<FormArray>this.signupForm.get('user_hobbies')).controls;
}

get qualiArray()
{
  return<FormArray>this.signupForm.get('user_hobbies');
}

addqualification()
{

  this.qualiArray.push(this.qualification_Group());

}
onRemoveHobbiesClick(index) {
  this.qualiArray.removeAt(index);

}

getang(form): Array<any> {
  return form.controls.user_hobbies.controls;
}

Duplicate(quali): boolean {
  let myArray = this.getang(this.signupForm);
  let test = myArray.filter(data => data.controls.qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}

next(){

  this.count=0;
    this.res="";
    // this.qualiArray.push(this.signupForm.get('user_hobbies').value);
   for (var a=0;a<=(this.signupForm.get('user_hobbies').value).length-1;a++)
   {
this._data.addQualification(this.signupForm.get('user_hobbies').get([this.count]).value).subscribe((x)=>{
  alert ('Added Successfully');

});
this.count++
}
}
// PrevEmp

qualification_Group1()
{
  return this.ang.group
    ({
      empno: new FormControl(),

            fromDate: new  FormControl(),
            toDate: new  FormControl(),

          company: new FormControl(),
          designation: new FormControl(),
          relevant : new FormControl(),
          nrelevant: new FormControl(),

    });
}

getControl1() {
  return (<FormArray>this.signupForm.get('user_hobbies1')).controls;
}

get qualiArray1()
{
  return<FormArray>this.signupForm.get('user_hobbies1');
}

addqualification1()
{

  this.qualiArray1.push(this.qualification_Group1());

}
onRemoveHobbiesClick1(index) {
  this.qualiArray1.removeAt(index);

}

getang1(form): Array<any> {
  return form.controls.user_hobbies1.controls;
}

Duplicate1(quali): boolean {
  let myArray1 = this.getang(this.signupForm);
  let test = myArray1.filter(data => data.controls.qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}

next1(){
  this.count1=0;
    this.res1="";
    // this.qualiArray.push(this.signupForm.get('user_hobbies').value);
   for (var a=0;a<=(this.signupForm.get('user_hobbies1').value).length-1;a++)
   {
this._data.addPreviousemp(this.signupForm.get('user_hobbies1').get([this.count1]).value).subscribe((x)=>{
  alert ('Added Successfully');

});
this.count1++
}
}

// SKILL

qualification_Group2()
{
  return this.ang.group
    ({
      empno: new FormControl(),

            category: new  FormControl(),
            skill: new  FormControl(),

          level: new FormControl(),
          current: new FormControl(),
          experience : new FormControl(),


    });
}

getControl2() {
  return (<FormArray>this.signupForm.get('user_hobbies2')).controls;
}

get qualiArray2()
{
  return<FormArray>this.signupForm.get('user_hobbies2');
}

addqualification2()
{

  this.qualiArray2.push(this.qualification_Group2());

}
onRemoveHobbiesClick2(index) {
  this.qualiArray2.removeAt(index);

}

getang2(form): Array<any> {
  return form.controls.user_hobbies2.controls;
}

Duplicate2(quali): boolean {
  let myArray2 = this.getang(this.signupForm);
  let test = myArray2.filter(data => data.controls.qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}

next2(){
  this.count2=0;
    this.res2="";
    // this.qualiArray.push(this.signupForm.get('user_hobbies').value);
   for (var a=0;a<=(this.signupForm.get('user_hobbies2').value).length-1;a++)
   {
this._data.addSkill(this.signupForm.get('user_hobbies2').get([this.count2]).value).subscribe((x)=>{
  alert ('Added Successfully');

});
this.count2++
}
}


// next or back
nextT1(){
  this.flag1=false;
  this.flag2=true;
  this.flag3=false;
  this.flag4=false;
  this.flag5=false;
  this.flag6=false;

}
nextT2(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=true;
  this.flag4=false;
  this.flag5=false;
  this.flag6=false;
}
nextT3(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=false;
  this.flag4=true;
  this.flag5=false;
  this.flag6=false;

}
nextT4(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=false;
  this.flag4=false;
  this.flag5=true;
  this.flag6=false;

}
nextT5(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=false;
  this.flag4=false;
  this.flag5=false;
  this.flag6=true;

}
backT2(){
  this.flag1=true;
  this.flag2=false;
  this.flag3=false;
  this.flag4=false;
  this.flag5=false;
  this.flag6=false;
}
backT3(){
  this.flag1=false;
  this.flag2=true;
  this.flag3=false;
  this.flag4=false;
  this.flag5=false;
  this.flag6=false;
}
backT4(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=true;
  this.flag4=false;
  this.flag5=false;
  this.flag6=false;
}
backT5(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=false;
  this.flag4=true;
  this.flag5=false;
  this.flag6=false;
}
backT6(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=false;
  this.flag4=false;
  this.flag5=true;
  this.flag6=false;
}
FinalSub(){
  alert('Do you want to submit all forms');
  this._router.navigate(['/basicinfo/show-all']);
}

}





// qualification_Group1()
// {
//   return this.ang.group
//   ({
//     empno: new FormControl(),
//     fromto: new FormGroup({
//       fromDate: new  FormControl(),
//       toDate: new  FormControl(),
//     },  [this.fromToDate('fromDate', 'toDate').bind(this)]
//     ),
//     company: new FormControl(),
//     designation: new FormControl(),
//     relevant : new FormControl(),
//     nrelevant: new FormControl(),

//     });
// }

// fromToDate(fromDateField: string, toDateField: string, errorName: string = 'fromToDate'): ValidatorFn {
//   return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
//       const fromDate = formGroup.get(fromDateField).value;
//       const toDate = formGroup.get(toDateField).value;
//      // the fromDate and toDate are numbers. In not convert them first after null check
//       if ((fromDate !== null && toDate !== null) && fromDate > toDate) {
//           return {[errorName]: true };
//       }
//       return null;
//   };
// }


// get qualiArray1()
// {
//   return<FormArray>this.signupForm.get('user_hobbies1');
// }


// addqualification1()
// {
//   this.qualiArray1.push(this.qualification_Group1());
// }

//  onRemoveHobbiesClick3(i) {
  // this.qualiArray.removeAt(index);
  // (this.signupForm.get('user_hobbies3') as FormArray).removeAt(i);
// }
// onRemoveHobbiesClick3(i) {
//   (this.signupForm.get('user_hobbies2') as FormArray).removeAt(i);
// }


// getang1(form): Array<any> {
//   return form.controls.user_hobbies1.controls;
// }


// Duplicate1(fromDate, p): boolean {
//   let myArray = this.getang1(this.signupForm);
//   let test = myArray.filter(data => data.controls.fromto.get('fromDate').value == fromDate && fromDate != null)
//   if (test.length > 1) {
//     return true;
//   } else {
//     return false;
//   }
// }








// getControl1() {
//   return (<FormArray>this.signupForm.get('user_hobbies1')).controls;
// }

// onAddHobbiesClick1() {
//   if (this.signupForm.get('user_hobbies1').value.length < 3) {
//     const control = new FormControl(null);
//     (this.signupForm.get('user_hobbies1') as FormArray).push(control);
//   } else {
//     alert('you can add max 3 hobbies');
//   }
// }
// onRemoveHobbiesClick1(i) {
//   (this.signupForm.get('user_hobbies1') as FormArray).removeAt(i);
// }











// getControl2() {
//   return (<FormArray>this.signupForm.get('user_hobbies2')).controls;
// }

// onAddHobbiesClick2() {
//   if (this.signupForm.get('user_hobbies2').value.length < 3) {
//     const control = new FormControl(null);
//     (this.signupForm.get('user_hobbies2') as FormArray).push(control);
//   } else {
//     alert('you can add max 3 hobbies');
//   }
// }

// onRemoveHobbiesClick2(i) {
//   (this.signupForm.get('user_hobbies2') as FormArray).removeAt(i);
// }




  // this.flag1=!this.flag1;
  // this.flag2=!this.flag2;


// next1(){

//   {
//     this.count1=0
//     this.res1="";
//     for(var i=0;i<=(this.signupForm.get('user_hobbies1').value).length-1;i++)
//       {
//         {
//           this._data.addPreviousemp(this.signupForm.get('user_hobbies1').get([this.count1]).value).subscribe((x)=>
//           {

//             this.arrPreviousEmp.push(this.signupForm.get('user_hobbies1').value);
//           }
//           );}

//         this.count1++;
//         alert("Data Added Successfully!...");

//       }

//     }

// }



// back1(){
// this.flag1=!this.flag1;
// this.flag2=!this.flag2;
// }

// back2(){
//   this.flag2=!this.flag2;
//   this.flag3=!this.flag3;
//   this.flag4=!this.flag4;
// }

// submitt(){

//   this.count2=0;
//   this.res2="";
//   // this.qualiArray.push(this.signupForm.get('user_hobbies').value);
//  for (var a=0;a<=(this.signupForm.get('user_hobbies2').value).length-1;a++)
//  {
// this._data.addSkill(this.signupForm.get('user_hobbies2').get([this.count]).value).subscribe((x)=>{
// alert ('Added Successfully');

// });
// this.count2++
// }

//   alert('Your form is Successfully Submited...')
// }
// end 3 forms qualification,prevEmp, skills,




// skill_Group1(){
//   return this.ang.group
//   ({
//     // empno: new FormControl(),
//     // category: new FormControl(),
//     // skill:new FormControl (),
//     // level: new FormControl (),
//     // current: new FormControl (),
//     // experience:  new FormControl (),
//   });
// }

