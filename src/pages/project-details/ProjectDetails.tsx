import { Box, Grid, useMediaQuery } from "@mui/material";
import Description from "./Description/Description";
import ProjectVideo from "./ProjectVideo/ProjectVideo";
import ProjectTeam from "./DetailsCarousel/ProjectTeam";

const ProjectDetails = () => {
    const mediaQuery = useMediaQuery('(max-width:1050px)');
    return (
        <Box component={"div"}>
            <Grid container >
                <Grid item xs={12} md={5} pl={mediaQuery ? 3 : 9} pb={6} zIndex={1} >
                    <Description />
                </Grid>
                <Grid item xs={12} md={2} pb={6} zIndex={1} >
                    <ProjectVideo />
                </Grid>
                <Grid item xs={12} md={5} pb={6} zIndex={1} pl={mediaQuery ? 3 : 0}>
                    <ProjectTeam />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectDetails;