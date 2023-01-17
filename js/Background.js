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