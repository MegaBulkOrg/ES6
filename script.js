const NAMES = ['Маркс','Энгельс','Ленин','Сталин'];


// Цикл FOR IN (стандарте ES5)
//-- в результате мы получим список ключей массива
for (let man in NAMES)
{
	console.log(man);
}
//-- перепишем чтобы вывести имена
for (let index in NAMES)
{
	console.log(NAMES[index]);
}


// Цикл FOR OF (стандарте ES6)
for (let man of NAMES)
{
	console.log(man);
}