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


// 4. 
// var variable = 10;

// (() => {
//     console.log(variable);  // 10

//     variable = 20;

//     console.log(variable);  // 20
// })();      // IIFE (Immediately Invoked Function Expression)

// console.log(variable);    // 20
// var variable = 30;

// console.log(variable);    // 30

