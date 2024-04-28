function mission(url,callback){
    fetch(url)
    .then(rawData=>rawData.json())
    .then(result=>callback(result))
}

mission('https://fakestoreapi.com/products', function(result){
    console.log(result[0].id, result[0].price)
    console.log(result[1].id, result[1].price)
    console.log(result[2].id, result[2].price)
})