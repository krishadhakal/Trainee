/* Write a function scopingExample() that demonstrates the following:
    a) A global variable x accessible throughout the script.	
    b) A local variable x inside a function that shadows the global variable.
    c) A block-level variable x that is scoped to an if block inside the function.
*/

// global variable

var x = "Global Variable";

function scopingExample(){
    //local variable
    var x = "Local Variable";
    console.log(x); 

    if(true){
        //block-level variable
        let x = "Block-Level Variable";
        console.log(x);        
    }

    console.log(x); 
}

console.log(x);

//calling the function
scopingExample();