import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizProvider";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../styles/theme";
import { ButtonRed } from "../../styles/CommonStyles";
export default function QuizOver() {
    const { resetQuizStatus, correctCount } = useQuiz();

    return (
        <>
            <FontAwesomeIcon icon={faFlag} style={{color: theme.color.mainBlue,fontSize:"150px"}} />
            <h1 style={{color: theme.color.mainFont}}>퀴즈 종료!</h1>
            <p>총 10문제 중 {correctCount}문제를 맞추셨습니다.</p>
            <ButtonRed onClick={() => resetQuizStatus()}>다시하기</ButtonRed>
        </>
    );
}
