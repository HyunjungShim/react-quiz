import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    color: {
        primary: "#E19761",
        secondary: "#F6CB7A",
        mainFont: "#fff",
        subFont: "#FFF",
        cardBg: "#F6F0E6",
        bg: "#f4eadf",
        border: "#82828247",
        mainRed:"#F67B6F",
        mainBlue:"#6295C3",
        shadow:"0 10px 10px 0 rgba(0, 0, 0, 0.1)",
    },
    img : {
        board:process.env.PUBLIC_URL + "/assets/images/common/board-bg.png",
    }
};