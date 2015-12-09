/*
This is empty on purpose! Your code to build the resume will go here.
*/

var myName = "Dennis Lubrin";
var myEmail = "dennis@dennis-lubrin.com";
var myRole = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);