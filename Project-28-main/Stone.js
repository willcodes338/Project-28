class Stone{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2,
            'isStatic' : false
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("images/Plucking mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}