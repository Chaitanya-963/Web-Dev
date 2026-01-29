// use rest parameter to accept any number of scores and return the total.

// function getScore(...scores) {
//   let total = 0;
//   scores.forEach(function (val) {
//     total = total + val;
//   });
//   return total;
// }

// console.log(getScore(45, 65, 87, 24, 35, 12, 2));

// function test(){
//   if(true){
//     var a = 1;    // function-scoped
//     let b = 2;    // block-scoped
//     const c = 3;  // block-scoped
//   }
//   console.log(a); // 1
//   console.log(b); // ReferenceError
//   console.log(c); // ReferenceError
// }

// test()

// Objects

// const chaitanya = {
//   firstName: "Chaitanya",
//   lastName: "Mehetre",
//   age: 2016 - 2003,
//   job: "Number One Coder",
//   friends: ["Prem", "Mukul", "Ganu"],
// };
// console.log("--------------------------------------");

// console.log(chaitanya);
// console.log("--------------------------------------");

// console.log(chaitanya.firstName);
// console.log(chaitanya["firstName"]);

// console.log("--------------------------------------");

// We can not write this with dot(.) notation it only usefull when we write bracket([]) notation
// const nameKey = "Name";
// console.log(chaitanya["first" + nameKey]);
// console.log(chaitanya["last" + nameKey]);

// console.log("****************************************************");

// const interestedIn = prompt(
//   "What you want to know about chaitanya? Choose between firstName,lastName,job,age,friends",
// );

// if (chaitanya[interestedIn]) {
//   console.log(`${interestedIn}: ${chaitanya[interestedIn]}`);
// }
// else{
//   console.log("Wrong request! Try again...");

// }

// chaitanya.location = "Pune"
// chaitanya["instagram"] = "@chaitanya_mehetre09"

// console.log(`${chaitanya["firstName"]} has ${chaitanya.friends.length} friends and his best friend is called ${chaitanya.friends[0]}`);

const chaitanya = {
  firstName: "Chaitanya",
  lastName: "Mehetre",
  birthYear: 2003,
  job: "Number One Coder",
  friends: ["Prem", "Mukul", "Ganu"],
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    this.hasdrivingLicense = this.age >= 18;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasdrivingLicense ? "a" : "not a"} driver's license`;
  },
};

console.log(chaitanya.getSummary());

// console.log(chaitanya.name);
