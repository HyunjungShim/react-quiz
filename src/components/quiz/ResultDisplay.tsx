import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../styles/theme';
import { useQuiz } from '../../contexts/QuizProvider';
import { useEffect, useState } from 'react';
export default function ResultDisplay() {
    const { quizList,answer,setAnswer,setIsOver,correctCount,setCorrectCount } = useQuiz();
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    useEffect(() => {
        console.log(quizList.answer,answer);
        quizList.answer.map((quizAnswer) => {
            if(answer.replace(/ /g,"")
                === quizAnswer.replace(/ /g,"")) {
                setIsCorrect(true);
                setCorrectCount(correctCount + 1);
            } else {
                setIsCorrect(false);
            }
        })
        // input value 초기화
        setAnswer('');
        const interval = setInterval(() => {
            setIsOver(false);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isCorrect ? 
                <>
                    <FontAwesomeIcon icon={faCircle} style={{color: theme.color.mainBlue,fontSize:"150px"}} />  
                    <h2>정답입니다!</h2>
                </>
                : 
                <>
                    <FontAwesomeIcon icon={faXmark} style={{color: theme.color.mainRed,fontSize:"150px"}} />
                    <h2>오답입니다!</h2>
                    <p>정답은 {quizList.answer[0].replace(/ /g,"")}입니다.</p>
                </>
                }
        </>
    );
}