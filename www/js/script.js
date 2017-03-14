(function() {
    window.onload = function() {
        init();
    }
})();


function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
    navigator.notification.alert('dziala');
    
    var play = document.getElementById('play'),
        pause = document.getElementById('pause'),
        restart = document.getElementById('restart'),
        time = document.querySelector('.time');
    
    var timeSet = 5,
        speed = 1000;
    
    time.innerHTML = timeSet;
    
    
    function go() {
        navigator.notification.beep(1);
        //play.disable = true;
        timer = setInterval(function() {
            --timeSet;
            time.innerHTML = timeSet;
            //if(timeSet < 4) {
            //  navigator.notification.beep(1);
            //}
            if(timeSet===0) {
                clearInterval(timer);
                timeSet = 5;
                time.innerHTML = timeSet;
            }
        },speed);
    }
    
    function pauseF() {
        clearInterval(timer);        
    }
    
    function restartF() {
        clearInterval(timer);
        timeSet = 5;
        time.innerHTML = timeSet;
    }
    
    play.addEventListener('click', go);
    pause.addEventListener('click', pauseF);
    restart.addEventListener('ontouchstart', restartF);
}

