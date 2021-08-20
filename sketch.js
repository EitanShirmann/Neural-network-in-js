

function setup(){
    
    let nn = new NeuralNetwork(2,2,2);
    let m = new Matrix(2,2);
    let g = new Matrix(m, sigmoid);
    console.log(g);
    
    let inputs = [1,0];
  
    let output = nn.feedForward(inputs);
   
    console.log(output);

    let targets = [1,5];

    nn.train(inputs, targets);


  
  
   
}


