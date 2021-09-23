
    window.onload = function(){

        var stage = document.getElementById('stage');
        var ctx = stage.getContext('2d');
        document.addEventListener("keydown",keyPush)
        setInterval(game, 100);
        
        const vel = 1;
        
        var velocidadeX = velocidadeY = 0; //Velocidade inicial de X e Y
        var snakeX = 10;     //Ponto inicial X da Cobra
        var snakeY = 15;     //Ponto inicial Y da Cobra
        var tamanhoBlocos = 20;     //Tamanho dos blocos em pixel
        var numeroBlocos = 30;      //Quantidade de blocos
        var redPointX = redPointY = 15; // Posição inicial da Maça 
        
        var trail = [];
        tamanhoSnake= 5;
        
        function game (){
        
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
            
        
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0, stage.width, stage.height);
        
            ctx.fillStyle = "red";
            ctx.fillRect(redPointX*tamanhoBlocos, redPointY*tamanhoBlocos, tamanhoBlocos,tamanhoBlocos);
        
            ctx.fillStyle = 'gray';
            for (var i = 0; i < trail.length; i++) {
                ctx.fillRect(trail[i].x*tamanhoBlocos, trail[i].y*tamanhoBlocos,
                     tamanhoBlocos-1,tamanhoBlocos-1);
        
                if(trail[i].x == snakeX && trail[i].y == snakeY){
                    velocidadeX = velocidadeY=0;
                    tamanhoSnake =5;
                }  
            }
        
            trail.push({x:snakeX,y:snakeY})
            while (trail.length > tamanhoSnake){
                trail.shift();
            }
            if(redPointX==snakeX && redPointY==snakeY){
                tamanhoSnake++;
                redPointX = Math.floor(Math.random()*numeroBlocos);
                redPointY = Math.floor(Math.random()*numeroBlocos);
                
            }
        }
        
        function keyPush (event){
        
            switch (event.keyCode) {
                case 37: //Left
                    velocidadeX = -vel;
                    velocidadeY = 0;
                break;
            
                case 38: //up
                    velocidadeX = 0;
                    velocidadeY = -vel;
                break;
            
                case 39: //right
                    velocidadeX = vel;
                    velocidadeY = 0
                break;
            
                case 40: //down
                    velocidadeX = 0;
                    velocidadeY = vel
                break;
            
                default:
                    break;
            }
        }
        
        
        
        
        
        }