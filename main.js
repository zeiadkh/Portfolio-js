// one line comment
/*multi 
lines
comment*/
// console.log("hey pitch")
// document.write("hello pitch")
// window.alert("my wolf");

/* first code will not work because it became before the target element */
/*document.write("<h1>Elkhal</h1>");
document.querySelector("h1").style.color='blue';
document.querySelector("h1").style.fontsize='80px';
document.querySelector("h1").style.fontWeight='bold';
document.querySelector("h1").style.fontFamily='arial';
document.querySelector("h1").style.textAlign='center';
console.log("%cElzero %cWeb %cSchool", "color:green; font-size:40px","color:red; font-size:40px; font-weight:bold", "color:white; font-size:40px ;background:blue");


console.group("Group1");
console.log("message1");
console.log("message1");

console.group("child group");
console.log("message1");
console.log("message1");

console.group(" Grand child group");
console.log("message1");
console.log("message1");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group2");

console.log("message1");
console.log("message1");*/

/*
console.log("Iam In Console");
document.write("Iam In Page");


console.clear();
document.querySelector("body").style.display ='none';
*/
//id in html ele is a var


// Add Variables Here
// var Number_One = 10;
// var Number_Two = 20;

// // Ouput
// console.log(Number_One+""+Number_Two); // Normal Concatenate => 1020
// console.log((typeof(Number_One,Number_Two))); // Normal Concatenate => String
// console.log(`${Number_One}${Number_Two}`); // Template Literals Way => 1020
// console.log(typeof (`${Number_One}${Number_Two}`)); // Template Literals Way => String

// console.log(Number_Two+"\n"+Number_One);
// /*
//   Normal Concatenate
//   20
//   10
// */

// console.log(`${Number_Two}
// ${Number_One}`);
// /*
//   Template Literals Way
//   20
//   10
// */
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object


// console.log("\`I'm In"+"\n"+"\\\\"+"\n"+"Love \\\\ \"\"\" '''"+"\n"+"++ With ++"+"\n"+"\\\"\"\"\\\"\"\""+"\n"+'""JavaScript""\`\`')
// let a = 21;
// let b = 20;

// // console.log("_"+a+"_"+b+a+"_"+b+a+"_"+b+a+"_"+b+"_"); // _21_2021_2021_2021_20_
// var Title_One ="Elzero"  ,  Description_One = "Elzero Web School", Date_One = "25/10";
// // console.log(Title_One,Description_One, Date_One) 
// let var_One = `<div class="card">
// <h3>Hello ${Title_One}</h3>
// <p>${Description_One}</p>
// <span>${Date_One}</span></div>`;
// document.write(var_One.repeat(4));

//console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * num - num); // 6

// // Soultion Three
// console.log(true+true+true+ num); // 6

// // Soultion Four
// console.log(num ** true + num ** true); // 6

// // Solution Five
// console.log(num/true + num/true ); // 6

// // Solution Six
// console.log(num+false +num+false); // 6


// let num = "10";

// // Solution One
// console.log(true * num + true * num); // 20

// // Solution Two

// // Solution Three
// console.log(+num + +num ); // 20

// // Solution Four
// console.log(+num+false + +num+false); // 20

// // Solution Five
// console.log(+num + +num + +""); // 20

// console.log(num =+  +num + +num); // 20




/*let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
*/
/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre increment
  [+]
  - Explain: add

  [+b] [b++] [+]
  [+b] =>unary plus , 20
  [b++] =>postincrement , 20
  [+] =>add

  [+c] [c++] [-]
  [+c] =>unary plus , 80
  [c++] =>postincrement , 80
  [-] =>minus 

  [+a] [a++]
  [+a] =>unary plus , 10
  [a++] =>postincrement , 10
  
*/

/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre increment
  [+]
  - Explain: add

  [-b]  [+]
  [-b] =>Unary Negation , -20
  [+] =>add

  [+c] [c++] [-]
  [+c] =>unary plus , 80
  [c++] =>postincrement , 80
  [-] =>minus 

  [-a] [a++] [+]
  [-a] =>Unary Negation , -10
  [a++] =>postincrement , -10
  [+] =>add

  [+a] =>unary plus , 10
*/

/*
 [--c] [+]
  [--c]
  - Value: 79
  - Explain: pre decrement
  [+]
  - Explain: add

  [+b]  [+]
  [+b] =>Unary plus , 20
  [+] =>add

  [--a]  [*]
  [--a] => pre decrement , 8
  [*] =>multibly 

  [+b] [b++] [-]
  [+b] =>Unary plus , 20
  [b++] =>postincrement , 20
  [-] => minus

  [+b]  [*]
  [+b] =>Unary plus , 20
  [*] =>multubly

  [a] [+]
  [a] => 10
  [+] =>add

  [--a] [-]
  [--a] => pre decrement , 8
  [-] => minus

  [+true] => unary plus , 1
*/  

// //solve this ****


// 1_000_000;1e6;
// toString();tofixed(); parseInt("")

/*console.log(1000*100); // 100000
console.log(1e5); // 100000
console.log(10 **5); // 100000
console.log(20*5000); // 100000
console.log(1_00_000); // 100000
console.log(100000/true); // 100000
console.log(150000-50000); // 100000
console.log(400000/4); // 100000
console.log(50000+50000); // 100000
console.log(100000 - ""); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(10*10*10*10*10); // 100000
console.log(25e3+75e3); // 100000
console.log(-Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER.toString().length)



let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57


let num = 10;
console.log(Number.isInteger(num)+Number.isInteger(num)); // 2



let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed(0)); // 10



console.log(Math.trunc(Math.random()*5))

*/
/*
  Number Challenge
*/
/*
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a ,Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Number.parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil((Math.floor(b)/Math.ceil(d)))); // 67 => Number
*/

/* -------------------------------------*/



// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // Only Use Variables Value
// // Do Not Use Variable Twice

// console.log(-d * e); // 2000
// console.log(-++d * ++f    /+g + +e ); // 173


// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.slice(0,1).toLowerCase()); // e
// console.log(userName.toLowerCase().split("",1)); // e
// console.log(userName.substring(0,1).toLowerCase()); // e
// console.log(userName.substr(0,1).toLowerCase().repeat(3)); // eee


// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True



