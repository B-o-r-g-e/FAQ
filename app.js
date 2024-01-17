//dom buttons

const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('plus')) {
            e.currentTarget.classList.remove('plus')
            e.currentTarget.classList.add('show-minus')
        }
    })
})
