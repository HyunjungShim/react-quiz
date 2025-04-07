import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string;
            secondary: string;
            mainFont: string;
            subFont: string;
            bg: string;
            cardBg: string;
            border: string;
            mainRed: string;
            mainBlue: string;
            shadow: string;
        }
        img: {
            board: string;
        }
    }
} 