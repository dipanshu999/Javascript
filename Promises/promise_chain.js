let url = 'instagram.com/account/profile.jpg';

function downloadFile(path){
    console.log("Downloading Started...");
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let file=path.split('/').pop();
            if(file){
                console.log("File Downloaded: "+ file+"\n");
                resolve(file);
            }
            else
                reject('File not found');
        },4000)
    })
}

function compressFile(file){
    console.log("Compression Started: "+file);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            file='profile.zip';
            console.log('File is compressed: '+file+"\n");
            resolve(file);
        },2000)
    })
}

function uploadFile(file){
    console.log("Uploading Started of: "+file);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(file){
                resolve(file2)
            }
            else 
                reject("L lag gaye system ke")
        },5000)
    })

}

downloadFile(url)
.then(compressFile)
.then(uploadFile)
.then(function(){
    console.log('File uploaded');
})
.catch((err)=>{
    console.log(err);
})