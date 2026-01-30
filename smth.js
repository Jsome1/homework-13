// 1) სახელი
let firstName = "გიორგი";

// 2) გვარი
let lastName = "ხვედელიძე";

// 3) სრული სახელი
const fullName = firstName + " " + lastName;
console.log(fullName);

// 4) დაბადების წელი
const dateOfBirth = 2004;
console.log(`მე დავიბადე ${dateOfBirth} წელს.`);

// 5) ასაკის გამოთვლა
let currentYear = 2026;
let calculateAge = currentYear - dateOfBirth;
console.log(calculateAge);

// 6) ლუწი / კენტი / ნული
let checkNumber;
const inputNumber = Number(prompt("შეიყვანეთ რიცხვი:"));

if (inputNumber === 0) {
    checkNumber = "Zero";
} else if (inputNumber % 2 === 0) {
    checkNumber = "Even";
} else {
    checkNumber = "Odd";
}

console.log(checkNumber);
