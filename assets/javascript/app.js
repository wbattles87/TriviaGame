$(document).ready(function()
{
	var timernumber = 1000;
	var timerIntervaId;
	var correct = 0;
	var incorrect = 0;

	$("#qoneathree").attr("value", "correct");
	$("#qtwoathree").attr("value", "correct");
	$("#qthreeaone").attr("value", "correct");
	$("#qfouratwo").attr("value", "correct");
	$("#qfiveathree").attr("value", "correct");
	$("#qsixaone").attr("value", "correct");

	$("#qoneaone").attr("value", "incorrect");
	$("#qoneatwo").attr("value", "incorrect");
	$("#qtwoaone").attr("value", "incorrect");
	$("#qtwoatwo").attr("value", "incorrect");
	$("#qthreeatwo").attr("value", "incorrect");
	$("#qthreeathree").attr("value", "incorrect");
	$("#qfouraone").attr("value", "incorrect");
	$("#qfourathree").attr("value", "incorrect");
	$("#qfiveaone").attr("value", "incorrect");
	$("#qfiveatwo").attr("value", "incorrect");
	$("#qsixatwo").attr("value", "incorrect");
	$("#qsixathree").attr("value", "incorrect");
	






	$(".questionpage").fadeOut();
    $(".finalPage").fadeOut();

	// this will fade out the initial start page 
    $("#buttonGenerator").click(function(){
        $(".starterpagebody").fadeOut();
        $("#buttonGenerator").fadeOut();
        // fades in the question page on button click
        $(".questionpage").fadeIn();
        timerRun();
        correctFunction();
        incorrectFunction();
    });


    $("#submitbutton").click(function()
    {
        $("#submitbutton").fadeOut();
        // fades in the question page on button click
        $(".questionpage").fadeOut();
        $(".finalPage").fadeIn();
        correctFunction();
        incorrectFunction();
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





    $("#qoneathree").on("click", function()
    {
		
		correctFunction();

    });
    
    $("#qtwoathree").on("click", function()
    {
    	
    	correctFunction();

    });

	$("#qthreeaone").on("click", function()
	{
	
		correctFunction();

	});

	$("#qfouratwo").on("click", function()
	{
		
		correctFunction();

	});

	$("#qfiveathree").on("click", function()
	{
		correctFunction();

	});

	$("#qsixaone").on("click", function()
	{
		
		correctFunction();

	});

	// so make a 2 classes, 1 for correctbuttonclass and 1 for incorrectbuttonclass

	$(".incorrectbuttonclass").on("click", function()
	{

		incorrectFunction();

	});

    function incorrectFunction()
    {
    	incorrect +=1;
    	//another div class instead of body
		$(".finalPage").html(incorrect);
    }



    function correctFunction()
    {
    	correct += 1;
		$(".finalPage").text(correct);
    }






});

