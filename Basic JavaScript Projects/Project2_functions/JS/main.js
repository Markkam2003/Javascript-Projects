function My_Function() {
    var str = "This text is blue!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text") .innerHTML = result;
}
function changeColor(newColor) {   //This utilizes the paragraph element
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }
function My_Function() {    //This is the concatenate string
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}