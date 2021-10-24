// チェッカー
function setup() {
  createCanvas(200, 200);
  // let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
     if( (i+j) % 2 == 0 ){
       fill(255)
     }
     else{
       fill(128)
     }
       rect(20*i, 20*j ,20 ,20);  //rect(x,y,幅,高さ)　x,yは左上角 //ここまで四角書く！
      //BLANK
     if( (i+j) % 2 == 0){
       fill(255)
     }　　　　　　　　　　　　　　　//i+Jが偶数の時白
     else if( j < 3){
        fill(255,0,0)
      }　　　　　　　　　　　　　　//上三列赤
     else if( j < 5 ){
       fill(128)
     }　　　　　　　　　　　　　　//中二列グレー
     else{
       fill(0)
     }　　　　　　　　　　　　　　//下三列黒
     ellipse(20*i+10, 20*j+10, 17, 17); //ここまで円書く！

    } //for(i)の }
  } //for(j)の }
} //setupの }

// rect(20,0,20,20);
// rect(60,0,20,20);
// rect(100,0,20,20);
// rect(140,0,20,20);
// rect(0,20,20,20);
// }
