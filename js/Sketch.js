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