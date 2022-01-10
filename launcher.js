class Launcher {
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            lenght:10,
        }
        this.launcher = Matter.Constraint.create(options)
        this.pointB = pointB
        this.bodyA = bodyA
        World.add(world,this.launcher)
    }

    attach(body){
        this.launcher.bodyA = body
    }
  
    fly(){
        this.launcher.bodyA = null;
    }
  
   display(){
       if(this.launcher.bodyA){
       strokeWeight(3)
       line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
   }
  
  }