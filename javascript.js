
window.onload = () => {

let stage = document.getElementById('stage');
let ctx = stage.getContext('2d');
document.addEventListener("keydown",keyPush);
setInterval(game, 100);

const vel = 1;

let velocidadeX = velocidadeY = 0; //Velocidade inicial de X e Y
let snakeX = 10;     //Ponto inicial X da Cobra
let snakeY = 15;     //Ponto inicial Y da Cobra
let tamanhoBlocos = 20;     //Tamanho dos blocos em pixel
let numeroBlocos = 30;      //Quantidade de blocos
let redPointX = redPointY = 15; // Posição inicial da Maça 

let trail = [];
tamanhoSnake= 5;

function game () {

    snakeX += velocidadeX;
    snakeY += velocidadeY;
    if(snakeX<0){
        snakeX = numeroBlocos-1;
    }
    if(snakeX > numeroBlocos-1){
        snakeX =0;
    }
    if(snakeY<0){
        snakeY = numeroBlocos-1;
    }
    if(snakeY > numeroBlocos-1){
        snakeY=0;
    }
    

    ctx.fillStyle = '#222';    //Stage
    ctx.fillRect(0,0, stage.width, stage.height);

            ctx.fillStyle = 'black';
            for (let i = 0; i < stage.height ; i+=tamanhoBlocos) {  //Linhas do Stage
                ctx.fillRect(0,i,stage.width,1);
                }
            ctx.fillStyle = 'black';
            for (let i = 0; i < stage.width ; i+=tamanhoBlocos) {  // Linhas do Stage
                ctx.fillRect(i,0,1,stage.height);
                }

    ctx.fillStyle = "red";                  // Maçã
    ctx.fillRect(redPointX*tamanhoBlocos+1, redPointY*tamanhoBlocos+1, tamanhoBlocos-1,tamanhoBlocos-1);

    ctx.fillStyle = 'green';
    for (let i = 0; i < trail.length; i++) {  // Snake cobra
        ctx.fillRect(trail[i].x*tamanhoBlocos+1, trail[i].y*tamanhoBlocos+1,
                tamanhoBlocos-2,tamanhoBlocos-2);

        if(trail[i].x == snakeX && trail[i].y == snakeY){
            velocidadeX = velocidadeY=0;
            tamanhoSnake =5;
            
        }  
    }

    trail.push({x:snakeX,y:snakeY})
    while (trail.length > tamanhoSnake){
        trail.shift();
    }
    if(redPointX==snakeX && redPointY==snakeY){   //comer e renderizar a maçã em um novo local
        tamanhoSnake++;
        redPointX = Math.floor(Math.random()*numeroBlocos);
        redPointY = Math.floor(Math.random()*numeroBlocos);
    }
}

function keyPush (event){              //Comandos que mudam a direção da cobra
        
    if (event.keyCode == 37 && velocidadeX == 0) { //Left
            velocidadeX = -vel;
            velocidadeY = 0;
            console.log(trail);
            
    }
    if (event.keyCode == 38 && velocidadeY == 0) { //up
        velocidadeX = 0;
        velocidadeY = -vel;
        
    }
    if (event.keyCode == 39 && velocidadeX == 0) { //right
        velocidadeX = vel;
        velocidadeY = 0;
        
    }
    if (event.keyCode == 40 && velocidadeY == 0) { //down
        velocidadeX = 0;
        velocidadeY = vel;
        
    }
        
}
}