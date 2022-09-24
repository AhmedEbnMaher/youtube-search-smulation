
import React ,{useEffect,useState}from 'react'
import './index.scss'
import {getSearchResult} from '../../store/search/actions'
import {useDispatch,useSelector} from 'react-redux'
import { HiSearch } from "react-icons/hi"

 const NavBar = () => {
    const [searchValue,setSearchValue]=useState('spongpop')
    const [mopileSize,setMopileSize]=useState(false)
    const screenSize=window.innerWidth;
    const dispatch=useDispatch()
    const SearchResult = useSelector((state)=>state.Search.results?.data)
    useEffect(()=>{
      dispatch(getSearchResult(searchValue))
    },[])

    const startSearch=(keyword:any)=>{
dispatch(getSearchResult(keyword))
    }

    return (    
        <div className='root'>
            <div className='content'>
                <div style={{display:'flex'}}>
                <img 
                  alt="youtube-logo"
                  src={`/images/youtube.png`}
                  width='70px'
                  className='full-screen-logo'
                  height='30px'
                  style={{
                    marginTop:"12px",
                 
                  }}
                />
                 <img 
                  alt="youtube-logo"
                  className='mobile-screen-logo'
                  src={`/images/youtube.jpg`}
                  style={{
                    marginTop:"12px",
                 
                  }}
                />
                  
                <span className='region-code'>{SearchResult?.regionCode}</span>
                </div>
                <div className='search-components'>
        
           
                <span  onClick={()=>{
                  setMopileSize(true)
                }} className={mopileSize?'search-value hide':'search-value'}>{searchValue}</span>
                         
            <input 
            className={mopileSize?'search-input view':'search-input'}
            type='text'
            value={searchValue} 
            onChange={(e:any)=>{
               setSearchValue(e.target.value)
            }}
            onMouseOut={()=>{
              if(screenSize<=540 && searchValue!=='')
              setMopileSize(false)
            }}
           placeholder='search' />

          
            
            <button
              className='search-button' 
              onClick={()=>startSearch(searchValue)}>
                <HiSearch className='search-icon'/>  
            </button>
          
            </div>
            <button
              className='search-button-mobile' 
              onClick={()=>startSearch(searchValue)}>
                
                <HiSearch className='search-icon'/>  
            </button>
            </div>
        </div>
    );
};
export default NavBar