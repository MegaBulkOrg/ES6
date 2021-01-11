// Функция
function nihao(name){
	console.log('Привет '+name+'!');
	console.log(`Hello ${name}!`);
}
nihao('Товарищ Максим');


// Многострочность
function letter (login, pass, email){
	return`
		Здравствуйте, ${login}!
		Вы успешно подали заявку на регистрацию у нас в системе.
		Ваш пароль: ${pass}.
		Сейчас Вам на почтовый ящик ${email} придет письмо активации Вашего аккаунта.
	`
}
console.log(letter ('Max', 'as33d3cd45', 'asd@asd.ru'));


// Тегирование (тут смысл в том чтобы текст константы выделить жирным)
const MUSIC = 'Punk Rock';
console.log(boldText`Мне очень нравится ${MUSIC}`);
function boldText(litArr, value){
	console.log(litArr, value);
	return litArr[0]+value.bold()+litArr[1];
}