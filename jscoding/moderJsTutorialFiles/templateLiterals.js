"use strict";
function template(strings, ...keys) {
    return function(...values) {
      var dict = values[values.length - 1] || {};
      var result = [strings[0]];
      keys.forEach(function(key, i) {
        var value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    };
  }

  var name = "akshay"
  console.log(template`${name} is good boy`());

  function maxSubArr(arr){
    if(arr instanceof Array){
        var maxsum = Number.MIN_VALUE;
        var sum =0;
        var lidx = 0, ridx =0, ct =0;
        arr.forEach(function(value,index){
           sum = sum+value;
            if(sum<0){
                sum = 0;
                ct++;
                
            }else if(sum>maxsum){
                maxsum= sum;
                lidx = ct;
                ridx = index;
            }
        })
    }else{
        return "thenga";
    }
    return maxsum
  }

  console.log(maxSubArr([-2,-3,4,-1,-2,1,5,-3]));

(()=>{console.log("sd")})();

function alert(a){
    console.log(a)
}
function debounce(fn,ms){
    return (...args)=>{
        setTimeout(fn.apply(this,args),ms)
    }
}
function tellAGoodThing(){
    console.log("akshay is great");
}
let f = debounce(tellAGoodThing,1000);
f(1000);