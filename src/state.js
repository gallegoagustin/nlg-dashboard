export const initialState = {
    data: [],
    isLoading: false,
};
  
export const reducer = (state, action) => {
    switch (action.type) {
    case 'FETCH_DATA':
        return state;
    default: 
        return state;
    }
};