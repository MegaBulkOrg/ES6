const valid = {
	get(target, prop) {
		return prop in target ? target[prop] : `Поле ${prop} в объекте нет`
	},
	set(target, prop, value) {
		if(value.length > 2){
			Reflect.set(target, prop, value)
		} else {
			console.log('Длинная должна быть более 2 символов')
		}
	}
}


// Создаем объект
const form = {
	login: 'Poul',
	pass: '12345'
}

// Создаем прокси объект
const formProxy = new Proxy(form, valid);
// Смотрим что получилось
console.log(formProxy);
// Получаем доступ к свойству объекта
console.log(formProxy.login);
// Получаем доступ к несуществующему свойству объект (работает геттер)
console.log(formProxy['username']);
// Изменяем значение свойства (работает сеттер)
formProxy.pass = 'i';
console.log(formProxy);


function alert(txt){
	console.log('[msg]: ', txt)
}
const formAlert = new Proxy(alert,{
	apply (target, thisArg, argArray){
		if (argArray.length == 1){
			Reflect.apply(target, thisArg, argArray)
		} else {
			console.log('Количество аргументов не совпадает');
		}
	}
});
formAlert('Рубята, атас!');
formAlert();