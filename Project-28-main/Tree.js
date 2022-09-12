class Tree{

    constructor(x, y) {

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        
        this.body = Bodies.rectangle(x, y, 200, 250, options);
        this.width = 200;
        this.height = 250;
        this.image = loadImage("images/Plucking mangoes/tree.png");
        World.add(world, this.body);
      }

      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}