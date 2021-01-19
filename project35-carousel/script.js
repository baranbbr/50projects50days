const imgs = document.querySelectorAll('#imgs img')
const imgCont = document.querySelector('.image-container')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let index = 0
let interval = setInterval(run, 2500)

function run() {
	index++
	changeImage()
}

function changeImage() {
	if (index > imgs.length - 1) {
		index = 0
	}
	else if (index < 0) {
		index = imgs.length - 1
	}

	imgCont.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
	clearInterval(interval)
	interval = setInterval(run, 2000);
}


leftBtn.addEventListener('click', () => {
	index--
	changeImage()
	resetInterval()
})

rightBtn.addEventListener('click', () => {
	index++
	changeImage()
	resetInterval()
})
