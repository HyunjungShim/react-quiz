import { Outlet } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import { Wrapper, Container, CardWrapper, Card, ImgLayout } from '../styles/CommonStyles';
import { QuizProvider } from '../contexts/QuizProvider';
import { theme } from '../styles/theme';

function DefaultLayout() {
    return (
        <>
            <QuizProvider>
                <GlobalStyles />
                <Wrapper>
                    <Container>
                        <ImgLayout src={theme.img.board} alt="board" />
                        <CardWrapper>
                            <Card>
                                <Outlet />
                            </Card>
                        </CardWrapper>
                    </Container>
                </Wrapper>
            </QuizProvider>
        </>
    );
}

export default DefaultLayout;
