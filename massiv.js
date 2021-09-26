'use strict';

const arr = [5,2,13,6,8];
//arr[99] = 0;
console.log(arr.length); //состоит из последнего индекса в массиве +1 0.1.2.3.4

arr.sort(compareNum); // сортировка цифр с callback функцией
console.log(arr);

function compareNum(a, b) { // алгоритм сортировки цифр ШАБЛОН
	return a - b;
}
// Методы массивов
//arr.pop(); //удаляет элемент в конце массива
//arr.push(10); //добавляет элемент в конец массива

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

//console.log(arr);

// Перебираем элементы в массиве
// for (let i=0; i<arr.length; i++){
//	console.log(arr[i]);
// }

// for (let value of arr){ Работает с массиво подобными конструкциями не работает с объектами
//	console.log(value);  можно использовать break continue
// }

//Метод forEach
//аргумент item элемент который перебираем, номер по порядку, ссылка на массив
arr.forEach(function(item, i, arr){
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

// Методы транформации массива .map .every/some .filter .reduce




