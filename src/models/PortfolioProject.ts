import Role from "./Role";

type PortfolioType = {
    id: string;
    name: string;
    desktop: string;
    mobile: string;
    title: string;
    gender: string;
    highlights: string;
    description: string;
    isActive: boolean;
    roles: Role[],
}

export default PortfolioType;