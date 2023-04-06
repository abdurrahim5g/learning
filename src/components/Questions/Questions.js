import React from "react";
import { useQuiz } from "../../Quiz/QuizPrivider";

const Questions = () => {
  const {
    quiz,
    setQuiz,
    questions,
    setQuestions,
    correctAnswer,
    setCorrectAnswer,
  } = useQuiz();
  console.log(questions);
  return (
    <div className="container">
      <h4>hi</h4>
    </div>
  );
};

export default Questions;
