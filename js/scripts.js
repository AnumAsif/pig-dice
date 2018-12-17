function Player(name,score){
  this.name = name;
  this.score = score;
}
function diceValue(){
  var diceFace = Math.floor(Math.random()*6)+1;
  return diceFace;
}
function diceFace(val){
  $("#face"+val).show();
}
function getPlayerName(){
  var index =$("#playerTurn").text().indexOf(":");
  var name = $("#playerTurn").text().slice(0,index);
  return name;
}
function playGame(player, diceValue){
  if(diceValue == 1){

    tempScore = 0;
    $(".tempScore").text(tempScore);
    $("#alert").text("Sorry!!No score for this turn!!");
    $("#pass").attr("disabled",true);
    $("#playerTurn").text("");
    return false

  }else{
    $("#alert").text("");
    tempScore+=diceValue;
    $(".tempScore").text(tempScore);
    // player1.score=ScoreOne;
    return true;
  }
}
var tempScore=0;
var player1;
var player2;
$(document).ready(function(){

  $("#playButton").click(function(){
    $(".gameRules").hide();
    $(".formDiv").show();
  });

  $("form").submit(function(event){
    event.preventDefault();
    if($("#playerOne").val().length == 0 || $("#playerTwo").val().length == 0){
      alert("Enter name of both players");
    }else{

      $(".gameRules").hide()
      $(".formDiv").hide();
      $("#startGame").show();
      player1= new Player($("#playerOne").val(),0);
      player2 = new Player($("#playerTwo").val(),0);
      $("#playerOneName").append("<br>"+"<span>"+player1.name+"</span>");
      $("#playerTwoName").append("<br>"+"<span>"+player2.name+"</span>");
      $("#scoreOfPlayer1").append("<span>"+player1.score+"</span>");
      $("#scoreOfPlayer2").append("<span>"+player2.score+"</span>");
      $("#playerTurn").prepend("<span>"+player1.name+": It's your turn!!"+"</span>");
      if($("#columnOne").height()>$("#columnTwo").height()){
        $('#columnTwo').height($("#columnOne").height());
      }else{
        $('#columnOne').height($("#columnTwo").height());
      }
    }


  });
  $("#play").click(function(){
  // $(".tempScore").text("");
  $("#pass").attr("disabled",false);
  if(player1.score >= 100){
      $("#playerTurn").text(player1.name+" has won!!");
  }else if(player2.score >= 100){
      $("#playerTurn").text(player2.name+" has won!!");
  }else{
    var playerName = getPlayerName();

    $(".rolledValue").hide();
    var diceFaceValue = diceValue();
    diceFace(diceFaceValue);

    if(playerName == player1.name){
      var val = playGame(player1, diceFaceValue);
      if(val == false){
      $("#playerTurn").prepend("<span>"+player2.name+": It's your turn!!"+"</span>");
      }
    }else{
      var val =playGame(player2, diceFaceValue);
      if (val == false){
        $("#playerTurn").prepend("<span>"+player1.name+": It's your turn!!"+"</span>");
      }

    }
  }

});

$("#pass").click(function(){
    var playerName = getPlayerName();
    alert(playerName);
    $(".tempScore").text("");
    $("#playerTurn").text("");
    if(playerName == player1.name){
      player1.score += tempScore;
      tempScore = 0;
      $("#scoreOfPlayer1").text(player1.score);
      $("#playerTurn").prepend("<span>"+player2.name+": It's your turn!!"+"</span>");
    } else{
        player2.score += tempScore;
        tempScore = 0;
        $("#scoreOfPlayer2").text(player2.score);
        $("#playerTurn").prepend("<span>"+player1.name+": It's your turn!!"+"</span>");

    }


    // if($("#columnOne").height()>$("#columnTwo").height()){
    //   $('#columnTwo').height($("#columnOne").height());
    // }else{
    //   $('#columnOne').height($("#columnTwo").height());
    // }
   });


    // if(diceFaceValue == 1){
    //   $(".tempScore").text("");
    //   $("#scoreOfOne:first").replaceWith("<span>"+player1.score+"</span>");
    //   // $("#scoreOfOne").append("<br>"+"<span>"+player1.score+"</span>");
    //   $("#alert").text("Sorry!!No score for this turn!!");
    // //  $("#alert").prepend("<span>"+"Sorry!!No score for this turn!!"+"</span>");
    //   $("#playerTurn").text("");
    //   $("#playerTurn").prepend("<span>"+player2.name+": It's your turn!!"+"</span>");
    //   // $("#play").attr("disabled",true);
    // }else{
    //   $("#alert").text("");
    //   player1.score+=diceFaceValue;
    //   $(".tempScore").append(diceFaceValue +"+");
    //   // player1.score=ScoreOne;
    //
    // }



});
