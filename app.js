//dom buttons

const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // e.currentTarget.classList.remove('plus')
        console.log(e.currentTarget.classList)
        // let current = e.currentTarget

        // if (e.classList.contains('plus')) {
        //     // current.remove('plus')
        //     // current.add('show-minus')
        //     console.log(e)
        // }
    })
})
