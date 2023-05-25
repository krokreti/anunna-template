import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../pages/project-details/ProjectDetails";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'project-details/:id',
                element: <ProjectDetails />
            },
        ]
    },
])