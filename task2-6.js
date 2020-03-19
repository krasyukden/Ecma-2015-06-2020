// ok. В скобках  `` не видна инфо !!!
"use ctrict";
class Circle{
	constructor(numberX, numberY, radius){
		this._numberX = numberX;
		this._numberY = numberY;
		this._radius = radius;
		this._newX = 0;
		this._newY = 0;
	}	
	isCorrectData(value){
		if(typeof value == "number" && !isNaN(value)){
		return true;
		}
		else{
			return false;
		}
	}
	get radius(){
		return this._radius;
	}
	set radius(value){
		if(this.isCorrectData(value)){
		this._radius = value;
		}
	}
	get longCircle(){
		return 2 * Math.PI * this._radius;
	}
	
	static set radius(value){
		if(this.isCorrectData(value)){
		this._radius = value;
		}
	}
	static get longCircle(){
		return 2 * Math.PI * this._radius;
	}
	static createNewCircle(numberX, numberY, radius){
		return new Circle(numberX, numberY, radius);//Object.assign  - 2й вар ??
	}
	set newX(value){
		this._newX = value;
			
	}
	set newY(value){
		this._newY = value;
			
	}	
	isCorrectDataNew(){	
		if(Math.pow(Math.abs(Math.abs(this._numberX) - Math.abs(this._newX)),2) + Math.pow(Math.abs((Math.abs(this._numberY)) - Math.abs(this._newY)),2) < Math.pow(this._radius,2)){
			return true;
		}
		else{
			return false;
		}		
	}
	methodToString(){
		return `X = ${this._numberX}; Y = ${this._numberY}; radius = ${this._radius} `//toString()
	}
	
}
	
let circl =  new Circle(0, 0, 10);
let circlNew =  Circle.createNewCircle(11, 33, 89);
let circlCopy = Object.assign({}, circl); 
circl.radius = 5;
console.log(circl.radius);
console.log(circl.longCircle);
circl.radius = 10;
console.log(circl.longCircle);
console.log(circlNew._radius);
console.log(circlNew._numberX);
console.log(circlCopy._radius);

circl.newY = -5;
circl.newX = 11;
console.log(circl.isCorrectDataNew());
console.log(circl.methodToString());
/*
Задание №6. Классы
Напишите класс Круг и реализуйте следующий функционал:
1. Определите конструктор, который запрашивает координаты центра круга, его радиус и инициализирует объект;
2. Определите метод получения длины окружности для текущего объекта (L = 2 * π * R);
3. Определите статический метод, который принимает радиус и возвращает длину окружности для заданного радиуса (L = 2 * π * R);
4. Определите метод получения объекта-круга, который возвращает копию текущего объекта;
5. Определите статический метод, который принимает координаты центра круг, его радиус и возвращает объект круга с заданными параметрами;
6. Определите метод проверки попадания точки в круг;
7. Определите метод преобразования текущего состояния объекта в символьную строку (toString()).*/
