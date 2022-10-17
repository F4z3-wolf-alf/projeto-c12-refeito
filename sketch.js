var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
 //loadAnimation (carregarAnimação) de corrida para o menino;
boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
 createCanvas(400,400);
 //crie um sprite para a pista 
 path=createSprite(180,350);
//adicione uma imagem para a pista
 "path.addImage(pathImg)";
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY=-4
path.scale=1.0;
//crie um sprite de menino
boy=createSprite(180,320,30,25);
//adicione uma animação de corrida para ele
boy.addAnimation("movingBoy",boyImg);
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  boy.x=World.mouseX

  if(boy.x < 60){
    boy.x = 60;
  }

  if(boy.x > 340){
  boy.x = 340;
  }



  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
//código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
