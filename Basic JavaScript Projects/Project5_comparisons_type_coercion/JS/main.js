document.write(typeof "Word");
document.write("10" + 3);
document.getElementById("Test").innerHTML = isNaN('This is a string');
document.getElementById("Test").innerHTML = isNaN('7');
document.getElementById("Test").innerHTML = isNaN('007');
document.write(2E310);
document.write(-3E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(2 + 2);
document.write(10 == 10);
document.write(3 == 11);
X = 10;
Y = 10;
document.write(X === Y);
X = 82;
Y = "82";
document.write(X === Y);
A = 20;
B = 30;
document.write(A === B);
A = 30;
A = 35;
document.write(A === A);
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 20);
document.write(5 > 10 || 10 > 20);
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function no_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}