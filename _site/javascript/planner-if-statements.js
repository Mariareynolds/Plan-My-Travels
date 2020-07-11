  $(document).ready(function(){

    $("#step1").on("mouseover", function(){
      if (true || $("#step1").hasClass("ready")){
          $("#step1").addClass("hidecover");
      }
    });

  // step 1
  var step1 = $("#step1 select").val();

  console.log(step1);
  if (step1 != null){
    $("#step2").addClass("ready");
  }
  $('#step1 select').on("change", function(){
    var step1 = $("#step1 select").val();
      console.log(step1);
    if(step1 != null){
      $("#step2").addClass("ready");
      $('#step1 .action-button').removeClass("hiddenButton")
    }
  });


  $("#step2").on("mouseover", function(){
    if ($("#step2").hasClass("ready")){
        $("#step2").addClass("hidecover");
    }
  });

  //step 2
  var step2 = $("#step2 select").val();
  console.log(step2);


  if (step2 != null ){
    $("#step3").addClass("ready");
  }
  $('#step2 select').on("change", function(){
    var step2 = $("#step2 select").val();
      console.log(step2);
    if(step2 != null){
      $("#step3").addClass("ready");
      $('#step2 .action-button').removeClass("hiddenButton")
    }
  });
  $("#step3").on("mouseover", function(){
    if ($("#step3").hasClass("ready")){
      $("#step3").addClass("hidecover");
    }
  });

  // step 3
  var step3 = $("#step3 input").val();
  console.log(step3);

  var step3_5 = $("#step3_5 select").val();
  console.log(step3_5);

  $('#step3 input').on("change", function(){
    var step3 = $(this).val();
    console.log(step3);
    if( step3 =="NO"){
      $("#step4").addClass("ready");
      $('#step3 .action-button').removeClass("hiddenButton")
    }
  });


  $('#step3_5 select').on("change", function(){
    var step3_5 = $("#step3_5 select").val();
    console.log(step3_5);
    if(step3_5 != null ){
      $("#step4").addClass("ready");
      $('#step3 .action-button').removeClass("hiddenButton")
    }
  });

  $("#step4").on("mouseover", function(){
    if ($("#step4").hasClass("ready")){
      $("#step4").addClass("hidecover");
    }
  });


$('#step3 input').on("change", function(){
if($('.start-location').is(':checked'))  {
  $(".start-question").addClass("visible");
} else {
  $(".start-question").removeClass("visible");
}
});

  // step 4
  var step4 = $("#step4 input").val();
  console.log(step4);

  var step4_5 = $("#step4_5 select").val();
  console.log(step4_5);

  $('#step4 input').on("change", function(){
    var step4 = $(this).val();
    console.log(step4);
    if( step4 == "NO"){
      $("#step5").addClass("ready");
      $('#step4 .action-button').removeClass("hiddenButton")
    }
  });
  $('#step4_5 select').on("change", function(){
    var step4_5 = $("#step4_5 select").val();
    console.log(step4_5);
    if(step4_5 != null ){
      $("#step5").addClass("ready");
      $('#step4 .action-button').removeClass("hiddenButton")
    }
  });

  $("#step5").on("mouseover", function(){
    if ($("#step5").hasClass("ready")){
      $("#step5").addClass("hidecover");
    }
  });


$('#step4 input').on("change", function(){
if($('.finish-location').is(':checked'))  {
  $(".finish-question").addClass("visible");
} else {
  $(".finish-question").removeClass("visible");
}
});



  // step 5
  var step5 = $("#step5 input").val();
  console.log(step5);


  $("#step5").on("mouseover", function(){
    if ($("#step5").hasClass("ready")){
      $("#step5").addClass("hidecover");
    }
  });

  $('#step5 span').on("click", function(){
    $("#step6").addClass("ready");
    $('#step5 .action-button').removeClass("hiddenButton")
  });

  $("#step6").on("mouseover", function(){
    if ($("#step6").hasClass("ready")){
      $("#step6").addClass("hidecover");

    }
  });

  // step 6
  var step6 = $("#step6 input").val();
  console.log(step6);


  $("#step6").on("mouseover", function(){
    if ($("#step6").hasClass("ready")){
      $("#step6").addClass("hidecover");
    }
  });

  $('#step6 span').on("click", function(){
    $("#step7").addClass("ready");
    $('#step6 .action-button').removeClass("hiddenButton")
  });

  $("#step7").on("mouseover", function(){
    if ($("#step7").hasClass("ready")){
      $("#step7").addClass("hidecover");

    }
  });

  // step 7
  var step7 = $("#step7 input").val();
  console.log(step7);


  $("#step7").on("mouseover", function(){
    if ($("#step7").hasClass("ready")){
      $("#step7").addClass("hidecover");
    }
  });

  $('#step7 span').on("click", function(){
    $("#step8").addClass("ready");
    $('#step7 .action-button').removeClass("hiddenButton")
  });

  $('#step7').on("click", function(){
    $("#step8").addClass("ready");
    $("#step9").addClass("ready");


  $("#step8").on("mouseover", function(){
    if ($("#step8").hasClass("ready")){
      $("#step8").addClass("hidecover");

    }
  });

  $("#step9").on("mouseover", function(){
  if ($("#step9").hasClass("ready")){
    $("#step9").addClass("hidecover");
  }
});


});

});
