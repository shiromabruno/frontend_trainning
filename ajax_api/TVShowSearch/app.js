let form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    //console.dir(form.elements.query.value)
    let searchTerm = form.elements.query.value
    let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.dir(res) //
    makeImages(res.data); // tem que passar res.data pq o res.data eh um LIST pra ser iterable
    
    //console.log(res.data[0].show.image.medium)
})


let makeImages = (shows) =>{
    for(let valor of shows){
        let imagem = document.createElement('img')
        if(valor.show.image){ // teve que colocar essa validacao pois um dos iterable estava image: null
            imagem.src = valor.show.image.medium
            document.body.append(imagem)
        }
    }
}

// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }