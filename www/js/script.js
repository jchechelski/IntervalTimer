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
    
    var przerwa = document.getElementById('przerwa').value,
        czas = document.getElementById('czas').value,
        przejscia = document.getElementById('przejscia').value,
        zapisz = document.getElementById('zapisz');
    
    var timeSet = parseInt(czas),
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
            if(timeSet===0 || timeSet <= 0) {
                clearInterval(timer);
                timeSet = czas;
                time.innerHTML = timeSet;
            }
        },speed);
    }
    
    function pauseF() {
        clearInterval(timer);        
    }
    
    function restartF() {
        clearInterval(timer);
        timeSet = czas;
        time.innerHTML = timeSet;
    }
    
    play.addEventListener('click', go);
    pause.addEventListener('click', pauseF);
    restart.addEventListener('click', restartF);
    
    
    zapisz.addEventListener('click', function() {
        
        czas = document.getElementById('czas').value
        timeSet = parseInt(czas);
        //navigator.notification.alert(timeSet);
        time.innerHTML = timeSet;
        
        // start click
        eventFire(document.getElementById('start'), 'click');
    });

    
    // click simulation
        function eventFire(el, etype){
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
      }
}
    
}

