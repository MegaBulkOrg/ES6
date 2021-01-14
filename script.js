// Абстрактный пример
const prom = new Promise((resolve, reject) => {
	throw new Error('что-то пошло не так...');	
	setTimeout(_ => {
		if (true)
		{resolve('promise completed')}
		else
		{reject('')}
	}, 3000)
});
prom
	.then(data => console.log(data))
	.catch(error => console.log(error));


// Конкретный пример
fetch('https//jsonplaceholder.typicode.com/posts/')
	// получаем от сервера данные и применяем к ним метод json
	.then(res => res.json())
	// далее преобразованные данные выводим в консоль
	.then(data => console.log(data))
	// если сервер вернет ошибку она отлавливается в catch 
	.catch(_ => console.log('что-то пошло не так...'));