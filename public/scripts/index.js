const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
for (let card of cards) {
    card.addEventListener('click', function() {
        const courseId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', (e) => {
    modalOverlay.classList.remove('active')
    e.preventDefault()
    modalOverlay.querySelector('iframe').src('')
    
})

document.querySelector('.max-modal').addEventListener('click', () => {
    if ( modal.classList.contains('maximize') ) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})

