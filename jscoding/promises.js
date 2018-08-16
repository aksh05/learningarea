var desperate = false,
    hardWorking =true;

var isHardWorking = function(){
    return Promise.resolve({hardWorking:true});
}
var isDesperate = function(){
    return Promise.resolve({desperate:false});
}

var willGetANewJob = function(){

    return new Promise(function(resolve,reject){

        var isHardWorkingPrms = isHardWorking();
        var isDesperatePrms = isDesperate();

        Promise.all([isDesperatePrms,isHardWorkingPrms]).then(function(resp){
            
            if(!resp[0].desperate && resp[1].hardWorking){
                var newJob = {
                    name: "Apple",
                    monthlySalary:160000,
                    message: "Successfuly got a job",
    
                }
                resolve(newJob);
            }else{
                var error = new Error("You are screwed");
                reject(error);
            }
        }).catch(function(error){
            console.log(error);
        });
        

    }); 

}

//will you get a new job? Try to be more hardworking and less desperate
willGetANewJob().then(function(job){
    console.log(job);
}).catch(function(error){
    console.log(error.message);
});