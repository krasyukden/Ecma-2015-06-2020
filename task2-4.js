// ok
"use strict";
class Geo {
	constructor (){
		//this._figure = figure;
		this._numberX = 0;
		this._numberY = 0;
	}
	//static isCorrectData(value){ - не раб !!
	isCorrectData(value){
		if(typeof value == "number" && !isNaN(value)){
		return true;
		}
		else{
			return false;
		}
	}
	get numberX(){
		return this._numberX;
	}
	get numberY(){
		return this._numberY;
	}
	
	set numberX(value){
		if(this.isCorrectData(value)){
			this._numberX = value;
		}
	}
	setNumberY(value){// 2 й вар
		if(this.isCorrectData(value)){
			this._numberY = value;
		}
	}
}
// Наследник прямоугольник
class Rectangle extends Geo{
	
	_diagonalRectangle = 1; //если с  this - ошибка!!!
	info(){
		console.log(this._diagonalRectangle);
		console.log(this._numberX);
		console.log(this._numberY);
	}
	setDiagonalRectangle(value){
		if(this.isCorrectData(value)){
			this._diagonalRectangle = value;
		};
	}
	
}
// Наслед Круг
class Circle extends Geo{
	
	_diagonalCircle = 6; //если с  this - ошибка!!!
	info(){
		console.log(this._diagonalCircle);
		console.log(this._numberX);
		console.log(this._numberY);
	}
	setDiagonalCircle(value){
		if(this.isCorrectData(value)){
			this._diagonalCircle = value;
		};
	}
	
	
}
let rect = new Rectangle();
let circ = new Circle();
rect.numberX = 5; 
//rect.setNumberX(5);
rect.setNumberY(7);
console.log(rect.numberX);
rect.setDiagonalRectangle(10);
rect.info();
circ.numberX = 55;
circ.setNumberY(77);
console.log(circ.numberX);
circ.setDiagonalCircle(100);
circ.info();