import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Basic, PerAddress, PreAddress, Qualification1,Qualification, PrevEmp,PrevEmp1,Skill,Skill1} from './basicdata1';
import { ɵEmptyOutletComponent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicdataService {

  url: string='http://localhost:3000/form/';
  url1: string='http://localhost:3000/permanantaddress/';
  url2: string='http://localhost:3000/presentaddress/';
  url3: string='http://localhost:3000/qualification/';
  url4: string='http://localhost:3000/previousemp/';
  url5: string='http://localhost:3000/skill/';
  constructor(private _http: HttpClient) { }

  // getAllBasicInfo(){
  //   return this._http.get(this.url1);
  // }

  getBasicInfoById(id){
    return this._http.get(this.url+id);
   }
  getAllPermanantAddById(id1){
    return this._http.get(this.url1+id1);
   }
  getAllPresentAddressById(id2){
    return this._http.get(this.url2+id2);
   }
   getAllQualificationById(id3){
    return this._http.get(this.url3+id3);
   }


  addForm(item:Basic){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url,body,{headers: head});
  }

  editForm(item: Basic){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url + item.empno, body,{headers: head});
  }
  editPermanantAddress(item: PerAddress){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url1 + item.empno, body,{headers: head});
  }
  editPresentAddress(item: PreAddress){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url2 + item.empno, body,{headers: head});
  }
  editQualificationBYQua(item: Qualification){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url3 + item.qualification, body,{headers: head});
  }
  // editQualificationBYQua(item: Qualification){
  //   let head= new HttpHeaders().set('Content-Type','application/json');
  //   let body= JSON.stringify(item);
  //   return this._http.put(this.url2 + item.qualification, body,{headers: head});
  // }

  // permannante address
  addPermanantAddress(item:PerAddress){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url1,body,{headers: head});
  }
  addPresentAddress(item:PreAddress){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url2,body,{headers: head});
  }
  addQualification(item:Qualification){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url3,body,{headers: head});
  }
  addPreviousemp(item:PrevEmp){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url4,body,{headers: head});
  }
  addSkill(item:Skill){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url5,body,{headers: head});
  }

  // all get tables data
  getAllForm(){
    return this._http.get(this.url);
  }
  getAllPermanantAddress(){
    return this._http.get(this.url1);
  }
  getAllPresentAddress(){
    return this._http.get(this.url2);
  }
  getAllQualification(){
    return this._http.get(this.url3);
  }
  getAllPreviousemp(){
    return this._http.get(this.url4);
  }
  getAllSkill(){
    return this._http.get(this.url5);
  }
// delete
deleteForm(id){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url +id, {headers:head});
}
deletePermanantAddress(id){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url1 +id, {headers:head});
}
deletePresentAddress(id){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url2 +id, {headers:head});
}
deleteQualification(id){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url3 +id, {headers:head});
}
deletePreviousemp(id){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url4 +id, {headers:head});
}
deleteSkill(id){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url5 +id, {headers:head});
}
// delete by qualification
deleteQualification1(qualification){
  let head =new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url3 +qualification, {headers:head});
}


// edit from table by id

}
