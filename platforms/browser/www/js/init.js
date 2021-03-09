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
					$(".card-panel .name").text(data.name);
					$(".card-panel .gender").text(data.gender);
					$(".card-panel .type").text(data.type);
					$(".card-panel .country").text(data.country);
					$(".card-panel .tags").html('');
					for (const tag of data.tags)
						$(".card-panel .tags").append(`<div class="chip">${tag.name}</div>`);
				});
			});
		})
	})
})(jQuery);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	$('.tabs').tabs({
		"swipeable": true
	});
}