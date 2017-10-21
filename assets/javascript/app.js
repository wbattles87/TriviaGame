$(document).ready(function()
{
	var timernumber = 10;
	var timerIntervaId;
	var correct = 0;
	var incorrect = 0;

	$("#qoneathree").attr("value", correct);
	$("#qtwoathree").attr("value", correct);
	$("#qthreeaone").attr("value", correct);
	$("#qfouratwo").attr("value", correct);
	$("#qfiveathree").attr("value", correct);
	$("#qsixaone").attr("value", correct);

	$("#qoneaone").attr("value", incorrect);
	$("#qoneatwo").attr("value", incorrect);
	$("#qtwoaone").attr("value", incorrect);
	$("#qtwoatwo").attr("value", incorrect);
	$("#qthreeatwo").attr("value", incorrect);
	$("#qthreeathree").attr("value", incorrect);
	$("#qfouraone").attr("value", incorrect);
	$("#qfourathree").attr("value", incorrect);
	$("#qfiveaone").attr("value", incorrect);
	$("#qfiveatwo").attr("value", incorrect);
	$("#qsixatwo").attr("value", incorrect);
	$("#qsixathree").attr("value", incorrect);
	






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
		var userclick1 = $(this).attr("value");
		correctFunction(userclick1);

    });
    
    $("#qtwoathree").on("click", function()
    {
    	var userclick2 = $(this).attr("value");
    	correctFunction(userclick2);

    });

	$("#qthreeaone").on("click", function()
	{
		var userclick3 = $(this).attr("value");
		correctFunction(userclick3);

	});

	$("#qfouratwo").on("click", function()
	{
		var userclick4 = $(this).attr("value");
		correctFunction(userclick4);

	});

	$("#qfiveathree").on("click", function()
	{
		var userclick5 = $(this).attr("value");
		correctFunction(userclick5);

	});

	$("#qsixaone").on("click", function()
	{
		var userclick6 = $(this).attr("value");
		correctFunction(userclick6);

	});

	$("#qoneaone, #qoneatwo, #qtwoaone, #qtwoatwo, #qthreeatwo, #qthreeathree, #qfouraone, #qfourathree, #qfiveaone, #qfiveatwo, #qsixatwo, #qsixathree").on("click", function()
	{
		var userclick = $(this).attr("value");
		incorrectFunction(userclick);

	});

    function incorrectFunction()
    {
		var newNum = parseInt(userClickValue);
		correct += newNum;
		$(".finalPage").text(correct);
    }



    function correctFunction()
    {
    	var newNum = parseInt(userClickValue);
		incorrect += newNum;
		$(".finalPage").text(incorrect);
    }






});

