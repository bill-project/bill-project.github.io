function get_recommendation() {
  // var username = $("#username_input").val();
  var gpa = $("#gpa_input").val();
  if (gpa == "") {
    gpa = 0;
  }
  var sat = $("#sat_input").val();
  if (sat == "") {
    sat = 0;
  }
  var act = $("#act_input").val();
  if (act == "") {
    act = 0;
  }
  var mbti = $("#mbti_input").val();
  if (mbti == "") {
    mbti = 0;
  }
  var residence = $("#state_input option:selected").text();
  if (residence == "") {
    residence = 0;
  }
  var aplist = $("#act_input").val();
  if (aplist == "") {
    aplist = 0;
  }
  var loanAmount = $("#loanAmount").val();
  if (loanAmount == "") {
    loanAmount = 0;
  }  

  console.log(gpa);
  console.log(sat);
  console.log(act);
  console.log(mbti);
  console.log(residence);
  console.log(aplist);
  console.log(loanAmount);
  
  $.ajax({
    url: "https://bill-zheng-project.herokuapp.com/getschool/" + gpa + "/" + sat + "/" + act + "/" + aplist + "/" + mbti + "/" + residence + "/" + loanAmount,
    success: function(result) {
      console.log(result);
      var res = JSON.parse(result);
      $("#result_text").text(res.name);
      $("#result_image").attr("src", res.image);
    }
  });
}