const tooltip = document.querySelector('.tooltip')
const constellations = document.querySelectorAll('.constellation')
const popupbg = document.querySelector('.info__bg')
const popup = document.querySelector('.info')

constellations.forEach(constellation => {
    constellation.addEventListener('click', function() {
        popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo)
        popup.querySelector('.info__title').innerText = this.dataset.title
        popup.querySelector('.info__text').innerText = this.dataset.disc
        popupbg.classList.add('active')
    })

    constellation.addEventListener('mousemove', function(e){
        tooltip.innerText = this.dataset.title
        tooltip.style.top = (e.y + 20) + 'px'
        tooltip.style.left = (e.x + 20) + 'px'

    })

    constellation.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block'
    })

    constellation.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none'
    })
})

document.addEventListener('click', (e) => {
    if(e.target === popupbg) {
        popupbg.classList.remove('active')
    }
})