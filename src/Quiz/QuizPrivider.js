import React, { createContext, useContext, useEffect, useState } from "react";

const QuizContex = createContext();

export const useQuiz = () => useContext(QuizContex);

const QuizPrivider = ({ children }) => {
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  // const correctAnswer = [];

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/quiz/1`).then((res) =>
      res.json().then((data) => {
        if (data.status) {
          setQuiz(data.data);
          const questions = data.data.questions;
          setQuestions(questions);
        }
      })
    );
  }, []);

  const value = {
    quiz,
    setQuiz,
    questions,
    setQuestions,
    correctAnswer,
    setCorrectAnswer,
  };

  return <QuizContex.Provider value={value}>{children}</QuizContex.Provider>;
};

export default QuizPrivider;
