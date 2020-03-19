// ok
"use ctrict";

class Square{
	constructor (){
	this._side = 2;
	}
	isCorrectData(value){
		if(typeof value == "number" && !isNaN(value)){
		return true;
		}
		else{
			return false;
		}
	}
	set side(value){
		if(this.isCorrectData(value)){
			this._side = value;
		}
	}
	info(){
		return this._side * 4;
	}
}
class Cube extends Square{
	

	/*info(){
			return this._side * 12;//Периметр куба
	}*/ //РАБОТАЕТ Полиморфизм БЕЗ расширения
	// Полиморфизм с расширением - площать куба
	info(){
		return super.info() * 3;// Вызов метода родителя
		
	}
}
let squ = new Square();
let cub = new Cube();
//squ.setSquareSide(3);
squ.side = 3;
console.log(squ.info());
console.log(cub.info());
/*
Задание №5. Классы
Напишите класс Квадрат, определите защищенное свойство для хранения значения стороны. Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, который возвращает периметр.
На основе этого класса создайте класс Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).
*/