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

## texts.js

~~~
let ourText = "🔴 1979 | Convenção -ominação de Todas as Formas de Discriminação contra as Mulheres (ONU)\n🟠 1993 | Declaração da Eliminação da Violência contra as Mulheres (ONU)\n🟡 1995 | IV Conferência Mundial sobre a Mulher - Declaração de Beijing (China)\n🟢 2000 | Resolução 1325 - Participação Feminina na Prevenção e Resolução de Conflitos (ONU)\n🔵 2015 | Objetivos de Desenvolvimento Sustentável - Igualdade de Género até 2030 (ONU)\n🟣 2017 | 3.5 a 5.5 Milhões de pessoas participam na 'Marcha das Mulheres'";

let descricao = "Em Portugal, as mulheres deixaram, perante a lei, de dever obediência ao marido em 1910 e, em 1931, puderam votar desde que tivessem um curso secundário ou superior. Só em 1968 obtiveram direitos políticos iguais aos dos homens, e, apenas no ano seguinte, salário equivalente ao masculino. Em 1990 passou a ser proibida a publicidade com discriminação sexual e, nove anos mais tarde, foi criado o Ministério da Igualdade.";
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

##  data.js
~~~
/* importar dados da database */
function importData() 
{
  /* declarar array */
  data_elements = [];
  
  for (let r=0; r<tabCores.getRowCount(); r++) 
  {
    const ano = tabCores.getString (r, "anos");
    const numero_alunas = tabCores.getNum (r, "numero_alunas");
    const cor = tabCores.getString (r, "cor");
    const tamanho = tabCores.getString (r, "tamanho");
    data_elements[r] = new DataElement (ano, numero_alunas, cor, tamanho);
  }
}
~~~

##  dataElement.js

~~~
let textL, textP;

/* Vai buscar os dados das bolas já declaradas */
class DataElement {
    constructor (ano, numero_alunas, cor, tamanho) 
    {
      this.ano = ano;
      this.numero_alunas = numero_alunas;
      this.cor  = cor;
      this.tamanho = tamanho;
      this.pos = 0;
    }
  
  /* Animação entre o ponto médio e o valor de cada ano */
    animDataElement() 
    {
      if (this.pos >= this.escala) this.pos--;
      else 
      if (this.pos <= this.escala) this.pos++;
    }

    /* Desenhar os elementos */
    drawDataElement (pos) 
    {
      this.margem = 150;
    
    /* Animação da segunda cena, no formato landscape */
      if (device_orientation === "l") 
      {
        textL = 716;
        noStroke();
        fill(255);
        textSize(40);
        textAlign (CENTER, CENTER);
        text("A HISTÓRIA DOS DIREITOS DAS MULHERES", width/2, this.margem); 
        textSize(16);
        textAlign (LEFT, CENTER);
        text(ourText, width/2-textL/2, height-120-100, width/2+textL/2, 120);

        /* Limite da animação no formato Landscape */
        this.escala = map (this.numero_alunas, 34000, 212000, height/2-this.margem*2, -height/2+this.margem*2);
         
        /* Posição Final das bolas*/
        this.escala2 = map (this.numero_alunas, 34000, 212000, 30, 100);

        /* Cria círulos no formato landscape */
        ellipseMode(CENTER);
        fill(this.cor);
        push(); // começa a desenhar os circulos
        stroke(1);
          translate (0, height/2)
          ellipse(pos, this.pos, this.escala2);
        pop(); // restaura o estado inicial 
      }
      
      else 
      if (device_orientation === "p") 
      {
        noStroke();
        fill(255);
        textSize(30);
        textAlign (CENTER, CENTER);
        text("A História dos Direitos das Mulheres", width/2, this.margem); 
        
        /* Limite da animação no formato Portrait */
        this.escala = map (this.numero_alunas, 34000, 212000, width/2-this.margem, -width/2+this.margem);
        ellipseMode(CENTER);
        fill(this.cor);
        push();
        stroke(1);
          translate (width/2, 0)
          ellipse(this.pos, pos, this.tamanho);
        pop(); 
        noStroke();
        fill(255);
        textSize(13);
        textAlign (LEFT, CENTER);
        text(ourText, width/2-quadrante*1.5, height-240-10, width/2+quadrante, 240);}
    }
  
    drawText() 
    {
    }
}
~~~
