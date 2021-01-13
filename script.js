// Извлечение данных из массива - синтаксис ES5
const books = ['Капитал', 'Манифест', 'Происхождение семьи, частной собственности и государства'];
let Kapital = books[0];
let Manifest = books[1];
let Engels = books[2];
console.log(Kapital, Manifest, Engels);

// Извлечение данных из массива - синтаксис ES6
const music = ['АУ', 'МТ', 'Ступа', 'Мураками', 'БП'];
// --на конце пишется не произвольное название переменной а название массива
let [Au, Mt, Stupa, Murakami, Bp] = music;
console.log(Au, Mt, Stupa, Murakami, Bp);

// let [Au, Mt, Stupa, Murakami, Bp] = ['АУ', 'МТ', 'Ступа', 'Мураками', 'БП'];


// Присваивание значения по умолчанию
const girls = ['Codi Vore', 'Sapphire Blue', 'Jessie June', ['Hitomi','Tanaka']];
let [codi, sapphire, jessie, [hit, tan], other='и так далее'] = girls
console.log(codi, sapphire, jessie, hit, tan, other);


// Пример с функциями
function calc_1([a, b]){
	console.log(b/a);
}
calc_1([75, 57]);


// Возврат нескольких значений
function calc_2([a, b]){
	return [a, b];
}
let vals = calc_2([24, 42]);
console.log(vals);
// Вытаскивание значений из возвращаемого функцией массива
let [x, y] = calc_2([91, 19]);
console.log(x, y);