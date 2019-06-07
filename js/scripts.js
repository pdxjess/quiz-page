$(document).ready(function(){
  $("form").submit(function(event){

    var question1 = parseInt($("input:radio[name=favFood]:checked").val());
    var question2 = parseInt($("input:radio[name=favVac]:checked").val());
    var question3 = parseInt($("input:radio[name=favColors]:checked").val());
    var question4 = parseInt($("input:radio[name=favHouse]:checked").val());
    var question5 = parseInt($("input:radio[name=favGuest]:checked").val());
    var question6 = parseInt($("input:radio[name=favPhoto]:checked").val());

    var total = question1 + question2 + question3 + question4 + question5 + question6;

    if (total <=3) {
      $(".ruby").fadeIn(1000);
      $(".refresh").show();
      $("form").hide();
    } else if (total <=5) {
      $(".csharp").fadeIn(1000);
      $(".refresh").show();
      $("form").hide();
    } else {
      $(".python").fadeIn(1000);
      $(".refresh").show();
      $("form").hide();
    }
    event.preventDefault();
  });

  $(".refresh").click(function(event) {
    $(".answers").hide();
    $("form").show();
    $("submit").show();
    $(".refresh").hide();
    $(".radiopadding").prop('checked', true);
  })
});
