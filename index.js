
var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

board.on('ready', function(){

		// var pin = new five.Led(10);

        // the light will switch on
    //     // pin.high();
		//
		// // the light will switch off after 2 seconds
		// setTimeout(function(){
	  //       // pin.low()
		// }, 2000);
		// pin.blink();

		var light = new five.Led(13);
		// light.on();
			// light.off();
			light.blink();
});
