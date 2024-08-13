//This page contains Line Explanation

/*
================================
==    Variable Declaration    ==
================================
*/


let width = null; //width of rect
let height = null; //height of rect
let X = null; //X co-ordinate of rect
let Y = null; //Y co-... of rect
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

    width = 50; //assigning values, same for below
    height = 50;
    X = 10;
    Y = 10;

    run("console");//run

    run("code display");//run
    console.error("Never use run command with 2 run_code s at once while using, writing, coding, or debugging in console");//warning message
    rect(X, Y, width, height);//rectangele creation
}

function draw() {
    clear() //clear background
    background(255); //set background
    if (width == null) {//if-condition
        width = 50; //assign...
        rect(X, Y, width, height);//recta...
        run("console");//run
//same comments for below
    }
    if (height == null) {
        height = 50;
        rect(X, Y, width, height);
        run("console");
    }
    if (X == null) {
        X = 10;
        rect(X, Y, width, height);
        run("console");
    }
    if (Y == null) {
        Y = 10;
        rect(X, Y, width, height);
        run("console");
    }
    rect(X, Y, width, height);//rectangle creation
}

/*
================================
==  P5.js declarations ends   ==
================================
*/

function inputs() {
    width = document.getElementById("widthINP").value;//fetching value, same for below
    height = document.getElementById("heightINP").value;
    X = document.getElementById("XINP").value;
    Y = document.getElementById("YINP").value;

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
        document.getElementById("generatedCodeDisplay").innerHTML = "rect(" + X + ", " + Y + ", " + width + "," + height + ");";//code generator
    }

    if (run_code == "console") {//if...
        console.log("Width = " + width);//console log..., same for below
        console.log("Height = " + height);
        console.log("X = " + X);
        console.log("Y = " + Y);
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
    copyToClipboard("rect(" + X + ", " + Y + ", " + width + "," + height + ");");
}