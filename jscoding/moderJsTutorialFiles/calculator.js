function Calculator(){
    this.operation = {
        "+":function(a,b){
            return a+b;
        },
        "-":function(a,b){
            return a-b;
        },
        
    }

    this.addMethod = function(opName, callback){
        if(typeof opName != "string")
            return;
        if(typeof callback != "function")
            return;
        this.operation[opName] = callback;
        
    } 

    this.calculate = function(exp){
        if(typeof exp !== "string")
            return;
        let expression = exp.split(" ");
        let op1 = parseInt(expression[0]),
            operation = expression[1],
            op2 = parseInt(expression[2]);

            if(!this.operation[operation] || isNaN(op1) || isNaN(op2))
                return NaN ;
        return this.operation[operation](op1,op2);

    }
}

(function(){

    //var readExression = prompt("Enter the expression");
    var calculator = new Calculator();
    
    //alert(calculator.calculate(readExression));

    function template(strings, ...keys) {
        return (function(...values) {
          var dict = values[values.length - 1] || {};
          var result = [strings[0]];
          keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
          });
          return result.join('');
        });
      }
    
      var name = "akshay"
      console.log(template`${name} is good boy`);

})();

(()=>{
"use strict";
function debounce(fn,ms){
    let coolDown = false;
    return (...args)=>{
        if(coolDown)
            return;
        fn.apply(this,args);
        coolDown = true;
        setTimeout(()=>{coolDown = false},ms);
    }
}
let f = debounce(console.log,1000);
f(1);

})();