import { useEffect, useState } from "react";
import { Bar, BarContainer } from "../styles/CommonStyles";
import { useQuiz } from "../contexts/QuizProvider";
export default function ProgressBar() {
    const { handleQuizCount } = useQuiz();
    const [width, setWidth] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setWidth((prevWidth) => {
                if (prevWidth <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevWidth - 0.5;
            });
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (width <= 0) {
            handleQuizCount();
        }
    }, [width, handleQuizCount]);
    
    return (
        <BarContainer>
            <Bar style={{ width: `${width}%` }} />
        </BarContainer>
    );
}


