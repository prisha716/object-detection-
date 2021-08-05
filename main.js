img="";
status="";

function preload() 
{
    img=loadedImage("dog_cat.jpg");
}

function setup()
 {
    canvas=createCanvs(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function draw() 
{

image(img,0,0,640,420);
fill("#000000");
text("Dog",45,75);
noFill();
stroke("#000000");
rect(30,60,450,350);

fill("#eb4034");
text("Cat",320,120);
noFill();
stroke("#eb4034");
rect(300,90,270,320);
}
