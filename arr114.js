//  ок 
"use strict"
var arr = [6, 8, -6, 4, -5, -3];//
var n = arr.length;//6
var tmp;

for(var j = 0; j < arr.length; j++){
	//console.log(arr);
	for(var i = j; i < arr.length; i++){	
	if (arr[j] > arr[i + 1]){	
			tmp = arr[i + 1];
			arr[i + 1] = arr[j];
			arr[j] = tmp;
			console.log(arr);
		}
	else{//console.log(1); 
	//continue;
		;
	}	
		
	}
	
	
}
console.log(arr);// [-6, -5, -3, 4, 6, 8]
// ok пузырьком
/*for(var j = 0; j < arr.length; j++){
	console.log(arr);//
	for(var i = j + 1; i < arr.length; i++){	
	if (arr[i] < arr[j]){	//&& i < arr.length/2)
			tmp = arr[j];
			arr[j] = arr[i];
			arr[i] = tmp;
		}
		
		
	}
	
	
}
console.log(arr);*/



/*Array114. Дан массив A размера N (≤6). Упорядочить его по возрастанию методом сортировки простыми вставками: сравнить элементы A1 и A2 и, при необходимости меняя их местами, добиться того, 
чтобы они оказались упорядоченными по возрастанию; затем обратиться к элементу A3 и переместить его в левую 
(уже упорядоченную) часть массива, сохранив ее упорядоченность; повторить этот процесс для остальных элементов, 
выводя содержимое массива после обработки каждого элемента (от 2го до N-го). 
При выполнении описанных действий удобно использовать прием «барьера», записывая очередной элемент перед его обработкой в дополнительный элемент массива A0.*/