var points = []
function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("#sketch");
  for(var x = 0; x < width; x+=20) {
    for(var y = 0;y < height;y+=20) {
      var p = createVector(x,y)
      points.push(p)
    }
  }
}

function changePos(p) {
  return map((cos(p)),0,1,2,110);
}

function offset(x,y) {
  return dist(x,y,width/2,height/2) * 0.009;
}

function draw() {
  background(255,10);
  noStroke()
  for(var i =0;i<points.length;i++) {
    var changeinPos = changePos(frameCount/100 -offset(points[i].x,points[i].y));
  fill(changeinPos,changeinPos - frameCount,frameCount)
    
    
    
    ellipse(points[i].x + changeinPos ,points[i].y + changeinPos,3)
    // console.log(width/2,points[i].x)
  }
}