/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/
/*
let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,7)+a.substr(a.length-6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase()+a.slice(1,length-1).toUpperCase()+a.slice(length-1).toLowerCase()); // eLZERO WEB SCHOOl
*/

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 != 100 != 10 != 20); // true
// console.log(-10 == "-10"); // true
// console.log(!(-50 >= +"-40")); // true
// console.log(! (10 >= -"-40")); // true
// console.log(! (typeof "10" == typeof 10)); // true
// console.log(! (20 < false)); // true


/*let num1 = 10;
let num2 = 20;

console.log(num1<num2); // true
console.log(num2>num1); // true
console.log(num1!=num2); // true
console.log(num1<=num2); // true
console.log(num1!==num2); // true
console.log(num1<num2 || num2==num1); // true
*/

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a < c || a < b); // true
// console.log(a < b || a > c); // true
// console.log(!(a > b) && !(a == b) && !(a < c) && !(a === c)); // true

// Test Case 1
// let num = 9; // "009"
// if (num<10){
//   document.write(`"00${num}"`)
// }
// // Test Case 2
// let num = 20; // "020"
// x= num>10 && num<100 ? (`"0${num}"`): ("");
// document.write(x);
// // Test Case 3
// let num = 110; // "110"
// document.write(num >=100 ? (num) : (""))

/*
let num1 = 9;
let str = "9";
let str2 = "20";


if (num1 == str){
  document.write(`"${num1 } Is The Same Value As ${str} "<br/>`);
}
if (num1 !== str){
  document.write(`"${num1 } Is The Same Value As ${str} But Not The Same Type"<br/>`);
}
if (num1!==str2){
  document.write(`"${num1} Is Not The Same Value Or The Same Type As ${str2}" <br/>`);
}
if (str!=str2 && typeof str == typeof str2){
  document.write(`"${str} Is The Same Type As ${str2} But Not The Same Value"  `)
}
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
*/

/*
let num1 = 10;
let num2 = 30;
let num3 = "30";


if (num3>num1 && typeof num3 != typeof num1){
  document.write(`"30 Is Larger Than 10 And Type string Not The Same Type As number"<br/>`)
}
if (num3>num1 && num3==num2 && num3!==num2){
  document.write(`"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"<br/>`)
}
if (num3 !== num1 && typeof num3 != typeof num2){
  document.write(`"${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}"`)
}
// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
*/


// Edit What You Want Here
/*
let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
/*
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
*/

/*
  If Condition Challenge
*/

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// Write Previous Condition With Ternary If Syntax
/*
a < 10 ? 
console.log(10) 
: a >= 10 && a <= 40 ?
 console.log("10 To 40") 
: a > 40 ?
 console.log("> 40") 
: console.log("Unknown");



let st = "Elzero Web School";
// W Position May Change
if ( st.substring(st.indexOf("W"),st.indexOf("W")+1).toLowerCase()=== "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof +st === "number") {
  console.log("Good");
}
if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
*/


/*
// let day = "   friday  ";
// console.log(day.trim().charAt(0).toUpperCase()+day.trim().slice(1,) )
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"
switch (day.trim().charAt(0).toUpperCase()+day.trim().slice(1,) ){
  case "Friday":
  case "Saturday":
  case "Sunday":
     document.write("No Appointments Available");
     break;   
  case "Monday":
  case "Thursday":  
    document.write("From 10:00 AM To 5:00 PM")
    break;
  case "Tuesday":
    document.write("From 10:00 AM To 6:00 PM")
    break;
  case "Wednesday":
    document.write("From 10:00 AM To 7:00 PM")
    break;
  default :
    document.write("Its Not A Valid Day") 
}
*/

/*
  Switch Challenge
*/

// let job = "";
// let salary = 0;

/*if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/
/*switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`salary is ${salary}`) ; 
    break;
  case "IT":
  case "support":
    salary = 6000;
    console.log(`salary is ${salary}`);
    break;  
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`salary is ${salary}`);
    break;
  default :
    salary = 4000;
    console.log(`salary is ${salary}`);

}
*/


/*
  If Challenge
*/
/*
let holidays = 0;
let money = 0;
/*
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
*/
/*
if (holidays == 0){
  money = 5000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 1 || holidays == 2){
  money = 3000;
  console.log(`My Money is ${money}`);

}
else if (holidays == 3){
  money = 2000;
  console.log(`My Money is ${money}`);

}
else if (holidays == 4){
  money = 1000;
  console.log(`My Money is ${money}`);

}
else if (holidays == 5){
  money = 0;
  console.log(`My Money is ${money}`);

}
else {
  money = 0;
  console.log(`My Money is ${money}`);
}
*/

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// myFriends.length = num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
// myfriends = myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
//  friends.pop();
//  friends.shift()
// //  friends.reverse();
// //  friends.length = friends.length-1;

// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - words.indexOf("Facebook")][0].slice(words.length - words.indexOf("Facebook")).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)){
  console.log("Found")
}

if (haystack[1] === needle){
  console.log("Found")
}

