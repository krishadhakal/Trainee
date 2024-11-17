//What is the difference between function scoping and block scoping. Write a code for differentiating them

function personName(){

    // function scope
    if(true){
        var firstPerson = 'Krisha';
    }
    console.log(firstPerson);

    // block scope
    if (true){
        let secondPerson = 'Ruby';
        const thirdPerson = 'Suravi';

        console.log(secondPerson);
        console.log(thirdPerson);
    }

    // below lines throws error since they are outside the scope
    console.log(secondPerson);
    console.log(thirdPerson);
    
}

// calling the function 
personName();