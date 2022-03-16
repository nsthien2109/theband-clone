const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modal_container = document.querySelector('.js-modal-container');
const close_modal = document.querySelector('.modal-close');

function showBuyTickets() {
    modal.classList.add('open-modal');
}

function closeModal() {
    modal.classList.remove('open-modal');
}

modal.addEventListener('click', closeModal);
close_modal.addEventListener('click', closeModal);

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modal_container.addEventListener('click', (event) => {
    event.stopPropagation();
})