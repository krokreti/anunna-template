import { Box } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { useAppSelector } from '../../hooks/redux-hooks';
import { projectsArray } from '../../store/project-slice';
import ProjectItem from './ProjectItem';

type AllProjectsType = {
    isOpen: boolean,
}

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const AllProjectsMenu: React.FC<AllProjectsType> = ({ isOpen }) => {
    const listOfProjects = useAppSelector(projectsArray);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
        >

            <Box
                component={'div'}
                position={'absolute'}
                width={'25em'}
                marginTop={1}
                style={{ zIndex: 15 }}

            >
                <motion.ul
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <Box component={'div'}
                        bgcolor={'#3C3C3C'}
                        borderRadius={'20px'}
                        p={0.3}
                        border={'1px solid red'}
                    >

                        {listOfProjects.map((project) => (
                            <>
                                {project.isActive && (
                                    <motion.li variants={itemVariants}><ProjectItem project={project} key={project.id} /> </motion.li>
                                )}
                            </>
                        ))}
                    </Box>
                </motion.ul>
            </Box>
        </motion.nav>
    );
}

export default AllProjectsMenu;