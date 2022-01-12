function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2+2=" + addition;
}
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " +Subtraction
}  
function multiplication() {
    var simple_Math = 3 * 8;
    document.getElementById("Math").innerHTML = "3 x 8 " + simple_Math;
}
function division() {
    var simple_Math = 36 / 6;
    document.getElementById("Math").innerHTML = "36 / 6 = " + simple_Math;
}
function more_Math() {
    var simple_Math = (1 + 1) * 4 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 1, multiplied by 4, divided in half and then subtracted by 5 equals " + simple_Math;
}
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
function negation_Operator() {
    var x = 3;
    document.getElementById("Math").innerHTML = -x;
}
var X = 2;
X++;
document.write(X);
var X = 2.25;
X--;
document.write(X);
window.alert(Math.random() * 35);
Math.abs(-4.3);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }