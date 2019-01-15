/* All men are mortal
 Socrates is a man.
 Therefore, socrates is mortal. */

const men = {isMortal : true}
const socrate = {
    name: "Socrate",
    isMan : true
}

function isMortal(){
    if (men.isMortal === true && socrate.isMan === true)
    console.log(`${socrate.name}`+ " is mortal");
}
isMortal();


/* This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla. */

let cake = prompt("Enter type of cake(vanilla/chocolate)");
// const cake = "vanilla";
if(cake !== "chocolate"){
    console.log("The cake is vanilla");
} 

