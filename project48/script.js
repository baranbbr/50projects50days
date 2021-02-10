const container = document.querySelector('.container')
const unsplash = 'https://unsplash.it/'
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.loading = 'lazy'
    img.src = `${unsplash}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomN()}/${getRandomN()}`
}

function getRandomN() {
    return Math.floor(Math.random() * 10) + 300
}