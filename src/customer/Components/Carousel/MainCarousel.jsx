import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './mainCaroselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

const items = mainCarouselData.map((item, index) => (
    <div key={index} className="item z-10">
        <a href={item.path}>
            <img className='cursor-pointer' role='presentation' src={item.image} alt={`Slide ${index + 1}`} />
        </a>
    </div>
));
const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        // responsive={responsive}
        //controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel;