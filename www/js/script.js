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
    
    var przerwaHTML = document.querySelector('.break'),
        rundaHTML = document.querySelector('.set');
    
    
    
    var timeSet = parseInt(czas),
        runda = 1,
        speed = 1000;
    
    przerwaHTML.innerHTML = 'przerwa: ' + przerwa;
    rundaHTML.innerHTML ='Runda ' + runda + '/' + przejscia;
    time.innerHTML = timeSet;
    
    var checkOnOff = false;
    function go() {
        if(checkOnOff == false) {
            navigator.notification.beep(1);

            play.style.background = '#ed1616';

            timer = setInterval(function() {
                --timeSet;
                time.innerHTML = timeSet;
                if(timeSet===0 || timeSet <= 0) {
                    ++runda;
                    clearInterval(timer);
                    breakTimer = setInterval(function() {
                        if(runda > przejscia) {
                            clearInterval(timer);
                            clearInterval(breakTime);
                        }
                        --przerwa;
                        przerwaHTML.innerHTML = 'przerwa: ' + przerwa;
                        rundaHTML.innerHTML ='Runda ' + runda + '/' + przejscia;
                        if(przerwa == 0 || przerwa <= 0) {
                            
                            clearInterval(breakTimer);
                            timeSet = czas;
                            przerwa = document.getElementById('przerwa').value; 
                            przerwaHTML.innerHTML = 'przerwa: ' + przerwa;
                            time.innerHTML = timeSet;
                            checkOnOff = false;
                            go();
                        }
                    },speed);
                }
            },speed);
        }

        
       checkOnOff = true; 
    }
    
    function pauseF() {
        var tempBreak = przerwa;
        var tempRunda = runda;
        runda = --tempRunda;
        przerwa = tempBreak;
        var tempTime = timeSet;
        timeSet = ++tempTime;
        checkOnOff = false;
        play.style.background = '#0b0b0b';
        clearInterval(timer); 
        clearInterval(breakTimer);
    }
    
    function restartF() {
        clearInterval(timer);
        clearInterval(breakTimer);
        timeSet = czas;
        time.innerHTML = timeSet;
        runda = 1;
        przerwaHTML.innerHTML = 'przerwa: ' + przerwa;
        rundaHTML.innerHTML ='Runda ' + runda + '/' + przejscia;
        play.style.background = '#0b0b0b';
        checkOnOff = false;
    }
    
    play.addEventListener('click', go);
    pause.addEventListener('click', pauseF);
    restart.addEventListener('click', restartF);
    
    
    zapisz.addEventListener('click', function() {
        
        przerwa = document.getElementById('przerwa').value;
        czas = document.getElementById('czas').value;
        przejscia = document.getElementById('przejscia').value;
        
        timeSet = parseInt(czas);
        //navigator.notification.alert(timeSet);
        time.innerHTML = timeSet;
        przerwaHTML.innerHTML = 'przerwa: ' + przerwa;
        rundaHTML.innerHTML ='Runda ' + runda + '/' + przejscia;
        

    });

    

    
}

