let isRaining=true;


let answer = new Promise((resolve,reject)=>{

    console.log("Start")
    
    if(isRaining){
        setTimeout(function(){
            resolve();
        },4000)
    }
    else reject();
    console.log("End")
})


answer
.then(()=>console.log("Stay in home"))
.catch(()=>console.log("Go out"))


// let jabba=true;
// let jawaab = new Promise((resolve,reject)=>{
//     if(jabba){
//         setTimeout(function(){
//             resolve();
//         },2000)
//     }
//     else reject();
// })


// jawaab
// .then(()=>console.log("Ghar pe raho"))
// .catch(()=>console.log("Go out"))


// let hunger=true;
// let other= new Promise((res,rej)=>{
//     hunger
//     ? 
//     setTimeout(()=>{
//         res();
//     },3000)
//     :
//     rej()
// })

// other
// .then(()=>console.log("Give me food"))
// .catch(()=>console.log("I don't need food"))