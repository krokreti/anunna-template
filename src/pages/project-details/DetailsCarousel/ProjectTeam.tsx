import { Box, Typography, Stack, useTheme } from "@mui/material";
import TeamCarousel from "./TeamCarousel";
import TeamCarouselButtons from "./TeamCarouselButtons";

const ProjectTeam = () => {
    const theme = useTheme();
    return (
        <Box component={'div'}>
            <Stack direction={'column'}>
                <Typography variant="h6" fontWeight={'bold'} mb={3}> Equipe do Projeto: </Typography>
                <TeamCarousel />
                <Stack direction={'row'} my={3} >
                    <Box component={'div'}>
                        <TeamCarouselButtons />
                    </Box>
                    <Box component={'div'} width={'100%'} height={'100%'} margin={'auto 0'} pr={5}>
                        <hr />
                    </Box>
                </Stack>
                <Typography variant="h6" fontWeight={'bold'}> Função: </Typography>
                <Typography variant="h6" color={theme.palette.text.secondary} style={{ fontSize: 16 }}>Animador 3D</Typography>
                <Typography variant="h6" style={{ fontSize: 16 }} mr={6} mt={3}>
                    Um Animador 3D é um profissional que cria modelos digitais
                    em três dimensões, tanto numa perspectiva artística como
                    informativa. Assim, podem trabalhar nas áreas do cinema e
                    da televisão, ou ainda no mundo dos videojogos e da publicidade.
                </Typography>
            </Stack>
        </Box>
    )
}

export default ProjectTeam;
