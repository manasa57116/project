// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from 'reactstrap';
// import WONDERLA from '../Images/WONDERLA.jpg'

// const items = [
//   {
//     src: 'https://picsum.photos/id/123/1200/400',
//     altText: 'Slide 1',
//     caption: 'Slide 1',
//     key: 1,
//   },
//   {
//     src: 'https://picsum.photos/id/456/1200/400',
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     key: 2,
//   },
//   {
//     src: 'https://picsum.photos/id/678/1200/400',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 3,
//   },
// ];

// function Example(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default Example;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WONDERLA from './Images/WONDERLA.jpg';
import img2 from './Images/img2.jpeg';
import img3 from './Images/img3.jpg';

function Caurosel() {
  const carouselStyles = {
    height:'70vh',
    margin: " 20px 0px",
  };
 
 
  return (
    <div>
      <div>
        <Carousel
          autoPlay
          interval="3000"
          transitionTime="2500"
          showThumbs={false}
          infiniteLoop={true}
        >
          <div style={carouselStyles}>
            <img
              src={WONDERLA}
              alt=""
            />
          </div>
          <div style={carouselStyles }>
            <img
              src={img2}
              alt=""
            />
          </div>
          <div style={carouselStyles}>
            <img
              src={img3}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Caurosel