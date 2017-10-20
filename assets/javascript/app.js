$(document).ready(function()
{
	var timernumber = 5;
	var timerIntervaId;


	$(".questionpage").fadeOut();
    $(".finalPage").fadeOut();

	// this will fade out the initial start page 
    $("#buttonGenerator").click(function(){
        $(".starterpagebody").fadeOut();
        $("#buttonGenerator").fadeOut();
        // fades in the question page on button click
        $(".questionpage").fadeIn();
        timerRun();
        winLossRecord();        

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

    function winLossRecord()
    {
        $(".finalPage").html("You Right and Wrong Record is: ")

    }


});

