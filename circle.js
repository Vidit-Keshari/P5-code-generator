//This page contains Line Explanation

/*
================================
==    Variable Declaration    ==
================================
*/

let diameter = null; //diameter of circle
let X = null; //X co-ordinate
let Y = null; //Y co-ordinate
var special_code = 0; // special_code for special function clearCanvas
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
//No image to preload
}

function setup() {
    canvas = createCanvas(700, 400); //create creation
    canvas.parent('canvasContainer'); //Canvas holding

    let clear_canvas = document.getElementById("cls"); //clear canvas btn selection
    clear_canvas.addEventListener("click", clearCanvas); //clear canvas btn click event listner added

    diameter = 50; //assigning diameter, same for below
    X = 50;
    Y = 50;

    run("console"); //run

    run("code display"); //run
    console.error("Never use run command with 2 run_code s at once while using, writing, coding, or debugging in console"); //warning message
    circle(X, Y, diameter); //create circle
}

function draw() {
    clear() //clear canvas
    background(255); //set background
    if (diameter == null) { //if-condition
        diameter = 50; //assigning diameter
        circle(X, Y, diameter); //creating circle
        run("console"); //run

    }
    //same comments below
    if (X == null) {
        X = 50;
        circle(X, Y, diameter);
        run("console");
    }
    if (Y == null) {
        Y = 50;
        circle(X, Y, diameter);
        run("console");
    }
    circle(X, Y, diameter);
}

/*
================================
==  P5.js declarations ends   ==
================================
*/

function inputs() {
    diameter = document.getElementById("diameterINP").value; //fetching value, same for below
    X = document.getElementById("XINP").value;
    Y = document.getElementById("YINP").value;

    run("console");//run
    run("code display");//run
}

function clearCanvas() {
    run("canvas cleaner");//run
}

function canvasClearMessage(special_code) {
    if (special_code == 764) {//if-condition
        run("canvas clear message");//run
    }
}

/*
================================
==    Special Function Run    ==
================================
*/

let run = (run_code) => {//run declaration
    console.log("run Successful, run_code = " + run_code); //run_code.printTo(console);

    if (run_code == "canvas clear message") {//if-condition
        console.log("Canvas Cleared");//console logging
    }

    if (run_code == "canvas cleaner") {//if-c...
        console.log("clearing canvas");//console logging
        setTimeout(() => {//timeout
            window.location.reload();//canvas clear, reload page
        }, 1700);//time in ms
    }

    if (run_code == "code display") {//if-c...
        document.getElementById("generatedCodeDisplay").innerHTML = "circle(" + X + ", " + Y + ", " + diameter + ");";//code display
    }

    if (run_code == "console") {//if-c...
        console.log("diameter = " + diameter);//console log...
        console.log("X = " + X);//con...
        console.log("Y = " + Y);//con...
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

//Run ends

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
    copyToClipboard("circle(" + X + ", " + Y + ", " + diameter + ");");
}
