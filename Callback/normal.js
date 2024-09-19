function one(){
    setTimeout(()=>{
        console.log("Inside function 1");
        two();
    },4000)
}

function two(){
    setTimeout(()=>{
        console.log("Inside function 2");
        three();
    },2000)
}

function three(){
    setTimeout(()=>{
        console.log("Inside function 3");
    },5000)
}

one();

