function any(fun){
    fun(2,4)
}

function fun(a,b){
    let sum=a+b;
    console.log(sum);
}
any(fun);