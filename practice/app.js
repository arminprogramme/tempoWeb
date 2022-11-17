let $ = document
let navbar = $.querySelector('.navbar')
let goUp = $.querySelector('.to-up')
window.addEventListener('scroll', function(event) {
    if (this.document.documentElement.scrollTop > 87) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
        navbar.style.transition = '0.4s'
        goUp.style.display = "block"
        navbar.style.height = '70px'

    } else if (this.document.documentElement.scrollTop == 0) {
        navbar.style.backgroundColor = 'transparent'
        navbar.style.transition = '0.4s'
        goUp.style.display = "none"
        navbar.style.height = 'auto'
    }
})