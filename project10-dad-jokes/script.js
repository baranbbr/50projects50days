const factEl = document.getElementById('fact')
const btn = document.getElementById('factBtn')

generatefact()

async function generatefact() {
	const config = {
		headers: {
			Accept: 'application/json',
		}
	}
	const res = await fetch('https://cat-fact.herokuapp.com/facts/random', config)
	const data = await res.json()
	factEl.innerHTML = data.text
}
	btn.addEventListener('click', () => generatefact())