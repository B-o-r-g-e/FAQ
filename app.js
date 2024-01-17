//dom buttons

const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const current = e.currentTarget.classList
        if (current.contains('plus')) {
            console.log(e.currentTarget.childElementCount)
        }
    })
})
