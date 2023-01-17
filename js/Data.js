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

/* desenhar dados || Scene 02 */
function drawData() 
{
  let espacamento = 0;
  let portait_margin = 0;
    
  /* verificar de a orientação do ecrã é horizontal ou vertical e decidir o espaçamento entre bolas */
  if (device_orientation === "l") espacamento = width/data_elements.length;
  else 
  if (device_orientation === "p")
  {
    portait_margin = 200;
    espacamento = (height-portait_margin*3)/data_elements.length;
  }
  
  /* animação das bolas */
  for (let i=0; i<data_elements.length; i++) 
  {
    const pos = espacamento*i + espacamento/2 + portait_margin;
    
    if (clicked === true) 
    {
      data_elements[i].animDataElement();
    }
    
    data_elements[i].drawDataElement (pos);
  }
}


