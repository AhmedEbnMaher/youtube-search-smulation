
import * as React from 'react';
import {BiFilter} from 'react-icons/bi'
import './index.scss'
type Props = {
    filter:any;
};
 const HeadBar = (props: Props) => {
    const {filter} = props;
    
    return (
        <div>
          
        <div className='head-bar'>
            <span className='serch-result'>About  {filter?.totalResults}  filtered results</span>
            <span className='filter'> <BiFilter className='filter-icon'/> FILTER</span>
        </div>
        <div className='mobile-head-bar'>
        <select name="result-filter"  className='filter-results'>
        <option value="volvo">All</option>
        <option value="saab"> First</option>
        <option value="opel">Second</option>
        <option value="audi">Third</option>
           </select>

           <select name="result-filter"  className='filter-results space'>
        <option value="volvo">Any time</option>
        <option value="saab"> First</option>
        <option value="opel">Second</option>
        <option value="audi">Third</option>
           </select>
        </div>
        </div>
    );
};
export default HeadBar;