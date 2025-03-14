console.log("Destructuring");

let myFavFruits = ["Mango", "Banana", "Apple"];
console.log("myFavFruits", myFavFruits);
//Destructuring Array
//Order matter in destructuring
let [myFavFruit1, myFavFruit2, myFavFruit3] = myFavFruits;
console.log("myFavFruit1", myFavFruit1); //Mango
console.log("myFavFruit2", myFavFruit2); //Banana
console.log("myFavFruit3", myFavFruit3); // Apple

let [myFavFruit4, , myFavFruit5] = myFavFruits;
console.log("myFavFruit4", myFavFruit4); //Mango
console.log("myFavFruit4", myFavFruit5); // Apple

let favFruit = ["Mango", "Banana", "Apple", "Guava"];
let [favFruit1, favFruit2, ...remainingFruits] = favFruit; ///... here will be called rest operator in JS
console.log("favFruit1", favFruit1); //Mango
console.log("favFruit2", favFruit2); // Banana
console.log("remainingFruits", remainingFruits); //["Apple", "Guava"]

//Destructuring Object

let myDetails = {
  fname: "Satya",
  lname: "Buddharaju",
  age: 45,
};
console.log("myDetails", myDetails);
let { fname, lname, age } = myDetails; // you need to give exact property values
console.log("fname", fname); // Satya
console.log("lname", lname); // Buddharaju
console.log("age", age); // 45

//in Object you need not give space, here the sequence doesn't matter where name matters
let myObj = {
  OS: "Linux",
  CRM: "Siebel",
  AI: "ChatGPT",
};

let { OS, CRM } = myObj;
console.log("OS", OS); // Linux
console.log("CRM", CRM); // Siebel

//You can give alias name to property in Object
let { AI: artificial } = myObj;
console.log("AI", artificial); //chatGPT , artificial here is alias name
