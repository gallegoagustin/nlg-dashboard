export const initialState = {
    data: [],
    isLoading: false,
    dateRange: undefined,
    userId: 54,
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