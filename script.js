let symbol = Symbol();
console.log(typeof symbol);


// Имя для символа
let sym_1 = Symbol('asd');
console.log(sym_1);

// Для различных символов можно использовать одно и то же имя.
let sym_2 = Symbol('asd');
console.log(sym_1 == sym_2);


// Создание символов методом for
let sym_3 = Symbol.for('qaz');
let sym_4 = Symbol.for('qaz');
console.log(sym_3 == sym_4);


// Метод "keyfor" позволяет получить имя символа
let symName = Symbol.keyFor(sym_3);
console.log(symName);


// Символы и объекты
let person = {
	name: 'Jack',
	age: 20,
	[Symbol.for('pass')]: 'qwerty',
	[Symbol.for('login')]: 'J_1990'
}
console.log(person);
console.log(person[Symbol.for('pass')]);


// Метод "getOwnPropertySymbols" позволяет просмотреть все символы у объекта
console.log(Object.getOwnPropertySymbols(person));