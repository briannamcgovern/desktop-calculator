const electron = require("electron");
  
// Importing BrowserWindow from Main Process 
// using Electron remote
// const BrowserWindow = electron.remote.BrowserWindow;
// const win = BrowserWindow.getFocusedWindow();
  
// // let win = BrowserWindow.getAllWindows()[0];
  
// win.webContents.on("before-input-event", (event, input) => {
//     console.log(input);
// });

// var charfield = document.getElementById("char");
// charfield.onkeypress = function(e) {
//     e = e || window.event;
//     var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
//     if (charCode > 0) {
//         alert("Typed character: " + String.fromCharCode(charCode));
//     }
// };

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
    // if ((document.getElementById("equation").innerHTML).find(element => element == '=')) {
    //     document.getElementById("equation").innerHTML += equation + ' = ' + solved;
    // }
    document.getElementById("equation").innerHTML = equation + ' = ' + solved;
}

function clearHistory() {
    document.getElementById("equation").innerHTML = '';
}