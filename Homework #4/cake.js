const cake = ["vanilla","chocolate"];
let isChocolate = true;

const flavorCake = (type,whatFlavor) =>{
    if(whatFlavor){
        console.log("The cake is with "+ type[1]);
    } else {
        console.log("The cake is with "+type[0]);
    }
}
flavorCake(cake,isChocolate);
