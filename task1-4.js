// ok, но forEach - не раб !!!

"use strict"
var k = 0;
var res = 1;
//var i  = 0;
function mul(...rest) {
   //for(let i in rest){
	//function resMul (value){
	for(var i = 0; i < rest.length; i++){	   
		   //return rest.forEach (function(value){
		      
	   if(typeof rest[i] == "number"){
		   	   
		   res = res * rest[i];
		   k++;
			   
	   }
	   else if(k == 0){
		   return 0;
	   }
      
  
	}
  //});
    return res;
   //return rest.forEach(resMul);
}


//console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

/*
Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
Нельзя использовать свойство arguments, но в функцию mul() можно добавить один параметр.
*/