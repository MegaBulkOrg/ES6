let persone = {
	name: 'Pavlick',
	age: 35,
	address: {
		city: 'Saint-Petersburg',
		index: 197374
	}
}

// Тут используются фигурные скобки
let {name, age} = persone;
console.log(name, age);

// Дефолтные значения (справа от знака равенства находится пустой объект)
let {job='it-web', hobby='pranks'} = {};
console.log(job, hobby);

// Если имена переменных отличаются от имен свойств объекта (тут синтаксис такой: имяСвойства:имяПеременной и если поменять их местами то будет ошибка)
let {name:who, age:years} = persone;
console.log(who, years);

// Если массив многомерный
let {address:{city, index, street='st. Ho Shi Min'}} = persone;
console.log(city, index, street);

// Использование деструктивного присваивания объекта в качестве параметра функции
function getData({name, age}){
	console.log(name, age);
}
getData(persone);

// Использование деструктивного присваивания для возврата нескольких значений из функции
function getInfo({name, age}){
	return {name, age}
}
// -- из функции у нас вернулся объект
let info = getInfo(persone);
console.log(info);
// -- значение свойств объекта присвоим в переменные
let {name:mingzi, age:old} = getInfo(persone);
console.log(mingzi, old);