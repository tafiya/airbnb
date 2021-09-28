// var lnb = $("#lnb").offset().top;
// $(window).scroll(function() {
//   	var window = $(this).scrollTop();

//     if(lnb <= window) {
//       $("#lnb").addClass("fixed");
//     } else {
//       $("#lnb").removeClass("fixed");
//     }
// })

// $(window).scroll(function() {
// 	var scroll = $(window).scrollTop();
// 	console.log(scroll);
// 	if (scroll >= 50) {
// 		console.log('a');
// 		$(".header").addClass("change");
// 	} else {
// 		console.log('a');
// 		$(".header").removeClass("change");
// 	}
// });

  // var icon = document.getElementById("icon");
  var icon = document.querySelector(".dark-mode");
    
  icon.onClick = function(){
    window.alert("dark");
      // document.body.classList.toggle("dark-theme");
      // if(document.body.classList.contains("dark-theme")) {
      //     icon.src = "images/day-mode.png"
      // }else{
      //     icon.src = "images/dark-mode.png"
          
      // }
  }