import PortfolioType from "./PortfolioProject"

interface ProjectType {
    slides?: string[],
    background: string,
    backgroundMobile: string,
    currentProject: number
    project: PortfolioType,
    allProjects: PortfolioType[],
}

export default ProjectType;