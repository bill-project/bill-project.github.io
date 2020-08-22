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

  aplist.push($("mbti_input option:selected").text());
  mbti = $("mbti_input option:selected").text();

  aplist.push($("#ap_res option:selected").text());
  ap_res = $("#ap_res option:selected").text();

  aplist.push($("#ap_sem option:selected").text());
  ap_sem = $("#ap_sem option:selected").text();

  aplist.push($("#ap_arthis option:selected").text());
  ap_arthis = $("#ap_arthis option:selected").text();

  aplist.push($("#ap_bio option:selected").text());
  ap_bio = $("#ap_bio option:selected").text();

  aplist.push($("#ap_calab option:selected").text());
  ap_calab = $("#ap_calab option:selected").text();

  aplist.push($("#ap_calbc option:selected").text());
  ap_calbc = $("#ap_calbc option:selected").text();

  aplist.push($("#ap_chemistry option:selected").text());
  ap_chemistry = $("#ap_chemistry option:selected").text();

  aplist.push($("#ap_chinese option:selected").text());
  ap_chinese = $("#ap_chinese option:selected").text();

  aplist.push($("#ap_csa option:selected").text());
  ap_csa = $("#ap_csa option:selected").text();

  aplist.push($("#ap_csp option:selected").text());
  ap_csp = $("#ap_csp option:selected").text();

  aplist.push($("#ap_eng option:selected").text());
  ap_eng = $("#ap_eng option:selected").text();

  aplist.push($("#ap_engl option:selected").text());
  ap_engl = $("#ap_engl option:selected").text();

  aplist.push($("#ap_env option:selected").text());
  ap_env = $("#ap_env option:selected").text();

  aplist.push($("#ap_euhis option:selected").text());
  ap_euhis = $("#ap_euhis option:selected").text();

  aplist.push($("#ap_fr option:selected").text());
  ap_fr = $("#ap_fr option:selected").text();

  aplist.push($("#ap_de option:selected").text());
  ap_de = $("#ap_de option:selected").text();

  aplist.push($("#ap_govp option:selected").text());
  ap_govp = $("#ap_govp option:selected").text();

  aplist.push($("#ap_govus option:selected").text());
  ap_govus = $("#ap_govus option:selected").text();

  aplist.push($("#ap_geo option:selected").text());
  ap_geo = $("#ap_geo option:selected").text();

  aplist.push($("#ap_it option:selected").text());
  ap_it = $("#ap_it option:selected").text();

  aplist.push($("#ap_jp option:selected").text());
  ap_jp = $("#ap_jp option:selected").text();

  aplist.push($("#ap_la option:selected").text());
  ap_la = $("#ap_la option:selected").text();

  aplist.push($("#ap_mac option:selected").text());
  ap_mac = $("#ap_mac option:selected").text();

  aplist.push($("#ap_mic option:selected").text());
  ap_mic = $("#ap_mic option:selected").text();

  aplist.push($("#ap_mus option:selected").text());
  ap_mus = $("#ap_mus option:selected").text();

  aplist.push($("#ap_phy1 option:selected").text());
  ap_phy1 = $("#ap_phy1 option:selected").text();

  aplist.push($("#ap_phy2 option:selected").text());
  ap_phy2 = $("#ap_phy2 option:selected").text();

  aplist.push($("#ap_phycm option:selected").text());
  ap_phycm = $("#ap_phycm option:selected").text();

  aplist.push($("#ap_phyce option:selected").text());
  ap_phyce = $("#ap_phyce option:selected").text();

  aplist.push($("#ap_psych option:selected").text());
  ap_psych = $("#ap_psych option:selected").text();

  aplist.push($("#ap_spla option:selected").text());
  ap_spla = $("#ap_spla option:selected").text();

  aplist.push($("#ap_spli option:selected").text());
  ap_spli = $("#ap_spli option:selected").text();

  aplist.push($("#ap_stat option:selected").text());
  ap_stat = $("#ap_stat option:selected").text();

  aplist.push($("#ap_artdr option:selected").text());
  ap_artdr = $("#ap_artdr option:selected").text();

  aplist.push($("#ap_art2d option:selected").text());
  ap_art2d = $("#ap_art2d option:selected").text();

  aplist.push($("#ap_art3d option:selected").text())
  ap_art3d = $("#ap_art3d option:selected").text()

  aplist.push($("#ap_ushis option:selected").text());
  ap_ushis = $("#ap_ushis option:selected").text();

  aplist.push($("#ap_whmo option:selected").text());
  ap_whmo = $("#ap_whmo option:selected").text();

  console.log(gpa);
  console.log(sat);
  console.log(act);
  console.log(mbti);
  console.log(residence);
  console.log(aplist);
  console.log(loanAmount);
  
  $.ajax({
    url: "https://ml.billzheng2.repl.co/getmajor/" + mbti + "/" + "2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26/27/28/29/30/31/32/33/34/35/36/37/38/39/",
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

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}