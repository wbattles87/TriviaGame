$(document).ready(function()
{
	var timernumber = 10;
	var timerIntervaId;
	var correct=0;
	var incorrect=0;


	$(".questionpage").fadeOut();
    $(".finalPage").fadeOut();

	// this will fade out the initial start page 
    $("#buttonGenerator").click(function(){
        $(".starterpagebody").fadeOut();
        $("#buttonGenerator").fadeOut();
        // fades in the question page on button click
        $(".questionpage").fadeIn();
        timerRun();


    });


    $("#submitbutton").click(function()
    {
        $("#submitbutton").fadeOut();
        // fades in the question page on button click
        $(".questionpage").fadeOut();
        $(".finalPage").fadeIn();

    });
        


    function timerRun()
    {
    	timerIntervaId = setInterval(decrement, 1000);
    }

    function decrement()
    {
    	timernumber--;
    	$(".instructions").html(timernumber);
    	if ( timernumber ===0)
    	{
    		stop();
            $(".questionpage").fadeOut();
            $(".finalPage").fadeIn();

            

    		// put in the fade out of the questions page 
    		// put in the fadein of the results page
    	}
    }

	function stop() 
	{
		//  Clears our intervalId
		//  We just pass the name of the interval
		//  to the clearInterval function.
		clearInterval(timerIntervaId);
	}


	// so make a 2 classes, 1 for correctbuttonclass and 1 for incorrectbuttonclass
	$(".correctbuttonclass").on("click", function()
	{

		correctFunction();

	});



	$(".incorrectbuttonclass").on("click", function()
	{

		incorrectFunction();

	});

    function incorrectFunction()
    {

    	incorrect += 1;
    	console.log(incorrect);
		$(".wronganswers").text("You have " +incorrect+ " answers incorrect");
    }



    function correctFunction()
    {

    	correct += 1;
    	console.log(correct);
		$(".rightanswers").text("You have " +correct+ " answers correct");
    }






});

