class QuizGame {
  private questions: Array<any>; // Update the type as per your question structure
  private currentQuestionIndex: number;
  private score: number;

  constructor(questions: Array<any>) {
    // Update the type as per your question structure
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  updateQuestion() {
    // Update UI elements with the current question
    // ...
  }

  checkAnswer(selectedIndex: number) {
    if (
      selectedIndex === this.questions[this.currentQuestionIndex].correctIndex
    ) {
      this.score += 1;
      // Display correct feedback
    } else {
      // Display incorrect feedback and reveal the correct answer
    }

    // Move to the next question
    this.currentQuestionIndex += 1;

    if (this.currentQuestionIndex < this.questions.length) {
      this.updateQuestion();
    } else {
      // End of quiz, display final score
    }
  }

  // Handle user interaction with multiple-choice options
  // ...
}

// Usage
const questions = [
  {
    sentence: "Je suis __ étudiant.",
    translation: "I am a student.",
    choices: ["un", "le", "la"],
    correctIndex: 0,
  },
  // Add more questions here
];

const quiz = new QuizGame(questions);
quiz.updateQuestion();
