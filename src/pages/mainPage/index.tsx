import  React from 'react';
import {useSelector} from 'react-redux'
import Video from '../../components/Video';
import Details from '../../components/Details';
import HeadBar from '../../components/HeadBar';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import './index.scss'

type Props = {
    
};


const MainPage = (props: Props) => {

const SearchResult = useSelector((state)=>state.Search.results?.data)
const load = useSelector((state)=>state.Search.loading)

    if(load===false)
    return (
        <>
        <NavBar/>
        <div className='container'>
         
     <div className='wraper'>
            <HeadBar  filter={SearchResult?.pageInfo} />
            {SearchResult?.items.map((items:any,idx:number)=>(
          <div className='page-content' key={idx}>
            <div className='vedios-images'>
            <Video  imageData={items.snippet.thumbnails}/>
        </div>
        <div className='vedios-information'>
           <Details data={items.snippet}/>
        </div>
        </div>
            ))}
  
  </div>
        </div>
        </>
    );
    return(
    <>
    <NavBar/>
        <div className='container'>
        <Loading/>
        </div>
        </>
    )
    
};

export default MainPage;