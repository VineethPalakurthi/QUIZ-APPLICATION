const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('score');
const scoreText = document.getElementById('score-text');

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const answers = {
        question1: 'paris',
        question2: 'mars',
        question3: 'oxygen',
        question4: 'carbon dioxide',
        question5: 'blue whale'
    };

    let score = 0;
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected) {
            if (selected.value.trim().toLowerCase() === answers[question]) {
                score++;
            }
        }
    }

    scoreText.textContent = `You scored ${score}/5`;
    resultDiv.style.display = 'block';

    // ✅ Reload after 5 seconds
    setTimeout(() => {
        window.location.reload();
    }, 5000);
});
