// 1. a

let values = [-12,1,3];

if((values[0]*values[1]*values[2]) > 0 ){
    console.log('PLUS');
}
else{
    console.log('MINUS')
}

// 1.b

let weight = 10;

switch (weight) {
    case 10:
        console.log('Pen');
        break;
    case 200:
        console.log('Cat');
        break;
    case 3000:
        console.log('Dog');
        break;
    case 40000:
        console.log('Horse');
        break;
    case 5000000:
        console.log('Car');
        break;
     default:
        console.log('A truckload of bunnies');
}

// 2.a

let sum = 0;
let rightMargin = 1000;

for(let i=0 ; i < rightMargin; i++){
    sum+=i;
}

// or

let sumGauss= (rightMargin-1)*(rightMargin)/2;

// 2.b

let number = 1;

while (number<10000) {
    number*=10;
    console.log(number);
}

// 3. a

let numArray = [];

for(let i=0; i<50;i++){
    numArray.push(i);
}

let addedNumbers = [89, 99, 120, 412, 124];

addedNumbers.map( x => numArray.push(x));

// 3. b

numArray.pop(numArray.length);

// 4

const person={
    age: 0,
    firstname: 'X Æ A-Xii',
    lastname: 'Musk'
}

// 5

function signum(number1,number2,number3){
    if((number1*number2*number3) > 0 ){
        console.log('PLUS');
    }
    else{
        console.log('MINUS')
    }
}

// 6

numArray.filter( x => (x % 3) === 0);

// 7

function Human(name){
    this.name = name;
    this.__proto__.__proto__ = Object.create(null);
}

Human.prototype.presetation = function (){
    console.log('HI I\'M ' + this.name);
}

var awesomeHuman = new Human('Albert Einstein');
console.log(awesomeHuman);