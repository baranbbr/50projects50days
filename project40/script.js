const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

async function createBoxes() {
    const img = await getRandomGIF()
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            console.log(`img is ${img}`)
            box.style.backgroundImage = `url(${img})`
            box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`
            boxesContainer.appendChild(box)
        }
    }
}

async function getRandomGIF() {
    const url = 'https://api.giphy.com/v1/gifs/random?'
    const API_KEY = 'api_key=F2MgsylcEUeF4Ef5CQLP2UyNhihxtal0'
    const { data } = await axios.get(`${url}${API_KEY}&tag=positive`)
    // console.log(data)
    const imgHeight = data.data.image_height
    const imgWidth = data.data.image_width
    // console.log(imgHeight, imgWidth)
    return data.data.image_url
}

createBoxes()