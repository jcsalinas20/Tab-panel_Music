(function () {
  $(function () {
    $('.sidenav').sidenav();
  });
})(jQuery);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  
  $('.tabs').tabs({"swipeable":true});
}