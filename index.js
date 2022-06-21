const button = document.getElementById('search')
const gifsResult = document.getElementById('gifs-result')
let img

function searchGif() {
    const search = document.getElementById('gif-input').value
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=VDMsGahX6TWO0YGkB6cHNwIAiKl3PyuO&limit=6`)
        .then(response => response.json())
        .then(content => {
            gifsResult.innerHTML = ""

            for (let num = 0; num < 6; num++) {
                img = document.createElement('img')
                gifsResult.appendChild(img)
                img.classList.add('img-box')
                img.setAttribute('src', content.data[num].images.downsized.url)
                img.setAttribute('alt', content.data[num].title)
            }
        })
}
button.addEventListener('click', searchGif)