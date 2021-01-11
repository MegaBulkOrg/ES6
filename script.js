// Надо объединить два массива
const IP1 = [125, 375, 144, 755, 900];
const IP2 = [2, 5, 1, 0, 81];
//--выводим каждый из массивов
console.log(IP1);
console.log(IP2);
//--так получится массив в котором будет 2 элемента - изначальные массивы
const WRONG_TOTAL = [IP1, IP2];
console.log(WRONG_TOTAL);
// Реализация до ES6 (Array обязательно с большой буквы чтобы не спутали с названием переменной которой нет)
// Array.prototype.push.apply(IP1, IP2);
// console.log(IP1);


// Надо создать общий объект со всеми свойствам из двух массивов
console.log([...IP1, ...IP2]);

const A = {
	a: 'первая фича',
	b: 'вторая фича',
};
const B = {
	c: 'first focus',
	d: 'focus on me',
};
const C = {
	...A,
	...B
};
console.log(C);


//Есть массив и функция - нужно так вызвать функцию чтобы данные из массива стали аргументами этой функции 
const ARR = [5, 7, 1, 3, 9];
function sum(a,b,c, d, e){
	return a+b+c+d+e;
}
console.log(sum(...ARR));


//Тут первые 2 аргумента будут отдельными а остальные 3 - в рамках массива (REST - можно назвать по-другому)
function rest (arg1, arg2, ...REST)
{
	console.log(arg1, arg2, REST);
}
rest(1,2,3,4,5);