
var event=require('events');

var eventemitter=new EventSource.eventemitter();

var connecthandler= function connected(){;

var connecthandler=function connected(){
    console.log('connection succesful.');

    eventemitter.emit('data_received');
}

eventemitter.on('connection',connecthandler);

eventemitter.on('data_received',function(){
    console.log('data received succesful.');
});
eventemitter.emit('connection');
console.log("progam ended.");
}
