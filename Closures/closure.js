function outer(){
    let a=12;
     function inner(){
        a++;
        console.log(a);
    }
    return inner;
}

let ans = outer();
let ans1 = outer();

ans();
ans();
ans();
ans1();
ans1();
ans()