//  ok,  undefinedМир Привет  - undefined удалил!!!
"use strict";
var res = ``;
function format(s, ...v) {
   // Ваш код
  if(v.length >= s.length) {
	   for(let i = v.length - 1; i >= 0; i--){
	   		let tmp = `${v[i]}${s[i]}`;
			res = res + tmp;
			
		}
	}
	else {
		for(let j = s.length - 1; j >= 0; j--){
			let tmp = `${v[j]}${s[j]}`;
			res = res + tmp;
		
		}
	}
	res = res.substr(9);//undefined обрезал
   return res; //ok
}

/*let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);*///раб
/*let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);*///раб
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);//раб






 //let res = s.split("").reverse().join("");
    //let res = v.reverse();//[3, 2, 1]
     
   /*let tmp = s;
   /*for(let i = v.length - 1; i >= 0; i--)
   let tmp = `${v[i]}`+ `${s[i]}`;
   return res += tmp;*/
   
 /*`${v[v.length-1]}${s[v.length-1]}${v[v.length-2]}${s[v.length-2]}${v[v.length-3]} `*/
 //3 = 2 + 1 
 
 
 //`${v.reverse()}${s[1]}`;//3,2,1 + 
  //`${v.reverse()}${s.reverse()}`;// Cannot assign to read only property '0' of object '[object Array]'
 //`${v[v.length-1]}${s[v.length-1]} `;//Мир Привет
 //`${[s, v] = [v, s]}`//Мир ,Привет ,//<->,left,right
 //`${[s `${v}`] = [`${v}` s]}`;
//return [s, v] = [v, s];//0: ["Мир "]1: (2) ["Привет 
//`v[v.length-1]`;