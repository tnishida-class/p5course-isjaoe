// 最終課題を制作しよう

//【final work】もとの形
// function setup(){
//   createCanvas(windowWidth, windowHeight);
//  }
//
//  function draw(){
//    background(160, 192, 255);
//  }
//
//  function windowResized(){
//    resizeCanvas(windowWidth, windowHeight);
//  }//【final work】もとの形ここまで


function setup(){
  createCanvas(windowWidth, windowHeight);
  三崩し(196,0,0,14,47,146);//三崩し(168,153,205,255,140,0)で紫と黄色になる！
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  fill(149,204,174);
  noStroke();
  ellipse(225,225,250,250);//ellipse(中心x,中心y,横の直径,縦の直径)
  fill(234,145,152);
  textSize(50);
  if(keyIsDown(" ".charCodeAt(0))){
    text("IT",200,240);
  }
  else{
    text("グロ文",150,240);
  }
}

function 三崩し(縦r,縦g,縦b,横r,横g,横b){
  noStroke();
  for(let i = 0; i < 10; i++){
  for(let j = 0; j < 10; j++){
     if( (i+j) % 2 ==0){
       fill(縦r,縦g,縦b);
       rect(43*i+10, 43*j+10, 10, 40);
       rect(43*i+25, 43*j+10, 10, 40);
       rect(43*i+40, 43*j+10, 10, 40);
     }
     else{
       fill(横r,横g,横b);
       rect(43*i+10, 43*j+10, 40, 10);
       rect(43*i+10, 43*j+25, 40, 10);
       rect(43*i+10, 43*j+40, 40, 10);
     }
  } //for(j)の }
  } //for(i)の }
}
