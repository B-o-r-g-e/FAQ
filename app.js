// //dom buttons
//
// const btns = document.querySelectorAll('.btn')
//
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const current = e.currentTarget.classList
//         if (current.contains('plus')) {
//             current.remove('plus')
//             current.add('show-minus')
//         }
//     })
// })
//
// https://jsfiddle.net/cfwv9djk/7/




const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const questionContainer = btn.closest('.question-container');
        const btnPlus = questionContainer.querySelector('.btn.plus');
        const btnMinus = questionContainer.querySelector('.btn.minus');
        const answer = questionContainer.querySelector('.answer');

        // Toggle between showing plus and minus buttons
        btnPlus.classList.toggle('hide-plus');
        btnMinus.classList.toggle('show-minus');

        // Toggle the display of the answer
        answer.classList.toggle('show-answer');
    });
});
