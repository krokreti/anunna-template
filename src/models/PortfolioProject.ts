import Role from "./Role";

type PortfolioType = {
    id: string;
    desktop: string;
    mobile: string;
    title: string;
    gender: string;
    highlights: string;
    description: string;
    roles: Role[],
}

export default PortfolioType;