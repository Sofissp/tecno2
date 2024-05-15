let fondo;
let x;
let y;
let rojo = 220;
let verde = 220;
let azul = 220;
let opasidad = 1;
let fondos = [5];

function preload(){
    for (let i=1; i <= 5; i++) {
      fondos[i] = loadImage ("data/fondo"+i+".png");
    }
}

function setup() {
  createCanvas(455, 600);
}

function draw() {
  x = mouseX;
  y = mouseY;
  background(0);
  if (opasidad > -1 & mouseX < width & mouseY < height){
      opasidad = mouseX*0.5;
    } 
  if (mouseY > -1 & mouseY < height & mouseX < width){
    rojo = mouseY*0.35;
  }

  if (mouseY > -1 & mouseY < height & mouseX < width){
    verde = mouseY*0.35;
  }

  if (mouseY > -1 & mouseY < height & mouseX < width){
    azul = mouseY*0.35;
  }

  push();
  tint(0,0,0);
  image(fondos[1],0,0);
  pop();

  push();
  tint(rojo, 33, 70, opasidad);
  image( fondos[2], 0,0);
  pop();

  push();
  tint(63, 103, azul, opasidad);
  image( fondos[4], 0,0);
  pop();

  push();
  tint(90, verde, 12, opasidad);
  image( fondos[3], 0,0);
  pop();

  push();
  tint(24, azul, 155, opasidad);
  image( fondos[5], 0,0);
  pop();

  print (rojo, azul, verde);
  print (opasidad)
  
}

