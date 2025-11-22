const icon = document.querySelector('.bg-icon')
const popUp = document.querySelector('.pop-up')
const triangle = document.querySelector('.triangle')

icon.addEventListener('mouseenter', () => {
    popUp.classList.remove("anim-only");
    triangle.classList.remove("anim-only");
})

icon.addEventListener('mouseleave', () => {
    popUp.classList.add("anim-only");
    triangle.classList.add("anim-only");
})
