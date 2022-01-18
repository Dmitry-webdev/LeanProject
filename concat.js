'use strict';
// Динамическая типизация - это возможность одного типа
// данных превращатся в другой.

// Все что мы получаем от пользователя ВСЕГДА будет
// типом данных строка !!!
// (иногда эти строки нужно преобразовывть в другой тип данных)

// To String

// 1) console.log(typeof(String(null));
// 2) конкатинация console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';


// To Number

//1) console.log(typeof(Number('4')));
//2) унарный плюс console.log(typeof(+'5'));
//3) console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN - будет превращатся в false
// всё остальное будет true

// 1)
let switcher = null;

if (switcher) {
	console.log('Working...');
}

switcher = 1;

if (switcher) {
	console.log('Working...');
}

// 2) console.log(typeof(Boolean('4')));

// 3) console.log(typeof(!!"4444")); - редкий прием
