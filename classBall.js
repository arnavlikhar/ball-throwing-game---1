class ball{
  constructor(x,y,r){
    var options={
      friction:1.2,
      density:0.05,
      restitution:0.5
    }
    this.x=x
    this.y=y
    this.r=r
    this.body =Bodies.circle(this.x,this.y,this.r,options);
    this.image=loadImage("ball.png");
    World.add(world,this.body)
  }
display(){
  var pos = this.body.position;
  
  imageMode(CENTER);
  image(this.image, pos.x,pos.y,this.r,this.r);

}
}

