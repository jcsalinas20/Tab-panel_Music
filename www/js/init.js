(function () {
	$(function () {
		$('.sidenav').sidenav();
		$("#submit").on("click", () => {
			$.ajax({
				url: `http://musicbrainz.org/ws/2/artist/?query=${$("#name").val()}&fmt=json`
			}).done(function (res) {
				$(".collection-body").html('');
				for (const item of res.artists) {
					$(".collection-body").append(`<a href="#!" class="collection-item">${item['name']}</a>`);
					$(".collection-body a").last().data("body", item);
				}
				$(".collection-item").on("click", (e) => {
					var tabsInstance = M.Tabs.getInstance($("#tabs"));
					tabsInstance.select("details-tab");
					const data = $(e.target).data("body");
					console.log(data);
					$("#details-tab .id").html(`<span>ID:</span> ${data.id}`);
					$("#details-tab .name").text(data.name);
					$("#details-tab .gender").text((data.gender) ? data.gender : 'null');
					$("#details-tab .type").text(data.type);
					$("#details-tab .country").text(data.country);
					$("#details-tab .tags").html('');
					for (const tag of data.tags)
						$("#details-tab .tags").append(`<div class="chip">${tag.name}</div>`);
				});
			});
		})
		$("#cameraTakePicture").click(() => cameraTakePicture());
	})
})(jQuery);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	$('.tabs').tabs({
		"swipeable": true
	});
}

function cameraTakePicture() {
	navigator.camera.getPicture(onSuccess, onFail, {
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL
	});

	function onSuccess(imageData) {
		var image = document.getElementById('myImage');
		image.src = "data:image/jpeg;base64," + imageData;
	}

	function onFail(message) {
		alert('Failed because: ' + message);
	}
}