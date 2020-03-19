"use strict";


// Работает
// Ваш код
var arr = [5, 1, 4, 2, 3];

//Array.prototype.sortDesc = function (f, arr){
	
	


Array.prototype.sortDesc = function (){
	//return this.arr; показ неотсорт массива
	//return Array.sort();Array.sort is not a function
	//Array.prototype.sort().reverse();
	//this.arr = this.arr.sort().reverse();
	//Array.sort().reverse();//arr.sortDesc is not a function
	
	//arr = this;
	this.sort().reverse();
	
};
	
/*arr.sortDesc = function(){ // Добавил метод !!!
		arr.sort().reverse();
}*/		
function newArr (arr){
	Array.call(this, arr);
	//this.arr;
}
newArr.prototype = Object.create(Array.prototype);
newArr.prototype.constructor = newArr;

/*newArr.prototype.sortDesc = function(){
	return this.arr.sort().reverse();
}*/

//arr = new Array(); 



arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1] 

/* Вар - работ
arr.sortDesc = function(){ // Добавил метод !!!
		arr.sort().reverse();
};



arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1] // sortDesc: ƒ] - в конце!!!
*/



/*Расширьте тип объектов Array методом sortDesc(), который сортирует массив по убыванию.*/





/*Array.prototype.myUcase = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
Make an array, then call the myUcase method:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();*/
/*
https://stackoverflow.com/questions/27896936/adding-methods-to-array-prototype-so-i-can-apply-it-to-array-object-but-it-is-gi*/

//js add own method to array