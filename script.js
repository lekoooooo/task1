// გვაქვს რიცხვების მასივი, შექმენი ახალი რიცხვების მასივი სადაც უკვე დაემატება გარომაგებული რიცხვები,
//let numbers = [2, 4, 6, 8, 10]; - არსებული მასივი
//let doubledNumbers = []; ახალი მასივი რომელშიც forEach-ის საშულებით იქნება 4-8-12-16-20 რიცხვები

let numbers = [2, 4, 6, 8, 10];
let doubledNumbers = [];

console.log(numbers[2]);

numbers.forEach(function (singleNum) {
  doubledNumbers.push(singleNum * 2);
});

console.log(doubledNumbers);
