import { Box, Grid, useMediaQuery } from "@mui/material";
import Description from "./Description/Description";
import ProjectVideo from "./ProjectVideo/ProjectVideo";
import ProjectTeam from "./DetailsCarousel/ProjectTeam";
import { useAppSelector } from "../../hooks/redux-hooks";
import { projectsArray } from "../../store/project-slice";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    const mediaQuery = useMediaQuery('(max-width:1050px)');
    const projects = useAppSelector(projectsArray);
    const project = projects.find(selectedProject => selectedProject.id == id);

    return (
        <>
            {project && (
                <Box component={"div"} >
                    <Grid container height={'calc(100vh - 11.5em)'} >
                        <Grid item xs={12} md={5} pl={mediaQuery ? 3 : 9} pb={6} zIndex={1} >
                            <Description project={project} />
                        </Grid>
                        <Grid item xs={12} md={2} pb={6} zIndex={1} >
                            <ProjectVideo />
                        </Grid>
                        <Grid item xs={12} md={5} pb={6} zIndex={1} pl={mediaQuery ? 3 : 0} >
                            {project.isActive && (
                                <ProjectTeam project={project} />
                            )}
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    )
}

export default ProjectDetails;