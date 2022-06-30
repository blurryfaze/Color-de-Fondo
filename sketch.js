var trex, trex_running, edges;
var groundImage;
var piso 
var pisoinvisible
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    edges = createEdgeSprites();
    piso= createSprite (300,200,600,10);
    piso.addImage("arena",groundImage);
    pisoinvisible= createSprite (300,205,600,10);
    pisoinvisible.visible=false;
    //agregar tamaño y posición al Trex
    trex.scale = 0.5;
    trex.x = 50
}


function draw(){
  //establecer color de fondo.
    background("white");
  
    trex.collide (pisoinvisible);

    
    //cargar la posición Y del Trex
    console.log(mouseY);
    piso.velocityX = -5;
    if (piso.x<0)
    piso.x=300
    //hacer que el Trex salte al presionar la barra espaciadora



  if(keyDown("space")&& trex.y > 170){
    trex.velocityY = -4;
  }
  
  trex.velocityY = trex.velocityY + 0.2;
  
  //evitar que el Trex caiga
  
  drawSprites();
}
