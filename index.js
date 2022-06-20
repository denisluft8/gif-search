const button = document.getElementById('search')
const imgOne = document.getElementById('gif-one')
const imgTwo = document.getElementById('gif-two')
const imgThree = document.getElementById('gif-three')
const imgFour = document.getElementById('gif-four')
const imgFive = document.getElementById('gif-five')
const imgSix = document.getElementById('gif-six')

function searchGif() {
    const search = document.getElementById('gif-input').value
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=VDMsGahX6TWO0YGkB6cHNwIAiKl3PyuO&limit=6`)
        .then(response => response.json())
        .then(content => {
            imgOne.setAttribute('src', content.data[0].images.downsized.url)
            imgOne.setAttribute('alt', content.data[0].title)
            imgTwo.setAttribute('src', content.data[1].images.downsized.url)
            imgOne.setAttribute('alt', content.data[1].title)
            imgThree.setAttribute('src', content.data[2].images.downsized.url)
            imgOne.setAttribute('alt', content.data[2].title)
            imgFour.setAttribute('src', content.data[3].images.downsized.url)
            imgOne.setAttribute('alt', content.data[3].title)
            imgFive.setAttribute('src', content.data[4].images.downsized.url)
            imgOne.setAttribute('alt', content.data[4].title)
            imgSix.setAttribute('src', content.data[5].images.downsized.url)
            imgOne.setAttribute('alt', content.data[5].title)
            
        })
        
}

button.addEventListener('click', searchGif)



// content.data[].images.downsized.url - imagem
// content.data[].title - nome

