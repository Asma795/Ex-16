// let guestLeast: string[] = ["Ali", "Dua", "Saba"];
// for (let i = 0; i < guestLeast.length; i++) {
//   console.log(
//     `Dear friend, ${guestLeast} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
//   );
// }
// let guestLeast: string[] = ["Ali", "Dua", "Saba"];
// guestLeast.pop();
// guestLeast.push("Ali");

// for (let i = 0; i < guestLeast.length; i++) {
//   console.log(
//     `Dear friend, ${guestLeast} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
//   );
// }
let guestLeast: string[] = ["Ali", "Dua", "Saba"];

console.log(
  `Hello Guests, I would like to Inform, I got more room available so would like to invite 3 more people\n`
);

guestLeast.unshift("Robert");
guestLeast.splice(3, 0, "Thomas");
guestLeast.push("Davies");

for (let i = 0; i < guestLeast.length; i++) {
  console.log(
    `Hello Dear ${guestLeast[i]}, I would like to invite you to join me tomorrow dinner at 9pm`
  );
}
