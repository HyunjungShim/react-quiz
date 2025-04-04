import { Link } from "react-router-dom";
import { ButtonBlue } from "../styles/CommonStyles";
export default function Intro() {
    return (
        <>
            <h1>아재개그 퀴즈</h1>
            <span>아재개그 : 아저씨들이 하는 개그라는 뜻으로,<br/>중년 남성들이 할 법한 언어유희</span>
            <Link to="/quiz"><ButtonBlue>시작!</ButtonBlue></Link>
        </>
    );
}
