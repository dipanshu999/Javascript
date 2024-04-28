console.log(' Task 1')

async function run(){
    await setTimeout(() => {
        console.log('Task 2');
    }, 5000);

    await setTimeout(()=>{
        console.log('Task 3');
    },3000)

    console.log('Task 4');
}

run();