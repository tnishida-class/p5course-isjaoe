// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(400, 400);
  background(0);
  fill(255);
  // crossmark(10, 10, 90, 90);
  // ngmark(150, 50, 80);
  // star(250, 50, 40); //(x,y,サイズ)
  regularPolygon(12, 200, 200, 150) //(N角形,x,y,サイズ)
}
//
// function crossmark(x1, y1, x2, y2){  //function 名前(引数1, 引数2, ...){引数を使って、中身を書く}
//   line(x1, y1, x2, y2);
//   line(x2, y1, x1, y2);
// }
//
// function ngmark(cx, cy, r){
//   push();                  // 今の描画スタイルを覚えておく
//   noFill();                // 塗りつぶしのスタイルを変える
//   strokeWeight(r * 0.1);   // 線のスタイルを変える
//   let d = sqrt(r * r / 8); // 補足：sqrtは平方根を計算する関数
//   ellipse(cx, cy, r);
//   line(cx - d, cy - d, cx + d, cy + d);
//   pop();                   // 覚えておいたスタイルに戻す
// }
//
// function star(cx, cy, r){
//   beginShape();            // 点つなぎを始める
//   for(var i = 0; i < 10 ; i++){
//     let theta = TWO_PI * i / 10 - HALF_PI;
//     let x = cx + cos(theta) * r;
//     let y = cy + sin(theta) * r;
//     vertex(x,y);           // 次につなぐ点を１つ増やす
//   }
//   endShape(CLOSE);         // 点つなぎを終わる
// }

function regularPolygon(n, cx, cy, r){
  beginShape();            // 点つなぎを始める
  for(var i = 0; i < n ; i++){
    let theta = TWO_PI * i / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);           // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE);         // 点つなぎを終わる
}
