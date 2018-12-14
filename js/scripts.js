function Player(name,score){
  this.name = name;
  this.score = score;
}
$(document).ready(function(){
  $("#playButton").click(function(){
    $(".gameRules").hide();
    $(".formDiv").show();
  });

  var player1;
  var player2;
  alert("hiiii");
  $("form").submit(function(event){
    alert("hello");
    event.preventDefault();
    alert("hi");
    $(".gameRules").hide()
    $(".formDiv").hide();
    $("#startGame").show();
    player1= new Player($("#playerOne").val(),0);
    player2 = new Player($("#playerTwo").val(),0);
    $("#playerOneName").append(player1.name);
    $("#playerTwoName").append(player2.name);
  });

});
