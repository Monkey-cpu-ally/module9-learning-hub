// Lesson Suggestion Logic
document.getElementById('suggest-btn').addEventListener('click', function () {
    const topic = document.getElementById('topic-select').value;
    const output = document.getElementById('lesson-output');

    let suggestion = "";

    if (topic === "architecture") {
        suggestion = "Start with: Introduction to Soundwave Architecture. Learn how frequencies shape space.";
    } else if (topic === "energy") {
        suggestion = "Start with: Rare Energy Forms 101. Explore bio-photonic energy and quantum resonance.";
    } else if (topic === "mythology") {
        suggestion = "Start with: Origins of Myth Systems. Compare Egyptian, African, and Greek creation stories.";
    } else if (topic === "botany") {
        suggestion = "Start with: Advanced Plant Physiology. Learn how plants communicate with chemical signals.";
    }

    output.innerHTML = `<h3>Lesson Suggestion</h3><p>${suggestion}</p>`;
});

// Quiz Logic
document.getElementById('check-answer-btn').addEventListener('click', function () {
    const answers = document.getElementsByName('sound');
    let selected = null;

    answers.forEach(option => {
        if (option.checked) {
            selected = option.value;
        }
    });

    const feedback = document.getElementById('quiz-feedback');

    if (selected === "b") {
        feedback.textContent = "Correct! Soundwave learning works best when supporting other learning methods.";
        feedback.style.color = "#22c55e";
    } else if (selected === null) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "#fbbf24";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "#ef4444";
    }
});

// Contact Form Demo Only
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const feedback = document.getElementById('contact-feedback');
    feedback.textContent = "Thanks! This form is a demo only.";
    feedback.style.color = "#22c55e";
});
