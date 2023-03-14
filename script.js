function btm(val) {
    document.getElementById("sortie").innerHTML += val;
}
function btmEfface(){
   document.getElementById("sortie").innerHTML = "";
}
function btmAddition() {
   document.getElementById("sortie").innerHTML += "+";
}
function btmSoustraction() {
   document.getElementById("sortie").innerHTML += "-";
}
function btmMultiplication() {
   document.getElementById("sortie").innerHTML += "*";
}
function btmDivision() {
   document.getElementById("sortie").innerHTML += "/";
}
function btmparenthese() {
    document.getElementById("sortie").innerHTML += "(";
}

function btmparenthese2() {
    document.getElementById("sortie").innerHTML += ")";
}

function btmpoint() {
    document.getElementById("sortie").innerHTML += ".";
}

function btmModulo() {
   document.getElementById("sortie").innerHTML += "%";
}

function btmEgal() {
     var egal = eval(document.getElementById('sortie').innerHTML);
     document.getElementById('sortie').innerHTML = egal;
}

