
// step 1
var step1 = $("#step1 select").val();

console.log(step1);
if (step1 != ""){
  $("#step2").addClass("ready");
}


//step 2
var step2 = $("#step2 select").val();
console.log(step2);

if (step2 != ""){
  $("#step3").addClass("ready");
}


// step 3
var step3 =("#step3 input").val();
console.log(step3);

if(step3 != ""){
  $("#step4").addClass("ready");
}

// step 4
var step4 =("#step4 input").val();
console.log(step4);

if(step4 != ""){
  $("#step5").addClass("ready");
}
// step 5
var step5 =("#step5 input").val();
console.log(step5);

if(step3 != ""){
  $("#step6").addClass("ready");
}

// step 6
var step6 =("#step6 input").val();
console.log(step6);

if(step4 != ""){
  $("#step7").addClass("ready");
}
