const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Neutral'

ratingsContainer.addEventListener('click', (e) => {
    // console.log(e.target.parentNode)
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        console.log(i, ratings)
        console.log(i, ratings)
        ratings[i].classList.remove('active')
    }
}
