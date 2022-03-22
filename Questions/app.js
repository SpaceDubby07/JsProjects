//
// traverse the dom
//

// // select the questions buttons, there are multiple
// const btns = document.querySelectorAll('.question-btn')

// // because there are multiple btns we need to loop through them
// // btn is the parameter, it can be named anything, in this case btn.
// btns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         // current target is the button
//         // parent element is the title
//         // parent of the parent
//         const question = event.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })


//
// using selectors inside the element
//

const questions = document.querySelectorAll('.question')
// console.log(question)  nodelist of article.question

// for each question, toggle buttons
questions.forEach((question) => {
    // console.log(question) -- displays the articles
    // we want to select the buttons
    const btn = question.querySelector('.question-btn')
    // add an event listener for clicks
    btn.addEventListener('click', () => {
        // we want to close questions when we open a diff question
        // for each question
        questions.forEach((item) => {
            // if item doesn't match the question
            if(item !== question) {
                // remove the show-text class
                item.classList.remove('show-text')
            }
        })

        // toggle css class to show/hide text
        question.classList.toggle('show-text')
    })
   
})
