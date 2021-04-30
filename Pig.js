class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
   }

display(){
  //console.log(this.body.speed);
  if(this.body.speed<3){
    super.display(); // super keyword is used to conect child class to base class
  }
  else{
    World.remove(world,this.body); //to vanish the pigs
    push();
    this.Visiblity = this.Visiblity-5;
    tint(255,this.Visiblity);
    image(this.image,this.body.position.x,this.body.position.y,50,50); // image(imagelink,x pos,y pos,width,height)
    pop();
  }
 
}
score(){
  if(this.Visiblity<0 && this.Visiblity>-1005){
    score ++
  }
}

}

