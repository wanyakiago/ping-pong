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
  });
});
