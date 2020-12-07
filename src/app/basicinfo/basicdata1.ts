export class Basic{

constructor(public empno:Number , public title:String , public initial:String ,
 public fname:String ,
 public mname:String , public lname:String , public gender:String , public dob:String ,
  public Eage:Number , public officephone:Number , public personalMobile:Number ,
  public officemail:String , public personalmail1:String , public personalmail2:String ,
   public personalmail3:String , public photo:String , public birth:String ,
    public domicile:String , public religion:String , public caste:String ,
     public nationality:String , public overid:String , public panno:String ,
      public adharno:Number , public marriage:String , public child:Number ,
       public date:String , public sname:String , public bankname:String ,
        public accnttype:String , public paymenttype:String , public accountno:Number ,
         public branch:String , public ifsc:String , public rbanknm:String ,
          public raccntno:String ){}
}

export interface Basic1{

     empno:Number;  title:String;  initial:String;
  fname:String;
  mname:String;  lname:String;  gender:String;  dob:String;
   Eage:Number;  officephone:Number;  personalMobile:Number;
   officemail:String;  personalmail1:String;  personalmail2:String;
    personalmail3:String;  photo:String;  birth:String;
     domicile:String;  religion:String;  caste:String;
      nationality:String;  overid:String;  panno:String;
       adharno:Number;  marriage:String;  child:Number;
        date:String;  sname:String;  bankname:String;
         accnttype:String;  paymenttype:String;  accountno:Number;
          branch:String;  ifsc:String;  rbanknm:String;
           raccntno:String ;

}
export class PerAddress{
  constructor(public empno:Number , public permanantAdd:String , public city:String ,
    public country:String,public state:String,public district:String,public pincode:Number,
    public phone1:Number,public phone2:Number,public fax:String,public personalmailId:String ){}
}

export interface PerAddress1{
   empno:Number ,  permanantAdd:String ,  city:String ,
     country:String, state:String, district:String, pincode:Number,
     phone1:Number, phone2:Number, fax:String, personalmailId:String
}

export class PreAddress{
  constructor(public empno:Number , public presentAdd:String , public pcity:String ,
    public pcountry:String,public pstate:String,public pdistrict:String,public ppincode:Number,
    public pphone1:Number,public pphone2:Number,public pfax:String,public ppersonalmailId:String ){}
}

export interface PreAddress1{
   empno:Number ,  presentAdd:String ,  pcity:String ,
     pcountry:String, pstate:String, pdistrict:String, ppincode:Number,
     pphone1:Number, pphone2:Number, pfax:String, ppersonalmailId:String
}

export class Qualification{
  constructor(public empno:Number , public qualification:String , public institute:String ,
    public passing_year:Number,public score:String,public qualification_area:String){}
}

export interface Qualification1{
   empno:Number ,  qualifiaction:String ,  institute:String ,
   passing_year:Number, score:String, qualification_area:String
}

export class PrevEmp{
  constructor(public empno:Number , public fromDate:String , public toDate:String ,
    public company:Number,public designation:String,public relevant:String,public nrelevant:String){}
}

export interface PrevEmp1{
   empno:Number ,  fromDate:String ,  toDate:String ,
   company:Number, designation:String, relevant:String, nrelevant:String
}

export class Skill{
  constructor(public empno:Number , public category:String , public skill:String ,
    public level:String,public current:String,public experience:String){}
}

export interface Skill1{
   empno:Number ,  category:String ,  skill:String ,
   level:String, current:String, experience:String
}
