
const iconSearch = document.getElementById('iconSearch')
const iconX = document.getElementById('iconX')
const search = document.getElementById('search')

iconSearch.addEventListener('click', ()=>{
    search.classList.toggle('display-none')
})

iconX.addEventListener('click', ()=>{
    search.classList.toggle('display-none')
})