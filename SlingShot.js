class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0,
            length: 50
        }
    this.slingShot = Constraint.create(options);
       this.pointB = pointB;
        World.add(world, this.slingShot);
    }
    fly(){
        this.slingShot.bodyA=null;
    }
    display(){
        if(this.slingShot.bodyA){
        var posA = this.slingShot.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }
    
}