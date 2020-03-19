
// дополнительная перменная для второго числа
// не ок
"use strict"
var a = [6, -3, -3, 4, 5, 6, 7, 7, 9, 8, 10, -3, 10, 8, 6];//должно быть 6,-3,-3,6,-3,6
var n = a.length;//15
var arr = [];
var k = 0;
var m;
var tmpI;
var tmpJ;


	for (var i = 0; i < a.length; i++) {
		for(var j = i + 1; j < a.length; j++){
			// 1. все a[j] не равны a[i] => удалить a[i]
         // 2. a[i] совпал токо раз с a[j] => удалить a[i] и a[j]
         // 3. ничего не делать
			
			if(a[i] != a[j]){
				if(j == a.length -1){
				//console.log([i]);
				//a[i] = null;
				a.splice(i, 1);
				
				break;
				}
			}
			
			else {
				
				k++;
				console.log(k);
				if(1 == k){
					tmpI = a[i];
					tmpJ = a[j];
					
					
					//a[i] = null;
					//a[j] = null;
					a.splice(i, 1);
					a.splice(j, 1);
					//k = 0;
				} else{
					a[i] = tmpI;
					a[j] = tmpJ;
					k = 0;
				}
				
				/*if(k >= 2){
					arr[i + 1] = a[i];
					arr[i] = tmp;
					k = 0;
				}
					if(j == a.length - 1){
						k = 0;
						
					}*/
				
				
				
			
			}
		}
	}
console.log(a);// [-3, 5, 7, 8, 6, 6, 6] - не прав
/*for (m = 0; m <= a.length; m++){
	// для проверки
	
	console.log(a[m]);// [7, -3, 8, 6 ]
}	*/	


//var newArr = a.map(condit);
//console.log(newArr);


/*
for (var i = 0; i < a.length; i++){
	for(var j = i + 1; j < a.length; j++){
		//console.log(j);// до 15
		
		if(a[i] == a[j]){
			k++;
			//console.log(k);
			//console.log(j);//
			//arr[i] = a[i];
			if(k >= 2){

				arr[i] = a[j];
				//continue;
			}
			else if(j == a.length){
				k = 0;
				//arr[i] = a[i];
				//console.log(k);
				//console.log(j);
			}
			//console.log(k);
			
		}
	}	
}*/


/*Array98. Дан целочисленный массив размера N. Удалить из массива все элементы, встречающиеся менее трех раз, и вывести размер полученного массива и его содержимое.*/