export const apiUrl = () =>{
    // eslint-disable-next-line no-unused-expressions
    process.env.NODE_ENV !== 'production' 
    ? 'http://localhost:5000/api' 
    : 'alo';
}
export const LOCAL_STORAGE_TOKEN_NAME = 'name-token'