if (haystack.indexOf(needle) != -1){
  console.log("Found")
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2.splice(arr2.indexOf("F"),arr2.length).concat(arr1[arr1.length - arr1.indexOf("C")]).sort().join("").toString().toLowerCase();
console.log(allArrs); // fxy
*/

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here
// my= my.slice(zero,++counter).reverse();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero,--counter)); // ["Elham", "Mazero"]
// console.log(my[zero].toString().split("").slice(0,2).join("") + my.slice(--counter,++counter).toString().split("").slice(--counter) .join("")); // "Elzero"'

// console.log( my.slice(counter,++counter).toString().split("")[++counter]+my.slice(0,1).toString().split("")[--zero]); // "rO"


// let start = 10;
// let end = 100;
// let exclude = 40;
// for (let i = start; i<= end ;i+= start){
//   if (i == exclude ) {
//     continue;
//   }  
//   console.log(i)
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// for(i = start; i>=stop; i--){
//   // 
//   // break;
  
//     if(i !== start){
//       console.log(`${end}${i}`)
//     }
//     else{console.log(i)}
    
  
// }


// let start = 1;
// let end = 6;
// let breaker = 2;

// for(i = start;i<=end;i++){
//   console.log(i)
//   for(j = start;j<=1;j++){
//     console.log("--",breaker,"\n"+"--",end-breaker)
//   }
// }

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   // Write Your Code Here
//  console.log(index)
//  index -=2;
//  if (index < jump+jump) break;
// }

// let friends = ["Ahmed", "Sayed", "Eman","Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";


// for(i = friends.length - friends.length; i < friends.length  ;i++){
//   if (friends[i].startsWith(letter.toUpperCase()) == true) {
//     friends.shift();
//   }
//     console.log(`"${i+letter.length} => ${friends[i]}"` )
//   }

// let start = 0;
// let swappedName = "elZerO";

// for(i= start;i< swappedName.length;i++){
//   // let arr = [];
//   // arr.push(swappedName[i].toUpperCase());
//   if (swappedName[i] !== swappedName[i].toUpperCase()) {
//     swappedName = swappedName.replace(swappedName[i],swappedName[i].toUpperCase())
//   }
//   else {
//     swappedName = swappedName.replace(swappedName[i],swappedName[i].toLowerCase())
//   }
//   // break;
// }
// console.log(`${swappedName}  `)

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (i = mix.length-mix.length;i<mix.length;i++){
//   if (typeof mix[i]!== "number" || i== start ) continue;
//   console.log(mix[i])   
// }

// let friends = ["Ahmed","Sayed", "Ali", 1,8, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (counter < friends.length ){
//   if (typeof friends[counter] =="string" && friends[counter].startsWith(friends[index][index]) !==true){
//     console.log(`"${++index} => ${friends[counter]}"`)
//     counter++;
//   }
//   counter++;
 

// }



/*
  Loop Challenge
*/
/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer","Salwa", "Omar", "Othman", "Amany", "Samia", "Anwar"];

for (i=0;i<myAdmins.length;i++){
  if (myAdmins[i] === "Stop") break;
  
}
document.write(`We Have ${i} Adminds`)
document.write(`<hr>`)

// let arr =[];
// for (j=0;j<myEmployees.length;j++){
//   if (myEmployees[j].startsWith("A") !== true) continue;
//   arr.push(myEmployees[j]);
// }
let c= 0;

for (i=0;i<myAdmins.length;i++){
  if (myAdmins[i] === "Stop") break;
  document.write(`<div>The Admin For Team ${i +1} is ${myAdmins[i]}<h3>Team Members: </h3>`)
  for (j=0;j<myEmployees.length;j++){
    if (myEmployees[j].startsWith(myAdmins[i][0]) !== true) {
      continue;
    }
    else{c++;
    }
    
    document.write(`<p> - ${c} ${myEmployees[j]}</p>`)
    
  }
  document.write(`</div><hr>`)
  c=0;
}
*/

// function sayHello(theName, theGender) {
//   // Your Code Here
//   if (theGender == "Male"){
//     document.write(`Hello Mr ${theName}`)
//   }
//   else if(theGender == "Female"){
//     document.write(`Hello Miss ${theName}`)
//   }
//   else
//   document.write(`Hello  ${theName}`)
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"


// function calculate(firstNum, secondNum, operation = "add") {
//   // Your Code Here
//   if (operation == "add" ){
//     if(secondNum == undefined){
//       document.write("Second Number Not Found")
//     }
//     else
//     document.write(firstNum + secondNum)
  
//   }
//   else if(operation == "subtract"){
//     document.write(firstNum - secondNum)
//   }
//   else if(operation == "multiply"){
//     document.write(firstNum * secondNum)
//   }
//   else if(secondNum == undefined){
//     document.write("Second Number Not Found")
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


/*function ageInTime(theAge) {
  // Your Code Here
  if (theAge >10 && theAge <100){
    console.log(`${theAge*365*24*60*60} Seconds`)
    console.log(`${theAge*365*24*60} Minutes`)
    console.log(`${theAge*365*24} Hours`)
    console.log(`${theAge*365} Days`)
    console.log(`${theAge*48} Weeks`)
    console.log(`${theAge*12} Months`)

  }
  else 
    console.log(`Age Out Of Range`)

}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(19); // Months Example => 456 Months*/


/*
function checkStatus(a, b, c) {
  // Your Code Here
  x= (typeof a == "string")? a : (typeof b == "string") ? b:c;

  n = (typeof a == "number") ? a : (typeof b == "number")? b :c;

  bol = (typeof a == "boolean")? a: (typeof b == "boolean")? b: c;

      bol = ( bol== true)?document.write(`Hello ${x}, Your Age Is ${n}, You Are Available For Hire <br>`) :document.write(`Hello ${x}, Your Age Is ${n}, You Are Not Available For Hire`);
      
      }   


// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"*/




// function createSelectBox(startYear, endYear) {
//   // Your Code Here
//   document.write(`<select>`)
//   for (i=startYear;i<=endYear;i++){
//     document.write(`<option value="${i}">${i}</option>`)
//   }
//   document.write(`</select>`)

// }
// createSelectBox(2000, 2021);

// function multiply (...numbers){
//   let tot = 1;
//   for(i=0;i<numbers.length;i++){
//     if (typeof numbers[i] =="string") continue;
//     else tot *= Math.trunc(numbers[i]);
//   }
//   console.log( tot)
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
/*
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    return `Hello ${zName.slice(0,zName.indexOf(" "))}${zName.slice(zName.indexOf(" "),zName.indexOf(" ")+2).toUpperCase()}.`
  }
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  
  function ageWithMessage(zAge) {
    // Write Your Code Here
    return `Your Age Is ${zAge.split(" ")[0]}`
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return `You Live In ${zCountry.slice(0,2).toUpperCase()}`
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    return `${namePattern(zName)},${ageWithMessage(zAge)},${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY*/

// // function itsMe() {
// //   return `Iam A Normal Function`;
// // }
// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe()); // Iam A Normal Function

// // function urlCreate(protocol, web, tld) {
// //   return `${protocol}://www.${web}.${tld}`;
// // }
// let urlCreate = (protocol,web,tld) =>   `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
/*
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }
// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

// function specialMix(...data) {
//   // Your Code Here
//   let sum = 0
//   for (i=0;i<data.length;i++){
//     if(typeof data[i] == "number") sum += data[i];
//     else if(data[i].includes(0,1,2,3,4,5,6,7,8,9)) sum += +data[i].slice(0,2);
//     else {continue}
//   }
  
//   sum ==0? console.log("All Is String") : console.log(sum)
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


// let names = function (...ls) {
//   // Parameter ?
//   return `[${ls.join("], [")}] => Done!`
// };
// let names = (...ls) => `String [${ls.join("], [")}] => Done!`

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// let myNumbers = [20, 50, 10, 60];

// // let calc = (one, two, ...nums) => (nums.shift()+nums.shift()) - (one+two) ;
// function calc (one,two,...nums){
//   return (nums.shift()+nums.shift()) - (one+two)
// }

// console.log(calc(10, myNumbers[+false], myNumbers[+true],myNumbers[myNumbers.length - +true])); // 80

// let mix = "A13Bs2zc";

// let res = mix.split("").filter(function(ele) {
//   return isNaN(ele) == false;
// }).map(function (el){
  
//    return el*el;
// })
// console.log(res.join(""))

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let res = mix.map(function (ele){
//   return isNaN(ele) ? ele : ''}).reduce(function (ele,cur){
//     return ele+cur

//   })
//   console.log(res)


// let myString = "EElllzzzzzzzeroo";
// let str = myString.split("").filter(function (ele,i){
//   return ele =myString.split("").indexOf(ele) == i
  
// }).reduce(function(a,b){
//   return `${a}${b}`
// })
  

// console.log(str)

// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let flat = myArray.reduce(function (acc,ele,i,arr){
//   // if (i == 3) console.log(`${ele.join("")}`)
//   return i==3 ? acc+ele.join("") : acc+ele
  

// })
// console.log(flat)

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let nums = numsAndStrings.filter(function (ele){
//   return !isNaN(ele)? ele : "" 
// }).map(function (ele){
//   return -ele
// })
// console.log(nums)


// let nums = [2, 12, 11, 5, 10, 1, 99];
// let res = nums.reduce(function (acc,cur){
//   return cur % 2 !== 0? acc+cur:acc*cur
// },1)
// console.log(res)

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").filter(function (x){
//   return  isNaN(x) 
// }).map(function (x){
//   x == "_"? x=" ": ""
  
//   return x[+!true]
  
// }).reduce(function(x,y,i){
  
//   return y !==  myString.split(",").pop() ?`${x}${y}`:`${x}`
// })

// console.log(solution); // Elzero Web School


/*         object             */

// Create Your Object Here
// let member = {
//   name : "Elzero",
//   age : 38,
//   country : "Egypt",
//   fullDetails : function (){
//     return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
//   }
// }

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Method One
// Create Your Object Here
// let objMethodOne = {property : "Method One"}

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = new Object ({property : "Method Two"})
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = Object.create({property : "Method Three"})
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({property : "Method Four"})
// console.log(objMethodFour.property); // "Method Four"

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };
// let finalObject = Object.assign({a},threeNums,twoNums)
// console.log(finalObject);

// The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// Code One => How To Get Object Length ?
// 
// let objectLength =  [Object.keys(myFavGames)].toString().split(" ").length;
// // console.log(objectLength)

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//  // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
//     console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
//     console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }



//try 
// /myFavGames.counter = function (){return this};
// let objKeys = "YS";myFavGames[x]
// objKeys = objKeys.push(myFavGames.counter())
// objKeys = objKeys.push(myFavGames.counter())
// console.log([myFavGames.counter()][0].toString())
// console.log(objKeys)





// // Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

 

// DOM tasks


// for (i=0 ;i<100;i++){
//   let ele = document.createElement("div");
// let txt = document.createTextNode("product title");
// let txt_2 = document.createTextNode("product descripti0n");
// let h = document.createElement("h2")
// let pra = document.createElement("p");
// ele.className = "product";
//   h.appendChild(txt)
//   pra.appendChild(txt_2)
//   ele.appendChild(h)
//   ele.appendChild(pra)
//   console.log(ele)
//   document.body.appendChild(ele);
// }

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);
// myElement.style.display = "flex"





