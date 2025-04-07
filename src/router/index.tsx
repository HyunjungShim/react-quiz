import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../screen/DefaultLayout";
import Intro from "../components/Intro";
import QuizScreen from "../screen/QuizScreen";
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Intro />,
            },
            {
                path: "/quiz",
                element: <QuizScreen />,
            }
        ]
    },
],
    {
        basename: process.env.NODE_ENV === "production" ? "/react-quiz" : "/"
    }
);
export default router;