$(document).ready(function () {

	AOS.init({
		duration: 1000,
		disable: 'mobile'
	});

  Waves.attach('.btn', ['waves-light']);
  Waves.init();

	function footer() {
		var height = $(".page-footer").outerHeight();
		$(".footer-wrapper").outerHeight(height);
	};
	footer();
	$(window).on("resize", footer);

	// $('.owl-1').owlCarousel({
 //    margin: 15,
 //    nav: false,
 //    dots: true,
 //    responsive: {
 //      0: {
 //        items: 1
 //      },
 //      576: {
 //        items: 2
 //      },
 //    }
	// });

});