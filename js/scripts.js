// alert('hallo habiba');+-


$(document).ready(function(){
  $("form#favourite").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#favNumber").val());
    console.log(userInput);

 for (var i=1; i<=userInput; i++){
  var result="";
     if (i % 3 !=0 && i % 5 !=0) result=(i);
  if( i % 3 === 0) result="ping";
     if(i % 5 === 0) result +="pong";
   console.log(result);

   $("p.display").append(result+ "</br>");
  }
  });
});
