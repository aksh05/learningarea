// playing around with vectors
function Vector(x,y){
    this.x = x;
    this.y = y;
    
}

//adding to prototype
Vector.prototype.plus = function(vector){
    if(vector instanceof Vector){
        return new Vector(this.x+vector.x,this.y+vector.y);
    }else{
        console.log("Please pass a vector object");
    }
}

Vector.prototype.minus = function(vector){
    if(vector instanceof Vector){
        return new Vector(this.x-vector.x,this.y-vector.y);
    }else{
        console.log("Please pass a vector object");
    }
    
}

Object.defineProperty(Vector.prototype,"length",{

    get:function(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
});

var vector = new Vector(10,20);
console.log(vector.length);
var a = vector.plus(new Vector(10,10));
console.log(a);