import { ButtonBlue, Card, CardWrapper, Input } from "../../styles/CommonStyles";
import quizData from "../../data/quiz.json";
import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
import { Quiz } from "../../types/quiz";
import { useQuiz } from "../../contexts/QuizProvider";
export default function QuizList() {
    const { quizList, setQuizList, setCurrentQuizIndex, setAnswer, quizCount } = useQuiz();
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quizData.questions.length);
        const randomQuiz = quizData.questions[randomIndex];
        setQuizList(randomQuiz);
        setCurrentQuizIndex(randomIndex);
        console.log(randomQuiz, randomIndex);
    }, []);
    return (
        <>
            <h1>퀴즈</h1>
            <h2>{quizCount+1} / 10</h2>
            <ProgressBar />
            <h2>{quizList?.quiz}</h2>
            {
                quizList?.answer.some((answer) => {
                    return answer.replace(/ /g, "").length > 3;
                }) ? <p>힌트:{quizList?.answer[0].replace(/ /g, "").length}글자</p> : null
            }
            <div className="answer-container">
                <p>정답:</p>
                <Input type="text" onChange={(e) => setAnswer(e.target.value.replace(/ /g, ""))} />
            </div>
        </>
    );
}
