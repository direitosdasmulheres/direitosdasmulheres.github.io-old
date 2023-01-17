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
        textSize(30);
        textAlign (CENTER, CENTER);
        textStyle(BOLD);
        text("WOMEN RIGHTS IN PORTUGAL", width/2, this.margem); 
        
        textStyle(NORMAL);
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
        text(ourText, width/2-quadrante*1.5, height-240-10, width/2+quadrante, 240);
        
      }
    }
  
    drawText() 
    {
    }
}