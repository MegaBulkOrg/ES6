import {txt, first, second, Person, sayHello, str} from "./module.js";

console.log(txt, first, second, str);

let PersonName = new Person('Стася');
console.log(PersonName.name);

sayHello();

// При дефолтном импорте скобки у названия того что импортируется не нужны
import Now from "./module.js";
Now();

/*
//Импорт всего что экспортируется из файла ('all' это не ключевое слово а просто переменная)
import * as all from "./module.js";
console.log(all.txt, all.first, all.second, all.str);
let PersonName = new all.Person('Стася');
console.log(PersonName.name);
all.sayHello();
*/