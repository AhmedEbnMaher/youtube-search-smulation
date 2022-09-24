// @flow 
import * as React from 'react';
import {BiLoaderCircle} from 'react-icons/bi'
import './index.scss'
type Props = {
    
};
const Loading = (props: Props) => {
    return (
        <div className='laoding-wraper'>
            <div className='loading-content'>
          <span><BiLoaderCircle className='loading-icon'/></span> 
          <div>
            <span className='loading-text'>
                Loading
            </span>
          </div>
          </div>
        </div>
    );
};

export default Loading