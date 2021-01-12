// Создание методов и свойств и обращение к ним - синтаксис ES5
var name = 'Poul';
var age = '35';
var sex = 'male';
var person = {
	name: name,
	age: age,
	sex: sex,
	txt: function(){
		console.log('My name is '+this.name);
	}	
}
console.log(person);
person.txt();


// Создание методов и свойств и обращение к ним - синтаксис ES6
let hobby = 'Punk Rock';
let work = 'IT';
let live = 'S.-Pb';
let info = {
	// если имя свойства совпадает с именем присваиваемой ему переменной то можно написать лишь имя свойства - значение присваивается автоматически
	hobby, work, live,
	// слово function не надо добавлять при создании метода
	hi(){
		console.log(`I like ${work} very much`);
	}
}
console.log(info);
// вариант обращения к свойствам и методам объекта через квадратные скобки
console.log(info['live']);
info['hi']();


// Если имя свойства присвоено в переменную то внутри квадратных скобок можно указать не строку а имя переменной
// ----- если есть переменная значением которой выступает имя свойства то в квадратных скобках можно указать имя этой переменной
let varName = 'hobby';
console.log(info[varName]);


// В стандарте ES6 появилась возможность создавать динамические ключи для свойств объектов
// ----- динамизм заключается в том что можно менять название свойства объекта просто меняя значение переменной в которой указано имя свойства
let qaz = 'secret';
let newInfo = {
	[qaz]: 'Lorem ipsum dolor sit amet'
}
console.log(newInfo);


// Js можно создавать специальные свойства которые внутри объекта работают как методы а снаружи работают как свойства. Эти свойства называются GET (aka геттеры) и SET (aka сеттеры)
// GET и SET - cинтаксис ES5
Object.defineProperty(person, 'pass', {
	get: function(){
		console.log(this.name+'_'+this.age);
	}
})
// тут "pass" это метод но круглые скобки для его вызова не нужны (как будто это свойство)
person.pass;


// GET и SET - cинтаксис ES6
let myNewObj = {
	ip: '125.32.11.176',
	// после "get" двоеточие не ставится!
	get showIp() {
		console.log(`Your IP is ${this.ip}`);
	}
}
// тут так же "showIp" является методом который можно вызвать не используя скобки
myNewObj.showIp;