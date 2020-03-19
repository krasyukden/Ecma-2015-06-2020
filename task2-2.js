//set and get не раб!!!    
"use strict";
let mp3 = {
	currentTrack: 1,
	currentVolume: 5,
	switchState: false,
	playState: false,
	switchOn(){
		this.switchState = true;
	}, 
	switchOff(){
		this.switchState = false;
	},
 	play(){
		if(this.switchState == true) {
			this.playState = true;
		}
	},
	stop(){
		this.playState = false;
	},
	nextTrack() {
		this.currentTrack++;
	},
	previousTrack() {
		this.currentTrack--;
	},
	nextVolume() {
		this.currentVolume++;
	},
	previousVolume() {
		this.currentVolume--;
	},
	/*set currentTrack(newTrack){
		this.currentTrack = newTrack;
	},
	set currentVolume(newVolume){
		this.currentVolume = newTrack;
	},*/
	/*get currentTrack(){
		return this.currentTrack;
	},
	get currentVolume(){
		return this.currentVolume;
	}*/
}
console.log(mp3.switchState);
mp3.switchOn();
console.log(mp3.switchState);
mp3.nextTrack();
console.log(mp3.currentTrack);
mp3.previousVolume();
console.log(mp3.currentVolume);
mp3.currentTrack = 10;
mp3.currentVolume = 8;
console.log(mp3.currentVolume);
console.log(mp3.currentTrack);

mp3.switchOff();
console.log(mp3.switchState);
mp3.play();
console.log(mp3.playState);

