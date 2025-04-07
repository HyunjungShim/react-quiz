import styled from "styled-components";
import { theme } from "./theme";
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: ${theme.color.bg};
    text-align: center;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
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
    @media (max-width: 768px) {
        min-width: 60%;
        width:auto;
    }
`;

export const CardWrapper = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: ${theme.color.subFont};
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

export const ImgLayout = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    min-width: 1000px;
    @media (max-width: 1440px) {
        width: 80%;
    }
    @media (max-width: 1024px) {
        min-width:auto;
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 99%;
        height: 90%;
    }
`;

export const MobileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`;

