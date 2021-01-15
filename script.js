// Коллекция MAP

// используем экземпляр класса "map"
let coll_map = new Map();

// добавляем в коллекцию элементы которым соответствуют ключи записанные в трех различных вариантах: строка, число и булево 
// полный синтаксис
/*
coll_map.set('строка', 'string');
coll_map.set(25, 'number');
coll_map.set(true, 'boolean');
*/
// сокращенный синтаксис
coll_map
	.set('строка', 'string')
	.set(25, 'number')
	.set(true, 'boolean');

// при выводе элементов в "get" передается не индекс элемента а его необычный ключ
console.log(coll_map.get(25));
console.log(coll_map.get(true));

// метод "size" хранит общее количество записей в коллекции
console.log(coll_map.size);

// создание коллекции без метода "set" - при таком подходе к созданию MAP главное чтобы аргументом new Map был итерируемый объект
let new_map = new Map([
	['text', 'string'],
	[52, 'number'],
	[false, 'станция Бубулёво'],
	[158, 'это сумма']
])
console.log(new_map.get(false));

// метод "has" позволяет проверить наличен=е в коллекции какого-либо ключа; он вернет true или false
console.log(new_map.has(52));

// Удаление элементов в коллекции MAP
console.log(new_map.size);
// метод "delete" удаляет запись с переданным аргументом или ключом; он возвращает true если такая запись была найдена, иначе вернется false
console.log(new_map.delete(158));
console.log(new_map.size);
// метод "clear" удаляет все записи
console.log(new_map.clear());
console.log(new_map.size);




// Коллекция SET - используется для хранения множества значений; при этом каждое значение уникальное
let user_1 = {name: 'тов. Максим'};
let user_2 = {name: 'Рудой'};
let user_3 = {name: 'Костян'};
let users = new Set();
users
	.add(user_1)
	.add(user_2)
	.add(user_3)
	.add(user_1)
	.add(user_1)
// Хоть первый элемент добавлен 3 раза результат будет не 6 а 3
console.log(users.size);
// Метод "forEach" может применяться и к коллекциям MAP
users.forEach(user => console.log(user))