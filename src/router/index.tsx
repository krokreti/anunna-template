import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import App from '../App';
import ProjectDetails from '../pages/project-details/ProjectDetails';
import HomePage from '../pages/home/HomePage';
import PolicyPrivacy from '../pages/policy-privacy/PolicyPrivacy';
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
                {
                    path: '/policy-privacy',
                    element: <PolicyPrivacy />
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