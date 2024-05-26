console.log(this);    //global

function fun1(){         // function 
    console.log(this);
}
fun1()



let obj={
    prop:function(){           // method
        console.log(this);
        function child(){      // function inside method
            console.log(this);
        }
        child();
    },
    age:32,
    mail:'skjfhf'
}
obj.prop()

let obj1={
    prop:function(){
        
        let child=()=>{     // arrow func inside a method
            console.log(this);
        }
        child();
    }
}
obj1.prop()

function fun2(){
    let inside=()=>{
        console.log(this);  // arrow func inside func
    }
    inside();
}
fun2()

function fun3(){
    console.log(this);      // Constructor function 
}
const ans = new fun3()


document.querySelector('button').addEventListener("click",function(){
    console.log(this)          // Event Listener
})

