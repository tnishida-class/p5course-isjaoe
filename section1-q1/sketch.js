// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 400);
  background(255);

  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  stroke(green);
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます

  fill(blue);
  noStroke();
  ellipse(300,100,100,100); //ここまで青円
  fill(255);
  ellipse(295,95,88,88);　//ここまで大きい白円
  fill(green);
  ellipse(294,94,80,80);　//ここまで緑円
  fill(255);
  ellipse(293,99,72,72);　//ここまで小さい白円
  fill(0,0,0);
  textSize(18);
  textFont("serif");
  text("KOBE",267,90);
  fill(0,0,0);
  textSize(8);
  textFont("serif");
  text("UNVERITY",280,100);
}
