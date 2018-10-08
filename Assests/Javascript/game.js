

$(document).ready(function () {


    // All characters here.

    var yourCh =
    {
        name: "yourCharacter",
        health: Math.floor(Math.random() * 200) + 100,
        attack: Math.floor(Math.random() * 25) + 10,
        counter: Math.floor(Math.random() * 1) + 10,


    }
    var eCh =
    {
        name: "Enemy",
        health: Math.floor(Math.random() * 200) + 100,
        attack: Math.floor(Math.random() * 25) + 10,
        counter: Math.floor(Math.random() * 1) + 10,

    }


    var myHealth = $("#myHealth");
    var enemyHealth = $("#enemyHealth");

    var attackCh = "";
    var deffendCh = "";
    var enemies = 3;
   
    // 

    alert("Pick anyone you're gonna lose anyway.");
    
 
   
















    //   On click functions for picking character and character battle
    $(".ch").on('click', function () {



        if (deffendCh === "" && attackCh !== "") {




            deffendCh = this;
            $("#ring").append(deffendCh);




            enemyHealth.html(eCh.health);
            alert("get ready!");
            $(".my_audio").trigger('play');





















        }

        if (deffendCh === "" && attackCh === "") {
            $(".intro").trigger('play');

            attackCh = this;
            $("#fighter").append(attackCh);
            myHealth.html(yourCh.health);




































        }
    })


    $("#button").on('click', function () {
     

        yourCh.health = yourCh.health - eCh.counter;
        eCh.health = eCh.health - yourCh.attack;




        myHealth.html(yourCh.health);
        enemyHealth.html(eCh.health);




        if (yourCh.health < 1) {


            $(".done").trigger('play');


            alert("Guess you came back to life for nothing");
            
        }



        if (eCh.health < 1) {
            enemies-- ,
                console.log(enemies);

            $(".dead").trigger('play');

            alert("He dead, try someone new");
            $("#ring").html("");
            deffendCh = "";
            enemyHealth.html(0);
            eCh.health = Math.floor(Math.random() * 200) + 100;





        }

        if (enemies < 1) {
            $(".win").trigger('play');

            



            alert("Listen....ya killed everyone.Just go home.");


        }






















    })

    // 
































})


