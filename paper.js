class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.image = loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y,options);
 		World.add(world, this.body);
         keyPressed();
           
       
	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.r,this.r)
			imageMode(CENTER);
			image(this.image, 0, 0, this.width, this.height);
			pop()
			
	
    

    }
}