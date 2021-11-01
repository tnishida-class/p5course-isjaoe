// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
    // (0+1)÷100の余り=1, (1++1)÷100の余り=2...って増えてって、(99+1)÷100の余り=0,(100+1)÷100の余り=1...って戻ってく

  if(keyIsDown(" ".charCodeAt(0))){
    if(count<25){
      ellipse(width/2,height/2, 2*count+50)
    }
    else if(count<50){
      ellipse(width/2,height/2, -2*count+150)
    }
    else if(count<75){
      ellipse(width/2,height/2, 2*count-50)
    }
    else{
      ellipse(width/2,height/2, -2*count+250)
    }
  }

   else{
     if(count<50){
        ellipse(width/2,height/2,count+50)
     }
     else{
          ellipse(width/2,height/2,150-count)
     }
   }
}
