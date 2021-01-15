function *gen(){
	console.log('Шаг № 1');
	console.log('Шаг № 2');
	// ключевое слово "yield" возвращает промежуточные данные функции-генератора (объект со свойствами value и done) и отдает контроль над функцией
	yield 're-re ;)';
	yield 'ку-ку ;)';
	console.log('Шаг № 3');
	console.log('Шаг № 4');
	console.log('Шаг № 5');
}
let iterator = gen();
// методом "next" мы запустили выполнение функции "gen", после чего выполнение дошло до ключевого слова "yield", вернуло результат и остановилось
console.log(iterator.next());
// вызов метода "next" второй раз продолжило выполнение функции "gen"
console.log(iterator.next());


function *example_1(){
	console.log('Шаг № 1');
	// здесь ключевое слово "yield" в скобках так как без этого будет ошибка
	let res = (yield) * 5;
	console.log('Результат равен ' + res);
}
let ex_iterator_1 = example_1();
//console.log(ex_iterator.next(8));
//console.log(ex_iterator.next(5));
ex_iterator_1.next();
// значение указанное в качестве аргумента функции "next" подставится вместо "yield"
ex_iterator_1.next(2);


function *example_2(){
	try {
		yield 100;
		yield 200;
		yield 300;	
	} catch (err) {
		console.log('Атас! '+err);
	}
}
let ex_iterator_2 = example_2();
console.log(ex_iterator_2.next());
/*
при помощи метода return выполнение генератора остановлено на втором шаге то есть свойство "done" стало равным "true"
строка с использованием метода return закомментирована чтобы не мешать тестированию метода throw
*/
// console.log(ex_iterator_2.return());
/*
при помощи метода throw можно получить ошибку и если в этот метод отправить значение (например создание ошибки)
то созданную нами ошибку можно увидеть в консоли НО не на вкладке с сообщениями а на вкладке с ошибками
чтобы ее отловить и переместить на вкладку с сообщениями нужно воспользоваться конструкцией try...catch 
*/
console.log(ex_iterator_2.throw(new Error('Что-то пошло не так')));
console.log(ex_iterator_2.next());