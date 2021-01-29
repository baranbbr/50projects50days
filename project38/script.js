const images = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        images[index].classList.add('show')
        item.classList.add('active')
    })
})

function hideAllContents() {
    images.forEach(img => img.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}
