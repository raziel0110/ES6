const final_array= [];

const checkInput = (value,label)=>{
   return typeof value !== "number";
};

const convertToSeconds = (v,l) => {
    let seconds = 1;
    let total = 0
    switch(l){
        case "days":
        case "day":
            seconds = 86400;
            break;
        case "hours":
        case "hour":
            seconds = 3600;
            break;
        case "minutes":
        case "minute":
            seconds = 60;
            break;
        case "seconds":
        case "second":
        default:
            seconds = 1;
            break;

    }
   return total = v * seconds;
}

const convertTime = (time)=>{
    let timeInput = time;
    let timeString = "";
    if(timeInput > 86400){
        const days = Math.floor(timeInput/86400);
        timeInput = timeInput % 86400;
        timeString += days +" days";
    }

    if(timeInput > 3600){
        const hours = Math.floor(timeInput/3600);
        timeInput = timeInput % 3600;
        timeString +=" "+ hours +" hours";
    }
    if(timeInput > 60){
        const minutes = Math.floor(timeInput/60);
        timeInput = timeInput % 60;
        timeString += " "+minutes +" minutes";
    }

    if(timeInput){
        timeString += timeString +" secondes";
    }

    return timeString;
}




const timeAdder = (value1,label1,value2,label2)=>{
    if(!checkInput(value1,label1) && !checkInput(value2,label2)){
        const time1 = convertToSeconds(value1,label1);
        const time2 = convertToSeconds(value2,label2);
        const totalTIme = convertTime(time1+time2);
        final_array.push(totalTIme);

        console.log(final_array);
       
    } else {
        console.log("Error");
    }

   
} 

timeAdder(100,"minutes",5,"hours");

