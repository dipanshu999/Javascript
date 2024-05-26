const objt={name:'DP'}

function run(){
    console.log(this)    //call
}
run.call(objt);


function run2(){
    console.log(this)   //bind
}
const later=run2.bind(objt);
later()


function run3(a,b,c){
    console.log(this,a,b,c)  //apply
}

run3.apply(objt,[54,8,65])