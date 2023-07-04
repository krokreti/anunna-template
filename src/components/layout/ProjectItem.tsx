import { Stack, Typography } from "@mui/material";
import PortfolioType from "../../models/PortfolioProject";

type ItemType = {
    project: PortfolioType,
}

const ProjectItem: React.FC<ItemType> = ({ project }) => {
    return (
        <Stack direction={'row'} m={1} bgcolor={'#161616'} borderRadius={'20px'} gap={2}>
            <img src={project.mobile} alt={project.id} width={90} height={80} style={{ border: '4px solid #3C3C3C', borderRadius: '20px' }} />
            <Stack direction={'column'} gap={0} justifyContent={'center'}>
                <Typography fontWeight={'bold'}>{project.name}</Typography>
                <Typography color={'secondary'}>{project.description.slice(0, 30)}...</Typography>
            </Stack>
        </Stack>
    )
}

export default ProjectItem;