//this program will create a table like structure for the given data o rows and column

(()=>{

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

})();