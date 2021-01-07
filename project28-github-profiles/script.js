const API_URL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


function counterManipulation() {
	const counters = document.querySelectorAll('.counter')
	counters.forEach(counter => {
		counter.innerText = '0'

		const updateCounter = () => {
			const target = +counter.getAttribute('data-target')
			const c = +counter.innerText

			const increment = target / 500
			if (c < target) {
				counter.innerText = `${Math.ceil(c + increment)}`
				setTimeout(updateCounter, 1)
			} else {
				counter.innerText = target
			}

		}
		updateCounter()
	})
}

async function getUser(username) {
	try {
		const { data } = await axios.get(API_URL + username)
		createUserCard(data)
		getRepos(username)
		counterManipulation()
		console.log(data)
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard('User could not be found')
		}
		console.log(err)
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios.get(API_URL + username + '/repos?sort=created')
		addReposToCard(data)
	} catch (err) {
		createErrorCard('Problem fetching repos')
		console.log(err)
	}
}

function createUserCard(user) {
	const cardHTML = `
	<div class="card">
	<div>
		<img
			src="${user.avatar_url}"
			alt="${user.name}"
			class="avatar"
		/>
	</div>
	<div class="user-info">
		<h2>${user.name}</h2>
		<p>
		${user.bio}
		</p>
		<ul>
			<li><div class="counter" data-target="${user.followers}"></div><strong>Followers</strong></li>
			<li><div class="counter" data-target="${user.following}"></div><strong>Following</strong></li>
			<li><div class="counter" data-target="${user.public_repos}"></div><strong>Repos</strong></li>
		</ul>
		<div id="repos"></div>
	</div>
</div>
`
	main.innerHTML = cardHTML

}

function createErrorCard(msg) {
	const cardHTML = `
		<div class="card">
			<h1>${msg}</h1>
		</div>
	`
	main.innerHTML = cardHTML
}

function addReposToCard(repos) {
	const reposEl = document.getElementById('repos')
	repos.slice(0, 10).forEach(repo => {
		const repoEl = document.createElement('a')
		repoEl.classList.add('repo')
		repoEl.href = repo.html_url
		repoEl.target = '_blank'
		repoEl.innerText = repo.name
		reposEl.appendChild(repoEl)

	});
}



form.addEventListener('submit', (e) => {
	e.preventDefault()
	const user = search.value
	if (user) {
		getUser(user)
		search.value = ''
	}
})