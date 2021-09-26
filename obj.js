'use strict';

const obj = new Object(); //лучше не использовать

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function(){  // создаем элемент в объекте
		console.log('Test');
	}   
};

// Деструктуризация объекта
const {border, bg} = options.colors; //вытаскиваем отдельные элементы в переменную
console.log(border);

options.makeTest(); // запускаем созданный метод в объекте options

 console.log(Object.keys(options).length); // кол-во элементов в объекте при помощи встроенного метода
 //	console.log(options.name);
	
//	delete options.name; // удаление св-ва name
//	console.log(options);
	
	
	// перебор объекта
// метод for       of  для объекта не работает

// let counter = 0; // переменная счетчик
	for (let key in options) {
		if (typeof(options[key]) === 'object'){
			for (let i in options[key]){
				console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
			//	counter++;
			}
			
		}else{
			console.log(`Свойство ${key} имеет значение ${options[key]}`);
		//	counter++;
		}
	}
//	console.log(counter);
	
	