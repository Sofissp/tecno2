let fondo;
let x;
let y;
let rojo = [4];
let verde = [4];
let azul = [4];
let opasidad;
let fondos = [5];

function preload(){
    for (let i=1; i <= 5; i++) {
      fondos[i] = loadImage ("data/fondo"+i+".png");
    }
}

function setup() {
  createCanvas(455, 600);
  rojo[1] = 220;
  verde [1] = 220;
  azul [1] = 220;
  rojo [2] = 20;
  verde [2] = 20;
  azul [2] = 20;
  rojo [3] = 141;
  verde [3] = 141;
  azul [3] = 141;
  rojo [4] = 59;
  verde [4] = 59;
  opasidad = 1;
}

function draw() {
  x = mouseX;
  y = mouseY;

  if (mouseIsPressed == false){

    background(0); 
    push();
    tint(0,0,0);
    image(fondos[1],0,0);
    pop();

    if (opasidad > -1 & mouseX < width & mouseY < height){
      opasidad = mouseX*0.5;
    }

    if (mouseY > -1 & mouseY < height & mouseX < width){
      rojo [1] = mouseY*0.35;
    }
  
    if (mouseY > -1 & mouseY < height & mouseX < width){
      verde [1] = mouseY*0.35;
    }
  
    if (mouseY > -1 & mouseY < height & mouseX < width){
      azul [1] = mouseY*0.35;
    }

  push();
  tint(rojo [1], verde [2], azul [3], opasidad);
  image( fondos[2], 0,0);
  pop();

  push();
  tint(rojo [2], verde [3], azul [1], opasidad);
  image( fondos[4], 0,0);
  pop();

  push();
  tint(rojo [3], verde [1], azul [2], opasidad);
  image( fondos[3], 0,0);
  pop();

  push();
  tint(rojo [4], azul [1], verde [4], opasidad);
  image( fondos[5], 0,0);
  pop();

  } else if (mouseIsPressed==true) {
    for (let i = 2; i < 6; i++) {
      image( fondos[i], 0,0);
    }
    rojo [3] = random(0, 220);
    verde [3] = random(0, 220);
    azul [3] = random(0, 220);
    rojo [4] = random (0, 220);
    opasidad = 1;
    print (opasidad)
  } 

  print (mouseIsPressed);
}
