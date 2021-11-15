// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("神戸大学",100,128,0,128,255,255,0);
}

function balloon(t,p,r1,g1,b1,r2,g2,b2){
//t=テキスト、p=テキストの場所、r1.g1.b1=背景色、r2.g2.b2=文字色
  let w = textWidth(t);
  let h = textAscent() + textDescent(); //テキストの高さ。ベースラインから上の長さはAscent、ベースラインから下の長さはDescent
  fill(r1,g1,b1);
  noStroke()
  // rect(0, 0, w + p * 10, h + p * 2); //(左上のx,左上のy,幅,高さ)
  ellipse(p+w/2, h + p, w*3 ,80)//ellipse(中心x,中心y,横の直径,縦の直径)
  fill(r2,g2,b2);
  text(t, p, h + p); //(text,左上のx,左上のy)
  fill(r1,g1,b1)
  noStroke()
  triangle(p+w/2+20,h+p+30,p+w/2+40,h+p+60,p+w/2+40,h+p+30)
}
