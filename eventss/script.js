let dad=document.querySelector('.parent');
let son=document.querySelector('.child');
let baby=document.querySelector('.grand-child');


dad.addEventListener('click',(e)=>{
    console.log('parent clicked')
    
})

son.addEventListener('click',(e)=>{
    console.log('child clicked')
    stopPropagation();
})

baby.addEventListener('click',(e)=>{
    console.log('grand child clicked')
    e.stopPropagation();
})