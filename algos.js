"use strict";
var utils = require("./utils").utils();

(()=>{

    

})();
//initialcode deleted by mistake , will write later
(()=>{

    /===============linked lists================/

    //list nodes
    function Node(data){
        this.data = data;
        this.next = null;
    }
    //list constructor function
    function LinkedList(){
        this.root = null;
    }
    LinkedList.prototype.display = function(){
        var curr = this.root;
       
        var list = "";
        while(curr!=null){
            list += curr.data+"=>";
            curr = curr.next;
        }
        console.log(list);
    }
    //initialise linked list
    LinkedList.prototype.initialiseLinkedList = function(till){
        var linkedList = new LinkedList();
        var curr = null;
        for(var i=1;i<=till;i++){
            var node = new Node(i);
           
            if(this.root == null){
                
                this.root = node;
                
            }else{
                
                curr.next  = node;
                
            }
            curr = node;
        }
        
        this.display();
    }

    //swap kth node from beg and end
    LinkedList.prototype.swapKthNode =  function(k){
        
        //initialise pointers for storing th swap window 
        var beg_prev = null, beg = null, end = null, end_prev = null;
       
        //calculate length of the list
        var curr = this.root;
        var len = 0;
        while(curr!=null){
            len++;
            curr = curr.next;
        }
        if(len<k){
            console.log("Invalid Inputs");
            return;
        }
        const kthFromEnd = (len - k) +1;
        var i = 1;curr = this.root;
        while(curr!=null && (i<=kthFromEnd||i<=k)){
            if(i<k){
                beg_prev = curr;
            }
            if(i==k){
                
                beg = curr;
            }
            if(i==kthFromEnd-1){
                end_prev = curr;
            }
            if(i==kthFromEnd){
                end = curr;
                
            }
            curr = curr.next;
            i++;
        }

        
        if(beg_prev!=null){
            beg_prev.next = end;
        }
        if(end_prev!=null){
            end_prev.next = beg;
        }

        var temp = beg.next;
        beg.next = end.next;
        end.next = temp;

        
        if(k==1){
            this.root = end;
        }
        if(k==len){
            this.root = beg;
        }
    }

    var linkedList = new LinkedList();
    linkedList.initialiseLinkedList(6);
    linkedList.swapKthNode(2);
    linkedList.display();

    /================Binaries=================/
    var countBitsToBeFlipped = function(a,b){
        var xor = a^b;
        console.log(xor);
        var count = 0;
        while(xor){
            count = count + (xor & 1);
            xor = xor>>1;
        }
        console.log(count);
    }
    countBitsToBeFlipped(10,20);


    /================Search arrays====================/
    var searchSortedMatrix = function(num){
        if(!num)
        return;
        var a = [ [10, 20, 30, 40],
        [15, 25, 35, 45],
        [27, 29, 37, 48],
        [32, 33, 39, 50]];
        var i=0; var j=a[0].length-1;
        console.log(i+""+j)
        while(i<a.length && j>=0){
            if(a[i][j]==num){
                console.log("Match found at: "+i+","+j);
                return;
            }else if(a[i][j]>num){
                j--;
            }else {
                i++;
            }
        }
        console.log("Not Found");
    }
    searchSortedMatrix(39);

    /===========Two primes to one number=============/

	   
	function getPrimeSum(A){

	    var primes = []
	    
        function getPrimes(){
            var p = [];
            p[0]=0;
            p[1] = 0;
            for(var i=2;i<=A;i++){
                p[i]=1;
                
                for(var j= 2;j<=Math.sqrt(A);j++){

                    if(p[j]==1){
                        for(var k=2;k*j<=A;k++){
                            
                               p[j*k]=0;
                           
                       }
                    }
                    
                   
                        
                }
            }
            return p;
        }
        
        
        primes = getPrimes();

        primes.forEach(function(val){
            //if()
        });
        var ans = 1;
        return ans;
	
    }
    getPrimeSum(10);
})();

(function isReachable(){

    let destX = 26,destY=12;
    let x1 = 2, y1 =10

    function isR(x,y){
        if(x>destX || y>destY){
            return false;
        }

        if(x==destX && y==destY)
            return true;
        if(isR(x+y,y) || isR(x,x+y))
            return true;
        return false;
        
    }
    console.log(isR(x1,y1))
}());

(function(){
    console.log("========Distinct element in all windows of size k in an array========")
    let arr = [1,2,3,1,4,5,6,7,3,3];
    let k =4, countDict = {},i=0,ct =0, ans="",j=0;
    while(i<k){
        if(countDict[arr[i]]){
            countDict[arr[i]] += 1;
        }else{
            countDict[arr[i]] = 1;
            ct++;
        }
        i++;
    }
    
    ans+= ct+" ";
    
    while(i<arr.length){
        if(countDict[arr[j]] > 1){
            countDict[arr[j]] -= 1;
        }else{
            delete countDict[arr[j]];
            ct--;
        }
        
        j++;
        if(!countDict[arr[i]]){
            countDict[arr[i]] = 1;
            ct++;
        }else{
            countDict[arr[i]] += 1;
        }

        i++;
        ans+=ct + " ";
    }
    console.log(ans);
})();

(function lis(){
    
        let arr = [2, 5, 6, 3, 7, 6, 5, 8];
        //let arr = [3,4,-1,0,6,2,3];
        let t = new Array(arr.length);
    
        let maxLen = Number.MIN_VALUE;
        for(let i=0;i<arr.length;i++){
            t[i]=1;
            for(let j=0;j<i;j++){
                if(Math.abs(arr[j]-arr[i])==0 || Math.abs(arr[j]-arr[i])==1){
                    t[i] = Math.max(t[i],t[j]+1);
                }
            }
            if(maxLen<t[i]){
                maxLen = t[i];
            }
        }
        console.log(maxLen)
}());


