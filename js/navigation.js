// Acc
$(document).on("click", ".promotional-codes .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".promotional-codes .menu div").removeClass("active");
		$(".promotional-codes ul li").removeClass("active");

		$(this).addClass("active");
		$(".promotional-codes ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".promotional-codes ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".promotional-codes ul").height(listItemHeight + "px");
	}
});
