import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import ProjectType from "../models/ProjectType";

const images = {
    slide: [
        "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
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
    },
    {
        id: '01',
        desktop: "/project-images/01.png",
        mobile: '/mobile-images/01.jpeg',
        title: "/title/01.svg",
    },
    {
        id: '02',
        desktop: "/project-images/02.jpg",
        mobile: '/mobile-images/02.jpg',
        title: "/title/02.svg",
    },
    {
        id: '03',
        desktop: "/project-images/03.jpg",
        mobile: '/mobile-images/03.jpeg',
        title: "/title/03.svg",
    },
];

const initialProjectState: ProjectType = {
    currentProject: 0,
    slides: images.slide,
    background: images.background[0],
    backgroundMobile: images.backgroundMobile[0],
    project: projectArray[0]

}

const projectSlice = createSlice({
    name: 'project',
    initialState: initialProjectState,
    reducers: {
        getProject: (state): ProjectType => {
            // console.log(state);
            return {
                slides: state.slides,
                background: state.background,
                backgroundMobile: state.backgroundMobile,
                currentProject: state.currentProject,
                project: state.project
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
export const slidesList = (state: RootState) => state.project.slides;
export const backgroundTotal = () => images.backgroundMobile.length;
export default projectSlice.reducer;