// console.log(document.querySelector("#elzero"))
// console.log(document.querySelector(".element"))
// console.log(document.querySelector("[name=js]"))
// console.log(document.querySelector("div"))


// console.log(document.querySelectorAll("body div")[0])
// console.log(document.querySelectorAll("div.element")[0])
// console.log(document.querySelectorAll("div#elzero")[0])
// console.log(document.querySelectorAll("body [name=js]")[0])

// console.log(document.getElementById("elzero"))
// console.log(document.getElementsByClassName("element")[0])
// console.log(document.getElementsByTagName("div")[0])
// console.log(document.getElementsByName("js")[0])


// console.log(document.body.children[0])
// console.log(document.body.childNodes[1])
// console.log(document.body.firstElementChild)

// task 02
// let img = document.images
// for(i=0 ;i<document.images.length;i++){
//   img[i].src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img[i].alt ="Elzero Logo";
// }


// task 03
/*
let cur = document.querySelector("[name=dollar")
let res = 0;
document.forms[0].oninput = function (eve) {
  
  eve.preventDefault;
  res = +cur.value * 15.6
  document.querySelector(".result").innerHTML = `{${cur.value}} USD Dollar = {${res.toFixed(2)}} Egyptian Pound` ;
;}
document.forms[0].onpaste = function (eve) {
  eve.preventDefault;
  res = +cur.value * 15.6
  document.querySelector(".result").innerHTML = `{${cur.value}} USD Dollar = {${res.toFixed(2)}} Egyptian Pound` ;
;}
*/

// task 04
/*
let num = document.getElementsByTagName("div").length;
let one =document.querySelector(".two").getAttribute("title")
let two =document.querySelector(".one").getAttribute("title")
let none = document.querySelector(".two").innerHTML
let ntwo = document.querySelector(".one").innerHTML


document.querySelector(".one").setAttribute("title",one)
document.querySelector(".two").setAttribute("title",two)
document.querySelector(".one").innerHTML = none
document.querySelector(".two").innerHTML = `${ntwo} ${num}`
*/


// task 05
// let arr = document.getElementsByTagName("img")
// for (i=0 ;i<arr.length;i++){
//   if (arr[i].hasAttribute("alt")) {arr[i].setAttribute("alt","Old")}
//   else arr[i].setAttribute("alt","New")
// }
// console.log(arr[2].setAttribute("alt","Old") )


