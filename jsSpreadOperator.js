console.log("spread operator");

/* Arrays */
let numberOne = [1, 2, 3];
console.log("numberOne", numberOne);
let numberTwo = [4, 5, 6];
console.log("numberTwo", numberTwo);

//concat 2 arrays - spread operator
let numberArray = [...numberOne, ...numberTwo];
console.log("numberArray", numberArray);

//expand the string using spread operator
let myName = "My Name is Satya";
console.log(myName);
console.log(...myName); //splits string into single characters

//adding elements in array
//adding elements in the end
numberOne = [...numberOne, 10, 11, 12];
console.log("numberOne", numberOne);

//adding elements in the begin
numberOne = [13, 14, 15, ...numberOne];
console.log("numberOne", numberOne);

//adding elements in the middle
numberOne = [21, 22, 23, ...numberOne, 31, 32, 33];
console.log("numberOne", numberOne);
/* Objects */
let myObj1 = { fname: "Satya", skills: ["LWC", "JS"] };
console.log("myObj1", myObj1);
let myObj2 = { lname: "buddharaju", country: "India" };
console.log("myObj2", myObj2);

//concat objects using spread operator
let finalObject = { ...myObj1, ...myObj2 };
console.log("finalObject", finalObject);

//copy of an Array and Object

let myFavCars = ["Maruti", "TATA", "MAHINDRA"];
console.log("myFavCars", myFavCars);
let myCopyFavCars = myFavCars;
console.log("myCopyFavCars", myCopyFavCars);

myCopyFavCars.push("SUZUKI");
console.log("myFavCars", myFavCars); //original array also changing because of deep copy both array sharing common reference in memory
console.log("myCopyFavCars", myCopyFavCars);

let myCopyFavCars1 = [...myFavCars]; // if you use spread operator to copy then it will call shallow copy, it wont change the original array
myCopyFavCars1.push("NISSAN");
console.log("myFavCars", myFavCars);
console.log("myCopyFavCars1", myCopyFavCars1);

let mySkills = { OS: "Microsoft", language: "JAVA", CRM: "Salesforce" };
console.log("mySkills", mySkills);
let mySkills1 = mySkills;
mySkills1.AI = "Chat GPT";
console.log("mySkills", mySkills);
console.log("mySkills1", mySkills1);
