// Вариант с обещаниями: создаем обещание fetchData которое в случае успешного выполнения возвращает список имен. Сразу обещание выполняем.
const fetchData = _ => Promise.resolve({
	data: ['Тузин', 'Гномик', 'Степашка']
})
// Вариант с обещаниями: создаем метод getNamesData в котором вызываем обещание и отображаем полученные данные в консоли
const getNamesData_p = _ => {
	fetchData()
		.then(data => {
			console.log(data);
			return 'сделано';
		})
}
// Вариант с обещаниями: вызываем метод getNamesData
getNamesData_p();


//То же самое только с Async/Await
const getNamesData_a = async _ => {
	console.log(await fetchData());
	return 'сделано';
}
getNamesData_a();


// Async/Await: перехват ошибки
const asd = _ => Promise.reject('не получилось');
const func = async _ => {
	try {console.log(await asd())}
	catch(error) {console.log(error)}
}
func();


// Сравнение подходов при вложенности обещаний: вариант с обещаниями
const load_p = _ => {
	Promise.resolve(47)
		.then(a => {
			Promise.resolve(74)
				.then(b => console.log(b-a))
		})
}
load_p();
// Сравнение подходов при вложенности обещаний: вариант с Async/Await
const load_a = async _ => {
	const a = await Promise.resolve(47);
	const b = await Promise.resolve(74);
	console.log(b-a);
}
load_a();