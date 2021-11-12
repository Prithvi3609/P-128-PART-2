leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
song = "";
song2 = "";
function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(400,150);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet is initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
      console.log(results);
      leftWristx = results[0].pose.leftWrist.x;
      leftWristy = results[0].pose.leftWrist.y;
      console.log("leftWristx = " + leftWristx + "leftWristy = " + leftWristy);
      rightWristx = results[0].pose.rightWrist.x;
      rightWristy = results[0].pose.rightWrist.y;
      console.log("rightWristx = " + rightWristx + "rightWristy = " + rightWristy);
    }
}
function draw()
{
    image(video,0,0,600,500);
}