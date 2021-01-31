class Box{

constructor(x,y,w,h){

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.visibility = 255;
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:false})
World.add(world,this.body);

}
score(){
if(this.visibility<0 && this.visibility >-105){
score++;

}

}
display(){
if(this.body.speed<3){
var boxpos=this.body.position;

push();
translate(boxpos.x,boxpos.y);

stroke("black");
//strokeWeight(4);
rect(0,0,this.w,this.h);
pop();
}else{
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility -5;
    tint(255,this.Visiblity);
    pop();
}
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();


}


}