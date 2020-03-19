//ok. но get currentChannel() - не раб !! Maximum call stack size exceeded
"use strict";

let tv = {
	currentChannel: 1, 
	get getCurrentChannel(){
		return this.currentChannel;
	},
	nextChannel(){
		this.currentChannel++;
	},
	previousChannel(){
		this.currentChannel--;
	},
	//set currentChannel(number){ ошибка !!!
	setChannel(number){
		this.currentChannel = number;
	}
};
tv.nextChannel();
console.log(tv.currentChannel);//2
tv.previousChannel();
console.log(tv.currentChannel);//1
tv.setChannel(5);
//tv.currentChannel = 5; ошибка !!!
console.log(tv.currentChannel);//5


/*
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.
*/
