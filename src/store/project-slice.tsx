import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import ProjectType from "../models/ProjectType";

const images = {
    slide: [
        "/slides/Carrossel-01.jpg",
        "/slides/Carrossel-02.jpg",
        "/slides/Carrossel-03.jpg",
        "/slides/Carrossel-04.jpg",
    ],
    backgroundMobile: [
        "/mobile-images/00.jpg",
        "/mobile-images/01.jpeg",
        "/mobile-images/02.jpg",
        "/mobile-images/03.jpeg",
    ],
    background: [
        "/project-images/00.jpg",
        "/project-images/01.jpg",
        "/project-images/02.jpg",
        "/project-images/03.jpg",
    ],
}

const projectArray = [
    {
        id: '00',
        name: 'Thetryum',
        desktop: "/project-images/00.jpg",
        mobile: '/mobile-images/00.jpg',
        title: "/title/00.svg",
        gender: 'Video. Motion. Branding.',
        highlights: 'Motion. VFX. Branding.',
        description: `Thetryum Expansion is an exciting project that showcases Thetryum's
global growth through inspiring videos.
Featuring partner Anunna and her immersive site blocking experience,
along with captivating artwork on Thetryum social media.
Explore this journey of success, innovation and creativity in technology.`,
        isActive: true,
        roles: [
            {
                name: 'Anunnamu',
                role: 'Motion design.',
                description: `In this project I helped in the construction of all the layout
 and video animations in addition to all the VFX effects
implemented in the animation.`,
                imgUrl: '/team-roles/project-00-00.jpg',
            },
            {
                name: 'Nibiru',
                role: 'CEO',
                description: `O CEO (Chief Executive Officer) é o principal executivo de uma empresa e desempenha um papel fundamental na definição da visão estratégica e no direcionamento geral da organização. Como líder máximo, o CEO é responsável por tomar decisões estratégicas importantes e garantir o bom funcionamento de todas as áreas da empresa.`,
                imgUrl: '/team-roles/project-00-01.jpg',
            },
            {
                name: 'Ninma',
                role: 'Scrum Master',
                description: `O Scrum Master é um papel dentro da metodologia ágil Scrum, amplamente utilizada no gerenciamento de projetos de desenvolvimento de software. O Scrum Master atua como um facilitador e líder do processo Scrum, garantindo que a equipe siga as práticas e princípios do Scrum.`,
                imgUrl: '/team-roles/project-00-02.jpg',
            },
        ]
    },
    {
        id: '01',
        name: 'Project in Construction',
        desktop: "/project-images/01.jpg",
        mobile: '/mobile-images/01.jpg',
        title: "/title/01.svg",
        gender: 'In construction.',
        highlights: 'In construction.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isActive: false,
        roles: [
            {
                name: 'Nome 1',
                role: 'Animador 3D.',
                description: 'Este profissional faz isso, isso e isso.',
                imgUrl: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=sxfMiTsD',
            },
            {
                name: 'Nome 2',
                role: 'CEO',
                description: 'Gerente da Empresa',
                imgUrl: 'https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
            },
        ]
    },
    {
        id: '02',
        name: 'Project in Construction',
        desktop: "/project-images/02.jpg",
        mobile: '/mobile-images/02.jpg',
        title: "/title/02.svg",
        gender: 'Development.',
        highlights: 'In construction.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        isActive: false,
        roles: [
            {
                name: 'Nome 1',
                role: 'Animador 3D.',
                description: 'Este profissional faz isso, isso e isso.',
                imgUrl: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=sxfMiTsD',
            },
            {
                name: 'Nome 2',
                role: 'CEO',
                description: 'Gerente da Empresa',
                imgUrl: 'https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
            },
        ]
    },
    {
        id: '03',
        name: 'Project in Construction',
        desktop: "/project-images/03.jpg",
        mobile: '/mobile-images/03.jpg',
        title: "/title/03.svg",
        gender: 'Ads.',
        highlights: 'In construction.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        isActive: false,
        roles: [
            {
                name: 'Nome 1',
                role: 'Animador 3D.',
                description: 'Este profissional faz isso, isso e isso.',
                imgUrl: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=sxfMiTsD',
            },
            {
                name: 'Nome 2',
                role: 'CEO',
                description: 'Gerente da Empresa',
                imgUrl: 'https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
            },
        ]
    },
];

const initialProjectState: ProjectType = {
    currentProject: 0,
    slides: images.slide,
    background: images.background[0],
    backgroundMobile: images.backgroundMobile[0],
    project: projectArray[0],
    allProjects: projectArray,
}

const projectSlice = createSlice({
    name: 'project',
    initialState: initialProjectState,
    reducers: {
        getProject: (state): ProjectType => {
            return {
                slides: state.slides,
                background: state.background,
                backgroundMobile: state.backgroundMobile,
                currentProject: state.currentProject,
                project: state.project,
                allProjects: state.allProjects
            };
        },
        changeProject: (state, action: PayloadAction<number>) => {
            state.currentProject = action.payload;
            // state.background = images.background[state.currentProject];
            // state.backgroundMobile = images.backgroundMobile[state.currentProject];
            state.project = projectArray[state.currentProject]
        },
    }
});

export const projectActions = projectSlice.actions;
export const currentProjectStatus = (state: RootState) => state.project;
export const currentProject = (state: RootState) => state.project.project;
export const projectsArray = (state: RootState) => state.project.allProjects;
export const slidesList = (state: RootState) => state.project.slides;
export const backgroundTotal = () => images.backgroundMobile.length;
export default projectSlice.reducer;