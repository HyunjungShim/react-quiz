import styled from "styled-components";
import { theme } from "./theme";
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: ${theme.color.bg};
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    min-width: 250px;
    height: 40px;
    border: 1px solid ${theme.color.border};
    border-radius: 5px;
    padding: 0 10px;
    &:focus {
        outline:none;
        border: 1px solid ${theme.color.mainBlue};
    }
`;

export const CardWrapper = styled.div`
    /* width: 100%;
    height: 80%;
    max-height: 700px; */
    background: ${theme.color.cardBg};
    padding:20px;
    border-radius: 10px;
    box-shadow: ${theme.color.shadow};
    /* display: flex;
    align-items: center;
    justify-content: center; */
`;

export const Card = styled.div`
    /* width: 90%;
    height: 90%;
    margin: 0 auto; */
    border:2px solid ${theme.color.border};
    padding: 20px;
    /* box-shadow: ${theme.color.shadow}; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width:500px;
    min-height: 700px;
    max-height:80%;
    color: ${theme.color.mainFont};
    h1 {
        color:${theme.color.mainBlue};
    }
    .answer-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:10px;
    }
`;

export const SingleCard = styled.div`
    /* width: 100%;
    height: 100%; */

`;

export const Button = styled.button`
    color: ${theme.color.subFont};
    border: none;
    border-radius: 30px;
    width: 160px;
    height: 50px;
    cursor: pointer;
    margin-top: 30px;
`;

export const ButtonRed = styled(Button)`
    background: ${theme.color.mainRed};
`;

export const ButtonBlue = styled(Button)`
    background: ${theme.color.mainBlue};
`;

export const BarContainer = styled.div`
    width: 100%;
    height: 10px;
    background: ${theme.color.border};
    border-radius: 10px;
`;

export const Bar = styled.div`
    height: 100%;
    background: ${theme.color.mainRed};
    border-radius: 10px;
`;

