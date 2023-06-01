noseX=0;
noseY=0;

function preload() {
  var nose = loadImage("n.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log("Modelo Carregado")
}

function gotPoses(results)
{
  if (results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
    console.log("nariz x =" + noseX);
    console.log("nariz y =" + noseY);
  }
}

function draw(){
  image(video, 0, 0, 300, 300);
  image (nose, noseX, noseY, 300, 300);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
