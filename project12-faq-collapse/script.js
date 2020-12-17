const toggle = document.querySelectorAll('.faq-toggle')
const faqs = document.querySelectorAll('.faq')

toggle.forEach(element => {
	element.addEventListener('click', () => {
		element.parentNode.classList.toggle('active')
	})
})