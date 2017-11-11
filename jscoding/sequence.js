//creating an iterable interface

function ArraySeq(array){
    this.array = array;
    this.currIndex = -1;
}

ArraySeq.prototype.next = function(){
    if(this.currIndex>=this.array.length-1){
        return false;
    }
    this.currIndex++;
    return true;
}
ArraySeq.prototype.current = function(){
    return this.array[this.currIndex];
}

function RangeSeq(from,to){
    this.currIndex = from-1;
    this.to = to;
}
RangeSeq.prototype.next = function(){
    if(this.currIndex >= this.to){
        return false;
    }
    this.currIndex++;
    return true;
}
RangeSeq.prototype.current = function(){
    return this.currIndex;
}

//iterae over first five records of array sequence
function logFive(sequence){

    for(var i =0;i<5;i++){
        if(!sequence.next()){
            break;
            
        }
        console.log(sequence.current());
    }

}

logFive(new RangeSeq(10,100));