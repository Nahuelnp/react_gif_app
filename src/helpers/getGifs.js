



export const getGifs = async (category)=>{
    // encodeURI sirve para escapar los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MM0M9lYloqE3RRP3KlVTt4SwF7EhAKLo`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}