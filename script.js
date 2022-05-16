
const iconSearch = document.getElementById('iconSearch')
const iconX = document.getElementById('iconX')
const search = document.getElementById('search')

iconSearch.addEventListener('click', ()=>{
    search.classList.toggle('display-none')
})

iconX.addEventListener('click', ()=>{
    search.classList.toggle('display-none')
})

const categories = document.getElementById('categories')
const openMenu = document.getElementById('openMenu')

openMenu.addEventListener('click', ()=>{
    openMenu.classList.toggle('close_menu')
    categories.classList.toggle('display-none')
})

const shop = document.getElementById('shop')
const counter = document.getElementById('counter')
const closeCounter = document.getElementById('close_counter')

shop.addEventListener('click',()=>{
    shop.classList.toggle('display-none')
    counter.classList.toggle('display-none')
})

closeCounter.addEventListener('click', ()=>{
    shop.classList.toggle('display-none')
    counter.classList.toggle('display-none')
})

