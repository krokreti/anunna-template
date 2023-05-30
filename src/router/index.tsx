import { useLocation, useRoutes } from 'react-router-dom';
import App from '../App';
import ProjectDetails from '../pages/project-details/ProjectDetails';
import HomePage from '../pages/home/HomePage';
import { AnimatePresence } from "framer-motion";
import * as React from 'react';

const Router = () => {
    const location = useLocation();

    const element = useRoutes([
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

    if (!element) return null;

    return (
        <AnimatePresence mode='wait'>
            {React.cloneElement(element, { key: location.state })}
            {/* {React.cloneElement(element,)} */}
        </AnimatePresence>

    );
};

export default Router;