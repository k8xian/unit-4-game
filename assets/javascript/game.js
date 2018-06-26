$(document).ready(function () {


//global variables
    var defender = "";
    var attacker = "";
    var charChosen = false;
    var defeated = [];
    var wins = 0;
    var losses = 0;


    var player1 = {
        health: 120,
        attack: 12,
        counterAttack: 10,
    }

    var player2 = {
        health: 100,
        attack: 14,
        counterAttack: 10,
    }

    var player3 = {
        health: 150,
        attack: 8,
        counterAttack: 10,
    }

    var player4= {
        health: 180,
        attack: 10,
        counterAttack: 10,
    }

//start / reset function
    function start() {

        player1 = {
            health: 120,
            attack: 12,
            counterAttack: 15,
        }

        player2 = {
            health: 100,
            attack: 14,
            counterAttack: 15,
        }

        player3 = {
            health: 150,
            attack: 8,
            counterAttack: 15,
        }

        player4 = {
            health: 180,
            attack: 10,
            counterAttack: 15,
        }

        charChosen = false;
        attacker = "";
        defender = "";
        defeated = [];

//returning all css to original state
        $("#damageReport").empty();
        $("#damageReport").show();
        $("#damageReport").show();
        $("#player1, #player2, #player3, #player4").appendTo("#selectablePlayers");        
        $("#player1, #player2, #player3, #player4").removeClass("selectableEnemy");
        $("#player1, #player2, #player3, #player4").addClass("selectableHero");
        $("#player1, #player2, #player3, #player4").show();
        $("#player1, #player2, #player3, #player4").show();
        $("#player1Hp, #player2Hp, #player3Hp, #player4Hp").show();
        $("#player1Attack, #player2Attack, #player3Attack, #player4Attack").show();
        $("#player1Hp").text("HP: " + player1.health);
        $("#player2Hp").text("HP: " + player2.health);
        $("#player3Hp").text("HP: " + player3.health);
        $("#player4Hp").text("HP: " + player4.health);
        $("#player1Attack").text("Attack: " + player1.attack);
        $("#player2Attack").text("Attack: " + player2.attack);
        $("#player3Attack").text("Attack: " + player3.attack);
        $("#player4Attack").text("Attack: " + player4.attack);
        $("#attackButton").hide();
        $("#enemy").hide();
        $("#defend").hide();
        $("#defenderTitle").hide();
        $("#fightSelect").hide();
        $("#enimiesTitle").hide();
        $("damageReport").hide();
        
    }

//getting this show on the road
    start();


//picking initial character and moving the other characters down to the second line
    $(".selectableHero").on("click", function () {
        selectedChar = $(this).data("char");
        var otherPlayers = "";

        if (charChosen === false && selectedChar === "player1") {
            console.log("#player1");
            otherPlayers = "#player2, #player3, #player4";
            attacker = player1;
        } else if (charChosen === false && selectedChar === "player2") {
            console.log("#player2");
            otherPlayers = "#player1, #player3, #player4";
            attacker = player2;
        } else if (charChosen === false && selectedChar === "player3") {
            console.log("#player3");
            otherPlayers = "#player1, #player2, #player4";
            attacker = player3;
        } else if (charChosen === false && selectedChar === "player4") {
            console.log("#player4");
            otherPlayers = "#player1, #player2, #player3";
            attacker = player4;

        } else {
            return;
        }

        $(otherPlayers).appendTo("#enimiesAvailable");
        $(otherPlayers).removeClass("selectableHero").addClass("selectableEnemy");
        $("#enemy").show();
        $("#enimiesTitle").show();
        charChosen = true;

    });


//picking a character to attack and displaying the css to begin attacks 

    $("#player1").on("click", function () {
        if (($("#player1").hasClass("selectableEnemy")) === true && defender === "") {
                $("#player1").appendTo("#defenderPlayer");
                defender = player1;
                $("#attackButton").show();
                $("#defend").show();
                $("#defenderTitle").show();
        }
    });

    $("#player2").on("click", function () {
        if (($("#player2").hasClass("selectableEnemy")) === true && defender === "") {
                $("#player2").appendTo("#defenderPlayer");
                defender = player2;
                $("#attackButton").show();
                $("#defend").show();
                $("#defenderTitle").show();
        }
    });

    $("#player3").on("click", function () {
        if (($("#player3").hasClass("selectableEnemy")) === true && defender === "") {
                $("#player3").appendTo("#defenderPlayer");
                defender = player3;
                $("#attackButton").show();
                $("#defend").show();
                $("#defenderTitle").show();
        }
    });

    $("#player4").on("click", function () {
        if (($("#player4").hasClass("selectableEnemy")) === true && defender === "") {
                $("#player4").appendTo("#defenderPlayer");
                defender = player4;
                $("#attackButton").show();
                $("#defend").show();
                $("#defenderTitle").show();
        }
    });

//attack sequence, rendering status updates and changes to HP
    $("#attackButton").on("click", function () {
        if (defender != "") {
            defender.health = defender.health - attacker.attack;
            attacker.health = attacker.health - defender.counterAttack;
            attacker.attack = attacker.attack += 20;
            
            $("damageReport").show();
            $("#defenderTitle").show();
            $("#damageReport").empty();

            $("#damageReport").append("<div>You did " + attacker.attack + " damage!</div>");
            $("#damageReport").append("<div>You recieved " + defender.counterAttack + " damage!</div>");
            
            if (defender === player1) {
                $("#player1Hp").html("HP: " + defender.health);
            }
            else if (defender === player2) {
                $("#player2Hp").html("HP: " + defender.health);
            }
            else if (defender === player3) {
                $("#player3Hp").html("HP: " + defender.health);
            }
            else if (defender === player4) {
                $("#player4Hp").html("HP: " + defender.health);
            }

            if (attacker === player1) {
                $("#player1Hp").html("HP: " + attacker.health);
            }
            else if (attacker === player2) {
                $("#player2Hp").html("HP: " + attacker.health);
            }
            else if (attacker === player3) {
                $("#player3Hp").html("HP: " + attacker.health);
            }
            else if (attacker === player4) {
                $("#player4Hp").html("HP: " + attacker.health);
            }

            if (defender.health <= 0) {
                if ((player1.health) <= 0) {
                    $("#player1").hide();
                    $("#player1").hide();
                    defeated.push(player1)
                    $("#damageReport").text("Choose a new enemy!");
                }
                if ((player2.health) <= 0) {
                    $("#player2").hide();
                    $("#player2").hide();
                    defeated.push(player2)
                    $("#damageReport").text("Choose a new enemy!");

                }
                if ((player3.health) <= 0) {
                    $("#player3").hide();
                    $("#player3").hide();
                    defeated.push(player3)
                    $("#damageReport").text("Choose a new enemy!");

                }
                if ((player4.health) <= 0) {
                    $("#player4").hide();
                    $("#player4").hide();
                    defeated.push(player4)
                    $("#damageReport").text("Choose a new enemy!");
                }
                defender = "";

                for (var i = 0; i < defeated.length; i++) {
                    if (defeated.length === 6) {
                        start();
                        wins++;
                        $("#wins").text("Wins: " + wins);
                    }
                }
            }
            if (attacker.health <= 0) {
                start();
                losses++;
                $("#losses").text("Losses: " + losses);
            }
        }
    });












    ///pseudocode & to do
    //assign data to each character, HP, Attack, and counterAttack = same for everyone
    
    //have object with title, image, hp display, writing function
    
    //have characters with specific values for each thing
        //addeventlistener- onclick, if there is something in the middle box, then move it to the bottom box
    
    
    //write a function for attack power increasing
     
    //write onclick events for recognizing which characters attack power gets added to
        
    //write a function for subtracting attack power from HP
    
    //write a function for subtracting counter attack power from hp
    
    //create data values to be applied to each person
    
    //if there is a character selected already, move a character to the defender area
    //fill out readme
    //link from portfolio

    //add winning / losing screen
    //add sound effects
    // change attack value
    
});
