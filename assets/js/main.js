var slideIndex = 0
const homeImgs = document.querySelectorAll('#home>div')
const showSlides = () => {
    for (let img of homeImgs)
        img.classList.add('hide')
    
    homeImgs[slideIndex].classList.remove('hide')
    slideIndex++
    if (slideIndex > homeImgs.length - 1)
        slideIndex = 0
    
    setTimeout(showSlides, 5000)
}
showSlides()

// const smoothScroll = elementId => window.scrollTo({top: document.getElementById(elementId).offsetTop, behavior: 'smooth'})
// const smoothScroll = element => element.scrollIntoView({block: 'start', behavior: 'smooth'})

for (let id of ['home', 'band', 'tour', 'contact']) {
    document.querySelectorAll(`.direct__${id}`).forEach(el => el.addEventListener(
        'click',
        () => window.scrollTo(
            {
                top: document.getElementById(id).offsetTop - 46.5, // remove the margin-scroll
                behavior: 'smooth'
            }
        )
    ))
}

// Modal
const myModal = document.querySelector('.modal')
const toggleModal = () => myModal.classList.toggle('hide')

document.querySelectorAll('#tour .ticket__btn').forEach(ticket => ticket.addEventListener('click', () => toggleModal()))
myModal.addEventListener('click', e => e.target == e.currentTarget ? toggleModal() : null)
document.querySelector('.modal__header > i').addEventListener('click', () => toggleModal())
document.querySelector('.modal__footer > button').addEventListener('click', () => toggleModal())

// ignore submit
document.querySelectorAll('form').forEach(form => form.addEventListener('submit', e => e.preventDefault()))


// mobile UI
// open menu
const header = document.querySelector('header')
var isMobileHeaderOpen = false
const toggleMobileHeader = () => {
    header.classList.toggle('mobile-open')
    isMobileHeaderOpen = !isMobileHeaderOpen
    header.classList.add('hidden')
}
document.querySelector('header div').addEventListener('click', () => toggleMobileHeader())

// close menu when click nav item
let dir1 = [...document.querySelectorAll('header div.left')]
let dir2 = [...document.querySelectorAll('.subnav__item')]
let subnav = dir1.pop();
[...dir1, ...dir2].forEach(el => el.addEventListener('click', () => isMobileHeaderOpen ? toggleMobileHeader() : null))
subnav.addEventListener('mouseover', () => header.classList.remove('hidden'))
subnav.addEventListener('mouseleave', () => header.classList.add('hidden'))