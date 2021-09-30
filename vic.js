'use strict';

let sum = +prompt('Введите сумму зарплаты');
let res = sum / 100 * 15;
let nalog = (res+sum) / 100 * 10;
alert('Премия 15%. На руки ' + (res+sum));
alert('Налоги -10%. На руки ' + (res-nalog+sum));
alert('В магазине -190. Осталось ' + ((res-nalog+sum)-190));
alert('Жене половину отдал. Осталось ' + (((res-nalog+sum)-190))/2);

	
	
