//This page contains Line Explanation

/*
================================
==    Variable Declaration    ==
================================
*/


let X1 = null; //X1 of triangle
let Y1 = null; //Y1 of triangle
let X2 = null; //X2 of tri
let Y2 = null; //Y2 of tri
let X3 = null; //X3 of tri
let Y3 = null; //Y3 of tri
var special_code = 0; //special_code for special function clear canvas
var run_code = null; //run_code for special function run

/*
================================
==       Variable Ends        ==
================================
*/

/*
================================
==     P5.js declarations     ==
================================
*/

function Preload() {
//nothing to load
}

function setup() {
    canvas = createCanvas(700, 400); //canvas creation
    canvas.parent('canvasContainer'); //canvas carrier

    let clear_canvas = document.getElementById("cls"); //clear canvas button selection
    clear_canvas.addEventListener("click", clearCanvas); //clear canvas btn click event listner added

    X1 = 100; //assigning values, same for below
    Y1 = 50;
    X2 = 50;
    Y2 = 150;
    X3 = 150;
    Y3 = 150;

    run("console");//run

    run("code display");//run
    console.error("Never use run command with 2 run_code s at once while using, writing, coding, or debugging in console");//warning message
    triangle(X1, Y1, X2, Y2, X3, Y3);//triangle creation
}

function draw() {
    clear() //clear background
    background(255); //set background
    if (X1 == null) {//if-condition
        X1 = 100; //assign...
        triangle(X1, Y1, X2, Y2, X3, Y3);//triangle creation
        run("console");//run
//same comments for below
    }
    if (Y1 == null) {
        Y1 = 50;
        triangle(X1, Y1, X2, Y2, X3, Y3);
        run("console");
    }
    if (X2 == null) {
        X2 = 50;
        triangle(X1, Y1, X2, Y2, X3, Y3);
        run("console");
    }
    if (Y2 == null) {
        Y2 = 150;
        triangle(X1, Y1, X2, Y2, X3, Y3);
        run("console");
    }
    if (X3 == null) {
        X3 = 150;
        triangle(X1, Y1, X2, Y2, X3, Y3);
        run("console");
    }
    if (Y3 == null) {
        Y3 = 150;
        triangle(X1, Y1, X2, Y2, X3, Y3);
        run("console");
    }
    triangle(X1, Y1, X2, Y2, X3, Y3);//triangle creation
}

/*
================================
==  P5.js declarations ends   ==
================================
*/

function inputs() {
    X1 = document.getElementById("X1INP").value;//fetching value, same for below
    Y1 = document.getElementById("Y1INP").value;
    X2 = document.getElementById("X2INP").value;
    Y2 = document.getElementById("Y2INP").value;
    X3 = document.getElementById("X3INP").value;
    Y3 = document.getElementById("Y3INP").value;

    run("console");//run
    run("code display");//run
}

function clearCanvas() {
    run("canvas cleaner");//run
}

function canvasClearMessage(special_code) {
    if (special_code == 764) {//if...
        run("canvas clear message");//run
    }
}

/*
================================
==    Special Function Run    ==
================================
*/

let run = (run_code) => { //run function declaration
    console.log("run Successful, run_code = " + run_code);//run_code.printTo(console);

    if (run_code == "canvas clear message") {//if...
        console.log("Canvas Cleared");//console logging
    }

    if (run_code == "canvas cleaner") {//if...
        console.log("clearing canvas");//console logging
        setTimeout(() => {//set delay
            window.location.reload();//clear canvas, reload page
        }, 1700);//time in ms
    }

    if (run_code == "code display") {//if...
        document.getElementById("generatedCodeDisplay").innerHTML = "triangle(" + X1 + ", " + Y1 + ", " + X2 + ", " + ", " + Y2  + ", " + X3 + ", " + Y3 + ");";//code generator
    }

    if (run_code == "console") {//if...
        console.log("X1 = " + X1);//console log..., same for below
        console.log("Y1 = " + Y1);
        console.log("X2 = " + X2);
        console.log("Y2 = " + Y2);
        console.log("X3 = " + X3);
        console.log("Y3 = " + Y3);
    }

    if(run_code == "certificate error log") {//if...
        //alternate approach
        console.error("Copyright certificate error: Could not find copyright certificate, please try later error code- 777");//console error
        console.error("error 777");//console error
    }
    if(run_code == "undefined run_code") {//if...
        console.error("couldn't find a run_code to sart the 'run' execution, pls retry later or send the bug to me on my gmail account given on home page");//console error
    }
};

function undefined_run_code() {
    run("undefined run_code");//run
}

function copyToClipboard(text) {
    if(navigator.clipboard) {
        navigator.clipboard.writeText(text)
        .then(() => window.alert("Copied to clipboard"))
        .catch(err => {
            console.error("Failed to copy", err);
            window.alert("Failed to copy, please retry");
        });
    } else {
        window.alert("Clipboard API not supported please try with different browser");
    }
}


function copyIt() {
    copyToClipboard("triangle(" + X1 + ", " + Y1 + ", " + X2 + ", " + ", " + Y2  + ", " + X3 + ", " + Y3 + ");");
}