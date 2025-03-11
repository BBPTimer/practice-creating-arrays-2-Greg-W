let greetings = Array(7).fill("Hello");
console.log(greetings);

greetings.fill("Hi", 2, 5);
console.log(greetings);

let multiplesOfTen = Array(5);
for(let i = 0; i < 5; i++) {
    multiplesOfTen[i] = i * 10;
}
console.log(multiplesOfTen);