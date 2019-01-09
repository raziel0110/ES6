/*
    var -> is a variable that can be reassigned

    let -> is a variable that can be reassigned and it live only inside the block scope, outside the block 
    it can't be used.
    
    
    const-> is a constant, it can not be reassigned.


    hoisting -> all variables that are using var,are lifted to the top their scope(if are in local scope),
    or to the top of global scope.


*/

function goHome(){
    let arrived = false;
    let district;
    if(arrived){
         district = "Sasar";
         console.log("You arrived "+ district);
    } else {
        let street = "Independentei";
        console.log("You are going on "+ street +" bulevard,\nin 5 min you arrive to "+ district);
    }
}

goHome();//district is undefined becouse is outside the local scope.


function getConstant(){
    const PI = 3.14;
    PI = 5;
    console.log(PI);// will get an error becouse a constant can not be change
}

getConstant();
getAge();

function getAge(){
    console.log(myage);
    var myage = 33;
}

