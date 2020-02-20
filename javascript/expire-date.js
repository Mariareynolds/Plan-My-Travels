var expDate = $("#expire-date").html();
var todayDate = Date.now();
console.log(expDate);
console.log(todayDate);

var parseDate = new Date(expDate).getTime() / 1000

console.log(parseDate);
