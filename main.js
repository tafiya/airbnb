// var lnb = $("#lnb").offset().top;
// $(window).scroll(function() {
//   	var window = $(this).scrollTop();

//     if(lnb <= window) {
//       $("#lnb").addClass("fixed");
//     } else {
//       $("#lnb").removeClass("fixed");
//     }
// })

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	console.log(scroll);
	if (scroll >= 50) {
		console.log('a');
		$(".header").addClass("change");
	} else {
		console.log('a');
		$(".header").removeClass("change");
	}
});