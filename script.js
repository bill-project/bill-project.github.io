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
  var loanAmount = $("#loanAmount").val();
  if (loanAmount == "") {
    loanAmount = 0;
  }  

  var aplist = [];
  aplist.push($("#ap_history option:selected").text());
  aplist.push($("#ap_bio option:selected").text());
  aplist.push($("#ap_calab option:selected").text());
  aplist.push($("#ap_calbc option:selected").text());
  aplist.push($("#ap_chemistry option:selected").text());
  aplist.push($("#ap_chinese option:selected").text());
  aplist.push($("#ap_csa option:selected").text());
  aplist.push($("#ap_eng option:selected").text());
  aplist.push($("#ap_env option:selected").text());
  aplist.push($("#ap_euhis option:selected").text());
  aplist.push($("#ap_phy1 option:selected").text());
  aplist.push($("#ap_phy2 option:selected").text());
  aplist.push($("#ap_phyc option:selected").text());
  

  console.log(gpa);
  console.log(sat);
  console.log(act);
  console.log(mbti);
  console.log(residence);
  console.log(aplist);
  console.log(loanAmount);
  
  $.ajax({
    url: "https://bill-zheng-project.herokuapp.com/getschool/" + gpa + "/" + sat + "/" + act + "/" + aplist.join() + "/" + mbti + "/" + residence + "/" + loanAmount,
    success: function(result) {
      console.log(result);
      var res = JSON.parse(result);
      $("#result_text").text(res.name);
      $("#result_image").attr("src", res.image);
    }
  });
}