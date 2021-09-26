
window.onload = () => {

let stage = document.getElementById('stage');
let ctx = stage.getContext('2d');
setInterval(game, 100);
let gamePaused =false;
 
document.addEventListener("keydown",keyPush);

const vel = 1;

let velocidadeX =  0;  //Velocidade inicial de Y
let velocidadeY = 0;    //Velocidade inicial de Y
let snakeX = 10;         //Ponto inicial X da Cobra
let snakeY = 15;          //Ponto inicial Y da Cobra
let tamanhoBlocos = 20;    //Tamanho dos blocos em pixel
let numeroBlocos = 30;    //Quantidade de blocos
let appleX = 15;        // Posição inicial X da Maça 
let appleY = 15;      // Posição inicial Y da Maça

let trail = [];      
let tamanhoSnake;

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

    ctx.fillStyle = "red";                  // Apple
    ctx.fillRect(appleX*tamanhoBlocos+1, appleY*tamanhoBlocos+1, tamanhoBlocos-1,tamanhoBlocos-1);

    ctx.fillStyle = 'green';
    for (let i = 0; i < trail.length; i++) {  // Snake cobra
        ctx.fillRect(trail[i].x*tamanhoBlocos+1, trail[i].y*tamanhoBlocos+1,
                tamanhoBlocos-2,tamanhoBlocos-2);
                
        if(trail[i].x == snakeX && trail[i].y == snakeY){       //mantem a cobra parada 
            if(velocidadeX !=0 || velocidadeY !=0){ gameOver()}
            velocidadeX = velocidadeY = 0;
            tamanhoSnake = 5;                                    
            
        }  
        while(appleX==trail[i].x && appleY==trail[i].y){    //impede que a Apple seja renderizada embaixo da cobra
            appleX = Math.floor(Math.random()*numeroBlocos);
            appleY = Math.floor(Math.random()*numeroBlocos); 

        }
    }

    trail.push({x:snakeX,y:snakeY})
    while (trail.length > tamanhoSnake){
        trail.shift();
    }
    if(appleX==snakeX && appleY==snakeY){   //comer e renderizar a Apple em um novo local
        tamanhoSnake++;
        appleX = Math.floor(Math.random()*numeroBlocos);
        appleY = Math.floor(Math.random()*numeroBlocos);
    }
    
    
    
}

    function keyPush (event){              //Comandos que mudam a direção da cobra

        if(gamePaused==false){ 
            
            if (event.keyCode == 37 && velocidadeX == 0) { //Left
                    velocidadeX = -vel;
                    velocidadeY = 0;
                    
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

    
    function gameOver () {
        
      document.getElementById("divGameOver").style.display = "flex";
      gamePaused=true;
    }

        (function () {
            function again(){
            console.log('change')
            document.getElementById("divGameOver").style.display = "none";
            gamePaused=false;
        }
        document.getElementById('buttonPlayAgain').addEventListener('click', again, true);
        })();
    
}