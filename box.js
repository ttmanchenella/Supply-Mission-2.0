class Box{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }
    
    display() {
        rectMode(CENTER);
        var positions = (this.body.position);
        fill("red");
        rect(positions.x, positions.y, this.width, this.height);
    }
}