//dom buttons

const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let current = e.currentTarget.classList
        console.log(current)
    })
})
