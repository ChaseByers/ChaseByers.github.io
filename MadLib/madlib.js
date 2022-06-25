var nextItem = [];
nextItem[0] = prompt("Enter your Name.");
nextItem[1] = prompt("Enter a place.");
nextItem[2] = prompt("Enter a noun.");

for (var i = 0; i < nextItem.length; i++) {
  nextItem[i];
}

var date = new Date();
var d = "Date: " + date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth();
var madLib = d + " " + nextItem[0] + " is authorized to be at " + nextItem[1] + " instead of " + nextItem[2] + " class. ";
