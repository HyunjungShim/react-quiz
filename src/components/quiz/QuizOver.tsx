import { useEffect, useState } from "react";
import { useQuiz } from "../../contexts/QuizProvider";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../styles/theme";
import { ButtonRed, MobileContainer } from "../../styles/CommonStyles";
export default function QuizOver() {
    const { resetQuizStatus, correctCount } = useQuiz();
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
        {
            windowWidth <= 1024 ? 
            <MobileContainer>
                <h1 style={{color: theme.color.mainFont}}>퀴즈 종료!</h1>
                <FontAwesomeIcon icon={faFlag} style={{color: theme.color.mainBlue,fontSize: windowWidth <= 576 ? "60px" : "80px"}} />
            </MobileContainer>
            :
            <>
            <FontAwesomeIcon icon={faFlag} style={{color: theme.color.mainBlue,fontSize: "120px"}} />
            <h1 style={{color: theme.color.mainFont}}>퀴즈 종료!</h1>
            </>
            }
            <p>총 10문제 중 {correctCount}문제를 맞추셨습니다.</p>
            <ButtonRed onClick={() => resetQuizStatus()}>다시하기</ButtonRed>
        </>
    );
}
