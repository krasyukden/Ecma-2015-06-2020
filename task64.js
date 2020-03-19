// 
"use strict";
//Прибавление к тек дате N дней  - ОК
/*function addTwoDays(date){
	 var currentDate = new Date();
	 var res = new Date(currentDate.setDate(date));
	 return res;
}
console.log(addTwoDays(2));Tue Feb 18 2020 16:37:03 GMT+0200 (Восточная Европа, стандартное время)*/


/*var currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 2);*/ //OK

function addTwoDays(date){
	 var currentDate = new Date(date);
	 //var res = new Date(currentDate.setDate(2));//2 число
	 //var res = currentDate.getDate() + 2;//10
	 var addDays = currentDate.setDate(2);//1583100000000
	 //var res = currentDate;//тек дата
	 //var res = addDays.toDateString();//не ф-ция
	 return addDays;
	//console.log(addDays.toDateString());
	
	
}
var newDate = addTwoDays("3/8/2020");
console.log(newDate);



//console.log(res);// 1582036838077
//console.log(currentDate);// Tue Feb 18 2020 16:37:03 GMT+0200 (Восточная Европа, стандартное время)

//Напишите функцию addTwoDays(date), которая принимает объект типа Date и добавляет к дате данного объекта два дня.

//return addDays = currentDate.setDate(date).toDateString();// не ф-ция
	
	/*addDays = currentDate.setDate(date);
	return "Date: " + addDays;*/
	
	/*addDays = d.setDate(date);// не ф-ия
	return addDays;*/
	
	//console.log(addDays);
	//var res = addDays.toDateString();// не ф-ция
	//return res;
/*addDays.toDateStr = function(){// 
	addDays.toDateString();
}*/

/*addDays.toDateStr = function(){
	return addDays.toDateString();
}*/

//addDays.toDateString();

//var res = addTwoDays(2);



//console.log(currentDate.toDateString());// 
//console.log(addDays.toDateStr());// ошибка не ф-ция