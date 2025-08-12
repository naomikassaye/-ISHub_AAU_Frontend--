const form = document.querySelector(".quiz-form");
const questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");
const correctAnswers = ['D', 'B', 'C', 'B', 'D'];

//for handling the quiz submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const answers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value
    ];
    
    //to check answers and apply the corresponding style
    answers.forEach((ans, index) => {
        const question = questions[index];
        question.classList.remove("correct", "wrong"); // reset styles


        if (ans === correctAnswers[index]) {
            score += 20;
            question.classList.add("correct");
        } else {
            question.classList.add("wrong");
        }

    });

    //to display the result
    result.classList.remove("hide");
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('p').textContent = `Your score is ${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++
        }
    }, 20);

});