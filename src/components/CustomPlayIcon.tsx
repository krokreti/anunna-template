import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
interface CustomIconProps extends SvgIconProps { }

const CustomIcon: React.FC = (props: CustomIconProps) => {
    return (
        <SvgIcon {...props} >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 -8.94676e-07 17.4678 -8.27378e-07 15.9282L-2.21695e-07 2.0718C-1.54397e-07 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z" fill="#5A33DB" />
            </svg>
        </SvgIcon>
    );
}

export default CustomIcon;