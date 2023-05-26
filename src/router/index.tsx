import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../pages/project-details/ProjectDetails";
import HomePage from "../pages/home/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/project-details/:id',
                element: <ProjectDetails />
            },
        ]
    },
])