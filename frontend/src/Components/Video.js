// import React from 'react';
// import Video from './Videos/Video.mp4'

// const VideoComponent = () => {
//   return (
//     <div className='"video-container'>
//       <video  controls autoPlay className='responsive-video' >
//         <source src={Video} type="video/mp4" />
//       </video>
//     </div>
//   );
// }

// export default VideoComponent; 




import React, { useRef, useEffect } from 'react';
import Video from './Videos/Video.mp4'

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay the video when component mounts
    videoRef.current.play();
  }, []);

  return (
    <div>
      <video className='responsive-video' 
        ref={videoRef}
        autoPlay
        
        controls={false}
        loop
        style={{
          width: '100%',
          height:'70vh'
        }}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
