const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const rangeW = getComputedStyle(e.target).getPropertyValue('width')
    const labelW = getComputedStyle(label).getPropertyValue('width')

    const numW = +rangeW.substring(0, rangeW.length - 2)
    const numlabelW = +labelW.substring(0, labelW.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (numW / max) - numlabelW / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`
    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}