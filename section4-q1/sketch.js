// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  //rect(左上のx,左上のy,幅,高さ)
  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
   if(i>0){
     px=(i-1)*dx
     py=height-scores[i-1]*height/100
     strokeWeight(1)
     line(px+20,py,i*dx+20,height-scores[i]*height/100)
     strokeWeight(10)
     point(i*dx+20,height-scores[i]*height/100)
   }
   if(i==0){
     strokeWeight(10)
     point(20,height-scores[i]*height/100)
   }
  }
}
