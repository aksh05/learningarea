//building the world of grids

//can't  go without vectors in the real world
function Vector(x,y){
    this.x = x;
    this.y  = y
}

Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector.y + vector.y+this.y);
}


//making the grid  for the world
function Grid(width, height){
    this.space = new Array(width, height);
    this.height = height;
    this.width = width;
}
Grid.prototype.get = function(vector){
    return this.space[vector.x + vector.y*this.width]
}
Grid.prototype.set = function(content){
    this.space[this.x + this.y*this.width] = content;
}
Grid.prototype.isInside = function(){
    return (this.x<this.width&& this.x>=0 && this.y>=0 && this.y<this.height);
}