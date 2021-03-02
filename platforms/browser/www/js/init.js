(function () {
  $(function () {
    $('.sidenav').sidenav();
  });
})(jQuery);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

  $('.tabs').tabs({
    "swipeable": true
  });

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-data.p.rapidapi.com/totals",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "90d3685484msh1ae35a123c2c56ep17d351jsn73235bdb03b1",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
  };

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });
}