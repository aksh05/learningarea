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
        while(curr!=null && (i<=kthFromEnd|| i<=k)){
           
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
})();
