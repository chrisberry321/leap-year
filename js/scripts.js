//Business Logic

var leapYear = function(year) {

	// return ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0));

	if ( year > 0 && ((year % 4 === 0) && (year % 100 !== 0)|| (year % 400 === 0))) {
		return true;
	} else if (year === NaN) {
		return false;
	} else {
		return false;
	}

	// if (year % 100 === 0) {
	// 	return false;
	// } else if
	// 	(year % 4 === 0) {
	// 	return true;
	// } else {
	// return false;
	// }
};

// UI Logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
     var year = parseInt($("input#year").val());
     var result = leapYear(year);

    $(".year").text(year);

		if (year === NaN || year < 0 ) {
			alert("OMG INVALID INPUT");
			$(".not").text("not");
		}
    else if (!result) {       // same as writing if (result === false)
      $(".not").text("not");
			$("#result").show();
    } else {
      $(".not").text("");
			$("#result").show();
    }


    event.preventDefault();
  });
});
