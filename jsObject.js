console.log("JS Object");

let myDetails = {
  fName: "Satya",
  lName: "Buddharaju",
  age: 45,
  skills: ["Admin", "Apex", "LWC", "JS"],
};
console.log("myDetails", myDetails);
console.log("typeof myDetails", typeof myDetails);

//json.stringify : convert object to string
let myDetailsString = JSON.stringify(myDetails);
console.log("myDetailsString", myDetailsString);
console.log("typeof myDetailsString", typeof myDetailsString);

//json.parse : convert string to Object
let myObject = JSON.parse(myDetailsString);
console.log("myObject", myObject);
console.log("typeof myObject", typeof myObject);

//modifying object
//1. "." using .dot notation
//2. using [] notation

//Add dob to myObject
//if no property available with dob then it will add the new property.
myObject.dob = "01/01/1980";
console.log("myObject", myObject);

//if property available with age then it will update the property.
myObject.age = 2025 - 1980;
console.log("myObject", myObject);
// [] -> whenever we have to populate property dynamically
//    -> If you want space in property then we can use [], we cannot use .
myCountry = "Country";
myObject[myCountry] = "India";
console.log("myObject", myObject);

myObject["City Name"] = "Vizag";
console.log("myObject", myObject);

//Access the value from Object ".", []
let myCountry1 = myObject.Country;
console.log("myCountry", myCountry1);

let myCity = myObject["City Name"];
console.log("myCity", myCity);
