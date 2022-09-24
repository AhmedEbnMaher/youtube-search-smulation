// @flow 
import * as React from 'react';
import './index.scss'
type Props = {
    data:any;
};
 const Details= (props:Props) => {
    const {data}=props;

    return (
        <div>
        <span className='title'>{data.title}</span>
        <div>
        <span className='channel-title'>{data.channelTitle}</span>
        <span className='channel-title'>.54M views</span>  
        <span className='channel-title'>{data.publishTime}</span>
        </div>
       <div className='video-details'>
        <span className='description'>{data.description}</span>
       </div>
        </div>
    );
};
export default Details