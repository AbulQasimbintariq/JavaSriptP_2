let switchButton= document.querySelector("#Switch")
let currMode="light"

switchButton.addEventListener("click",()=>{
    if (currMode === "light"){
        currMode="Dark";
        document.querySelector("body").style.backgroundColor="Black" ;
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white" ;

    }
    console.log(currMode)
})