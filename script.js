class myFirstJsClass {
	constructor(name = myFirstJsClass.defTask(), work = 'без работы'){
		this.who = name,
		this.job = work,
		myFirstJsClass.counter += 1
	}
	task_1(){
		console.log(`My name is ${this.who} and I work in ${this.job}`);
	}
	static defTask(){
		return 'Имя не указано';
	}
	get isDone(){
		return 'Работа выполнена'
	}
}
// Создание статического свойства (мы обращаетмя не к объекту а к классу)
myFirstJsClass.staticVar = 'Lorem ipsum dolor sit amet';
myFirstJsClass.counter = 0;

let obj_1 = new myFirstJsClass('Poul','Web-development');
console.log(obj_1);
obj_1.task_1();

let obj_2 = new myFirstJsClass('Константин Сёмин','агитация и пропаганда');
console.log(myFirstJsClass.counter);

let obj_3 = new myFirstJsClass();
console.log(obj_3);
console.log(obj_3.isDone);