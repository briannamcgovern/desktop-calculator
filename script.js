function forClear() {
    document.getElementById("output").innerHTML = "0";
    clearHistory();
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function percent() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function forDisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

function solve() {
   removeZero()
   var equation = document.getElementById("output").innerHTML;
   var solved = eval(equation);
   document.getElementById('output').innerHTML = solved;
   history(equation, solved);
}

function history(equation, solved) {
    document.getElementById("equation").innerHTML = equation + ' = ' + solved;
}

function clearHistory() {
    document.getElementById("equation").innerHTML = '';
}