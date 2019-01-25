window.onload = onHtmlLoaded;

function onHtmlLoaded(){
   const ids = document.querySelectorAll('#rectangleWrapper .rectangle');
   console.log("Here are the rectangle IDs:")
for(const prop  of ids){
    console.log(prop.id);
}

}