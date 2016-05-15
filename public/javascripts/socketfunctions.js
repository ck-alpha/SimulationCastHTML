// Client Side
var socket = io();

// emit patient monitor selected values on submission
$('form').submit(function(){
//    socket.emit('description scenario', $('#description'.val()));
    socket.emit('heart rate', $('#hr').val());
    socket.emit('o2 sats', $('#sat').val());
    socket.emit('systolic bp', $('#sbp').val());
    socket.emit('diastolic bp', $('#dbp').val());
    socket.emit('endtidal co2', $('#etco2').val());
    return false;
  });

// if receive message, change patient monitor and scenario description
  socket.on('description scenario', function(msg){
    document.getElementById('descriptionv').innerHTML = msg;
  });
  socket.on('heart rate', function(msg){
    document.getElementById('hrv').innerHTML = msg;
  });
  socket.on('o2 sats', function(msg){
    document.getElementById('satv').innerHTML = msg;
  });
  socket.on('systolic bp', function(msg){
    document.getElementById('sbpv').innerHTML = msg;
  });
  socket.on('diastolic bp', function(msg){
    document.getElementById('dbpv').innerHTML = msg;
  });
  socket.on('endtidal co2', function(msg){
    document.getElementById('etco2v').innerHTML = msg;
  });
//  socket.on('time seconds', function(msg){
//    document.getElementById('time').innerHTML = msg;
//  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
