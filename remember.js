'use strict';

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

let shortNames = names.filter((name) => {
    return name.length < 5;
})

console.log(shortNames);

let answers = ['IvaN', 'ANn', 'KseNia', 'VoldeMar'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count=0) {
    console.log(`Данные: ${data} в количестве ${count}`)
}
fetchData('something');

function max (a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67, 97);

const arr1 = [1,2,5];
      arr2 = [34,45,24];

const res = Math.max(...arr1, 140, ...arr2);
console.log(res);

const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rigths: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};

//const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

const x = 25, y = 10;

const coords = {
    x: x,
    y: y,
    calcSq: function() {
        console.log(this.x * this.y);
    }
}

const coords = {
    x,
    y,
    calcSq() {
        console.log(this.x * this.y);
    }
}

console.log(coords);
coords.calcSq();


const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rigths: 'user'
};

const {name: {first, second}, pass, rigths} = user;

console.log(name, pass);

function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect()

const num = [3, 5, 7, 8];
const [, , e, ] = num;
console.log(e);

const numbers = [[3, 5], [7, 8]];

const [[a, b], [c, d]] = numbers;
console.log(a, b, c);

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}
// country.gender.male[0];

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleAdult, femaleUnder18);