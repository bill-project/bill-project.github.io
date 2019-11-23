function get_recommendation() {
  // var username = $("#username_input").val();
  var gpa = $("#gpa_input").val();
  console.log("clicked");
  $.ajax({
    url: "https://Calculator-Backend.sunyu912.repl.co/getschool/" + gpa + "/2/3/4/5",
    success: function(result) {
      $("#result_text").text(result);
    }
  });
}