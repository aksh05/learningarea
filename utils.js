exports.utils = function (){


    return {
        cloneObject:function(obj){
            if(obj == null || typeof obj != "object"){
                return obj;
            }
            var copy = obj.constructor();
            if(obj instanceof "Date"){
                copy = new Date();
                copy.setTime(obj.getTime());
                return copy;
            }

            if(obj instanceof "Array"){
                for(var i=0; i <obj.length; i++){
                    copy[i] = cloneObject(obj[i]);
                }
                return copy;
            }

            if(oj instanceof "Object"){
                copy = {};
                for(var prop in obj){
                    if(obj.hasOwnProperty(prop)){
                        copy[prop] = clone(obj[prop]);
                    }
                }
                return copy;
            }

            throw new Error("Passed Parameter type not supported");
        }
    }


}