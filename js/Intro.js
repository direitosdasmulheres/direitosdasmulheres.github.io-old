function drawIntro()
{
  textSize(30);
  noStroke();
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  text("WOMEN RIGHTS IN PORTUGAL", width/2, 100);
  
  textStyle(NORMAL);
  textSize(20);
  textAlign(CENTER);
  textWrap(WORD);
  text(descricao, width/2, 150, width-100);
  
  /* Cria botão para avançar para a próxima cena */
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height/2;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 30;
  
  rectMode(CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  text("More info", width/2, height/2);
  
  /* Se o cursor estiver no retanculo e clicar, vai para a proxima cena */
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 2;
    mouseIsReleased = false;
    rectMode(CORNER);
  }
}
