2. 
var a = 2;
  b = 1;
var result = --a - --b + ++b + b--;
// (--a)   'a' will be 1
// (--a - --b)  'b' will be 0 and subtracts a = 1 from b= 0 so, the result is "1"
// (--a - --b + ++b)  b will be 2 and b is added to the previous result,So, the result is "3"
//  (--a - --b + ++b + b--) b will be 0 and b=0 is added to previous,So, result is "3"

document.write("a: " + a + "<br>");
document.write("b: " + b + "<br>");
document.write("result: " + result + "<br>");

3.
let userName;
userName = prompt("Please Enter your Username");
alert("Welcome" + " " + userName +" " +   "to our Website");

4.
let num = prompt("Enter any number") || 5;
{
    console.log(num , " * 1  =" , num * 1);
    console.log(num , " * 2  =" , num * 2);
    console.log(num , " * 3  =" , num * 3);
    console.log(num , " * 4  =" , num * 4);
    console.log(num , " * 5  =" , num * 5);
    console.log(num , " * 6  =" , num * 6);
    console.log(num , " * 7  =" , num * 7);
    console.log(num , " * 8  =" , num * 8);
    console.log(num , " * 9  =" , num * 9);
    console.log(num , " * 10 =" , num * 10);
} 

5.
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarks1 = + prompt("Enter obtained marks for " + subject1 + ":");

var obtainedMarks2 = + prompt("Enter obtained marks for " + subject2 + ":");

var obtainedMarks3 = + prompt("Enter obtained marks for " + subject3 + ":");

var totalobtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalobtainedMarks / (totalMarks * 3)) * 100;

document.write("<h2>Result</h2>");
document.write("<table>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks1 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks2 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks3 +
    "</td></tr>"
);
document.write("</table>");
document.write("Total Obtained Marks: " + totalobtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

