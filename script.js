class Members {
	constructor(name){
		this.name = name
	}
	greet(){
		console.log(`Hello, ${this.name} !`);
	}
}
class MembersInfo {
	boobs = '3+'
}


// Создание экземпляра класса
const Myra = Reflect.construct(Members, ['Мира'], MembersInfo);
// Из-за третьего параметра созданный объект является не объектом класса Members а объектом класса MembersInfo
console.log(Myra);
// Вот тут получим false
console.log(Myra.__proto__ == Members.prototype);
// Вот тут получим true
console.log(Myra.__proto__ == MembersInfo.prototype);


class Books {
	constructor(name){
		this.name = name
	}
	greet(){
		console.log(`Я купил книгу ${this.name}`);
	}
}


const Murakami = Reflect.construct(Books, ['Хроники заводной птицы']);
// Метод Reflect.apply позволяет вызывать какие либо методы с нужным контекстом и с нужными параметрами
Reflect.apply(Murakami.greet, {name: 'Норвежский лес'}, [])
// Метод Reflect.ownKeys позволяет увидеть собственные ключи объекта (ключи методов не отображается так как он попадает в прототип)
console.log(Reflect.ownKeys(Murakami));
// Вот так можно добавить новое свойство
Murakami.price = '500 рублей';
console.log(Murakami);
// Вот так можно заблокировать добавление новых свойств
Reflect.preventExtensions(Murakami);
Murakami.shop = 'в ТРК Бакланский';
console.log(Murakami);
// Вот так можно узнать заблокирован ли объект (если да то результат будет false)
console.log(Reflect.isExtensible(Murakami));