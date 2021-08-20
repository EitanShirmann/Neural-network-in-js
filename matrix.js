
class Matrix{

constructor(rows, cols){
this.rows = rows;
this.cols = cols;
this.data = [];

for(let i = 0; i<this.rows;i++){
    this.data[i] = [];
    for(let j = 0; j<this.cols; j++){
        this.data[i][j] = 0;
        }
    }
}


randomize(){
    for(let i = 0; i<this.rows;i++){
        for(let j = 0; j<this.cols; j++){
            this.data[i][j] = Math.random()*2-1;
        }
    }
}


add(n){
    if(n instanceof Matrix){
        for(let i = 0; i<this.rows;i++){
            for(let j = 0; j<this.cols; j++){
                this.data[i][j]+=n.data[i][j];
        }
    }
}
}


static transpose(matrix){

    let result = new Matrix(this.cols, this.rows);
    for(let i = 0; i<matrix.rows;i++){
        for(let j = 0; j<matrix.cols; j++){
            result.Matrix[j][i] = matrix.data[i][j];;
        }
    }

return result;
}


static fromArray(arr){
    let m = new Matrix(arr.length, 1);
    for(let i = 0; i<arr.length; i++){
        m.data[i][0] = arr[i];
    }
    
    return m;
}


toArray(){
    let arr  = [];
    for(let i = 0; i<this.rows;i++){
        for(let j = 0; j<this.cols; j++){
            arr.push(this.data[i][j])
        }
    }    
    return arr; 
}


static multiply(a, g){
    let result;
    if(a.cols!== g.rows){
        console.log("Columns A do not match the number of rows B");
        result = undefined;
    }
    else{
         result  = new Matrix(a.rows, g.cols);
    
        for(let i = 0; i<result.rows;i++){
           for(let j = 0; j<result.cols; j++){
               let sum = 0;
               for(let k = 0; k<a.cols; k++){
                   sum+=a.data[i][k] * g.data[k][j];
               }
               result.data[i][j] = sum;

       }
   }
   
 }
    return result;
}


multiply(b){
    //Scalar product
    for(let i = 0; i<this.rows;i++){
        for(let j = 0; j<this.cols; j++){
            this.data[i][j] = this.data[i][j]*b;;
        }
    }
}


static map(matrix, func){
    
    //Apply a func to every element 
    let result = new Matrix(matrix.rows, matrix.cols);
    
    for(let i = 0; i<matrix.rows;i++){
        console.log("brr");
        for(let j = 0; j<matrix.cols; j++){
            
            let val = matrix.data[i][j];
            result.data[i][j] = func(val);
        }
    }
    return result;
}
 

static subtract(a,b){
let result = new Matrix(a.rows, a.cols);
    for(let i = 0; i<a.rows;i++){
        for(let j = 0; j<a.cols; j++){
            result.data[i][j] = a.data[i][j] - b.data[i][j];
        }
    }
    return result;
}


print(){
    console.table(this.data);
}


} 