// task 06
/*
let eleNum = document.forms[0].firstElementChild;
let eleTxt = document.getElementsByTagName("form")[0].querySelector("input[type = text]");
let eleType = document.querySelector("form").querySelector("select");
let res = document.querySelector(".results")




  document.forms[0].onsubmit = function (event){
    
    res.children.length != 0 ?res.innerHTML = "" : ""
    event.preventDefault();
    
    for (i=1; i <= +eleNum.value; i++){
      let ele = document.createElement("div")
      let txt = document.createTextNode(eleTxt.value)
      
      if (eleType.value === "Div"){
        res.appendChild(ele)
        ele.className="box";
        ele.setAttribute("title","Element")
        ele.setAttribute("id",`id-${i}`)
        ele.append(txt)
        console.log()
        document.querySelector(".box").style.margin='auto'
        ele.style.display="block"
        ele.style.background="green"
        ele.style.textAlign='center'
      }
      
      if (eleType.value === "Section"){
        let ele_2 = document.createElement("section")
        res.appendChild(ele_2)
        ele_2.className="box";
        ele_2.setAttribute("title","Element")
        ele_2.setAttribute("id",`id_${i}`)
        ele_2.append(txt)
      }
    }
    
  }*/


  // DOM Tasks02

  
// task 01
// at script tag


// task 02
/*
let cur = document.querySelector('[title="Current"]')
let add = document.querySelector(".classes-to-add")
let rem = document.querySelector(".classes-to-remove")
let classesLst =document.querySelector(".classes-list").querySelector("div")
if (classesLst.innerHTML == "") classesLst.innerText = "No Classes To Show"

add.onblur = function (){
  if (add.value !== ""){
    if (add.value.toString().toLowerCase().split(" ").length !== 1){
    cur.classList.add(add.value.split(" ")[0].toLowerCase())
    cur.classList.add(add.value.split(" ")[1].toLowerCase())
    }
  else cur.classList.add(add.value.toString().toLowerCase())
  
  classesLst.innerHTML = cur.classList.toString().split(" ").sort().join(" ")
  add.value = ""
}
else add.setAttribute("placeholder","put input")
  // console.log(add.value.split(" ").length)
  
}
rem.onblur = ()=>{
  if (rem.value !== ""){
    if (rem.value.split(" ").length !== 1){
    cur.classList.remove(rem.value.split(" ")[0])
    cur.classList.remove(rem.value.split(" ")[1])
    }
  else cur.classList.remove(rem.value.toString().toLowerCase())

  classesLst.innerHTML = cur.classList.toString().split(" ").sort().join(" ")
  rem.value = ""
  }
  else rem.setAttribute("placeholder","put input")
}*/

// task 03
/*
let div = document.querySelector(".our-element")
let p = document.querySelector("p")

let aele = document.createElement("div")
aele.className = "start" 
aele.setAttribute("title","Start Element")
aele.setAttribute("data-value","Start")
aele.innerText = "Start"

let bele = document.createElement("div")
bele.className = "end" 
bele.setAttribute("title","End Element")
bele.setAttribute("data-value","End")
bele.innerText = "End"

// console.log(bele)
p.remove()
div.before(aele)
div.after(bele)
*/

// task 04
// let elzero = document.querySelector("div")
// let span = document.querySelector("span")
// let com = elzero.firstChild

// span.remove()

// console.log(elzero.innerText)

// task 05

// document.addEventListener("click",function(e) {
//   console.log(e.target.tagName)
// })

// DOM Challange

/*
let header = document.createElement("header")
header.className = "website-header"


let elzero = document.createElement("div")
elzero.append("Elzero")
elzero.className = "elzero"
header.append(elzero)

let ls = document.createElement("ul")
ls.className= "list"

let lsEle1 = document.createElement("li")
let lsEle2 = document.createElement("li")
let lsEle3 = document.createElement("li")
let lsEle4 = document.createElement("li")

lsEle1.append("Home")
lsEle2.append("About")
lsEle3.append("Services")
lsEle4.append("Contact")

ls.appendChild(lsEle1)
ls.append(lsEle2)
ls.append(lsEle3)
ls.append(lsEle4)

header.append(ls)

elzero.style.color = "#20a96b"
elzero.style.fontWeight = "bold"

header.style.cssText  = "display : flex; justify-content : space-between;align-items: center; padding:0px 10px; background:white"

lsEle1.style.padding = "10px"
lsEle2.style.padding = "10px"
lsEle3.style.padding = "10px"
lsEle4.style.padding = "10px"

ls.style.cssText = "display : flex; list-style-type: none;align-items: center; color: #20a96b; font-size: 14px"

document.body.style.cssText = "margin:0;background:rgb(236,236,236);font-family: Tahona, Arial;"

document.body.append(header)

// content
let content = document.createElement("div")
content.className = "content"
content.style.cssText = "display:flex ;padding:20px;gap:20px;min-height:calc(100vh - 142px);box-sizing: border-box;flex-wrap:wrap;"
for ( i=1; i<=15;i++){


// product
let product = document.createElement("div")
let span = document.createElement("span")
product.className = "product"
product.style.cssText = "background : white;padding: 20px; border:1px solid rgb(221,221,221); box-sizing: border-box; text-align:center;color :rgb(136,136,136);border-raduis:6bx; width: calc(( 100% - 40px) / 3 );" 

span.style.cssText = "font-size :40px;color:black;font-weight: normal;display:block;margin: 10px 0;"

span.append(i)
product.append(span)
product.append("product")
content.append(product)

document.body.appendChild(content)
}

// footer

let footer = document.createElement("footer")
let txt = document.createTextNode("Copyright 2022")

footer.className = "footer"
footer.appendChild(txt)
footer.style.cssText = "background: rgb(35, 169,110); font-size: 26px; text-align:center; padding:20px; color:white ;margin: 5px"

document.body.append(footer)*/

// Bom tasks
// task 1
// 

// task 2
/*
let div =document.createElement("div")
div.style.cssText = "margin:auto;width:300px;position:relative;background:#eee; text-align:center;padding:20px;font-size:14px"

let welcome = document.createElement("span")
welcome.append("welcome")
welcome.style.cssText = "display:block;width: 100%;font-size:26px;font-weight:bold;margin-bottom:10px;font-transformation:capitalize;"
let txt = document.createTextNode("Welcome to Elzero web school")

let btn= document.createElement("button")
btn.append("x")
div.appendChild(btn)
btn.style.cssText = "color:white;position:absolute;right:0px;top:-10px;width:30px;height:30px;background:red;border-radius:50%;border:none;"
btn.onclick = ()=> div.style.display =  "none"

div.append(welcome,txt)
setTimeout (function (){document.body.append(div)},5000)*/

