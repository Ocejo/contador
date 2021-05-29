'use strict'
const minuto = 1;
let myDate = new Date(),
 hours = myDate.getHours(),
 minutoEvento = getMinutoEvento(minuto);
var end = new Date(`05/29/2021 ${hours}:${minutoEvento}`);
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
         myDate = new Date(),
         hours = myDate.getHours(),
         minutoEvento = getMinutoEvento(minuto);
         end = new Date(`05/29/2021 ${hours}:${minutoEvento}`);
        clearInterval(timer);
        redNow();
        // document.getElementById('countdown').innerHTML = 'EXPIRED!';
        //
        // return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + ' dias, ';
    document.getElementById('countdown').innerHTML += hours + ' horas, ';
    document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
    document.getElementById('countdown').innerHTML += seconds + ' segundos';
}

timer = setInterval(showRemaining, 1000);

function getMinutoEvento(min) {
    let total=0;
    for (let i = 0; i < 59 ; i++) {
        let myDate = new Date(),
        minutes = myDate.getMinutes()
        total=min+total
        if(total > minutes) break;
    }
    return total;
}

function redNow(){
    showRemaining();
}
