// alert('hallo habiba');+-


$(document).ready(function(){
jQuery(document).ready(function(){
  $("form#favourite").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#favNumber").val());
    console.log(userInput);
    $(".display").empty(); // clear the initial input if present

  var result="";
     if (i % 3 !=0 && i % 5 !=0) result=(i);
  if( i % 3 === 0) result="ping";
     if(i % 5 === 0) result +="pong";
   console.log(result);

   $("p.display").empty()
   $("p.display").append(result+ "</br>");
  }
    for (var i=1; i<=userInput; i++){
        if (i % 15 === 0) {
            $(".display").append('<li>pingpong</li>');
        }
        else if (i % 5 === 0) {
            $(".display").append('<li>pong</li>');
        }
        else if (i % 3 === 0) {
            $(".display").append('<li>ping</li>');
        }
        else {
            var num = '<li>'+i+'</li>';
  });
});
