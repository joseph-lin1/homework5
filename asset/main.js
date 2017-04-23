$(".btn").on("click", function(){
	$(".all-questions").css("display", "block")
	$(".btn").css("display", "none")
	    run();
})

// Stopwatch
    var number = 31;
    var intervalId;
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;

      $(".timer").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
        $(".all-questions").css("display", "none")
        $(".results").css("display", "block")
      }
    }

    function stop() {
      clearInterval(intervalId);
    }



var right = 0;
var wrong = 0;
var left = 5;


$( ".first" ).on( "click", function() {
	value = $(".first[type='radio']:checked").val();

	// IF VALUE == RIGHT ONE
	if( value == "gohan"){
	   right++;

	} if (value != "gohan"){
	// IF VALUE != RIGHT ONE
		wrong++;

	// } if ($(".first").is(":not(:checked)")) {
	} else {
		left--;
		
	}
	$(".right").html("You have " + right + " right")
	$(".wrong").html("you have " + wrong + " wrong")
	$(".unanswered").html("you have " + left + " unanswered questions left")
})

// SECOND QUESTION

$( ".second" ).on( "click", function() {
	secondvalue = $(".second[type='radio']:checked").val();

	// IF VALUE == RIGHT ONE
	if( secondvalue == "goku"){
	   right++;

	}  else if (secondvalue != "goku"){
	// IF VALUE != RIGHT ONE
		wrong++;

	} else {
		left--;
		
	}
	$(".right").html("You have " + right + " right")
	$(".wrong").html("you have " + wrong + " wrong")
	$(".unanswered").html("You have " + left + " unaswered questions")
})

// THIRD

$( ".third" ).on( "click", function() {
	thirdvalue = $(".third[type='radio']:checked").val();

	// IF VALUE == RIGHT ONE
	if( thirdvalue == "false"){
	   right++;

	}  else if (thirdvalue != "false"){
	// IF VALUE != RIGHT ONE
		wrong++;

	} else{
		left--;
		
	}
	$(".right").html("You have " + right + " right")
	$(".wrong").html("you have " + wrong + " wrong")
	$(".unanswered").html("You have " + left + " unaswered questions")
})

// FOURTH


$( ".fourth" ).on( "click", function() {
	fourthvalue = $(".fourth[type='radio']:checked").val();

	// IF VALUE == RIGHT ONE
	if( fourthvalue == "4"){
	   right++;

	}  else if (fourthvalue != "4"){
	// IF VALUE != RIGHT ONE
		wrong++;

	} else {
		left--;
		
	}
	$(".right").html("You have " + right + " right")
	$(".wrong").html("you have " + wrong + " wrong")
	$(".unanswered").html("You have " + left + " unaswered questions")
})

// FIFTH

$( ".fifth" ).on( "click", function() {
	fifthvalue = $(".fifth[type='radio']:checked").val();

	// IF VALUE == RIGHT ONE
	if( fifthvalue == "7"){
	   right++;

	}  else if (fifthvalue != "7"){
	// IF VALUE != RIGHT ONE
		wrong++;

	} else {
		left--;
		
	}
	$(".right").html("You have " + right + " right")
	$(".wrong").html("you have " + wrong + " wrong")
	$(".unanswered").html("You have " + left + " unaswered questions")
})

// If right answer is checked ... add to right array
// If wrong answer is checked ... add to wrong array
// If answered is checked ... add to left array