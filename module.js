// Первый вариант экспорта
export let txt = 'qwerty_vbn';

// Второй вариант экспорта
let asd = 'ghj';
let qaz = '4125';
export {asd, qaz};

// Экспорт класса
export class Person {
	constructor(name){
		this.name = name
	}
}

// Экспорт функции
export function sayHello(){
	console.log('Hello, world!')
}

// Отдельный экспорт класса и функции 
// export {Person, sayHello}

// Переименование экспортируемых переменных (уже экспортированных)
export {asd as first, qaz as second};
// Переименование экспортируемых переменных (новых)
let string_1 = 'Lorem ipsum...';
export {string_1 as str};

// Экспорт по умолчанию
export default function Now(){
	var now = new Date();
	console.log(now);
}