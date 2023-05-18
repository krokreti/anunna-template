import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import ProjectType from "../models/ProjectType";

const images = {
    slide: [
        "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
        "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
        "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg",
        "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587496983581-U1T4AD1TQOQWKCY9D4BM/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMemories+Of+Green.jpg",
        "https://wallpaperaccess.com/full/297278.png",
        "https://i.pinimg.com/originals/34/f7/f0/34f7f0eea61daa261f5fd3fc7c10660c.jpg",
        "https://w.forfun.com/fetch/f1/f1c364e97117fe475f352ea55e55d02c.jpeg",
    ],
    backgroundMobile: [
        "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
        "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
        "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg",
        "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587496983581-U1T4AD1TQOQWKCY9D4BM/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMemories+Of+Green.jpg",
        "https://wallpaperaccess.com/full/297278.png",
        "https://i.pinimg.com/originals/34/f7/f0/34f7f0eea61daa261f5fd3fc7c10660c.jpg",
        "https://w.forfun.com/fetch/f1/f1c364e97117fe475f352ea55e55d02c.jpeg",
    ],
    background: [
        "https://i.pinimg.com/originals/4d/0f/33/4d0f33b2862e555c94d85c0873dd1fd9.png",
        "https://wallpaperboat.com/wp-content/uploads/2019/06/future-5.jpg",
        "https://cdn.wallpapersafari.com/26/66/ugWdrE.jpg",
        "https://img.freepik.com/premium-vector/metaverse-virtual-reality-augmented-reality-blockchain-technology-user-interface-3d-experience-word-metaverse-with-world-map-globe-futuristic-environment-background_115579-1673.jpg",
        "https://wallpapersmug.com/large/d32fc4/future-city-sci-fi-art.jpg",
        "https://wallpapercave.com/wp/wp3160416.jpg",
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701855840.jpg",
        "https://wallpaperaccess.com/full/38550.jpg",
        "https://img2.wallspic.com/crops/9/6/3/8/88369/88369-capital_city-horizon-deus_ex_human_revolution-cyberpunk-skyline-4500x2531.jpg"
    ]
}

const initialProjectState: ProjectType = {
    slides: images.slide,
    background: images.background[0],
    backgroundMobile: images.backgroundMobile[0]
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
                backgroundMobile: state.backgroundMobile
            };
        },
        changeProject: (state, action: PayloadAction<number>) => {
            console.log(state.background);
            state.background = images.background[action.payload];
            state.backgroundMobile = images.backgroundMobile[action.payload];
        },
    }
});

export const projectActions = projectSlice.actions;
export const currentProjectStatus = (state: RootState) => state.project;
export const slidesList = (state: RootState) => state.project.slides;
export default projectSlice.reducer;