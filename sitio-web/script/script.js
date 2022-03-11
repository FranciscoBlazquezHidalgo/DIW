$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

function play(){

    document.getElementById('player').play();

}

function pause(){

document.getElementById('player').pause();

}

function high(){

document.getElementById('player').volume+=0.1;

}

function low(){

document.getElementById('player').volume-=0.1;

}