class Task {
	constructor(title = 'название объекта'){
		this.title = title,
		this.done = false,
		this.vall1 = 25,
		this.vall2 = 31
	}
	finish(){
		this.done = true;
	}
}


class SubTask extends Task{
	constructor(title){
		super (title)
	}
	finish(){
		//вместо дублирования строки из метода в классе родителя можно написать так
		super.finish();
		console.log(`${this.title} выполнена`);
	}
	get calc(){
		return this.vall2 / this.vall1;
	}
}


let task = new Task('главная задача');
let subtask = new SubTask('подзадача');

task.finish();
subtask.finish();

console.log(task);
console.log(subtask);

console.log(subtask.calc);