const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500);

function getData() {
	header.innerHTML =
	  '<img src="https://unsplash.com/photos/_6UOe1IcGzg/download?force=true&w=640" alt="" />'
	title.innerHTML = 'Happy New Year! 🎉'
	excerpt.innerHTML =
	  'Here\'s to a great 2021, best wishes! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
	profile_img.innerHTML =
	  '<img src="https://pbs.twimg.com/profile_images/1242455191498240002/piWYrN4h_400x400.jpg" alt="" />'
	nameEl.innerHTML = 'Baran B.'
	date.innerHTML = 'Jan 01, 2021'
  
	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

