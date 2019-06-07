$(document).ready(function(){
  $("form").submit(function(event){

    var question1 = parseInt($("input:radio[name=favMusic]:checked").val());
    var question2 = parseInt($("input:radio[name=favVac]:checked").val());
    var question3 = parseInt($("input:radio[name=favColors]:checked").val());
    var question4 = parseInt($("input:radio[name=favHouse]:checked").val());
    var question5 = parseInt($("input:radio[name=favGuest]:checked").val());
    var question6 = parseInt($("input:radio[name=favPhoto]:checked").val());

    var total = question1 + question2 + question3 + question4 + question5 + question6;

    if (total <=3) {
      $(".ruby").show();
    } else if (total <=5) {
      $(".csharp").show();
    } else {
      $(".react").show();
    }
    event.preventDefault();
  });
});
