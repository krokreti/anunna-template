import { Box } from "@mui/material";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};

const itemsLength = [
    "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
    "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
    "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg"
]

// const itemsLength = Array.from({ length: 5 });

const items = itemsLength.map((item, index) => {
    const style = {
        width: 150 + index * 100,
        height: 400 + index * 10,
    };
    return (
        <Box className="item" style={style}>
            {index + 1}
            <img src={item} alt="" />
        </Box>
    );
});


const HomeCarousel = () => {
    return (<Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} >
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            paddingRight={50}
            items={items}
            responsive={responsive}
        />
    </Box>)
}

export default HomeCarousel;