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

    // Reset all label text color to default
    document.querySelectorAll('label').forEach(label => {
        label.style.color = '#0e0d0d'; // default text color
    });

    for (let question in answers) {
        const correctAnswer = answers[question];
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const allOptions = document.querySelectorAll(`input[name="${question}"]`);

        // Reset text color for all options
        allOptions.forEach(option => {
            const label = document.querySelector(`label[for="${option.id}"]`);
            if (label) label.style.color = '#0e0d0d'; // reset to default
        });

        if (selected) {
            const label = document.querySelector(`label[for="${selected.id}"]`);
            if (selected.value.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                score++;
                if (label) label.style.color = 'green'; // Correct answer
            } else {
                if (label) label.style.color = 'red'; // Incorrect answer
            }
        }
    }

    scoreText.textContent = `You scored ${score}/5`;
    resultDiv.style.display = 'block';

    // Reload after 5 seconds
    setTimeout(() => {
        window.location.reload();
    }, 5000);
});
