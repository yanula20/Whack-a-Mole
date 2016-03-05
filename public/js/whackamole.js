
(function(){

var interval = changeInterval() * 1000;

var moleArray = [];

var gameScore = 0;

var gameRound = 1;

var moleIntervalId = 0;

var counter = 10;

var clock = convertIntervalToSeconds();

function convertIntervalToSeconds(){

    return 10*interval/1000;
}

function changeInterval(){

    return Math.floor((Math.random() * 3) + 1);
}

//This is my game clock for 

function gameClock(){

    clockIntervalID = setInterval(function(){

        if(clock == 0) {

            clearInterval(clockIntervalID);

        } else {

            clock--;

            $("#time").val(clock +" seconds left");

        }

    },1000);

}

function startGame() {

    moleIntervalId = setInterval(function(){

    if (counter == 0) {

        gameRound++;

        $("#round").val("Round: "+gameRound);

        clearInterval(moleIntervalId);
        

    } else {

        counter--;

        var mole = Math.floor((Math.random() * 9) + 1);

        moleArray.push(mole);

        moleShow(mole);

    }

    }, interval);

} //end startGame

function moleShow(mole){

    $("#m" + mole).slideDown(interval / 2).slideUp(interval / 2);

} //end moleShow


$(".img-mole").click(function(){

    gameScore++;

    $("#score").val("Hits: "+gameScore);

});
 

$("#playAgain").click(function(){

    if (counter == 0) {

        counter = 10;

        $("#round").val("Round: "+gameRound);

        moleArray = [];

        interval =  changeInterval()*1000;

        clock = convertIntervalToSeconds(interval);

        gameClock(clock);

        startGame(interval);

        $("#time").val(clock +" seconds left");

        
    } else {
        //do nothing
    }

});

$("#round").val("Round: "+gameRound);

$("#score").val("Hits: "+gameScore);

$(".img-mole").slideUp();

$("#effects").animate({borderSpacing: -3600}, {step: function(now,fx) {

    $(this).css("-webkit-transform","rotate("+now+"deg)"); 

    $(this).css("-moz-transform","rotate("+now+"deg)");

    $(this).css("transform","rotate("+now+"deg)");

    $(this).slideUp(interval);

    },duration:"slow"},"linear");

startGame();

gameClock();



})();



