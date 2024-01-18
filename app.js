// const btns = document.querySelectorAll('.btn');
//
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         const questionContainer = btn.closest('.question-container');
//         const btnPlus = questionContainer.querySelector('.btn.plus');
//         const btnMinus = questionContainer.querySelector('.btn.minus');
//         const answer = questionContainer.querySelector('.answer');
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
    // console.log(questionContainer)
    const btns = questionContainer.querySelectorAll('.btn')
    const btnPlus = questionContainer.querySelector('.btn.plus');
    const btnMinus = questionContainer.querySelector('.btn.minus');
    const answer = questionContainer.querySelector('.answer');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {

            const parent = btn.parentElement.parentElement.parentElement
            if (parent !== questionContainer) {
                console.log('jjk')
            }

            // Toggle between showing plus and minus buttons
            btnPlus.classList.toggle('hide-plus');
            btnMinus.classList.toggle('show-minus');

            // Toggle the display of the answer
            answer.classList.toggle('show-answer');

        })
    })
})
