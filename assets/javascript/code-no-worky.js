//global variables
var choiceNotMade = true;
var selectedChar = "";
var selectedOpponent = "";


//show-hide initial state
$("#enimiesAvailable").hide();
$("#enimiesTitle").hide();
$("#defenderPlayer").hide();
$("#defenderTitle").hide();
$("#attackButton").hide();



//onclick, character remains from upper field and shown below, characters vanish from upper row
$( ".selectableHero" ).on("click", function() {
    selectedChar = $(this).data("char");
    console.log(selectedChar);
    var otherChars = "";
        switch(true){
            case selectedChar="player1" && choiceNotMade === true:
            $("#player2, #player3, #player4").removeClass("selectableHero").addClass("selectableEnemy");
            $("#enimiesAvailable").prepend($("#player2, #player3, #player4"));
                break;

            case selectedChar="player2" && choiceNotMade === true:
                $("#player1, #player3, #player4").removeClass("selectableHero").addClass("selectableEnemy");
                $("#enimiesAvailable").prepend($("#player1, #player3, #player4"));
                break;

            case selectedChar="player3" && choiceNotMade === true:
            $("#player1, #player2, #player4").removeClass("selectableHero").addClass("selectableEnemy");
            $("#enimiesAvailable").prepend($("#player1, #player2, #player4"));
            
                break;

            case selectedChar="player4" && choiceNotMade === true:
            $("#player1, #player2, #player3").removeClass("selectableHero").addClass("selectableEnemy");
            $("#enimiesAvailable").prepend($("#player1, #player2, #player3"));
                break;
        }

//        $(otherChars).removeClass("selectableHero").addClass("selectableEnemy");
        $("#enimiesAvailable").show();
        $("#enimiesTitle").show();
//        $("#enimiesAvailable").prepend($(otherChars));
        choiceNotMade = false;
        console.log(choiceNotMade);
});



var showDefender = function() {
    $("#defenderPlayer").show();
    $("#defenderTitle").show();
    $("#attackButton").show();
}
   
$( "#player1" ).on("click", function() {
    showDefender();
    if (($( "#player1" ).hasClass("selectableEnemy") === true) && (selectedOpponent === "")){
        {
            $("#defenderPlayer").prepend($("#player1")); 
        }
    }

});

$( "#player2" ).on("click", function() {
    showDefender();
    if (($( "#player2" ).hasClass("selectableEnemy") === true) && (selectedOpponent === "")){
        {
            $("#defenderPlayer").prepend($("#player2")); 
        }
    }

});

$( "#player3" ).on("click", function() {
    showDefender();
    if (($( "#player3" ).hasClass("selectableEnemy") === true) && (selectedOpponent === "")){
        {
            $("#defenderPlayer").prepend($("#player3")); 
        }
    }

});

$( "#player4" ).on("click", function() {
    showDefender();
    if (($( "#player4" ).hasClass("selectableEnemy") === true) && (selectedOpponent === "")){
        {
            $("#defenderPlayer").prepend($("#player4")); 
        }
    }

});











        //code no worky
    //     switch(true){
    //         case selectedOpponent="player1":
    //         console.log(selectedOpponent + " is my opponent");
    //             pickEnemy="#player1";
    //             break;
    //         case selectedOpponent="player2":
    //         console.log(selectedOpponent + " is my opponent");
    //             pickEnemy="#player2";
    //             break;
    //         case selectedOpponent="player3":
    //         console.log(selectedOpponent + " is my opponent");
    //             pickEnemy="#player3";
    //             break;
    //         case selectedOpponent="player4":
    //         console.log(selectedOpponent + " is my opponent");
    //             pickEnemy="#player4";
    //             break;
    //     }

    // $(pickEnemy).removeClass("selectableEnemy").addClass("currentDefender");
    // $("#defenderPlayer").show();
    // $("#defenderTitle").show();
    // $("#defenderPlayer").prepend($(pickEnemy));
