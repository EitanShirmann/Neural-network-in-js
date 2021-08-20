
function sigmoid(x){
    return 1/(1+Math.exp(-x));
}


function dsigmoid(y){
    return y*(1-y);
}


class NeuralNetwork{

    constructor(input_nodes, hidden_nodes, output_nodes){

       this.input_nodes = input_nodes;
       this.hidden_nodes = hidden_nodes;
       this.output_nodes = output_nodes;


       this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
       this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);


       this.weights_ih.randomize();
       this.weights_ho.randomize();

       this.bias_h = new Matrix(this.hidden_nodes,1);
       this.bias_o = new Matrix(this.output_nodes,1);
       this.bias_h.randomize();
       this.bias_o.randomize(); 
       this.learningRate = 0.1; 
   }


   feedForward(input_array){

    //Generating the hidden inputs
    let inputs = Matrix.fromArray(input_array);
    
    let hidden = Matrix.multiply(this.weights_ih, inputs);
   
    hidden.add(this.bias_h);
    //Activation function
    let hidden_sig = Matrix.map(hidden, sigmoid);
    
    //Generating the output`s output
    let output = Matrix.multiply(this.weights_ho, hidden_sig);
    output.add(this.bias_o);
    output = Matrix.map(output, sigmoid);

    //returning the guess
    return output.toArray();
    }


    train(input_array, targets){

//feedfrwrd

    let inputs = Matrix.fromArray(input_array);
 
    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    //Activation function
    hidden = Matrix.map(hidden, sigmoid);
 
    //Generating the output`s output
    let output = Matrix.multiply(this.weights_ho, hidden);
    output.add(this.bias_o);
    output = Matrix.map(output, sigmoid);
   

//feedfrwrd




    output = Matrix.fromArray(output);
    targets = Matrix.fromArray(targets);
    //calc the error

    //err = targets - outputs
    
    let outputErrors = Matrix.subtract(targets, output);
    
    outputs.map(dsigmoid);

    let gradients = Matrix.map(outputs, dsigmoid);

    outputs.multiply(outputErrors);
    outputs.multiply(this.learningRate);
    

    let hidden_T = Matrix.transpose(hidden);
    let weights_ho_deltas = Matrix.multiply(gradients, hidden_T);;
    this.weights_ho.add(weights_ho_deltas);

         
    
    //calculate the hidden layer errors 
    let who_t = Matrix.transpose(this.weights_ho);
    let hidden_errors = Matrix.multiply(who_t,outputErrors);
    


    //calculate hidden gradient 
    let hidden_gradient = Matrix.map(hidden_T, dsigmoid);
    hidden_gradient.multiply(hidden_errors);
    hidden_gradient.multiply(this.learningRate);

    //Calculate input -> hidden deltas
    let inputs_T = Matrix.transpose(inputs);
    let weights_ih_deltas = Matrix.multiply(hidden_gradient, inputs_T);
    this.weights_ih.add(weights_ih_deltas);
    
   


    }


}