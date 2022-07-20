img = "";
status = "";

function preload(){
    img = preload('princess_decoration for room');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetect = p5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){

        if(error){
            console.log(error);
            {
            console.log(results); 
            }
        }
    }