import { SHOW_PARKS, SHOW_PARK, ADD_PARK, DELETE_PARK, GET_RESERVATION_DATE, SET_RESERVATION_DATE } from '../actions/types';

const initialState = {
    parks: [],
    reservationDate: ''
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
        case SET_RESERVATION_DATE:
            return {
                ...state,
                reservationDate: action.reservationDate
            }
        case GET_RESERVATION_DATE:
            return {
                ...state
            } 
        default:
            return state;
    }
}