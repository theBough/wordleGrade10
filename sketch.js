let b = [];

function setup() {
  createCanvas(400, 400);
  for(var i =0; i<5 ; i++){
    b.push(new Box(10 + i*55,100,50,50));  
  }
}
function draw() {
  background(220);
  for(var i =0; i<5 ; i++){
     b[i].display();
  }
}
function keyReleased(){
  
  console.log(key)
}//end keyReleased
