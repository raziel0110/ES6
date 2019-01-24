const isPrime = (num) =>{
    for(let i  = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return num !== 1 && num !== 0;
}

const fizzBuzz = (limit) =>{
    for(let i=1; i < limit; i++){
        if(isPrime(i)){
            console.log("Numar prim " + i);
        } else if(i % 3 === 0){
            console.log("Fizz "+ i);
        } else if(i % 5 === 0){
            console.log("Buzz "+i);
        } else {
            console.log("Number "+i);
        }
    }
}

fizzBuzz(101);