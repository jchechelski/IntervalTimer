(function() {
    window.onload = function() {
        document.addEventListener('deviceready', onDeviceReady)
    }
})();



//function init() {
//	document.addEventListener("deviceready",onDeviceReady, false);
//}

function onDeviceReady() {
	navigator.notification.beep(1);
}
