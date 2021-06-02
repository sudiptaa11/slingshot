class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,40,40);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.pattern = [];
  }

  display() {
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;
    super.display();

    if(this.body.position.x > 200 && this.body.velocity.x > 10) {
      var position = [this.body.position.x, this.body.position.y];
      this.pattern.push(position);
    }
    

    for(var x = 0; x < this.pattern.length; x=x+1) {
      image(this.smokeImg, this.pattern[x][0], this.pattern[x][1]);
    }
    

    // this.pattern[0][0]  this.pattern[0][1]
    // this.pattern[1][0]  this.pattern[1][1]
    // this.pattern[2][0]  this.pattern[2][1]
    // this.pattern[3][0]  this.pattern[3][1]
    // this.pattern[4][0]  this.pattern[4][1]
    // this.pattern[5][0]  this.pattern[5][1]
    // this.pattern[6][0]  this.pattern[6][1]
    // this.pattern[7][0]  this.pattern[7][1]
    // this.pattern[8][0]  this.pattern[8][1]
    // this.pattern[9][0]  this.pattern[9][1]


    
  }
}
