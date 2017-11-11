//this program will create a table like structure for the given data o rows and column

(()=>{

   /************Table Elements Definitions****************/ 
    //cell constructor for each cell in a row
    function Cell(height,width,content){
        this.height = height || 0;
        this.width = width || 0;
        this.content = content || "";

    }
    
    //cell row  constructor
    function CellRow(rowArray){
        this.row = rowArray;
    }
    //adding getters and setters
    Object.defineProperties(CellRow.prototype,"minHeight",{

        get:function(){
            return this.row.reduce(function(min,cell){
                return Math.min(min,cell.height);
            },Number.MAX_SAFE_INTEGER);
        },
        set: function(){
            console.log("Cannot set the minimum height of a cell row");
        }
    });
    Object.defineProperties(CellRow.prototype,"minWidth",{
        
        get:function(){
            return this.row.reduce(function(min,cell){
                return Math.min(min,cell.width);
            },Number.MAX_SAFE_INTEGER);
        },
        set: function(){
            console.log("Cannot set the minimum width of a cell row");
        }
    });


    /**********End Table Elements Definitions***********/

    /*************Utilities for table building***************/

    //draw each cell row
    function draw(width,height){
        

        var cellRow = new CellRow();

    }

    //this function will return the maximum height of each cell in each row
    function rowHeights(rows){

        return rows.map((row)=>{
            return row.reduce((max,val)=>{
                return Math.max(max,val);
            },0);
        });
    }

    //this function will return the maximum width of each column in each row
    function colWidths(rows){
        return rows[0].map((_,i)=>{
            return rows.reduce((max,row)=>{
                return Math.max(max,row[i].minWidth());
            },0);
        });
    }

    //this function takes rows as the parameter and draws the table 
    function drawTable(rows){
        var rows = rowHeights(rows);
        var cols = rowHeights(rows);

        function drawLines(){
            
        }
    }
})();