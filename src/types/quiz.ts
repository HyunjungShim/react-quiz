export interface Quiz {
    quiz: string;
    answer: string[];
}

export interface QuizContextType {
    quizList: Quiz;
    setQuizList: (quizList: Quiz) => void;
    currentQuizIndex: number;
    setCurrentQuizIndex: (currentQuizIndex: number) => void;
    answer: string;
    setAnswer: (answer: string) => void;
    isOver: boolean;
    setIsOver: (isOver: boolean) => void;
    quizCount: number;
    setQuizCount: (quizCount: number) => void;
    handleQuizCount: () => void;
    resetQuizStatus: () => void;
    correctCount: number;
    setCorrectCount: (correctCount: number) => void;
}
