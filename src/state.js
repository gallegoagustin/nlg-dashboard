export const initialState = {
    data: [],
    isLoading: false,
    dateRange: undefined,
};
  
export const reducer = (state, action) => {
    switch (action.type) {
    case 'FETCH_DATA':
        return {
            ...state,
            data: action.payload.data
        };
    default: 
        return state;
    }
};