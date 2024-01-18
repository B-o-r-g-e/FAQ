// const btns = document.querySelectorAll('.btn');
//
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         const questionContainer = btn.closest('.question-container');
//         const btnPlus = questionContainer.querySelector('.btn.plus');
//         const btnMinus = questionContainer.querySelector('.btn.minus');
//         const answer = questionContainer.querySelector('.answer');
//
//         // questionContainer.forEach((item) => {
//         //     btn.addEventListener(() => {
//         //
//         //     })
//         // })
//
//         // Toggle between showing plus and minus buttons
//         btnPlus.classList.toggle('hide-plus');
//         btnMinus.classList.toggle('show-minus');
//
//         // Toggle the display of the answer
//         answer.classList.toggle('show-answer');
//     });
// });

const questionContainers = document.querySelectorAll('.question-container')

questionContainers.forEach((questionContainer) => {
    const btn = questionContainer.querySelector('.btn')
    const btnPlus = questionContainer.querySelector('.btn.plus');
    const btnMinus = questionContainer.querySelector('.btn.minus');
    const answer = questionContainer.querySelector('.answer');

    btn.addEventListener('click', (item) => {
        // questionContainers.forEach((item) => {
        //     if (item.closest('.question-container') !== questionContainer) {
        //         item.classList.remove('show-answer')
        //     }
        // })

        // Toggle between showing plus and minus buttons
        btnPlus.classList.toggle('hide-plus');
        btnMinus.classList.toggle('show-minus');

        // Toggle the display of the answer
        answer.classList.toggle('show-answer');

        if (item.closest('.question-container') !== questionContainer) {
            item.classList.remove('show-answer')
        }
    })
})