// task 03


// let div = document.createElement("div")
// div.append("10")
// document.body.append(div)
// let c = setInterval(() => {
  
//   div.innerHTML == "0" ? clearInterval(c):  div.innerHTML -= 1
//   if (div.innerHTML === "5"){ window.open("https://elzero.org", "_blank", "width=500,height=500,left=200,top=100")}
// }, 1000);
// location.assign("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/")

// <!-- BoM 02  -->
/*
let lis = document.querySelectorAll("li")
let exp = document.querySelector(".experiment")

if (window.localStorage.getItem("color")){
  exp.style.background = window.localStorage.getItem("color")

  lis.forEach((li) => {
    li.classList.remove("active")})

  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")  
}

lis.forEach((li) => {
  li.addEventListener("click", (e)=>{
    
    lis.forEach((li) =>{
      li.classList.remove("active")
    });
    e.currentTarget.classList.add("active")
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    exp.style.background = window.localStorage.getItem("color")

  })
})
*/

// localStorage task
/*
let color = document.querySelector("#color");
let arr =["red","green","blue","yellow","black","pink"]
for (i=0;i<arr.length;i++){
let val = document.createElement("option");
val.append(arr[i])
color.appendChild(val)
val.setAttribute("value",arr[i])
}



let size = document.querySelector("#size");
for (i=16;i<31;i++){
let val = document.createElement("option");
val.append(i)
size.appendChild(val)
val.setAttribute("value",i)
}

let sel_1 = document. querySelector("#fonts-name")
let sel_2 = document.querySelector("#color")
let sel_3 = document.querySelector("#size")


if (window.localStorage.getItem("font")){
  sel_1.addEventListener("change",(e)=>{
    window.localStorage.setItem("font",e.currentTarget.value)
    document.body.style.fontFamily = e.currentTarget.value
  });
  document.body.style.fontFamily = window.localStorage.getItem("font")
  sel_1.value = window.localStorage.getItem("font")
}  
if (window.localStorage.getItem("color")){
sel_2.addEventListener("change",(e)=>{
  window.localStorage.setItem("color",e.currentTarget.value)
  document.body.style.color = e.currentTarget.value  
});
document.body.style.color = window.localStorage.getItem("color")
sel_2.value = window.localStorage.getItem("color")
}
if (window.localStorage.getItem("size")){
sel_3.addEventListener("change",(e)=>{
  window.localStorage.setItem("size",e.currentTarget.value)
  document.body.style.fontSize = `${e.currentTarget.value}px`  
});
document.body.style.fontSize = `${window.localStorage.getItem("size")}px`
sel_3.value = window.localStorage.getItem("size")
}
*/

// sessionStorage
/*
let sel = document.querySelector("form select")
let inp = document.querySelectorAll("input")


inp[0].oninput = ()=> {console.log(inp[0].value);
  window.sessionStorage.setItem("input-1",inp[0].value)
}
inp[0].value = window.sessionStorage.getItem("input-1")

inp[1].oninput = ()=> {console.log(inp[1].value);
  window.sessionStorage.setItem("input-2",inp[1].value)
}
inp[1].value = window.sessionStorage.getItem("input-2")

inp[2].oninput = ()=> {console.log(inp[2].value);
  window.sessionStorage.setItem("input-3",inp[2].value)
}
inp[2].value = window.sessionStorage.getItem("input-3")


sel.onchange = () =>{
  window.sessionStorage.setItem("selected",sel.value)
console.log(sel.value)
}
sel.value = window.sessionStorage.getItem("selected")
*/

// BOM Challange
/*
let sub = document.querySelector("[type = submit");

let tasks = document.querySelector(".tasks");

let val = document.querySelector("[type = text");

tasks.style.cssText = "background:#eee;display:flex;padding:30px;margin:20px"
document.body.append(tasks)

let arr = []

sub.addEventListener("click",()=>{
    if (val.value !== ""){
        createTask(val.value)
        store()
      }
      val.value = ""
      
    })
    

    if(localStorage.getItem("tasks")) {
      arr = JSON.parse(localStorage.getItem("tasks")) ; 
    }
    
    getStored()
    
    function createTask(par){
      
      task = {
        id : Math.trunc(Math.random() * 100),
        title : par
      }
      
      arr.push(task)
      addTasks(arr)
  
}

function addTasks(lst){
  tasks.innerHTML = ""
  lst.forEach((ele)=>{
    let div = document.createElement("div");
    div.className = "task"
    div.setAttribute("id",ele.id)
    div.append(document.createTextNode(ele.title))

    let del = document.createElement("button");
    del.className = "del"
    del.append("Delete")
    
    del.style.cssText = "color:white;font-size:12;text-align:center;background:red;border:none;border-radius:5px;"
    div.append(del)
    
    tasks.append(div)
  })
}

tasks.addEventListener("click", (e)=>{
  if (e.target.classList.contains("del")){
    erase(e.target.parentElement.id)
    e.target.parentElement.remove()
  }
})



function store (){

  localStorage.setItem("tasks",JSON.stringify(arr))
}

function getStored () {

  if(localStorage.getItem("tasks")){

    addTasks(JSON.parse(localStorage.getItem("tasks")))
    
  }
}



function erase (taskId){

  
    arr = arr.filter((task)=> task.id != taskId)
    localStorage.setItem("tasks",JSON.stringify(arr))
    
  
}
*/


// Destructuring


// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr" , ["Mohamed", "Gamal"]]];

// let [, , ,[a, ,[ , b]]] = myFriends;
 

// console.log(a)
// console.log(b)


// task01
/*
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , ,e] = myNumbers

console.log(a * e); // 5
*/

// task02
/*
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

let [a,b,c,[d,e,[f,g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
*/

// task03
/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring

let arr = arr1.concat(arr2,arr3)

// Write Your Destructuring Assignment Here
let [c , , , , , , , a,b ] = arr

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed
*/

// task04
/*
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here

let {age: a,working :w ,country: c,hobbies :[h1, ,h3]} = member

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c}`);
// I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
*/

// task05
/*
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here

let {title: t,developer: d,releases: {["Oath In Felghana"]: [u ,j],["Ark Of Napishtim"] :{US: u_price,JAP :j_price},Origin: or}} = game
let  [o, a, ]= Object.keys(game.releases)

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
*/

