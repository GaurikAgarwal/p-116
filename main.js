noseX=0;
noseY=0;
function preload(){
    moustache=loadImage('https://i.postimg.cc/PJSyGKPp/moustache.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet intialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+results[0].pose.nose.x-25);
        console.log("noseY="+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(moustache,noseX,noseY,25,25);
}
function take_snapshot(){
    save('myfilterimage.png');
}
