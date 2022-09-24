
import React  from 'react';
import './index.scss'
type Props = {
    imageData:any;
};
const Video = (props:Props) => {
    const{imageData}=props;

    return (
        <div className='video-root'>
            <img 
                  className='high-image'
                  alt="youtube-video"
                  src={imageData.high.url}
                  width={imageData.high.width>480||imageData.high.width===undefined ?480 :imageData.high.width}
                  height={imageData.high.height> 360 ||imageData.high.height=== undefined ?360:imageData.high.height}
                
                />
              
                 <img 
                  className='medium-image'
                  alt="youtube-video"
                  src={imageData.medium.url}
                  width={imageData.medium.width }
                  height={imageData.medium.height }
                
                />
        
               <img 
                  className='defulte-image'
                  alt="youtube-video"
                  src={imageData.default.url}
                  width={imageData.default.width}
                  height={imageData.default.height}
                
                />
               
        </div>
    );
};
export default Video