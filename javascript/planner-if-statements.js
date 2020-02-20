
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
