//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  balls = [];
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  for(let i = 0; i < balls.length; i++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  if(count % 30 == 0){
  const b ={x:random(windowWidth), y:random(windowHeight), size:random(50), vx:random(0.25), vy:random(0.25)}
  balls.push(b)
  }
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size:random(50), vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