// task06
/*
let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

if (chosen === 1){
  let [{title,age,available,skills:[ ,ls]} ] = myFriends 
  console.log(title,age,available ? "Available": "Not Available",ls)
}
// "Osama"
// 39
// "Available"
// "CSS"

if (chosen === 2){
  let [,{title,age,available,skills:[ ,ls]} ] = myFriends 
  console.log(title,age,available ? "Available": "Not Available",ls)
}

// // "Ahmed"
// // 25
// // "Not Available"
// // "Django"

// // If chosen === 3
if (chosen === 3){
  let [, ,{title,age,available,skills:[ ,ls]} ] = myFriends
  console.log(title,age,available ? "Available": "Not Available",ls)
  }

// "Sayed"
// 33
// "Available"
// "Laravel"
fName(2)

function fName(chosen){
  function name({title,age,available,skills:[ ,ls]} = myFriends[chosen -1]){
    console.log(`${title}
${age}
${available ? "Available": "Not Available"}
${ls}`)
  }
  return name()

}*/


// set & map &array.

// let arr = [10,20,30,40,50,"A","B"]

// // console.log(arr.copyWithin(1,-2))//[10,A,B,40,50,A,B]
// console.log(arr.copyWithin(1,-2,-1))//[10,A,30,40,50,A,B]

// task01
/*
let setOfNumbers = new Set().add(10)
setOfNumbers.add(20).add(setOfNumbers.size)
console.log(setOfNumbers)
console.log(setOfNumbers.forEach((e) => e===2? console.log(e):""))
*/

// task02
/*
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let set = new Set(myFriends.sort())
console.log(set)
*/

// task03
/*
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let map = new Map([["usermane","Osama"],["role","Admin"],["country","Egypt"]])
console.log(map)
console.log(map.size)
console.log(map.has("role"))
*/

// task04
/*
let n = 100020003000;

console.log(...new Set(n.toString().split("").map((e)=>+e).filter((e)=> e!= new Set(n.toString().split("").sort()).keys().next().value )))
*/
// task05
/*
let theName = "Elzero";

console.log([...theName])
console.log(theName.split(""))
console.log(Array.from(theName))
let obj = Object.assign([],theName)
console.log(obj)
let arr = []
arr.push(...theName.split(""))
console.log(arr)
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
*/

// task06
/*
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let nums = []

chars.forEach((ele)=> typeof ele == "number"? nums.push(ele) : "")
let str = chars.filter((ele)=> typeof ele !== "number")

// chars.copyWithin(0,chars.indexOf(chars.forEach((ele)=> ele? ele:"")),-1)
// console.log(str)
let arr = [...nums,...str]
console.log(arr.copyWithin(0,arr.indexOf(str[0]),arr.indexOf(str[nums.length])))


// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
*/

// task07
/*
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo])

console.log(numsOne.concat(numsTwo))

// let joined = (arr1,arr2)=> {
//   let arr =[]
//   for(i=0;i<arr2.length;i++){
//     arr1.push(arr2[i])
//   }
//   return  arr = arr1
// }
// console.log(joined(numsOne,numsTwo))

// numsOne.push(...numsTwo)
// console.log(numsOne)
let red = numsTwo.reduce((numsOne,cur)=>{
   numsOne.push(cur)
   return numsOne
},numsOne)
console.log(red)*/

// task08
/*
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods


console.log([...n1,...n2].length*new Set(n2).keys().next().value)//210
console.log()*/

// regexp 
// Notes : (com|org)
// let practice = "Os1 Os10s Os2 Os8 Os80s" 
// let practiceRe = /Os/g
// let prac = /[5-9]/
// console.log(practice.match(practiceRe).match(prac))

// let str = "AaBbcdefG123!234%^&*";
// console.log(str.match(/[^a-zA-Z1-9]/g))

// let serials = "s100s s3000s s50000s s950000s"

// console.log(serials.match(/s\d{3}s/g))

// tassk01
/*
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regex = new RegExp(ip,"gi")
console.log(ip.match(regex))*/

// task02
/*
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regex = /os(([0-9]|o)+)?(o\b)/ig

console.log(specialNames.match(regex))

// Output
// ['Os10O', 'OsO', 'Os100O']
*/

// task03
/*
let phone = "+(995)-123 (4567)";

let regexp = /\+\(\d{3}\)-\d{3} \(\d{4}\)/ig
console.log(phone.match(regexp))
*/
// task04

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//https? : https could match one time or not .
// \/\/ : //
// (?:[-\w]+\.)?: [-\w]+\. match one or more char followed by "."
// ([-\w]+)\.\w+ : one or more char followed by '.'and one or more char
// (?:\.\w+)?\/?.* : ('.'one or more char) one or zero match / one or zero match . zero or more char  


// task 05
/*
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /((\d\d\/)|\d\d |\d\d - )\d{2}\/? ?-? ?(\d{2,4})/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
*/
// task06
/*
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?\w+\.\w+\.?\w+(:?\d{4}?\/?\w+\.\w+\?\w+=\d{3}&\w+=.*)?/ig; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
*/

// oop
/*
class User {
  #pass
  constructor (u , id, pass){
    this.u = u 
    this.id = id 
    this.#pass = pass

  }
  enc(){
    return this.#pass * 2
  }
}

let obj = new User ("name", 01, 102)

console.log(obj.enc())

class Admin extends User{
  constructor (u, id ,pass, adv){
    super(u,id,pass)
    this.adv = adv
  }
}

let admin = new Admin ("name2", 01, 12, "advance")

console.log(admin.enc())*/

// task01
/*
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car{
  constructor(name,model,price){
    this.n = name
    this.m = model
    this.p = price
  }
  run (){
    return "Car Is Running Now"
  }
  stop(){
    return "Car Is Stopped"
  }

}

let fcar = new Car("BMW","x6",2000000)
let scar = new Car("Mercedes","E-220",24000000)
let tcar = new Car("KIA","E-09",650000)

console.log(`Car One Name Is ${fcar.n} And Model Is ${fcar.m} And Price Is ${fcar.p}`)
console.log(fcar.run())*/

// task02
/*
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone{
  constructor(n,s,p,size){
    super(n,s,p)
    this.size = size || "Unknown"
  }
  fullDetails(){
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
  }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown*/

