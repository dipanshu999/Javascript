function downloadFile(path, downloaded){
    console.log("Downloading Started...");
    setTimeout(()=>{
        let file=path.split('/').pop();
        downloaded(file)
    },4000)
}

function compressFile(file,compressed){
    console.log("Compression Started: "+file);
    setTimeout(()=>{
        file='profile.zip';
        compressed(file);
    },2000)
}

function uploadFile(file, uploaded){
    console.log("Uploading Started of: "+file);
    setTimeout(()=>{
        uploaded(file);
    },5000)

}

downloadFile("instagram.com/account/profile.jpg", function(file){
    console.log("File Downloaded: "+ file+"\n");

    compressFile(file, function(file){
        console.log('File is compressed: '+file+"\n");

        uploadFile(file,function(file){
            console.log(file+" File uploaded in server"+"\n");
        })
    })
})

