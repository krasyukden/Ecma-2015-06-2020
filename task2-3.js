// ok, есть вопросы - get set не раб

"use strict";
class Tv {
	constructor(name){
		this.name = name;
		this.currentChannel = 1; 
	}
	nextChannel(){
		this.currentChannel++;
	}
	previousChannel(){
		this.currentChannel--;
	}
	setChannel(number){
		this.currentChannel = number;
	}
	/*set setCurrentChannel(number){
		this.currentChannel = number;
	}*/ //не работ
	get getCurrentChannel(){
		return this.currentChannel;
	} //get currentChannel()  - Maximum call stack size exceeded ???

}

let lg = new Tv("lg");
lg.nextChannel();
console.log(lg.getCurrentChannel);//2
lg.previousChannel();
console.log(lg.getCurrentChannel);//1
lg.setChannel(5);
console.log(lg.getCurrentChannel);
//lg.setCurrentChannel(5);
//console.log(lg.getCurrentChannel);//lg.setCurrentChannel is not a function


