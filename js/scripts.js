$(document)ready(function(){
  var question1 = parseInt($("input:radio[name=favMusic]:checked").val());
  var question2 = parseInt($("input:radio[name=favVac]:checked").val());
  var question3 = parseInt($("input:radio[name=favColors]:checked").val());
  var question4 = parseInt($("input:radio[name=favHouse]:checked").val());
  var question5 = parseInt($("input:radio[name=favGuest]:checked").val());

  var total = question1 + question2 + question3 + question4 + question5;
});
