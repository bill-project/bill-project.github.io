function get_recommendation() {
  // var username = $("#username_input").val();
  var gpa = $("#gpa_input").val();
  var sat = $("#sat_input").val();
  var act = $("#act_input").val();
  var loanAmount = $("#loanAmount").val();
  console.log("clicked");
  $.ajax({
    url: "https://Calculator-Backend.sunyu912.repl.co/getschool/" + gpa + "/" + sat + "/" + act + "/4/" + loanAmount,
    success: function(result) {
      $("#result_text").text(result);
    }
  });
}