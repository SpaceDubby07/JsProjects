// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// select elements
const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')

// handlers
modalBtn.addEventListener('click', () => {
    //open the modal
    modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
    // close the modal
    modalOverlay.classList.remove('open-modal')
})