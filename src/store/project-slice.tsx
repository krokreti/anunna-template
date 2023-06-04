import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import ProjectType from "../models/ProjectType";

const images = {
    slide: [
        "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.pinimgUrl.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
        "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
    ],
    backgroundMobile: [
        "/mobile-images/00.jpg",
        "/mobile-images/01.jpeg",
        "/mobile-images/02.jpg",
        "/mobile-images/03.jpeg",
    ],
    background: [
        "/project-images/00.jpg",
        "/project-images/01.png",
        "/project-images/02.jpg",
        "/project-images/03.jpg",
    ],
}

const projectArray = [
    {
        id: '00',
        desktop: "/project-images/00.jpg",
        mobile: '/mobile-images/00.jpg',
        title: "/title/00.svg",
        gender: 'Branding, ID Visual.',
        highlights: 'Behance Fotografia 3D, Movimento 3D.',
        description: ` A thetryum inova os processos do mundo real,
                        através de contratos inteligentes dentro da blockchain.
                        "Tokenizamos" a sua empresa ou ativos e os preparamos
                        para esse mercado que já é uma realidade.`,
        roles: [
            {
                name: 'Lana Artros',
                role: 'Animador 3D.',
                description: `Um Animador 3D é um profissional que cria modelos digitais em três dimensões, tanto numa perspectiva artística como informativa. Assim, podem trabalhar nas áreas do cinema e da televisão, ou ainda no mundo dos videojogos e da publicidade.`,
                imgUrl: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=sxfMiTsD',
            },
            {
                name: 'Charles Dawnton',
                role: 'CEO',
                description: `O CEO (Chief Executive Officer) é o principal executivo de uma empresa e desempenha um papel fundamental na definição da visão estratégica e no direcionamento geral da organização. Como líder máximo, o CEO é responsável por tomar decisões estratégicas importantes e garantir o bom funcionamento de todas as áreas da empresa.`,
                imgUrl: 'https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
            },
            {
                name: 'Harry Hopkins',
                role: 'Scrum Master',
                description: `O Scrum Master é um papel dentro da metodologia ágil Scrum, amplamente utilizada no gerenciamento de projetos de desenvolvimento de software. O Scrum Master atua como um facilitador e líder do processo Scrum, garantindo que a equipe siga as práticas e princípios do Scrum.`,
                imgUrl: 'https://firstpersonarts.org/wp-content/uploads/2021/09/MV5BMzI4ZWMzZTQtNjI1My00ZTQxLTg2MDMtYTUwYTMyN2Y0ZWM4XkEyXkFqcGdeQXVyNjUzMjUyODU@._V1_.jpg',
            },
        ]
    },
    {
        id: '01',
        desktop: "/project-images/01.png",
        mobile: '/mobile-images/01.jpeg',
        title: "/title/01.svg",
        gender: 'Design.',
        highlights: 'Design de vídeos, logos e fotos.',
        description: '',
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
        desktop: "/project-images/02.jpg",
        mobile: '/mobile-images/02.jpg',
        title: "/title/02.svg",
        gender: 'Programação.',
        highlights: 'Desenvolvimento mobile',
        description: '',
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
        desktop: "/project-images/03.jpg",
        mobile: '/mobile-images/03.jpeg',
        title: "/title/03.svg",
        gender: 'Marketing.',
        highlights: 'Marketing multinível.',
        description: '',
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