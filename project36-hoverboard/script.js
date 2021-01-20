const container = document.getElementById('container')
// const colours = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'white']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColour(square))
	square.addEventListener('mouseout', () => resetColour(square))

	container.appendChild(square)
}

function setColour(element) {
	const colour = getRandomColour()
	element.style.background = colour
	element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`
}

function resetColour(element) {
	element.style.background = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #000'

}

function getRandomColour() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
	// return colours[Math.floor(Math.random() * colours.length)]
}