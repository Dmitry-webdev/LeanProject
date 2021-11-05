let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));


// console.log.dir([1,2,3]);



// Большой прототип
const soldier = {
	health: 400,
	armor: 100,
	sayHello: function(){
		console.log("Hello");
	}
};

// Протопипно наследуется
const jonh = Object.create(soldier);

// const jonh = {
//	health: 100
// };

//устаревший формат не используется
// jonh.__proto__ = soldier;

//новый формат
// Object.setPrototypeOf(jonh, soldier);
console.log(jonh.armor);
jonh.sayHello();
