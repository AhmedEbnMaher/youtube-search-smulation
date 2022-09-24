

export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT'


export interface Results{

}
export interface Load{
  
}
export interface searchResult {
   results:Results;
   loading:Load;
  }
  
  interface getSearchResult extends searchResult {
    type: typeof GET_SEARCH_RESULT;
    results:[]
    loading:Load;
  }
  
  export type SearchActionTypes =
    | getSearchResult;
  
 