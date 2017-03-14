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
	navigator.notification.beep(1);
}

