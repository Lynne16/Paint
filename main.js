canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var mouseEvent="empty";

var last_postion_X,last_postion_Y;
var color="black";
var line_width= 2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
  
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
  
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width_line").value;


    var current_postion_mouse_X=e.clientX-canvas.offsetLeft;
    var current_postion_mouse_Y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        console.log("Last Position Of X and Y Coordinates = ");
        console.log("X = "+last_postion_X+" Y = "+last_postion_Y);
        ctx.moveTo(last_postion_X,last_postion_Y);
        console.log("Current Position Of X and Y Coordinates = ");
        console.log("X = "+current_postion_mouse_X+" Y = "+current_postion_mouse_Y);
        ctx.lineTo(current_postion_mouse_X,current_postion_mouse_Y);
        ctx.stroke();
    }

    last_postion_X= current_postion_mouse_X;
    last_postion_Y= current_postion_mouse_Y;
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
