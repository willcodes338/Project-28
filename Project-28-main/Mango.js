class Mango{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic' : true
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;
        this.image = loadImage("images/Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}