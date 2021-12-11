class Player {
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':0.1,
        }
        this.body = Bodies.rectangle(100,400,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/character.png")
        //this.animation = loadAnimation(charJumping);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        image(this.image, pos.x,pos.y,this.width,this.height);
        
        if(keyIsDown(UP_ARROW)){
            /*for (var i= pos.x; i<= 1200; i=i+10 ){
                image(this.image, i,pos.y,this.width,this.height);
                console.log("se mueve");
            }*/
            if (frameCount % 60 === 0) {
                pos.x+=10;
                image(this.image, pos.x,pos.y,this.width,this.height);
            }
        }
    }
}