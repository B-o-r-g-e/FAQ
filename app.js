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

// const questionContainers = document.querySelectorAll('.question-container')
//
// questionContainers.forEach((questionContainer) => {
//     // console.log(questionContainer)
//     const btns = questionContainer.querySelectorAll('.btn')
//     const btnPlus = questionContainer.querySelector('.btn.plus');
//     const btnMinus = questionContainer.querySelector('.btn.minus');
//     const answer = questionContainer.querySelector('.answer');
//
//     btns.forEach((btn) => {
//         btn.addEventListener('click', () => {
//
//             const parent = btn.parentElement.parentElement.parentElement
//             if (answer.classList.contains('show-answer')) {
//                 console.log('jjk')
//             }
//
//             // Toggle between showing plus and minus buttons
//             btnPlus.classList.toggle('hide-plus');
//             btnMinus.classList.toggle('show-minus');
//
//             // Toggle the display of the answer
//             answer.classList.toggle('show-answer');
//
//         })
//     })
// })


const container = document.querySelector('.container')
const questionContainers = document.querySelectorAll('.question-container');

let questionContainersHeight = Array.from(questionContainers)
    .reduce((acc, child) => acc + child.offsetHeight, 150)

// console.log(totalHeight)

container.style.height = questionContainersHeight + 'px'


questionContainers.forEach((questionContainer) => {
    const btns = questionContainer.querySelectorAll('.btn');
    const btnPlus = questionContainer.querySelector('.btn.plus');
    const btnMinus = questionContainer.querySelector('.btn.minus');
    const answer = questionContainer.querySelector('.answer');
    // console.log(questionContainer.offsetHeight)
    // console.log(typeof questionContainer)

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Close all other answers
            questionContainers.forEach((otherContainer) => {
                if (otherContainer !== questionContainer) {
                    otherContainer.querySelector('.answer').classList.remove('show-answer');
                    otherContainer.querySelector('.btn.plus').classList.remove('hide-plus');
                    otherContainer.querySelector('.btn.minus').classList.remove('show-minus');
                }
            });

            // Toggle the clicked answer
            answer.classList.toggle('show-answer');
            btnPlus.classList.toggle('hide-plus');
            btnMinus.classList.toggle('show-minus');

            if (answer.classList.contains('show-answer')) {
                const answerHeight = answer.offsetHeight

                container.style.height = questionContainersHeight + answerHeight + 'px'
                // console.log(Height)

            } else {
                container.style.height = questionContainersHeight + 'px'
            }
        });
    });


});

