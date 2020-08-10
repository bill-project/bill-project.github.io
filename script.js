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
  var mbti = $("#mbti_input option:selected").text();
  if (mbti == "INTJ") {
    mbti = 1;
  } else if (mbti == "INTP") {
    mbti = 2;
  } else if (mbti == "ENTJ") {
    mbti = 3;
  } else if (mbti == "ENTP") {
    mbti = 4;
  } else if (mbti == "INFJ") {
    mbti = 5;
  } else if (mbti == "INFP") {
    mbti = 6;
  } else if (mbti == "ENFJ") {
    mbti = 7;
  } else if (mbti == "ENFP") {
    mbti = 8;
  } else if (mbti == "ISTJ") {
    mbti = 9;
  } else if (mbti == "ISTP") {
    mbti = 10;
  } else if (mbti == "ESFJ") {
    mbti = 11;
  } else if (mbti == "ESTP") {
    mbti = 12;
  } else if (mbti == "ISFJ") {
    mbti = 13;
  } else if (mbti == "ISFP") {
    mbti = 14;
  } else if (mbti == "ESTJ") {
    mbti = 15;
  } else if (mbti == "ESFP") {
    mbti = 16;
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
  ap_1 = $("#ap_history option:selected").text();

  aplist.push($("#ap_bio option:selected").text());
  ap_2 = $("#ap_bio option:selected").text();

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
    url: "https://ml.billzheng2.repl.co/getmajor/" + mbti + "/" + "2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26/27/28/29/30/31/32/33/34/35/36/37/38/39",
    success: function(result) {
      console.log(result);
      var res = JSON.parse(result);
      $("#result_text").text(res.result4);
      // $("#result_image").attr("src", res.image);
      $("#result_major_text").text(res.result1);
    }
  });

  // $.ajax({
  //   url: "https://bill-zheng-project.herokuapp.com/getschool/" + gpa + "/" + sat + "/" + act + "/" + aplist.join() + "/" + mbti + "/" + residence + "/" + loanAmount,
  //   success: function(result) {
  //     console.log(result);
  //     var res = JSON.parse(result);
  //     $("#result_text").text(res.name);
  //     $("#result_image").attr("src", res.image);
  //     $("#result_major_text").text(res.major);
  //   }
  // });
}