// 小手調べ
function setup(){
  noFill();
  for(let i = 0; i < 10; i++){
  let r = (i + 1)*10   //i*10+10でもいける！
  if(i<5){
    stroke(0,0,255);
  }
  else{
    stroke(255,0,0);
  }
  ellipse(50,50,r)
}
    // stroke(255,0,0);
    // ellipse(50, 50, 100);
    // stroke(255,0,0);
    // ellipse(50,50,70);
    // stroke(255,0,0);
    // ellipse(50,50,60);
    // stroke(255,0,0);
    // ellipse(50,50,50);
    // stroke(0,0,255);
    // ellipse(50,50,40);
    // stroke(0,0,255);
    // ellipse(50,50,30);
    // stroke(0,0,255);
    // ellipse(50,50,20);
    // stroke(0,0,255);
    // ellipse(50,50,10);// BLANK[1]
}
