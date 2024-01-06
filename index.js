// 1.  Global Exection Context => these are two phases memory phase and global phase.....
//  That's are also called Hosting....

// console.log("Value of Age is: ", age);

// var age = 20;

// console.log("value of Age is: ", age);


//2.  let, const => (Temporal Dead Zone) 
//  Note: TDZ Var ke case m nhi hota hai.....

// age = 100;
// console.log("Value of age is:", age);
// // let age = 20;
// var age = 20;
// console.log("Value of age is:", age);


// 3. same as a hosting concept => yha pr yaad rakhna hai execution phase kaise kaam krta hai.. (these are two phases memory and code)

// myFun();   // second
// var myFun = function() {
//     console.log("First");
// };
// myFun(); // first
// function myFun(){
//     console.log("Second");
// };
// myFun();  // first


// 4. IIFE
// var variable = 10;

// (() => {
//     console.log(variable);  // 10

//     variable = 20;

//     console.log(variable);  // 20
// })();      // IIFE (Immediately Invoked Function Expression)

// console.log(variable);    // 20
// var variable = 30;

// console.log(variable);    // 30

// 5. Hosting
// foo = 30;
// console.log("FOO", foo);

// var foo = 100;
// console.log("FOO", foo);


//  6.  Global and Local Variable method
// variable = 10;
// (() => {
//     foo = 100;
//     console.log(variable);     // 10
//     var foo = 100;
//     variable = 20;
//     console.log(variable);     // 20
// })();
 
// // console.log(foo);          // Error....
// console.log(variable);        // 20
// var variable = 30;

// 7.  output is 10 times 10 print
//  var is use globally variable. pura for loop run kre ga then last wala answer print hoga.....
// for(var i=0; i<10; i++){
//     setTimeout(() => console.log(i), 0);
// }
// //  let is use locally variable.
// for(let i=0; i<10; i++){
//     setTimeout(() => console.log(i), 0);
// }

// 8.
// var fullname = "Sandeep Mahawar";

// var obj = {
//     fullname : "Hacked Full Name",

//     prop: {
//         fullname: "Inside Prop",
//         getFullName: function () {
//            return this.fullname;
//         },
//     },

//     getFullNameV1: function () {
//         return this.fullname;
//     },

//     getFullNameV2: () => { this.fullname },     // javascript me jo arrow function hota hai vo window object ya global object ko refer krta hai....
//                                                 // window object in browser...
//     getFullNameV3: (function() {
//         // return this.fullname;
//         return "Sandeep Mahawar Bhai";
//     })(),      // This is IIFE function so that's react a property not a function when consoleLog...
// };

// console.log(obj.prop.getFullName());
// console.log(obj.getFullNameV1());
// console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3);


// 9.  In this are understand about call function

// const sandeep = {
//     name: "sandeep mahawar",
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// const sandy = {
//     name: "sandy",
//     sayName: function (){
//         console.log(this.name);
//     }
// }

// function sayMyName(){
//     console.log(this.name);
// }

// sandy.sayName.call(sandeep);
// sandy.sayName();
// sayMyName.call(sandeep);


// 10.
// const sandeep = {
//     name: "sandeep mahawar",
//     sayName: function(){
//         console.log(this.name);
//     },
// };

// // setTimeout(sandeep.sayName.bind(sandeep), 3 * 1000);
// setTimeout(() => sandeep.sayName(), 1 * 1000);

//  bind kya krta hai hme new function provide krta hai and it use for setTimeOut functions and use a create functions..

// 11.   // Object.create jb use krte hai tb vo object m value nhi daalta hai vo prototype mai value daalta hai...
const obj = Object.create({
    height: 30,
});
console.log(obj.height);

delete obj.height;     // this delete function are delete the object properties..... 
console.log(obj.height);