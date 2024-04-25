var students = ["student 1","student 2"]
interface AddressType {
  price:number;
  city:string;
  country:string;
  isWorking:boolean;
};

let Address: AddressType = {
  price:500,
  city:"karachi",
  country:"Pakistan",
  isWorking:true,
};
console.log(Address)

type UserType ={
    firstName:string;
    lastName:string;
    cnicNo:number;
    isStudent:boolean;
    subjects:string[];
};

var User: UserType = {
    firstName: "John",
    lastName: "Don",
    cnicNo: 1254786,
    isStudent: true,
    subjects: ["English","Urdu","Maths","Science"],
};
console.log(User)


interface ModernType {
    contactNo:number;
    firstName:string;
    lastName:String;
    bodyNames:string[];
};


let Modern: ModernType = {
    contactNo:334,
    firstName:"aliza",
    lastName:"khan",
    bodyNames:["eyes","nose","ear","lip"],
};
console.log (Modern)


type ObjectType {
    gmail:string;
    isSignin:boolean;
    phoneNo:number;
};


var object: ObjectType = {
    gmail: "khanalizy803@gmail.com",
    isSignin:true,
    phoneNo: 54321,
};
console.log(Object)


 
 

 







