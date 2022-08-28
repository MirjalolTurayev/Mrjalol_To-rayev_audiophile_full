let modal_open = document.querySelector('.header__btn')
let modal_close = document.querySelector('.modal__btn')
let modal = document.querySelector('.modal')

console.log(modal_open, modal_close, modal);

function open() {
    if (modal.classList == 'modal none') {
        modal.classList = 'modal'
    } else {
        modal.classList = 'modal none'
    }

    console.log('salom');
}

modal_open.addEventListener('click', open)
modal_close.addEventListener('click', open)

console.log(modal.classList == 'modal none');