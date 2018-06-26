//choose a character and the rest go down as enemies
var pick = false;


var attacker = "";

$("#attackBtn").hide();
$("#enemy").hide();
$("#defend").hide();
$("#fightSelect").hide();
$("#charOneHp").html("HP: " + char1.health);
$("#charTwoHp").html("HP: " + char2.health);
$("#charThreeHp").html("HP: " + char3.health);
$("#charFourHp").html("HP: " + char4.health);

$("#charOne").on("click", function () {
    if (pick === false) {
        console.log(pick);
        console.log("#charOne");
        $("#charTwoWrap, #charThreeWrap, #charFourWrap").appendTo("#enemies");
        $("#charTwo, #charThree, #charFour").addClass("newDefender");
        $("#enemy").show();
        pick = true;
        attacker = char1;
    }
});

$("#charTwo").on("click", function () {
    if (pick === false) {
        console.log(pick);
        console.log("#charTwo");
        $("#charOneWrap, #charThreeWrap, #charFourWrap").appendTo("#enemies");
        $("#charOne, #charThree, #charFour").addClass("newDefender");
        $("#enemy").show();
        pick = true;
        attacker = char2;
    }
});

$("#charThree").on("click", function () {
    if (pick === false) {
        console.log(pick);
        console.log("#charThree");
        $("#charOneWrap, #charTwoWrap, #charFourWrap").appendTo("#enemies");
        $("#charOne, #charTwo, #charFour").addClass("newDefender");
        $("#enemy").show();
        pick = true;
        attacker = char3;
    }
});

$("#charFour").on("click", function () {
    if (pick === false) {
        console.log(pick);
        console.log("#charFour");
        $("#charOneWrap, #charTwoWrap, #charThreeWrap").appendTo("#enemies");
        $("#charOne, #charTwo, #charThree").addClass("newDefender");
        $("#enemy").show();
        pick = true;
        attacker = char4;
    }
});