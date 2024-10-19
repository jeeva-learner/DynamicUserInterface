import './style.css'
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select')
    //const caret   =  dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked')
        menu.classList.toggle('menu-open')
    })
    options.forEach(option =>{
        option.addEventListener('click',()=>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            menu.classList.remove('menu-open');
            options.forEach(option=>{
                option.classList.remove('active');
                select.classList.toggle('select-clicked')
            })
            option.classList.add('active')
        })
    })
})
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
