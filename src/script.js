let canvas;

function setup(){
    canvas = createCanvas(400,400);
}
function draw(){

}
function keyPressed(){
    if(keyCode == 39){
        color = [random(0,255),random(0,255),random(0,255)];
        background(color[0],color[1],color[2]);
        console.log("asdasds");
    }
}