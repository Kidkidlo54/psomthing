diff=0
leftX=0
rightX=0
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 500);
    canvas.position(560, 140);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("THE POSENET IS ACTIVE!!! RUN FOR YOUR LIVES!!!!!!");
}
function gotPoses(results){
    if(results.length>0){

        leftX=results[0].pose.leftWrist.x;
        rightX=results[0].pose.rightWrist.x;
        console.log("leftwristX="+leftX+"rightwristX="+rightX);
         diff=floor(leftX-rightX);
    }
}
function draw(){
    background('#33DBFF');
    fill('#FF0078');
    textSize(diff);
    text('Peter',30, 200);
}


