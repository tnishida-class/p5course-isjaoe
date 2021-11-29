// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  fill(0);
  arc(200,200,400,400,radians(0),radians(360)); //黒円

  fill(red);
  arc(200,200,330,330,0,PI);
  arc(200,200,330,330,radians(0),radians(360)); //大きい白円１
  arc(200,200,300,300,radians(0),radians(360)); //大きい白円２
  arc(200,200,200,200,radians(0),radians(360)); //小きい白円１
  arc(200,200,170,170,radians(0),radians(360)); //小さい白円２
  fill(green); //
  ellipse(200,200,50,50); //緑円
  fill(red); //
  ellipse(200,200,30,30) //赤円

}

// function setup() {
//   const green = color(0, 255, 0);
//   const red = color(255, 0, 0);
//   const black = color(0);
//   const cream = color(242, 212, 147);
//   createCanvas(400, 400);
//   background(255);
//   stroke(255);
//   strokeWeight(3);
//
//   const cx = width / 2; // 中心は (cx, cy)
//   const cy = height / 2;
//   const maxR = min(width, height); // 大きさは幅と高さのうち小さい方
//
//   drawCircle(black, maxR); //drawCircle(x,y,半径,色,塗りつぶすかどうか)
//   drawArcs(green, red, maxR * 0.8);
//   // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
//   drawCircle(red, maxR * 0.05);
// }
//
// function drawCircle(c, r){
//   fill(c);
//   ellipse(cx, cy, r, r);
// }
//
// for (let i = 0; i < 20; i++) {
//     let start = TWO_PI / 20 * i;
//     let stop = TWO_PI / 20 * (i + 1);
//     if(i % 2 == 0){
//       fill(green);
//     }
//     else{
//       fill(red);
//     }
//     // fill(i % 2 == 0 ? green : red);
//     arc(200, 200, 330, 330, start, stop, PI);
//   }
