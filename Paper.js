class Paper
{
constructor(x, y, radius)
{
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.circle(x, y, radius/2, options);
this.radius=radius;
// this.height=height;
World.add(world, this.body);

}
display()
{
    var pos=this.body.position
   
    var angle=this.body.angle
    push();
    rectMode(CENTER)
   translate(pos.x, pos.y);
   rotate(angle);
    fill(255);
    // ellipseMode(RADIUS);
    ellipse(0, 0, this.radius);
   pop();
}
}