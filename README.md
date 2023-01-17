# direitosdasmulheres.github.io

Laboratório de Projeto I

Hugo Monteiro – 3200345  
Maria Henriques – 3200732  
Tomás Guimarães – 3200347

• [Infopedia](https://www.infopedia.pt/apoio/artigos/$historia-dos-direitos-da-mulher )
• [Imagem de Referência](https://www.politize.com.br/wp-content/uploads/2022/03/A-Histo%CC%81ria-dos-Direitos-das-Mulheres-3.png)
• [Dados Pordata](https://www.pordata.pt/portugal/alunos+matriculados+no+ensino+superior+total+e+por+sexo-1048-8485)

# conceito

A Relação dos Direitos das Mulheres com a entrada de estudantes do género feminino nas Universidades

Em Portugal, as mulheres deixaram, perante a lei, de dever obediência ao marido em 1910 e, em 1931, puderam votar desde que tivessem um curso secundário ou superior. Só em 1968 obtiveram direitos políticos iguais aos dos homens, e, apenas no ano seguinte, salário equivalente ao masculino. Em 1990 passou a ser proibida a publicidade com discriminação sexual e, nove anos mais tarde, foi criado o Ministério da Igualdade.
O nosso grupo decidiu escolher este tema para criarmos uma ligação entre a evolução dos Direitos das Mulheres e o aumento das oportunidades ao mostrarmos o aumento da entrada das mesmas no ensino superior em Portugal. Poderão visualizar a relação entres estes dados, através da nossa página.

# código
##  background.js

~~~
let c1,c2;
function background_gradient() {
  
  /* Cria o gradiente */
  c1 = color("#43a2a7");
  c2 = color("#cd295a");
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);line(0,y,width, y);
  }
}
~~~

## sketch.js

~~~
/*  Trabalho realizado por: Hugo Monteiro (3200345), Maria Henriques (3200723) e Tomás Guimarães (3200347), no ano letivo 2022-23, quinto semestre, na disciplina de Laboratório de Projeto I, curso Licenciatura de Design Gráfico e Multimédia na escola ESAD.CR, pedido pelo professor Marco Heleno, na data de entrega de 18-01-2023  */

let tabCores, data_element, clicked, device_orientation, quadrante, scene;

/* Importar a tabela */
function preload() 
{
  tabCores = loadTable("tabelaDados.csv", "csv", "header");
}
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  checkDeviceOrientation();
  importData();
  clicked = false;
  scene = 1;
  quadrante = width/4;
  mouseIsReleased = true;
}

/* Declara o formato do canvas (l = landscape, p = portrait) */
function checkDeviceOrientation()
{
  if (width>height) device_orientation = "l";
  else 
  if (height>width) device_orientation = "p";
}
function draw() 
{
  background_gradient();
  /* Desenha a página introdutória */
  if (scene === 1) drawIntro();
  else 
  if (scene === 2) drawData();
}
function mousePressed() 
{
  clicked = true;
}
function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
  checkDeviceOrientation();
}
~~~

## intro.js

~~~
function drawIntro()
{
  textSize (40);
  textAlign (CENTER);
  text("Titulo do projeto", width/2, 100);
  
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
~~~

##  