nose_x = 0;
nose_y = 0;

function preload(){
lipstick = loadImage("https://www.pngplay.com/wp-content/uploads/2/Lips-Kiss-Transparent-Background.png");
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video =createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Posenet is intialized.")
}
function draw(){
image(video, 0, 0, 300, 300);
image(lipstick,nose_x,nose_y,50,50);
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
nose_x = results[0].pose.nose.x - 22;
nose_y = results[0].pose.nose.y + 20;
console.log("nose x ="+ nose_x);
console.log("nose y ="+ nose_y);
}
}

function take_snapshot(){
    save('myFilterImage.png');
}