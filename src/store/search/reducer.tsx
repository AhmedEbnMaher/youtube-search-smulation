
import { GET_SEARCH_RESULT ,Load,SearchActionTypes} from './actionTypes'

import { Results } from './actionTypes';

interface SerachState {
  results:Results[];
  loading:Load;
}

const defaultState: SerachState = {

  results: [],
  loading:true,
 
};

 const Search = (
  state = defaultState,
  action: SearchActionTypes
): SerachState => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {  ...state,
        results: action.results,
        loading:false};
    
    default:
      return state;
  }
};
export default Search