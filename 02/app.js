document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.cart__btn-calculate')
    const inputList = document.getElementsByClassName('cart__quantity')
    const totalPriceEl = document.querySelector('.cart__total-price')

    button.addEventListener('click', () => {
        let sum = 0;

        if (button && inputList) {
            [...inputList].forEach(input => {
                const { dataset: { price }, value } = input;

                (value < 0 || isNaN(value)) ? alert('Wprowadziłeś błędną ilość') : sum += price * value
            })
            
            totalPriceEl.innerText = sum
        }
    })
})