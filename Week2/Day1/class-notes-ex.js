// EX1
let addressNumber = 4;
let addressStreet = 'Betzalel';
let country = 'Israel';

let GlobalAddress = addressStreet + ' ' + addressNumber + ", in " + country;

console.log("I live in " +GlobalAddress);

// EX2
let birth = 1990
let fut_year = 2055
let fut_age = (fut_year - birth)

console.log("I will be " + fut_age + " in " +fut_year)

// EX 3 - ARRAYS

let arr = ['cat','dog','fish','rabbit','cow'];

var pet = arr[1];
console.log(pet);

arr[3] = "horse";
console.log(arr);

console.log(arr.length);