// task03
/*
// Edit The Class
class User {
  #c
  constructor(username, card) {
    this.u = username;
    this.#c = card;
    
  }
  get showData(){
    return `Hello ${this.u} Your Credit Card Number is ${this.#c.toString().replace(/\d{16}/g,"1234-5678-1234-5678")}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined*/

// task04
/*
String.prototype.addLove =()=> `I Love ${myStr} Web School`

let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
*/

// task05
/*
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperty(myObj,"score",{
  writable : false,
})

Object.defineProperty(myObj,"id",{
  enumerable : false,
})

delete myObj.country

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}*/


// date & Genetators & Modules

// let date = new Date()

// console.log(date.getDate())

// task01
/*
let birth = new Date("Apr 25, 02")
let now = new Date()
let birthDay = now - birth

console.log(Math.round(birthDay/1000),"seconds")
console.log(Math.round(birthDay/1000/60),"Minutes")
console.log(Math.round(birthDay/1000/60/60),"Hours")
console.log(Math.round(birthDay/1000/60/60/24),"Days")
console.log(Math.round(birthDay/1000/60/60/24/30),"Months")
console.log(Math.round(birthDay/1000/60/60/24/365),"Years")
*/

// task02
/*
let date = new Date(0)
date.setTime(1000)
date.setHours(00)
date.setFullYear(1980)
console.log(date)
*/

// task03
/*
let now = new Date()
let arr = ["January","Feburary","Mars","April"]

now.setDate(0)

console.log(now)
console.log(`previous Month is ${arr[now.getMonth()]} And Last Day Is ${now.getDate()}`)*/


// task04
/*
let date = new Date("4-28-2002")

let date2 = new Date (2002,3,28) 

let date3 = new Date(date.toDateString("00 00 00  28-4-2002 "))
let date4 = new Date("2002-4-28 00:00:00")



console.log(date4)
console.log(date)
console.log(date2)*/

// task05
/*
let before = performance.now()

for(i=0;i<100000;i++){console.log(i)}

let after = performance.now()

console.log(`Loop Took ${parseInt(after - before)} Milliseconds.`)*/

// task06
/*
// Write Your Generator Function Here

function* gen(){
  
  let i = 14
  yield i
  while(true){
    yield res = i + 140
    for (j=200; ;j+=200){

      yield res += 140+ j
       
    }
  }

}


let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
*/
// task07
/*
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll(){
   
      let list = []
      for (let x of genNumbers()){
        list.push(x)
          
      }
      for (let x of genLetters()){
        list.push(x)
          
      }
      yield* new Set(list)
    
}
 

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}*/

// task08
/*
import calc from "./mod-one.js" 
import * as modOne from "./mod-two.js"
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60*/


//  Json

// task01
//  json file

// task 02
/*
let articles = new XMLHttpRequest();
articles.open("GET","articles.json")
articles.send();

articles.onloadend= function(){
/*
console.log(articles.status)
console.log(articles.statusText)
console.log(articles.responseText)
articles.readyState == 4 ? console.log('Data Loaded'):""
*/
// task03&04
/*
let mainData = JSON.parse(articles.responseText)

let div = document.createElement("div")
div.id="data"
for(let i=0;i<mainData.length;i++){
  let innerDiv = document.createElement("div")
  let h = document.createElement("h2")
  let p = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  h.append(`${mainData[i]["title"]}`)
  // innerDiv.append(`<h2>${mainData[i]["title"]}</h2>`)
  // innerDiv.append(`<p>${mainData[i].content}</p>`)
  // innerDiv.append(`<p>Author:${mainData[i].writer}</p>`)
  // innerDiv.append(`<p>category:${mainData[i].section}</p>`)
  innerDiv.append(h)
  p.append(`${mainData[i].content}`)
  innerDiv.append(p)
  p2.append(`Author:${mainData[i].writer}`)
  innerDiv.append(p2)
  p3.append(`category:${mainData[i].section}`)
  innerDiv.append(p3)

  div.append(innerDiv)
  document.body.append(div)

}

for(let i=0;i<mainData.length;i++){
  mainData[i]["section"] = 'All'
  

}
console.log(mainData)
let updatedData = JSON.stringify(mainData)
console.log(updatedData)
}*/


//last week
/*
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am The Good Promise");
  }, 3000);
});

async function readData() {
  console.log("Before Promise");

  try{
    console.log(await myPromise);

  }catch (reason){
    console.log(`Reason${reason}`)
  }
  finally{

    console.log("After Promise");
  }
}

readData();*/


// promises and fetch task





/*
let showData = (apiLink)=>{
  return new Promise((resolve,reject)=>{
    let lasttask = new XMLHttpRequest();
    lasttask.onload= function(){
      if (lasttask.status == 200 & this.readyState ==4){
        resolve(JSON.parse(lasttask.responseText))}
      else reject(Error("we found no data to show"))
      }
    lasttask.open("GET",apiLink)
    lasttask.send();})
}

showData("lasttassk.json").then((result)=> {
  result.length = 5
  for(let i =0; i<result.length;i++){
  document.write(`<div><h2> ${result[i].title}</h2> <p>${result[i].description}</p></div>`)
  }
 }).catch((reason)=> console.log(reason))
*/

/*
fetch("lasttask.json").then((res)=>{return res.json()} )
.then((five)=>{five.length = 5 ;return five})
.then((five)=>{for(let i =0; i<five.length;i++){
  document.write(`<div><h2> ${five[i].title}</h2> <p>${five[i].description}</p></div>`)}
  }
  )

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });
*/
/*(res)=>{let myData = res.json();console.log(JSON.parse(myData.responseText));return JSON.parse(myData)} )
.then((five)=> five.length = 5)
.then((five)=>{for(let i =0; i<five.length;i++){
  document.write(`<div><h2> ${five[i].title}</h2> <p>${five[i].description}</p></div>`)}
  }
  )*/



// function rep(str,n,space= false){

//   let sp = " "
//   let s =""
//   for (let i=0;i<n;i++){
//     s+= str
//     space? s+=sp:""
    
//   }
//   return s
// }
// console.log(rep ("s",5))





// function (n,m,x){

//   m % 22 * n*8 + (11*89*8*22)*.42

// }


function breakingRecords(scores) {
  // Write your code here

}