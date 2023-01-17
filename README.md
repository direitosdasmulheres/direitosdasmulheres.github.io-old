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

