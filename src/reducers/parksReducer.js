import { SHOW_PARKS, SHOW_PARK, ADD_PARK, DELETE_PARK } from '../actions/types';

const initialState = {
    parks: []
};

export default function(state=initialState, action) {
    switch(action.type){
        case SHOW_PARKS:
            return {
                ...state,
                parks: action.payload,
            };
        case SHOW_PARK:
            return {
                ...state,
                parks: action.payload,
            };
        case ADD_PARK:
            return {
                ...state,
                parks: [...state.parks, action.payload]
            };
        case DELETE_PARK:
            return {
                ...state,
                parks: state.parks.filter(park => park.id !== action.payload)
            }; 
        default:
            return state;
    }
}