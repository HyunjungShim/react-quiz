import QuizList from "../components/quiz/QuizList";
import ResultDisplay from "../components/quiz/ResultDisplay";
import QuizOver from "../components/quiz/QuizOver";
import {  useQuiz } from "../contexts/QuizProvider";
export default function QuizScreen() {
    const { isOver,quizCount } = useQuiz();
    return (
        <>
            {quizCount === 10 ? <QuizOver /> : isOver ? <ResultDisplay /> : <QuizList />}
        </>
    );
}