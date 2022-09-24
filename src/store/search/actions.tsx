import { GET_SEARCH_RESULT } from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';
import { AppActions } from '../actions';


export const getSearchResult = (keyword: string) => {
  const KEY = "AIzaSyA3npOZgTcmhjgOmRE6M2rvMlRvPKTJ_F8";
  
  return async (dispatch:Dispatch<AppActions>) => {
    await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${keyword}`,{
      params: {
         part: "snippet",
          maxResults: 25,
          key: KEY,
          type: [
              "video"
            ]
       
         },
      
      }
  ).then((results:any) => {
            dispatch({
              type: GET_SEARCH_RESULT,
              results,
              loading:true,
            });
          })
          .catch((err) => console.log(err));
  };
};