import { Stack, Typography } from "@mui/material";
import PortfolioType from "../../models/PortfolioProject";
import { useState } from 'react';

type ItemType = {
    project: PortfolioType,
    redirect: (id: string) => void,
}

const ProjectItem: React.FC<ItemType> = ({ project, redirect }) => {
    const [bgColor, setBgColor] = useState<string>('#161616');

    const handleHover = () => {
        setBgColor('#3C3C3C');
    }

    const handleMouseOur = () => {
        setBgColor('#161616');
    }

    return (
        <Stack
            m={1}
            gap={2}
            direction={'row'}
            bgcolor={bgColor}
            borderRadius={'20px'}
            sx={{ cursor: 'pointer' }}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOur}
            onClick={() => { redirect(project.id) }}
        >
            <img src={project.mobile} alt={project.id} width={90} height={80} style={{ border: '4px solid #3C3C3C', borderRadius: '20px' }} />
            <Stack direction={'column'} gap={0} justifyContent={'center'}>
                <Typography fontWeight={'bold'} color={'primary'}>{project.name}</Typography>
                <Typography color={'secondary'} >{project.description.slice(0, 30)}...</Typography>
            </Stack>
        </Stack>
    )
}

export default ProjectItem;