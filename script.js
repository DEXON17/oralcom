const answers = {
    q1: 'A',
    q2: 'C',
    q3: 'B',
    q4: 'B',
    q5: 'B',
    q6: 'C',
    q7: 'B',
    q8: 'B',
    q9: 'C',
    q10: 'C'
};

function submitQuiz() {
    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    
    for (const [question, answer] of Object.entries(answers)) {
        const selectedAnswer = formData.get(question);
        if (selectedAnswer === answer) {
            score++;
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Your score is ${score} out of ${Object.keys(answers).length}.<br>
        you're so beautiful my princess 💐
    `;
}
