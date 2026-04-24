   name = "wafa";
    console.log(name);
      age = 24;
  price = 99.99
   console.log(age);
   console.log(price)
    x = null;
    console.log(null)
  y = undefined
  console.log(y)
  isfollow = false;
  console.log(isfollow)
   isfollow = true;
   console.log(isfollow)
  dynamicallytype
   name = "urooj";          
 console.log(name)
  //first variable name are case sensitive; "a" & "A" is different.
   fullname = "faris";
   FULLNAME = "urooj";
  console.log(FULLNAME);
 console.log(fullname);

//  2nd rule of variable only latter,digits,underscore(_) and $ is allow. (not even space)

  //full name = "faris"; 
//  i got erorr coz space is not allow in variable

//  we cen add those

   fullname$ = "irfan";
  fullname_ = "imran";
   fullname123 = "farhan";

//   rule number 3rd in variable we also add latter,underscre(_) and $ should be 1st character
  _fullname = "yousif";
   $fullname = "ali";

// there is a 3 keywords let, const, var
//   let variable cannot be re-declear but canbe updated. a block scope variable.

   let name = "ibrahim";
   name = "asma"
   name = "ayesha"
   console.log(name);

//  what is the meaning of block
//  this is the block as you can see (curly breaket)

 {
    let a = 5;
     console.log(a);
 }
 //we can re-define but  in other block
  {     let a = 10;
     console.log(a)
      }

//   varable. var can be re-declear & update. a global scope variable.

   var age = "24";
   var age = "25";
   var age = "26";
  console.log(age)

//  const variable not be re-declear or update . a block scope variable.

  const a = 10;
  console.log(a);

//   data types in js

//  Number, string, Boolean, undefined, null, BigInt,Symbol

//  (primitive data)  (non-primitive data)
//      1 Number            1 Objects (it is a coliction of valus)
//      2 String            2 (Array,functions)
//      3 Boolean
//      4 undefined
//      5 null
//      6 BigInt                
//      7 Symbol

//       (now this is called colaction of velue) all thing must be together (this is the object)
   const student = {
      name: "hamza",
      age: 20,
     marks: 60.5,
   ispass: true,
   };
   console.log(student["age"]); //there is 2 types of print a velue
  console.log(student.age);
  student["age"] = student["age"] + 1;
  console.log(student["age"]);
//    student                            
//   name String
//   age  Number
//   marks Number
//   ispas Boolean

 const product = {
    tile: "ball pen",
     rating: 4,
     offer: 5,
     price: 400,
 };
 console.log(product);

