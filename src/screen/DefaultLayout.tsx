import { Outlet } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import { Wrapper, Container, CardWrapper, Card } from '../styles/CommonStyles';
import { QuizProvider } from '../contexts/QuizProvider';

function DefaultLayout() {
    return (
        <>
            <QuizProvider>
                <GlobalStyles />
                <Wrapper>
                    <Container>
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
