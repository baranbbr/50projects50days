const password = document.getElementById('password')
const image = document.getElementById('background')

password.addEventListener('input', (e) => {
    image.style.filter = `blur(${20 - e.target.value.length * 2}px)`
})