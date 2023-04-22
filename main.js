function preload(){    
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();

    poseNet = ml5.poseNet (video, modelLoaded);
    pose.on('pose', gotposes);
}

function modelLoaded() {
    console.log('PoseNet Is Initalized');
}

function draw() {
    Image(video, 0, 0, 300, 350)
}

function take_snapshot(){
 save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("mustage x = " +results[0].pose.mustage.x)
        console.log("mustage y = " +results[0].pose.mustage.y)
    }
}
