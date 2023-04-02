// // tyoe conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number("lee"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type corecion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); // 10
// console.log("23" + "10" + 3); // "23103"
// console.log("23" / "2"); // 11.5

// // 5 falsy values: 0, "", undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;
// if (money) {
//   console.log("Dont spend if all");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("Yay, height is defined");
// } else {
//   console.log("height is UNDEFINED");
// }

// const age = 18;
// if (age === "18") {
//   console.log("You just become an adult");
// }

// if (age == "18") {
//   console.log("You just become an adult");
// }

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

const day = "monday";
switch (day) {
  case "monday":
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  default:
    console.log("Not a valid day");
}
