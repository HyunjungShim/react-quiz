import { createContext, useContext, useState } from "react";
import { Quiz, QuizContextType } from "../types/quiz";



const QuizContext = createContext<QuizContextType>({
    quizList: {quiz: '', answer: []},
    setQuizList: () => {},
    currentQuizIndex: 0,
    setCurrentQuizIndex: () => {},
    answer: '',
    setAnswer: () => {},
    isOver: false,
    setIsOver: ()=> {},
    quizCount:1,
    setQuizCount: ()=> {},
    handleQuizCount: ()=> {},
    resetQuizStatus: ()=> {},
    correctCount: 0,
    setCorrectCount: ()=> {}
});

export const useQuiz = () => {
    return useContext(QuizContext);
};

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [quizList, setQuizList] = useState<Quiz>({quiz: '', answer: []});
    const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
    const [answer, setAnswer] = useState<string>('');
    const [isOver, setIsOver] = useState<boolean>(false);
    const [quizCount, setQuizCount] = useState<number>(0);
    const [correctCount, setCorrectCount] = useState<number>(0);
    function handleQuizCount(){
        setQuizCount(quizCount + 1);
        setIsOver(true);
    }
    function resetQuizStatus(){
        setQuizCount(0);
        setIsOver(false);
    }
    return (
        <QuizContext.Provider value={{ quizList, setQuizList, currentQuizIndex, setCurrentQuizIndex, answer, setAnswer, isOver, setIsOver, quizCount, setQuizCount, handleQuizCount, resetQuizStatus, correctCount, setCorrectCount }}>
            {children}
        </QuizContext.Provider>
    );
};
