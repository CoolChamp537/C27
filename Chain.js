class Chain {
    constructor(body1,body2){

        var options = {
            length: 20,
            stiffness: 0.09,
            bodyA: body1,
            bodyB: body2
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pA = this.chain.bodyA.position
        var pB = this.chain.bodyB.position
        push()
        strokeWeight(5) 
        line(pA.x,pA.y,pB.x,pB.y)
        pop()
    }
}